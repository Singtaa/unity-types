// Calls app code makes that the declarations must accept. `npm run typecheck`
// compiles this file against the package and nothing runs it, so a declaration
// that drops one of these overloads fails the check (Singtaa/OneJS#134).

const IO = CS.System.IO

IO.File.Copy("a.png", "b.png")
IO.File.Copy("a.png", "b.png", true)

const two: string = IO.Path.Combine("root", "a.png")
const three: string = IO.Path.Combine("root", "assets", "a.png")
const four: string = IO.Path.Combine("root", "assets", "ui", "a.png")

const pngs: CS.System.Array$1<string> = IO.Directory.GetFiles("root", "*.png")
const allPngs: CS.System.Array$1<string> = IO.Directory.GetFiles("root", "*.png", IO.SearchOption.AllDirectories)
const dirs: CS.System.Array$1<string> = IO.Directory.GetDirectories("root", "ui*")
const topDirs: CS.System.Array$1<string> = IO.Directory.GetDirectories("root", "*", IO.SearchOption.TopDirectoryOnly)

// Five or more parts would need .NET's params overload, and OneJS does not
// expand a call's arguments into a params array, so it stays undeclared.
// @ts-expect-error
IO.Path.Combine("a", "b", "c", "d", "e")

export {}
