// Members a generic base class gives its subclasses. The generator once declared
// `class BaseField<T>` while every reference said `BaseField$1<T>`, so 272
// classes extended a name declared nowhere and lost everything they inherit
// (OneJS HEALTH_REPORT H9). Each line below reads an inherited member.

declare const slider: CS.UnityEngine.UIElements.Slider
const sliderValue: number = slider.value
const lowValue: number = slider.lowValue

declare const intField: CS.UnityEngine.UIElements.IntegerField
const intValue: number = intField.value

declare const textField: CS.UnityEngine.UIElements.TextField
const text: string = textField.value

declare const down: CS.UnityEngine.UIElements.PointerDownEvent
const button: number = down.button
const position: CS.UnityEngine.Vector3 = down.position

// Each arity of a generic family is its own declaration, under the $N name
// _system.d.ts gives List$1 (a type name only: at runtime a generic type is
// bound by calling it, CS.UnityEngine.Events.UnityEvent(CS.System.Int32))
declare const event0: CS.UnityEngine.Events.UnityEvent
declare const event1: CS.UnityEngine.Events.UnityEvent$1<number>
event0.Invoke()
event1.Invoke(1)

export {}
