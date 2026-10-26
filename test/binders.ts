// A generic type bound by calling it with its type arguments, as OneJS does at
// runtime: the interop guide's own examples (OneJS #148).
import { Dictionary, List } from "System/Collections/Generic"
import { Boolean, Int32, String } from "System"

const numbers = new (List(Int32))()
numbers.Add(1)
const first: number = numbers.get_Item(0)
// @ts-expect-error an Int32 list takes numbers
numbers.Add("one")

const scores = new (Dictionary(String, Int32))()
scores.set_Item("player1", 100)
const score: number = scores.get_Item("player1")

const flags = new (List(Boolean))()
const flag: boolean = flags.get_Item(0)

// A class argument binds to its instance type.
const lists = new (List(List(Int32)))()
const inner: CS.System.Collections.Generic.List$1<number> = lists.get_Item(0)

export { first, score, flag, inner }
