#!/usr/bin/env node
/**
 * Strips the generator's per-file preamble from the assembly .d.ts files.
 *
 * The OneJS Type Generator writes a header and the `$Ref` / `$Out` / `$Task`
 * helper interfaces into every file it produces, which is right for a consumer
 * generating one file for their own C# code and wrong here: this package ships
 * nine assembly files that are read together, so the helpers belong once in
 * _system.d.ts and the header's timestamp would rewrite all nine on every
 * regeneration whether or not a type changed.
 *
 * Everything before `declare namespace CS {` goes, including the BOM.
 *
 * Run after regenerating, from this directory:
 *     node tools/strip-preamble.mjs
 *
 * Idempotent: a file already stripped is left alone and reported as such.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

// fileURLToPath, not URL.pathname: on Windows the latter yields "/D:/..." and
// path.resolve then builds a doubled drive letter from it.
const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, "..")
const START = "declare namespace CS {"

// The hand-written files. Everything else in the folder is generated.
const HAND_WRITTEN = new Set(["index.d.ts", "_system.d.ts"])

let stripped = 0
let already = 0
const missing = []

for (const name of fs.readdirSync(ROOT).sort()) {
    if (!name.endsWith(".d.ts") || HAND_WRITTEN.has(name)) continue
    const file = path.join(ROOT, name)
    const text = fs.readFileSync(file, "utf8")
    const at = text.indexOf(START)
    if (at === -1) {
        missing.push(name)
        continue
    }
    if (at === 0) {
        already++
        continue
    }
    fs.writeFileSync(file, text.slice(at))
    stripped++
}

// A helper used by the generated files but declared nowhere would typecheck
// as an error in every consumer, so check rather than assume: $Task arrived
// with the 6000.5 async surface and had no declaration until it was added.
const system = fs.readFileSync(path.join(ROOT, "_system.d.ts"), "utf8")
const used = new Set()
for (const name of fs.readdirSync(ROOT)) {
    if (!name.endsWith(".d.ts") || HAND_WRITTEN.has(name)) continue
    // Bare too, not just `$Task<T>`: the generator returns `$Task` with no
    // argument, and a regex requiring `<` reported a clean package that did
    // not typecheck.
    for (const m of fs.readFileSync(path.join(ROOT, name), "utf8").matchAll(/\$(Ref|Out|Task)\b/g)) {
        used.add(m[1])
    }
}
const undeclared = [...used].filter((h) => !new RegExp(`interface \\$${h}\\b`).test(system))

console.log(`stripped ${stripped}, already stripped ${already}`)
if (missing.length) {
    console.error(`no "${START}" in: ${missing.join(", ")}`)
    process.exit(1)
}
if (undeclared.length) {
    console.error(`helpers used by the generated files but not declared in _system.d.ts: `
        + undeclared.map((h) => "$" + h).join(", "))
    process.exit(1)
}
console.log("every helper the generated files use is declared in _system.d.ts")
