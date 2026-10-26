// What a C# array parameter takes: a C# array, a JS array, or a typed array,
// each converted by the runtime to the parameter's T[] (OneJS #150).
import { Vector3 } from "UnityEngine"

declare const csFloats: CS.System.Array$1<number>
const fromCs: CS.System.ArrayInput<number> = csFloats
const fromJs: CS.System.ArrayInput<number> = [0, 1, 2]
const fromTyped: CS.System.ArrayInput<number> = new Float32Array(784)
const bytes: CS.System.ArrayInput<number> = new Uint8Array(4)
const longs: CS.System.ArrayInput<bigint> = new BigInt64Array(2)
const points: CS.System.ArrayInput<Vector3> = [new Vector3(0, 0, 0)]
const types: CS.System.ArrayInput<CS.System.TypeLike> = [Vector3]
// @ts-expect-error an int array takes numbers, not strings
const strings: CS.System.ArrayInput<number> = ["a"]
// @ts-expect-error a typed array holds numbers, not strings
const typedStrings: CS.System.ArrayInput<string> = new Float32Array(1)
// @ts-expect-error a typed array holds numbers, not bigints
const typedLongs: CS.System.ArrayInput<bigint> = new Float32Array(1)

// The hand-written members C# only reads from take the same.
CS.System.IO.File.WriteAllBytes("out.bin", new Uint8Array(4))
const text: string = CS.System.Text.Encoding.ASCII.GetString([104, 105])
new CS.System.IO.MemoryStream(new Uint8Array(8)).Write([1, 2], 0, 2)

export { text, fromCs, fromJs, fromTyped, bytes, longs, points, types, strings, typedStrings, typedLongs }
