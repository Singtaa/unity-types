declare namespace CS {
    namespace Unity {
        namespace XR {
            namespace GoogleVr {
                class DaydreamHMD extends UnityEngine.InputSystem.XR.XRHMD {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class DaydreamController extends UnityEngine.InputSystem.XR.XRController {
                    protected [__keep_incompatibility]: never;
                    public get touchpad(): UnityEngine.InputSystem.Controls.Vector2Control;
                    public get volumeUp(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get recentered(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get volumeDown(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get recentering(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get app(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get home(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get touchpadClicked(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get touchpadTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get deviceAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                    constructor();
                }

            }
        }
    }
    namespace Unity {
        namespace XR {
            namespace Oculus {
                namespace Input {
                    class OculusHMD extends UnityEngine.InputSystem.XR.XRHMD {
                        protected [__keep_incompatibility]: never;
                        public get userPresence(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAngularAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get leftEyeAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get leftEyeAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get leftEyeAngularAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get rightEyeAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get rightEyeAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get rightEyeAngularAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get centerEyeAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get centerEyeAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get centerEyeAngularAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        constructor();
                    }

                    class OculusTouchController extends UnityEngine.InputSystem.XR.XRControllerWithRumble {
                        protected [__keep_incompatibility]: never;
                        public get thumbstick(): UnityEngine.InputSystem.Controls.Vector2Control;
                        public get trigger(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get grip(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get primaryButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get secondaryButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get gripPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get start(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get thumbstickClicked(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get primaryTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get secondaryTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get triggerTouched(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get triggerPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get thumbstickTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAngularAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        constructor();
                    }

                    class OculusTrackingReference extends UnityEngine.InputSystem.TrackedDevice {
                        protected [__keep_incompatibility]: never;
                        public get trackingState(): UnityEngine.InputSystem.Controls.IntegerControl;
                        public get isTracked(): UnityEngine.InputSystem.Controls.ButtonControl;
                        constructor();
                    }

                    class OculusRemote extends UnityEngine.InputSystem.InputDevice {
                        protected [__keep_incompatibility]: never;
                        public get back(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get start(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get touchpad(): UnityEngine.InputSystem.Controls.Vector2Control;
                        constructor();
                    }

                    class OculusHMDExtended extends Unity.XR.Oculus.Input.OculusHMD {
                        protected [__keep_incompatibility]: never;
                        public get back(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get touchpad(): UnityEngine.InputSystem.Controls.Vector2Control;
                        constructor();
                    }

                    class GearVRTrackedController extends UnityEngine.InputSystem.XR.XRController {
                        protected [__keep_incompatibility]: never;
                        public get touchpad(): UnityEngine.InputSystem.Controls.Vector2Control;
                        public get trigger(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get back(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get triggerPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get touchpadClicked(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get touchpadTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAngularAcceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                        constructor();
                    }

                }
            }
        }
    }
    namespace Unity {
        namespace XR {
            namespace OpenVR {
                class OpenVRHMD extends UnityEngine.InputSystem.XR.XRHMD {
                    protected [__keep_incompatibility]: never;
                    public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get leftEyeVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get leftEyeAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get rightEyeVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get rightEyeAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get centerEyeVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get centerEyeAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    constructor();
                }

                class OpenVRControllerWMR extends UnityEngine.InputSystem.XR.XRController {
                    protected [__keep_incompatibility]: never;
                    public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get touchpadClick(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get touchpadTouch(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get gripPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get triggerPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get menu(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get trigger(): UnityEngine.InputSystem.Controls.AxisControl;
                    public get grip(): UnityEngine.InputSystem.Controls.AxisControl;
                    public get touchpad(): UnityEngine.InputSystem.Controls.Vector2Control;
                    public get joystick(): UnityEngine.InputSystem.Controls.Vector2Control;
                    constructor();
                }

                class ViveWand extends UnityEngine.InputSystem.XR.XRControllerWithRumble {
                    protected [__keep_incompatibility]: never;
                    public get grip(): UnityEngine.InputSystem.Controls.AxisControl;
                    public get gripPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get primary(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get trackpadPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get trackpadTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get trackpad(): UnityEngine.InputSystem.Controls.Vector2Control;
                    public get trigger(): UnityEngine.InputSystem.Controls.AxisControl;
                    public get triggerPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    constructor();
                }

                class ViveLighthouse extends UnityEngine.InputSystem.TrackedDevice {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class ViveTracker extends UnityEngine.InputSystem.TrackedDevice {
                    protected [__keep_incompatibility]: never;
                    public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    constructor();
                }

                class HandedViveTracker extends Unity.XR.OpenVR.ViveTracker {
                    protected [__keep_incompatibility]: never;
                    public get grip(): UnityEngine.InputSystem.Controls.AxisControl;
                    public get gripPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get primary(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get trackpadPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get triggerPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                }

                class OpenVROculusTouchController extends UnityEngine.InputSystem.XR.XRControllerWithRumble {
                    protected [__keep_incompatibility]: never;
                    public get thumbstick(): UnityEngine.InputSystem.Controls.Vector2Control;
                    public get trigger(): UnityEngine.InputSystem.Controls.AxisControl;
                    public get grip(): UnityEngine.InputSystem.Controls.AxisControl;
                    public get primaryButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get secondaryButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get gripPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get triggerPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get thumbstickClicked(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get thumbstickTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                    constructor();
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            interface IInputActionCollection extends System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputAction>, System.Collections.IEnumerable {
                bindingMask: UnityEngine.InputSystem.InputBinding | null;
                devices: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice> | null;
                get controlSchemes(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControlScheme>;
                Contains($action: UnityEngine.InputSystem.InputAction): boolean;
                Enable(): void;
                Disable(): void;
            }

            interface IInputActionCollection2 extends System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputAction>, UnityEngine.InputSystem.IInputActionCollection, System.Collections.IEnumerable {
                get bindings(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputBinding>;
                FindAction($actionNameOrId: string, $throwIfNotFound?: boolean): UnityEngine.InputSystem.InputAction;
                FindBinding($mask: UnityEngine.InputSystem.InputBinding, $action: $Out<UnityEngine.InputSystem.InputAction>): number;
            }

            interface IInputInteraction {
                Process($context: $Ref<UnityEngine.InputSystem.InputInteractionContext>): void;
                Reset(): void;
            }

            interface IInputInteraction<TValue> extends UnityEngine.InputSystem.IInputInteraction {
            }

            class InputAction implements System.ICloneable, System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get name(): string;
                public get type(): UnityEngine.InputSystem.InputActionType;
                public get id(): System.Guid;
                public expectedControlType: string;
                public get processors(): string;
                public get interactions(): string;
                public get actionMap(): UnityEngine.InputSystem.InputActionMap;
                public bindingMask: UnityEngine.InputSystem.InputBinding | null;
                public get bindings(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputBinding>;
                public get controls(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControl>;
                public get phase(): UnityEngine.InputSystem.InputActionPhase;
                public get inProgress(): boolean;
                public get enabled(): boolean;
                public get triggered(): boolean;
                public get activeControl(): UnityEngine.InputSystem.InputControl;
                public get activeValueType(): System.Type;
                public wantsInitialStateCheck: boolean;
                constructor();
                constructor($name?: string, $type?: UnityEngine.InputSystem.InputActionType, $binding?: string, $interactions?: string, $processors?: string, $expectedControlType?: string);
                public Dispose(): void;
                public ToString(): string;
                public Enable(): void;
                public Disable(): void;
                public Clone(): UnityEngine.InputSystem.InputAction;
                public ReadValue<TValue>(): TValue;
                public ReadValueAsObject(): any;
                public GetControlMagnitude(): number;
                public Reset(): void;
                public IsPressed(): boolean;
                public IsInProgress(): boolean;
                public WasPressedThisFrame(): boolean;
                public WasPressedThisDynamicUpdate(): boolean;
                public WasReleasedThisFrame(): boolean;
                public WasReleasedThisDynamicUpdate(): boolean;
                public WasPerformedThisFrame(): boolean;
                public WasPerformedThisDynamicUpdate(): boolean;
                public WasCompletedThisFrame(): boolean;
                public WasCompletedThisDynamicUpdate(): boolean;
                public GetTimeoutCompletionPercentage(): number;
                public add_started(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public remove_started(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public add_canceled(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public remove_canceled(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public add_performed(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public remove_performed(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;

                class CallbackContext {
                    protected [__keep_incompatibility]: never;
                    public get phase(): UnityEngine.InputSystem.InputActionPhase;
                    public get started(): boolean;
                    public get performed(): boolean;
                    public get canceled(): boolean;
                    public get action(): UnityEngine.InputSystem.InputAction;
                    public get control(): UnityEngine.InputSystem.InputControl;
                    public get interaction(): UnityEngine.InputSystem.IInputInteraction;
                    public get time(): number;
                    public get startTime(): number;
                    public get duration(): number;
                    public get valueType(): System.Type;
                    public get valueSizeInBytes(): number;
                    public ReadValue<TValue>(): TValue;
                    public ReadValueAsButton(): boolean;
                    public ReadValueAsObject(): any;
                    public ToString(): string;
                }
            }

            class InputActionAsset extends UnityEngine.ScriptableObject implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputAction>, UnityEngine.InputSystem.IInputActionCollection, System.Collections.IEnumerable, UnityEngine.InputSystem.IInputActionCollection2 {
                protected [__keep_incompatibility]: never;
                public static readonly Extension: string;
                public get enabled(): boolean;
                public get actionMaps(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputActionMap>;
                public get controlSchemes(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControlScheme>;
                public get bindings(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputBinding>;
                public bindingMask: UnityEngine.InputSystem.InputBinding | null;
                public devices: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice> | null;
                constructor();
                public ToJson(): string;
                public LoadFromJson($json: string): void;
                public static FromJson($json: string): UnityEngine.InputSystem.InputActionAsset;
                public FindAction($actionNameOrId: string, $throwIfNotFound?: boolean): UnityEngine.InputSystem.InputAction;
                public FindBinding($mask: UnityEngine.InputSystem.InputBinding, $action: $Out<UnityEngine.InputSystem.InputAction>): number;
                public FindActionMap($nameOrId: string, $throwIfNotFound?: boolean): UnityEngine.InputSystem.InputActionMap;
                public FindActionMap($id: System.Guid): UnityEngine.InputSystem.InputActionMap;
                public FindAction($guid: System.Guid): UnityEngine.InputSystem.InputAction;
                public FindControlSchemeIndex($name: string): number;
                public FindControlScheme($name: string): UnityEngine.InputSystem.InputControlScheme | null;
                public IsUsableWithDevice($device: UnityEngine.InputSystem.InputDevice): boolean;
                public Enable(): void;
                public Disable(): void;
                public Contains($action: UnityEngine.InputSystem.InputAction): boolean;
                public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.InputAction>;
                public get_Item($actionNameOrId: string): UnityEngine.InputSystem.InputAction;
            }

            enum InputActionChange {
                ActionEnabled = 0,
                ActionDisabled = 1,
                ActionMapEnabled = 2,
                ActionMapDisabled = 3,
                ActionStarted = 4,
                ActionPerformed = 5,
                ActionCanceled = 6,
                BoundControlsAboutToChange = 7,
                BoundControlsChanged = 8
            }

            class InputActionMap implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputAction>, UnityEngine.InputSystem.IInputActionCollection, System.Collections.IEnumerable, UnityEngine.InputSystem.IInputActionCollection2, System.ICloneable, System.IDisposable, UnityEngine.ISerializationCallbackReceiver {
                protected [__keep_incompatibility]: never;
                public get name(): string;
                public get asset(): UnityEngine.InputSystem.InputActionAsset;
                public get id(): System.Guid;
                public get enabled(): boolean;
                public get actions(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputAction>;
                public get bindings(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputBinding>;
                public get controlSchemes(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControlScheme>;
                public bindingMask: UnityEngine.InputSystem.InputBinding | null;
                public devices: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice> | null;
                constructor();
                constructor($name: string);
                public Dispose(): void;
                public FindAction($actionNameOrId: string, $throwIfNotFound?: boolean): UnityEngine.InputSystem.InputAction;
                public FindAction($id: System.Guid): UnityEngine.InputSystem.InputAction;
                public IsUsableWithDevice($device: UnityEngine.InputSystem.InputDevice): boolean;
                public Enable(): void;
                public Disable(): void;
                public Clone(): UnityEngine.InputSystem.InputActionMap;
                public Contains($action: UnityEngine.InputSystem.InputAction): boolean;
                public ToString(): string;
                public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.InputAction>;
                public FindBinding($mask: UnityEngine.InputSystem.InputBinding, $action: $Out<UnityEngine.InputSystem.InputAction>): number;
                public static FromJson($json: string): System.Array$1<UnityEngine.InputSystem.InputActionMap>;
                public static ToJson($maps: System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputActionMap>): string;
                public ToJson(): string;
                public OnBeforeSerialize(): void;
                public OnAfterDeserialize(): void;
                public add_actionTriggered(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public remove_actionTriggered(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public get_Item($actionNameOrId: string): UnityEngine.InputSystem.InputAction;
            }

            class InputActionRebindingExtensions {
                protected [__keep_incompatibility]: never;
                public static GetParameterValue($name: string, $bindingMask?: UnityEngine.InputSystem.InputBinding): UnityEngine.InputSystem.Utilities.PrimitiveValue | null;
                public static GetParameterValue($name: string, $bindingIndex: number): UnityEngine.InputSystem.Utilities.PrimitiveValue | null;
                public static GetParameterValue<TObject, TValue>($expr: System.Linq.Expressions.Expression$1<System.Func$2<TObject, TValue>>, $bindingMask?: UnityEngine.InputSystem.InputBinding): TValue | null;
                public static ApplyParameterOverride<TObject, TValue>($expr: System.Linq.Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyParameterOverride<TObject, TValue>($expr: System.Linq.Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyParameterOverride<TObject, TValue>($expr: System.Linq.Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyParameterOverride($name: string, $value: UnityEngine.InputSystem.Utilities.PrimitiveValue, $bindingMask?: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyParameterOverride($name: string, $value: UnityEngine.InputSystem.Utilities.PrimitiveValue, $bindingMask?: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyParameterOverride($name: string, $value: UnityEngine.InputSystem.Utilities.PrimitiveValue, $bindingMask?: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyParameterOverride($name: string, $value: UnityEngine.InputSystem.Utilities.PrimitiveValue, $bindingIndex: number): void;
                public static GetBindingIndex($bindingMask: UnityEngine.InputSystem.InputBinding): number;
                public static GetBindingIndex($bindingMask: UnityEngine.InputSystem.InputBinding): number;
                public static GetBindingIndex($group?: string, $path?: string): number;
                public static GetBindingForControl($control: UnityEngine.InputSystem.InputControl): UnityEngine.InputSystem.InputBinding | null;
                public static GetBindingIndexForControl($control: UnityEngine.InputSystem.InputControl): number;
                public static GetBindingDisplayString($options?: UnityEngine.InputSystem.InputBinding.DisplayStringOptions, $group?: string): string;
                public static GetBindingDisplayString($bindingMask: UnityEngine.InputSystem.InputBinding, $options?: UnityEngine.InputSystem.InputBinding.DisplayStringOptions): string;
                public static GetBindingDisplayString($bindingIndex: number, $options?: UnityEngine.InputSystem.InputBinding.DisplayStringOptions): string;
                public static GetBindingDisplayString($bindingIndex: number, $deviceLayoutName: $Out<string>, $controlPath: $Out<string>, $options?: UnityEngine.InputSystem.InputBinding.DisplayStringOptions): string;
                public static ApplyBindingOverride($newPath: string, $group?: string, $path?: string): void;
                public static ApplyBindingOverride($bindingOverride: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyBindingOverride($bindingIndex: number, $bindingOverride: UnityEngine.InputSystem.InputBinding): void;
                public static ApplyBindingOverride($bindingIndex: number, $path: string): void;
                public static ApplyBindingOverride($bindingOverride: UnityEngine.InputSystem.InputBinding): number;
                public static ApplyBindingOverride($bindingIndex: number, $bindingOverride: UnityEngine.InputSystem.InputBinding): void;
                public static RemoveBindingOverride($bindingIndex: number): void;
                public static RemoveBindingOverride($bindingMask: UnityEngine.InputSystem.InputBinding): void;
                public static RemoveAllBindingOverrides(): void;
                public static RemoveAllBindingOverrides(): void;
                public static ApplyBindingOverrides($overrides: System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputBinding>): void;
                public static RemoveBindingOverrides($overrides: System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputBinding>): void;
                public static ApplyBindingOverridesOnMatchingControls($control: UnityEngine.InputSystem.InputControl): number;
                public static ApplyBindingOverridesOnMatchingControls($control: UnityEngine.InputSystem.InputControl): number;
                public static SaveBindingOverridesAsJson(): string;
                public static SaveBindingOverridesAsJson(): string;
                public static LoadBindingOverridesFromJson($json: string, $removeExisting?: boolean): void;
                public static LoadBindingOverridesFromJson($json: string, $removeExisting?: boolean): void;
                public static PerformInteractiveRebinding($bindingIndex?: number): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;

                class RebindingOperation implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public static readonly kDefaultMagnitudeThreshold: number;
                    public get action(): UnityEngine.InputSystem.InputAction;
                    public get bindingMask(): UnityEngine.InputSystem.InputBinding | null;
                    public get candidates(): UnityEngine.InputSystem.InputControlList$1<UnityEngine.InputSystem.InputControl>;
                    public get scores(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<number>;
                    public get magnitudes(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<number>;
                    public get selectedControl(): UnityEngine.InputSystem.InputControl;
                    public get started(): boolean;
                    public get completed(): boolean;
                    public get canceled(): boolean;
                    public get startTime(): number;
                    public get timeout(): number;
                    public get expectedControlType(): string;
                    constructor();
                    public WithAction($action: UnityEngine.InputSystem.InputAction): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithMatchingEventsBeingSuppressed($value?: boolean): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithCancelingThrough($binding: string): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithCancelingThrough($control: UnityEngine.InputSystem.InputControl): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithExpectedControlType($layoutName: string): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithExpectedControlType($type: System.Type): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithExpectedControlType<TControl extends UnityEngine.InputSystem.InputControl>(): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithTargetBinding($bindingIndex: number): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithBindingMask($bindingMask: UnityEngine.InputSystem.InputBinding | null): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithBindingGroup($group: string): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithoutGeneralizingPathOfSelectedControl(): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithRebindAddingNewBinding($group?: string): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithMagnitudeHavingToBeGreaterThan($magnitude: number): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithoutIgnoringNoisyControls(): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithControlsHavingToMatchPath($path: string): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithControlsExcluding($path: string): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithTimeout($timeInSeconds: number): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public OnComplete($callback: System.Action$1<UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation>): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public OnCancel($callback: System.Action$1<UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation>): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public OnPotentialMatch($callback: System.Action$1<UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation>): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public OnGeneratePath($callback: System.Func$2<UnityEngine.InputSystem.InputControl, string>): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public OnComputeScore($callback: System.Func$3<UnityEngine.InputSystem.InputControl, UnityEngine.InputSystem.LowLevel.InputEventPtr, number>): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public OnApplyBinding($callback: System.Action$2<UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation, string>): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public OnMatchWaitForAnother($seconds: number): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public WithActionEventNotificationsBeingSuppressed($value?: boolean): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public Start(): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                    public Cancel(): void;
                    public Complete(): void;
                    public AddCandidate($control: UnityEngine.InputSystem.InputControl, $score: number, $magnitude?: number): void;
                    public RemoveCandidate($control: UnityEngine.InputSystem.InputControl): void;
                    public Dispose(): void;
                    public Reset(): UnityEngine.InputSystem.InputActionRebindingExtensions.RebindingOperation;
                }
            }

            enum InputActionPhase {
                Disabled = 0,
                Waiting = 1,
                Started = 2,
                Performed = 3,
                Canceled = 4
            }

            class InputActionProperty implements System.IEquatable$1<UnityEngine.InputSystem.InputActionReference>, System.IEquatable$1<UnityEngine.InputSystem.InputAction>, System.IEquatable$1<UnityEngine.InputSystem.InputActionProperty> {
                protected [__keep_incompatibility]: never;
                public get action(): UnityEngine.InputSystem.InputAction;
                public get reference(): UnityEngine.InputSystem.InputActionReference;
                constructor($action: UnityEngine.InputSystem.InputAction);
                constructor($reference: UnityEngine.InputSystem.InputActionReference);
                public Equals($other: UnityEngine.InputSystem.InputActionProperty): boolean;
                public Equals($other: UnityEngine.InputSystem.InputAction): boolean;
                public Equals($other: UnityEngine.InputSystem.InputActionReference): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }

            class InputActionReference extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public get asset(): UnityEngine.InputSystem.InputActionAsset;
                public get action(): UnityEngine.InputSystem.InputAction;
                constructor();
                public Set($action: UnityEngine.InputSystem.InputAction): void;
                public Set($asset: UnityEngine.InputSystem.InputActionAsset, $mapName: string, $actionName: string): void;
                public ToString(): string;
                public static Create($action: UnityEngine.InputSystem.InputAction): UnityEngine.InputSystem.InputActionReference;
                public ToInputAction(): UnityEngine.InputSystem.InputAction;
            }

            class InputActionSetupExtensions {
                protected [__keep_incompatibility]: never;
                public static AddActionMap($name: string): UnityEngine.InputSystem.InputActionMap;
                public static AddActionMap($map: UnityEngine.InputSystem.InputActionMap): void;
                public static RemoveActionMap($map: UnityEngine.InputSystem.InputActionMap): void;
                public static RemoveActionMap($nameOrId: string): void;
                public static AddAction($name: string, $type?: UnityEngine.InputSystem.InputActionType, $binding?: string, $interactions?: string, $processors?: string, $groups?: string, $expectedControlLayout?: string): UnityEngine.InputSystem.InputAction;
                public static RemoveAction(): void;
                public static RemoveAction($nameOrId: string): void;
                public static AddBinding($path: string, $interactions?: string, $processors?: string, $groups?: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static AddBinding($control: UnityEngine.InputSystem.InputControl): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static AddBinding($binding?: UnityEngine.InputSystem.InputBinding): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static AddBinding($path: string, $interactions?: string, $groups?: string, $action?: string, $processors?: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static AddBinding($path: string, $action: UnityEngine.InputSystem.InputAction, $interactions?: string, $groups?: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static AddBinding($path: string, $action: System.Guid, $interactions?: string, $groups?: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static AddBinding($binding: UnityEngine.InputSystem.InputBinding): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static AddCompositeBinding($composite: string, $interactions?: string, $processors?: string): UnityEngine.InputSystem.InputActionSetupExtensions.CompositeSyntax;
                public static ChangeBinding($index: number): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeBinding($name: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeBinding($index: number): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeBindingWithId($id: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeBindingWithId($id: System.Guid): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeBindingWithGroup($group: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeBindingWithPath($path: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeBinding($match: UnityEngine.InputSystem.InputBinding): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static ChangeCompositeBinding($compositeName: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                public static Rename($newName: string): void;
                public static AddControlScheme($controlScheme: UnityEngine.InputSystem.InputControlScheme): void;
                public static AddControlScheme($name: string): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                public static RemoveControlScheme($name: string): void;
                public static WithBindingGroup($bindingGroup: string): UnityEngine.InputSystem.InputControlScheme;
                public static WithDevice($controlPath: string, $required: boolean): UnityEngine.InputSystem.InputControlScheme;
                public static WithRequiredDevice($controlPath: string): UnityEngine.InputSystem.InputControlScheme;
                public static WithOptionalDevice($controlPath: string): UnityEngine.InputSystem.InputControlScheme;
                public static OrWithRequiredDevice($controlPath: string): UnityEngine.InputSystem.InputControlScheme;
                public static OrWithOptionalDevice($controlPath: string): UnityEngine.InputSystem.InputControlScheme;

                class BindingSyntax {
                    protected [__keep_incompatibility]: never;
                    public get valid(): boolean;
                    public get bindingIndex(): number;
                    public get binding(): UnityEngine.InputSystem.InputBinding;
                    public WithName($name: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithPath($path: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithGroup($group: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithGroups($groups: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithInteraction($interaction: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithInteractions($interactions: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithInteraction<TInteraction extends UnityEngine.InputSystem.IInputInteraction>(): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithProcessor($processor: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithProcessors($processors: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public WithProcessor<TProcessor>(): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public Triggering($action: UnityEngine.InputSystem.InputAction): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public To($binding: UnityEngine.InputSystem.InputBinding): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public NextBinding(): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public PreviousBinding(): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public NextPartBinding($partName: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public PreviousPartBinding($partName: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public NextCompositeBinding($compositeName?: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public PreviousCompositeBinding($compositeName?: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                    public Erase(): void;
                    public InsertPartBinding($partName: string, $path: string): UnityEngine.InputSystem.InputActionSetupExtensions.BindingSyntax;
                }

                class CompositeSyntax {
                    protected [__keep_incompatibility]: never;
                    public get bindingIndex(): number;
                    public With($name: string, $binding: string, $groups?: string, $processors?: string): UnityEngine.InputSystem.InputActionSetupExtensions.CompositeSyntax;
                }

                class ControlSchemeSyntax {
                    protected [__keep_incompatibility]: never;
                    public WithBindingGroup($bindingGroup: string): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public WithRequiredDevice<TDevice extends UnityEngine.InputSystem.InputDevice>(): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public WithOptionalDevice<TDevice extends UnityEngine.InputSystem.InputDevice>(): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public OrWithRequiredDevice<TDevice extends UnityEngine.InputSystem.InputDevice>(): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public OrWithOptionalDevice<TDevice extends UnityEngine.InputSystem.InputDevice>(): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public WithRequiredDevice($controlPath: string): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public WithOptionalDevice($controlPath: string): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public OrWithRequiredDevice($controlPath: string): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public OrWithOptionalDevice($controlPath: string): UnityEngine.InputSystem.InputActionSetupExtensions.ControlSchemeSyntax;
                    public Done(): UnityEngine.InputSystem.InputControlScheme;
                }
            }

            enum InputActionType {
                Value = 0,
                Button = 1,
                PassThrough = 2
            }

            class InputBinding implements System.IEquatable$1<UnityEngine.InputSystem.InputBinding> {
                protected [__keep_incompatibility]: never;
                public static readonly Separator: number;
                public name: string;
                public id: System.Guid;
                public path: string;
                public overridePath: string;
                public interactions: string;
                public overrideInteractions: string;
                public processors: string;
                public overrideProcessors: string;
                public groups: string;
                public action: string;
                public isComposite: boolean;
                public isPartOfComposite: boolean;
                public get hasOverrides(): boolean;
                public get effectivePath(): string;
                public get effectiveInteractions(): string;
                public get effectiveProcessors(): string;
                constructor($path: string, $action?: string, $groups?: string, $processors?: string, $interactions?: string, $name?: string);
                public GetNameOfComposite(): string;
                public static MaskByGroup($group: string): UnityEngine.InputSystem.InputBinding;
                public static MaskByGroups(...groups: string[]): UnityEngine.InputSystem.InputBinding;
                public Equals($other: UnityEngine.InputSystem.InputBinding): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
                public ToDisplayString($options?: UnityEngine.InputSystem.InputBinding.DisplayStringOptions, $control?: UnityEngine.InputSystem.InputControl): string;
                public ToDisplayString($deviceLayoutName: $Out<string>, $controlPath: $Out<string>, $options?: UnityEngine.InputSystem.InputBinding.DisplayStringOptions, $control?: UnityEngine.InputSystem.InputControl): string;
                public Matches($binding: UnityEngine.InputSystem.InputBinding): boolean;

                enum DisplayStringOptions {
                    DontUseShortDisplayNames = 1,
                    DontOmitDevice = 2,
                    DontIncludeInteractions = 4,
                    IgnoreBindingOverrides = 8
                }
            }

            class InputBindingComposite {
                protected [__keep_incompatibility]: never;
                public get valueType(): System.Type;
                public get valueSizeInBytes(): number;
                public ReadValueAsObject($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): any;
                public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;
                public static GetExpectedControlLayoutName($composite: string, $part: string): string;
            }

            class InputBindingComposite<TValue> extends UnityEngine.InputSystem.InputBindingComposite {
                protected [__keep_incompatibility]: never;
                public get valueType(): System.Type;
                public get valueSizeInBytes(): number;
                public ReadValue($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): TValue;
                public ReadValueAsObject($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): any;
            }

            class InputBindingCompositeContext {
                protected [__keep_incompatibility]: never;
                public get controls(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputBindingCompositeContext.PartBinding>;
                public EvaluateMagnitude($partNumber: number): number;
                public ReadValue<TValue extends System.IComparable$1<TValue>>($partNumber: number): TValue;
                public ReadValue<TValue extends System.IComparable$1<TValue>>($partNumber: number, $sourceControl: $Out<UnityEngine.InputSystem.InputControl>): TValue;
                public ReadValue<TValue, TComparer extends System.Collections.Generic.IComparer$1<TValue>>($partNumber: number, $comparer?: TComparer): TValue;
                public ReadValue<TValue, TComparer extends System.Collections.Generic.IComparer$1<TValue>>($partNumber: number, $sourceControl: $Out<UnityEngine.InputSystem.InputControl>, $comparer?: TComparer): TValue;
                public ReadValueAsButton($partNumber: number): boolean;
                public ReadValueAsObject($partNumber: number): any;
                public GetPressTime($partNumber: number): number;

                class PartBinding {
                    protected [__keep_incompatibility]: never;
                    public part: number;
                    public control: UnityEngine.InputSystem.InputControl;
                }
            }

            class InputControlScheme implements System.IEquatable$1<UnityEngine.InputSystem.InputControlScheme> {
                protected [__keep_incompatibility]: never;
                public get name(): string;
                public bindingGroup: string;
                public get deviceRequirements(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControlScheme.DeviceRequirement>;
                constructor($name: string, $devices?: System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControlScheme.DeviceRequirement>, $bindingGroup?: string);
                public static FindControlSchemeForDevices<TDevices extends System.Collections.Generic.IReadOnlyList$1<UnityEngine.InputSystem.InputDevice>, TSchemes extends System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControlScheme>>($devices: TDevices, $schemes: TSchemes, $mustIncludeDevice?: UnityEngine.InputSystem.InputDevice, $allowUnsuccesfulMatch?: boolean): UnityEngine.InputSystem.InputControlScheme | null;
                public static FindControlSchemeForDevices<TDevices extends System.Collections.Generic.IReadOnlyList$1<UnityEngine.InputSystem.InputDevice>, TSchemes extends System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControlScheme>>($devices: TDevices, $schemes: TSchemes, $controlScheme: $Out<UnityEngine.InputSystem.InputControlScheme>, $matchResult: $Out<UnityEngine.InputSystem.InputControlScheme.MatchResult>, $mustIncludeDevice?: UnityEngine.InputSystem.InputDevice, $allowUnsuccessfulMatch?: boolean): boolean;
                public static FindControlSchemeForDevice<TSchemes extends System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControlScheme>>($device: UnityEngine.InputSystem.InputDevice, $schemes: TSchemes): UnityEngine.InputSystem.InputControlScheme | null;
                public SupportsDevice($device: UnityEngine.InputSystem.InputDevice): boolean;
                public PickDevicesFrom<TDevices extends System.Collections.Generic.IReadOnlyList$1<UnityEngine.InputSystem.InputDevice>>($devices: TDevices, $favorDevice?: UnityEngine.InputSystem.InputDevice): UnityEngine.InputSystem.InputControlScheme.MatchResult;
                public Equals($other: UnityEngine.InputSystem.InputControlScheme): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;

                class MatchResult implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControlScheme.MatchResult.Match>, System.Collections.IEnumerable, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get score(): number;
                    public get isSuccessfulMatch(): boolean;
                    public get hasMissingRequiredDevices(): boolean;
                    public get hasMissingOptionalDevices(): boolean;
                    public get devices(): UnityEngine.InputSystem.InputControlList$1<UnityEngine.InputSystem.InputDevice>;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.InputControlScheme.MatchResult.Match>;
                    public Dispose(): void;
                    public get_Item($index: number): UnityEngine.InputSystem.InputControlScheme.MatchResult.Match;

                    class Match {
                        protected [__keep_incompatibility]: never;
                        public get control(): UnityEngine.InputSystem.InputControl;
                        public get device(): UnityEngine.InputSystem.InputDevice;
                        public get requirementIndex(): number;
                        public get requirement(): UnityEngine.InputSystem.InputControlScheme.DeviceRequirement;
                        public get isOptional(): boolean;
                    }
                }

                class DeviceRequirement implements System.IEquatable$1<UnityEngine.InputSystem.InputControlScheme.DeviceRequirement> {
                    protected [__keep_incompatibility]: never;
                    public controlPath: string;
                    public isOptional: boolean;
                    public isAND: boolean;
                    public isOR: boolean;
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.InputControlScheme.DeviceRequirement): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                }
            }

            class InputInteractionContext {
                protected [__keep_incompatibility]: never;
                public get action(): UnityEngine.InputSystem.InputAction;
                public get control(): UnityEngine.InputSystem.InputControl;
                public get phase(): UnityEngine.InputSystem.InputActionPhase;
                public get time(): number;
                public get startTime(): number;
                public get timerHasExpired(): boolean;
                public get isWaiting(): boolean;
                public get isStarted(): boolean;
                public ComputeMagnitude(): number;
                public ControlIsActuated($threshold?: number): boolean;
                public Started(): void;
                public Performed(): void;
                public PerformedAndStayStarted(): void;
                public PerformedAndStayPerformed(): void;
                public Canceled(): void;
                public Waiting(): void;
                public SetTimeout($seconds: number): void;
                public SetTotalTimeoutCompletionTime($seconds: number): void;
                public ReadValue<TValue>(): TValue;
            }

            class InputSystem {
                protected [__keep_incompatibility]: never;
                public static get devices(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice>;
                public static get disconnectedDevices(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice>;
                public static pollingFrequency: number;
                public static onEvent: UnityEngine.InputSystem.LowLevel.InputEventListener;
                public static get onAnyButtonPress(): System.IObservable$1<UnityEngine.InputSystem.InputControl>;
                public static settings: UnityEngine.InputSystem.InputSettings;
                public static actions: UnityEngine.InputSystem.InputActionAsset;
                public static get remoting(): UnityEngine.InputSystem.InputRemoting;
                public static get version(): System.Version;
                public static runInBackground: boolean;
                public static get metrics(): UnityEngine.InputSystem.LowLevel.InputMetrics;
                public static RegisterLayout($type: System.Type, $name?: string, $matches?: UnityEngine.InputSystem.Layouts.InputDeviceMatcher | null): void;
                public static RegisterLayout<T extends UnityEngine.InputSystem.InputControl>($name?: string, $matches?: UnityEngine.InputSystem.Layouts.InputDeviceMatcher | null): void;
                public static RegisterLayout($json: string, $name?: string, $matches?: UnityEngine.InputSystem.Layouts.InputDeviceMatcher | null): void;
                public static RegisterLayoutOverride($json: string, $name?: string): void;
                public static RegisterLayoutMatcher($layoutName: string, $matcher: UnityEngine.InputSystem.Layouts.InputDeviceMatcher): void;
                public static RegisterLayoutMatcher<TDevice extends UnityEngine.InputSystem.InputDevice>($matcher: UnityEngine.InputSystem.Layouts.InputDeviceMatcher): void;
                public static RegisterLayoutBuilder($buildMethod: System.Func$1<UnityEngine.InputSystem.Layouts.InputControlLayout>, $name: string, $baseLayout?: string, $matches?: UnityEngine.InputSystem.Layouts.InputDeviceMatcher | null): void;
                public static RegisterPrecompiledLayout<TDevice extends UnityEngine.InputSystem.InputDevice>($metadata: string): void;
                public static RemoveLayout($name: string): void;
                public static TryFindMatchingLayout($deviceDescription: UnityEngine.InputSystem.Layouts.InputDeviceDescription): string;
                public static ListLayouts(): System.Collections.Generic.IEnumerable$1<string>;
                public static ListLayoutsBasedOn($baseLayout: string): System.Collections.Generic.IEnumerable$1<string>;
                public static LoadLayout($name: string): UnityEngine.InputSystem.Layouts.InputControlLayout;
                public static LoadLayout<TControl extends UnityEngine.InputSystem.InputControl>(): UnityEngine.InputSystem.Layouts.InputControlLayout;
                public static GetNameOfBaseLayout($layoutName: string): string;
                public static IsFirstLayoutBasedOnSecond($firstLayoutName: string, $secondLayoutName: string): boolean;
                public static RegisterProcessor($type: System.Type, $name?: string): void;
                public static RegisterProcessor<T>($name?: string): void;
                public static TryGetProcessor($name: string): System.Type;
                public static ListProcessors(): System.Collections.Generic.IEnumerable$1<string>;
                public static AddDevice($layout: string, $name?: string, $variants?: string): UnityEngine.InputSystem.InputDevice;
                public static AddDevice<TDevice extends UnityEngine.InputSystem.InputDevice>($name?: string): TDevice;
                public static AddDevice($description: UnityEngine.InputSystem.Layouts.InputDeviceDescription): UnityEngine.InputSystem.InputDevice;
                public static AddDevice($device: UnityEngine.InputSystem.InputDevice): void;
                public static RemoveDevice($device: UnityEngine.InputSystem.InputDevice): void;
                public static FlushDisconnectedDevices(): void;
                public static GetDevice($nameOrLayout: string): UnityEngine.InputSystem.InputDevice;
                public static GetDevice<TDevice extends UnityEngine.InputSystem.InputDevice>(): TDevice;
                public static GetDevice($type: System.Type): UnityEngine.InputSystem.InputDevice;
                public static GetDevice<TDevice extends UnityEngine.InputSystem.InputDevice>($usage: UnityEngine.InputSystem.Utilities.InternedString): TDevice;
                public static GetDevice<TDevice extends UnityEngine.InputSystem.InputDevice>($usage: string): TDevice;
                public static GetDeviceById($deviceId: number): UnityEngine.InputSystem.InputDevice;
                public static GetUnsupportedDevices(): System.Collections.Generic.List$1<UnityEngine.InputSystem.Layouts.InputDeviceDescription>;
                public static GetUnsupportedDevices($descriptions: System.Collections.Generic.List$1<UnityEngine.InputSystem.Layouts.InputDeviceDescription>): number;
                public static EnableDevice($device: UnityEngine.InputSystem.InputDevice): void;
                public static DisableDevice($device: UnityEngine.InputSystem.InputDevice, $keepSendingEvents?: boolean): void;
                public static TrySyncDevice($device: UnityEngine.InputSystem.InputDevice): boolean;
                public static ResetDevice($device: UnityEngine.InputSystem.InputDevice, $alsoResetDontResetControls?: boolean): void;
                public static TryResetDevice($device: UnityEngine.InputSystem.InputDevice): boolean;
                public static PauseHaptics(): void;
                public static ResumeHaptics(): void;
                public static ResetHaptics(): void;
                public static SetDeviceUsage($device: UnityEngine.InputSystem.InputDevice, $usage: string): void;
                public static SetDeviceUsage($device: UnityEngine.InputSystem.InputDevice, $usage: UnityEngine.InputSystem.Utilities.InternedString): void;
                public static AddDeviceUsage($device: UnityEngine.InputSystem.InputDevice, $usage: string): void;
                public static AddDeviceUsage($device: UnityEngine.InputSystem.InputDevice, $usage: UnityEngine.InputSystem.Utilities.InternedString): void;
                public static RemoveDeviceUsage($device: UnityEngine.InputSystem.InputDevice, $usage: string): void;
                public static RemoveDeviceUsage($device: UnityEngine.InputSystem.InputDevice, $usage: UnityEngine.InputSystem.Utilities.InternedString): void;
                public static FindControl($path: string): UnityEngine.InputSystem.InputControl;
                public static FindControls($path: string): UnityEngine.InputSystem.InputControlList$1<UnityEngine.InputSystem.InputControl>;
                public static FindControls<TControl extends UnityEngine.InputSystem.InputControl>($path: string): UnityEngine.InputSystem.InputControlList$1<TControl>;
                public static FindControls<TControl extends UnityEngine.InputSystem.InputControl>($path: string, $controls: $Ref<UnityEngine.InputSystem.InputControlList$1<TControl>>): number;
                public static QueueEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                public static QueueEvent<TEvent extends UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo>($inputEvent: $Ref<TEvent>): void;
                public static QueueStateEvent<TState extends UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo>($device: UnityEngine.InputSystem.InputDevice, $state: TState, $time?: number): void;
                public static QueueDeltaStateEvent<TDelta>($control: UnityEngine.InputSystem.InputControl, $delta: TDelta, $time?: number): void;
                public static QueueConfigChangeEvent($device: UnityEngine.InputSystem.InputDevice, $time?: number): void;
                public static QueueTextEvent($device: UnityEngine.InputSystem.InputDevice, $character: number, $time?: number): void;
                public static Update(): void;
                public static RegisterInteraction($type: System.Type, $name?: string): void;
                public static RegisterInteraction<T>($name?: string): void;
                public static TryGetInteraction($name: string): System.Type;
                public static ListInteractions(): System.Collections.Generic.IEnumerable$1<string>;
                public static RegisterBindingComposite($type: System.Type, $name: string): void;
                public static RegisterBindingComposite<T>($name?: string): void;
                public static TryGetBindingComposite($name: string): System.Type;
                public static DisableAllEnabledActions(): void;
                public static ListEnabledActions(): System.Collections.Generic.List$1<UnityEngine.InputSystem.InputAction>;
                public static ListEnabledActions($actions: System.Collections.Generic.List$1<UnityEngine.InputSystem.InputAction>): number;
                public static HasNativeObject($obj: UnityEngine.Object): boolean;
                public static add_onLayoutChange(handler: System.Action$2<string, UnityEngine.InputSystem.InputControlLayoutChange>): void;
                public static remove_onLayoutChange(handler: System.Action$2<string, UnityEngine.InputSystem.InputControlLayoutChange>): void;
                public static add_onDeviceChange(handler: System.Action$2<UnityEngine.InputSystem.InputDevice, UnityEngine.InputSystem.InputDeviceChange>): void;
                public static remove_onDeviceChange(handler: System.Action$2<UnityEngine.InputSystem.InputDevice, UnityEngine.InputSystem.InputDeviceChange>): void;
                public static add_onDeviceCommand(handler: UnityEngine.InputSystem.LowLevel.InputDeviceCommandDelegate): void;
                public static remove_onDeviceCommand(handler: UnityEngine.InputSystem.LowLevel.InputDeviceCommandDelegate): void;
                public static add_onFindLayoutForDevice(handler: UnityEngine.InputSystem.Layouts.InputDeviceFindControlLayoutDelegate): void;
                public static remove_onFindLayoutForDevice(handler: UnityEngine.InputSystem.Layouts.InputDeviceFindControlLayoutDelegate): void;
                public static add_onBeforeUpdate(handler: System.Action): void;
                public static remove_onBeforeUpdate(handler: System.Action): void;
                public static add_onAfterUpdate(handler: System.Action): void;
                public static remove_onAfterUpdate(handler: System.Action): void;
                public static add_onSettingsChange(handler: System.Action): void;
                public static remove_onSettingsChange(handler: System.Action): void;
                public static add_customBindingPathValidators(handler: System.Func$2<string, System.Action>): void;
                public static remove_customBindingPathValidators(handler: System.Func$2<string, System.Action>): void;
                public static add_onActionsChange(handler: System.Action): void;
                public static remove_onActionsChange(handler: System.Action): void;
                public static add_onActionChange(handler: System.Action$2<any, UnityEngine.InputSystem.InputActionChange>): void;
                public static remove_onActionChange(handler: System.Action$2<any, UnityEngine.InputSystem.InputActionChange>): void;
            }

            class CommonUsages {
                protected [__keep_incompatibility]: never;
                public static readonly Primary2DMotion: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Secondary2DMotion: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly PrimaryAction: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly SecondaryAction: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly PrimaryTrigger: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly SecondaryTrigger: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Modifier: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Position: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Orientation: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Hatswitch: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Back: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Forward: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Menu: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Submit: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Cancel: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Horizontal: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Vertical: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Twist: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Pressure: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly ScrollHorizontal: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly ScrollVertical: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly Point: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly LowFreqMotor: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly HighFreqMotor: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly LeftHand: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly RightHand: UnityEngine.InputSystem.Utilities.InternedString;
                public static readonly BatteryStrength: UnityEngine.InputSystem.Utilities.InternedString;
            }

            class InputControl {
                protected [__keep_incompatibility]: never;
                public get name(): string;
                public get displayName(): string;
                public get shortDisplayName(): string;
                public get path(): string;
                public get layout(): string;
                public get variants(): string;
                public get device(): UnityEngine.InputSystem.InputDevice;
                public get parent(): UnityEngine.InputSystem.InputControl;
                public get children(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControl>;
                public get usages(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.InternedString>;
                public get aliases(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.InternedString>;
                public get stateBlock(): UnityEngine.InputSystem.LowLevel.InputStateBlock;
                public get noisy(): boolean;
                public get synthetic(): boolean;
                public get valueType(): System.Type;
                public get valueSizeInBytes(): number;
                public get magnitude(): number;
                public get optimizedControlDataType(): UnityEngine.InputSystem.Utilities.FourCC;
                public ToString(): string;
                public EvaluateMagnitude(): number;
                public TryGetChildControl($path: string): UnityEngine.InputSystem.InputControl;
                public TryGetChildControl<TControl extends UnityEngine.InputSystem.InputControl>($path: string): TControl;
                public GetChildControl($path: string): UnityEngine.InputSystem.InputControl;
                public GetChildControl<TControl extends UnityEngine.InputSystem.InputControl>($path: string): TControl;
                public ApplyParameterChanges(): void;
                public get_Item($path: string): UnityEngine.InputSystem.InputControl;
            }

            class InputControl<TValue> extends UnityEngine.InputSystem.InputControl {
                protected [__keep_incompatibility]: never;
                public get valueType(): System.Type;
                public get valueSizeInBytes(): number;
                public get value(): $Ref<TValue>;
                public ReadValue(): TValue;
                public ReadValueFromPreviousFrame(): TValue;
                public ReadDefaultValue(): TValue;
                public ReadUnprocessedValue(): TValue;
                public ProcessValue($value: TValue): TValue;
                public ProcessValue($value: $Ref<TValue>): void;
            }

            class InputControlExtensions {
                protected [__keep_incompatibility]: never;
                public static FindInParentChain<TControl extends UnityEngine.InputSystem.InputControl>(): TControl;
                public static IsPressed($buttonPressPoint?: number): boolean;
                public static IsActuated($threshold?: number): boolean;
                public static ReadValueAsObject(): any;
                public static ReadDefaultValueAsObject(): any;
                public static ReadValueFromEvent<TValue>($inputEvent: UnityEngine.InputSystem.LowLevel.InputEventPtr): TValue;
                public static ReadValueFromEvent<TValue>($inputEvent: UnityEngine.InputSystem.LowLevel.InputEventPtr, $value: $Out<TValue>): boolean;
                public static ReadValueFromEventAsObject($inputEvent: UnityEngine.InputSystem.LowLevel.InputEventPtr): any;
                public static ReadUnprocessedValueFromEvent<TValue>($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): TValue;
                public static ReadUnprocessedValueFromEvent<TValue>($inputEvent: UnityEngine.InputSystem.LowLevel.InputEventPtr, $value: $Out<TValue>): boolean;
                public static WriteValueFromObjectIntoEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr, $value: any): void;
                public static WriteValueIntoState<TValue, TState extends UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo>($value: TValue, $state: $Ref<TState>): void;
                public static WriteValueIntoEvent<TValue>($value: TValue, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                public static WriteValueIntoEvent<TValue>($value: TValue, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                public static CopyState<TState extends UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo>($state: $Out<TState>): void;
                public static CheckStateIsAtDefault(): boolean;
                public static CheckStateIsAtDefaultIgnoringNoise(): boolean;
                public static HasValueChangeInEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): boolean;
                public static ResetToDefaultStateInEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): boolean;
                public static QueueValueChange<TValue>($value: TValue, $time?: number): void;
                public static FindControlsRecursive<TControl extends UnityEngine.InputSystem.InputControl>($controls: System.Collections.Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>): void;
                public static EnumerateControls($flags: UnityEngine.InputSystem.InputControlExtensions.Enumerate, $device?: UnityEngine.InputSystem.InputDevice, $magnitudeThreshold?: number): UnityEngine.InputSystem.InputControlExtensions.InputEventControlCollection;
                public static EnumerateChangedControls($device?: UnityEngine.InputSystem.InputDevice, $magnitudeThreshold?: number): UnityEngine.InputSystem.InputControlExtensions.InputEventControlCollection;
                public static HasButtonPress($magnitude?: number, $buttonControlsOnly?: boolean): boolean;
                public static GetFirstButtonPressOrNull($magnitude?: number, $buttonControlsOnly?: boolean): UnityEngine.InputSystem.InputControl;
                public static GetAllButtonPresses($magnitude?: number, $buttonControlsOnly?: boolean): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControl>;
                public static Setup(): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                public static Setup($controlCount: number, $usageCount: number, $aliasCount: number): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;

                enum Enumerate {
                    IgnoreControlsInDefaultState = 1,
                    IgnoreControlsInCurrentState = 2,
                    IncludeSyntheticControls = 4,
                    IncludeNoisyControls = 8,
                    IncludeNonLeafControls = 16
                }

                class InputEventControlCollection implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControl>, System.Collections.IEnumerable {
                    protected [__keep_incompatibility]: never;
                    public get eventPtr(): UnityEngine.InputSystem.LowLevel.InputEventPtr;
                    public GetEnumerator(): UnityEngine.InputSystem.InputControlExtensions.InputEventControlEnumerator;
                }

                class InputEventControlEnumerator implements System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.InputControl>, System.Collections.IEnumerator, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get Current(): UnityEngine.InputSystem.InputControl;
                    public MoveNext(): boolean;
                    public Reset(): void;
                    public Dispose(): void;
                }

                class ControlBuilder {
                    protected [__keep_incompatibility]: never;
                    public get control(): UnityEngine.InputSystem.InputControl;
                    public At($device: UnityEngine.InputSystem.InputDevice, $index: number): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithParent($parent: UnityEngine.InputSystem.InputControl): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithName($name: string): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithDisplayName($displayName: string): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithShortDisplayName($shortDisplayName: string): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithLayout($layout: UnityEngine.InputSystem.Utilities.InternedString): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithUsages($startIndex: number, $count: number): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithAliases($startIndex: number, $count: number): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithChildren($startIndex: number, $count: number): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithStateBlock($stateBlock: UnityEngine.InputSystem.LowLevel.InputStateBlock): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithDefaultState($value: UnityEngine.InputSystem.Utilities.PrimitiveValue): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithMinAndMax($min: UnityEngine.InputSystem.Utilities.PrimitiveValue, $max: UnityEngine.InputSystem.Utilities.PrimitiveValue): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public WithProcessor<TProcessor extends UnityEngine.InputSystem.InputProcessor$1<TValue>, TValue>($processor: TProcessor): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public IsNoisy($value: boolean): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public IsSynthetic($value: boolean): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public DontReset($value: boolean): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public IsButton($value: boolean): UnityEngine.InputSystem.InputControlExtensions.ControlBuilder;
                    public Finish(): void;
                }

                class DeviceBuilder {
                    protected [__keep_incompatibility]: never;
                    public get device(): UnityEngine.InputSystem.InputDevice;
                    public WithName($name: string): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithDisplayName($displayName: string): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithShortDisplayName($shortDisplayName: string): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithLayout($layout: UnityEngine.InputSystem.Utilities.InternedString): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithChildren($startIndex: number, $count: number): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithStateBlock($stateBlock: UnityEngine.InputSystem.LowLevel.InputStateBlock): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public IsNoisy($value: boolean): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithControlUsage($controlIndex: number, $usage: UnityEngine.InputSystem.Utilities.InternedString, $control: UnityEngine.InputSystem.InputControl): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithControlAlias($controlIndex: number, $alias: UnityEngine.InputSystem.Utilities.InternedString): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithStateOffsetToControlIndexMap($map: System.Array$1<number>): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public WithControlTree($controlTreeNodes: System.Array$1<number>, $controlTreeIndicies: System.Array$1<number>): UnityEngine.InputSystem.InputControlExtensions.DeviceBuilder;
                    public Finish(): void;
                }
            }

            enum InputControlLayoutChange {
                Added = 0,
                Removed = 1,
                Replaced = 2
            }

            class InputControlList<TControl extends UnityEngine.InputSystem.InputControl> implements System.Collections.Generic.IEnumerable$1<TControl>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<TControl>, System.Collections.Generic.IReadOnlyCollection$1<TControl>, System.Collections.Generic.ICollection$1<TControl>, System.Collections.Generic.IReadOnlyList$1<TControl>, System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get Count(): number;
                public Capacity: number;
                public get IsReadOnly(): boolean;
                constructor($allocator: Unity.Collections.Allocator, $initialCapacity?: number);
                constructor($values: System.Collections.Generic.IEnumerable$1<TControl>, $allocator?: Unity.Collections.Allocator);
                constructor(...values: TControl[]);
                public Resize($size: number): void;
                public Add($item: TControl): void;
                public AddSlice<TList extends System.Collections.Generic.IReadOnlyList$1<TControl>>($list: TList, $count?: number, $destinationIndex?: number, $sourceIndex?: number): void;
                public AddRange($list: System.Collections.Generic.IEnumerable$1<TControl>, $count?: number, $destinationIndex?: number): void;
                public Remove($item: TControl): boolean;
                public RemoveAt($index: number): void;
                public CopyTo($array: System.Array$1<TControl>, $arrayIndex: number): void;
                public IndexOf($item: TControl): number;
                public IndexOf($item: TControl, $startIndex: number, $count?: number): number;
                public Insert($index: number, $item: TControl): void;
                public Clear(): void;
                public Contains($item: TControl): boolean;
                public Contains($item: TControl, $startIndex: number, $count?: number): boolean;
                public SwapElements($index1: number, $index2: number): void;
                public Sort<TCompare extends System.Collections.Generic.IComparer$1<TControl>>($startIndex: number, $count: number, $comparer: TCompare): void;
                public ToArray($dispose?: boolean): System.Array$1<TControl>;
                public Dispose(): void;
                public GetEnumerator(): System.Collections.Generic.IEnumerator$1<TControl>;
                public ToString(): string;
                public get_Item($index: number): TControl;
                public set_Item($index: number, value: TControl): void;
            }

            class InputControlPath {
                protected [__keep_incompatibility]: never;
                public static readonly Wildcard: string;
                public static readonly DoubleWildcard: string;
                public static readonly Separator: number;
                public static Combine($parent: UnityEngine.InputSystem.InputControl, $path: string): string;
                public static ToHumanReadableString($path: string, $options?: UnityEngine.InputSystem.InputControlPath.HumanReadableStringOptions, $control?: UnityEngine.InputSystem.InputControl): string;
                public static ToHumanReadableString($path: string, $deviceLayoutName: $Out<string>, $controlPath: $Out<string>, $options?: UnityEngine.InputSystem.InputControlPath.HumanReadableStringOptions, $control?: UnityEngine.InputSystem.InputControl): string;
                public static TryGetDeviceUsages($path: string): System.Array$1<string>;
                public static TryGetDeviceLayout($path: string): string;
                public static TryGetControlLayout($path: string): string;
                public static TryFindControl($control: UnityEngine.InputSystem.InputControl, $path: string, $indexInPath?: number): UnityEngine.InputSystem.InputControl;
                public static TryFindControls($control: UnityEngine.InputSystem.InputControl, $path: string, $indexInPath?: number): System.Array$1<UnityEngine.InputSystem.InputControl>;
                public static TryFindControls($control: UnityEngine.InputSystem.InputControl, $path: string, $matches: $Ref<UnityEngine.InputSystem.InputControlList$1<UnityEngine.InputSystem.InputControl>>, $indexInPath?: number): number;
                public static TryFindControl<TControl extends UnityEngine.InputSystem.InputControl>($control: UnityEngine.InputSystem.InputControl, $path: string, $indexInPath?: number): TControl;
                public static TryFindControls<TControl extends UnityEngine.InputSystem.InputControl>($control: UnityEngine.InputSystem.InputControl, $path: string, $indexInPath: number, $matches: $Ref<UnityEngine.InputSystem.InputControlList$1<TControl>>): number;
                public static TryFindChild($control: UnityEngine.InputSystem.InputControl, $path: string, $indexInPath?: number): UnityEngine.InputSystem.InputControl;
                public static TryFindChild<TControl extends UnityEngine.InputSystem.InputControl>($control: UnityEngine.InputSystem.InputControl, $path: string, $indexInPath?: number): TControl;
                public static Matches($expected: string, $control: UnityEngine.InputSystem.InputControl): boolean;
                public static MatchesPrefix($expected: string, $control: UnityEngine.InputSystem.InputControl): boolean;
                public static Parse($path: string): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControlPath.ParsedPathComponent>;

                enum HumanReadableStringOptions {
                    None = 0,
                    OmitDevice = 2,
                    UseShortNames = 4
                }

                class ParsedPathComponent {
                    protected [__keep_incompatibility]: never;
                    public get layout(): string;
                    public get usages(): System.Collections.Generic.IEnumerable$1<string>;
                    public get name(): string;
                    public get displayName(): string;
                    public Matches($control: UnityEngine.InputSystem.InputControl): boolean;
                }
            }

            class InputProcessor {
                protected [__keep_incompatibility]: never;
                public get cachingPolicy(): UnityEngine.InputSystem.InputProcessor.CachingPolicy;
                public ProcessAsObject($value: any, $control: UnityEngine.InputSystem.InputControl): any;

                enum CachingPolicy {
                    CacheResult = 0,
                    EvaluateOnEveryRead = 1
                }
            }

            class InputProcessor<TValue> extends UnityEngine.InputSystem.InputProcessor {
                protected [__keep_incompatibility]: never;
                public Process($value: TValue, $control: UnityEngine.InputSystem.InputControl): TValue;
                public ProcessAsObject($value: any, $control: UnityEngine.InputSystem.InputControl): any;
            }

            class Gamepad extends UnityEngine.InputSystem.InputDevice implements UnityEngine.InputSystem.Haptics.IHaptics, UnityEngine.InputSystem.Haptics.IDualMotorRumble {
                protected [__keep_incompatibility]: never;
                public get buttonWest(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get buttonNorth(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get buttonSouth(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get buttonEast(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get leftStickButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get rightStickButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get startButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get selectButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get dpad(): UnityEngine.InputSystem.Controls.DpadControl;
                public get leftShoulder(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get rightShoulder(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get leftStick(): UnityEngine.InputSystem.Controls.StickControl;
                public get rightStick(): UnityEngine.InputSystem.Controls.StickControl;
                public get leftTrigger(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get rightTrigger(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get aButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get bButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get xButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get yButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get triangleButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get squareButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get circleButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get crossButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public static get current(): UnityEngine.InputSystem.Gamepad;
                public static get all(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Gamepad>;
                constructor();
                public MakeCurrent(): void;
                public PauseHaptics(): void;
                public ResumeHaptics(): void;
                public ResetHaptics(): void;
                public SetMotorSpeeds($lowFrequency: number, $highFrequency: number): void;
                public get_Item($button: UnityEngine.InputSystem.LowLevel.GamepadButton): UnityEngine.InputSystem.Controls.ButtonControl;
            }

            class InputDevice extends UnityEngine.InputSystem.InputControl {
                protected [__keep_incompatibility]: never;
                public static readonly InvalidDeviceId: number;
                public get description(): UnityEngine.InputSystem.Layouts.InputDeviceDescription;
                public get enabled(): boolean;
                public get canRunInBackground(): boolean;
                public get added(): boolean;
                public get remote(): boolean;
                public get native(): boolean;
                public get updateBeforeRender(): boolean;
                public get deviceId(): number;
                public get lastUpdateTime(): number;
                public get wasUpdatedThisFrame(): boolean;
                public get allControls(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControl>;
                public get valueType(): System.Type;
                public get valueSizeInBytes(): number;
                public static get all(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice>;
                constructor();
                public MakeCurrent(): void;
                public ExecuteCommand<TCommand extends UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo>($command: $Ref<TCommand>): bigint;
            }

            enum InputDeviceChange {
                Added = 0,
                Removed = 1,
                Disconnected = 2,
                Reconnected = 3,
                Enabled = 4,
                Disabled = 5,
                UsageChanged = 6,
                ConfigurationChanged = 7,
                SoftReset = 8,
                HardReset = 9,
                Destroyed = 10
            }

            class Joystick extends UnityEngine.InputSystem.InputDevice {
                protected [__keep_incompatibility]: never;
                public get trigger(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get stick(): UnityEngine.InputSystem.Controls.StickControl;
                public get twist(): UnityEngine.InputSystem.Controls.AxisControl;
                public get hatswitch(): UnityEngine.InputSystem.Controls.Vector2Control;
                public static get current(): UnityEngine.InputSystem.Joystick;
                public static get all(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Joystick>;
                constructor();
                public MakeCurrent(): void;
            }

            enum Key {
                None = 0,
                Space = 1,
                Enter = 2,
                Tab = 3,
                Backquote = 4,
                Quote = 5,
                Semicolon = 6,
                Comma = 7,
                Period = 8,
                Slash = 9,
                Backslash = 10,
                LeftBracket = 11,
                RightBracket = 12,
                Minus = 13,
                Equals = 14,
                A = 15,
                B = 16,
                C = 17,
                D = 18,
                E = 19,
                F = 20,
                G = 21,
                H = 22,
                I = 23,
                J = 24,
                K = 25,
                L = 26,
                M = 27,
                N = 28,
                O = 29,
                P = 30,
                Q = 31,
                R = 32,
                S = 33,
                T = 34,
                U = 35,
                V = 36,
                W = 37,
                X = 38,
                Y = 39,
                Z = 40,
                Digit1 = 41,
                Digit2 = 42,
                Digit3 = 43,
                Digit4 = 44,
                Digit5 = 45,
                Digit6 = 46,
                Digit7 = 47,
                Digit8 = 48,
                Digit9 = 49,
                Digit0 = 50,
                LeftShift = 51,
                RightShift = 52,
                LeftAlt = 53,
                RightAlt = 54,
                AltGr = 54,
                LeftCtrl = 55,
                RightCtrl = 56,
                LeftMeta = 57,
                LeftWindows = 57,
                LeftApple = 57,
                LeftCommand = 57,
                RightMeta = 58,
                RightWindows = 58,
                RightApple = 58,
                RightCommand = 58,
                ContextMenu = 59,
                Escape = 60,
                LeftArrow = 61,
                RightArrow = 62,
                UpArrow = 63,
                DownArrow = 64,
                Backspace = 65,
                PageDown = 66,
                PageUp = 67,
                Home = 68,
                End = 69,
                Insert = 70,
                Delete = 71,
                CapsLock = 72,
                NumLock = 73,
                PrintScreen = 74,
                ScrollLock = 75,
                Pause = 76,
                NumpadEnter = 77,
                NumpadDivide = 78,
                NumpadMultiply = 79,
                NumpadPlus = 80,
                NumpadMinus = 81,
                NumpadPeriod = 82,
                NumpadEquals = 83,
                Numpad0 = 84,
                Numpad1 = 85,
                Numpad2 = 86,
                Numpad3 = 87,
                Numpad4 = 88,
                Numpad5 = 89,
                Numpad6 = 90,
                Numpad7 = 91,
                Numpad8 = 92,
                Numpad9 = 93,
                F1 = 94,
                F2 = 95,
                F3 = 96,
                F4 = 97,
                F5 = 98,
                F6 = 99,
                F7 = 100,
                F8 = 101,
                F9 = 102,
                F10 = 103,
                F11 = 104,
                F12 = 105,
                OEM1 = 106,
                OEM2 = 107,
                OEM3 = 108,
                OEM4 = 109,
                OEM5 = 110,
                IMESelected = 111,
                F13 = 112,
                F14 = 113,
                F15 = 114,
                F16 = 115,
                F17 = 116,
                F18 = 117,
                F19 = 118,
                F20 = 119,
                F21 = 120,
                F22 = 121,
                F23 = 122,
                F24 = 123,
                MediaPlayPause = 124,
                MediaRewind = 125,
                MediaForward = 126
            }

            class Keyboard extends UnityEngine.InputSystem.InputDevice implements UnityEngine.InputSystem.LowLevel.IEventPreProcessor, UnityEngine.InputSystem.LowLevel.ITextInputReceiver {
                protected [__keep_incompatibility]: never;
                public static readonly KeyCount: number;
                public get keyboardLayout(): string;
                public get anyKey(): UnityEngine.InputSystem.Controls.AnyKeyControl;
                public get spaceKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get enterKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get tabKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get backquoteKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get quoteKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get semicolonKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get commaKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get periodKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get slashKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get backslashKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftBracketKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightBracketKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get minusKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get equalsKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get aKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get bKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get cKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get dKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get eKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get fKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get gKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get hKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get iKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get jKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get kKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get lKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get mKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get nKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get oKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get pKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get qKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get sKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get tKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get uKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get vKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get wKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get xKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get yKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get zKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit1Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit2Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit3Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit4Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit5Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit6Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit7Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit8Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit9Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get digit0Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftShiftKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightShiftKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftAltKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightAltKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftCtrlKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightCtrlKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftMetaKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightMetaKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftWindowsKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightWindowsKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftAppleKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightAppleKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftCommandKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightCommandKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get contextMenuKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get escapeKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get leftArrowKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get rightArrowKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get upArrowKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get downArrowKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get backspaceKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get pageDownKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get pageUpKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get homeKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get endKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get insertKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get deleteKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get capsLockKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get scrollLockKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numLockKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get printScreenKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get pauseKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpadEnterKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpadDivideKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpadMultiplyKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpadMinusKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpadPlusKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpadPeriodKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpadEqualsKey(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad0Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad1Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad2Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad3Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad4Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad5Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad6Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad7Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad8Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get numpad9Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f1Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f2Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f3Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f4Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f5Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f6Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f7Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f8Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f9Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f10Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f11Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f12Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get oem1Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get oem2Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get oem3Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get oem4Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get oem5Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f13Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f14Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f15Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f16Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f17Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f18Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f19Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f20Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f21Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f22Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f23Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get f24Key(): UnityEngine.InputSystem.Controls.KeyControl;
                public get mediaPlayPause(): UnityEngine.InputSystem.Controls.KeyControl;
                public get mediaRewind(): UnityEngine.InputSystem.Controls.KeyControl;
                public get mediaForward(): UnityEngine.InputSystem.Controls.KeyControl;
                public get shiftKey(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get ctrlKey(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get altKey(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get imeSelected(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get allKeys(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Controls.KeyControl>;
                public static get current(): UnityEngine.InputSystem.Keyboard;
                constructor();
                public SetIMEEnabled($enabled: boolean): void;
                public SetIMECursorPosition($position: UnityEngine.Vector2): void;
                public MakeCurrent(): void;
                public OnTextInput($character: number): void;
                public FindKeyOnCurrentKeyboardLayout($displayName: string): UnityEngine.InputSystem.Controls.KeyControl;
                public OnIMECompositionChanged($compositionString: UnityEngine.InputSystem.LowLevel.IMECompositionString): void;
                public add_onTextInput(handler: System.Action$1<number>): void;
                public remove_onTextInput(handler: System.Action$1<number>): void;
                public add_onIMECompositionChange(handler: System.Action$1<UnityEngine.InputSystem.LowLevel.IMECompositionString>): void;
                public remove_onIMECompositionChange(handler: System.Action$1<UnityEngine.InputSystem.LowLevel.IMECompositionString>): void;
                public get_Item($key: UnityEngine.InputSystem.Key): UnityEngine.InputSystem.Controls.KeyControl;
            }

            class Mouse extends UnityEngine.InputSystem.Pointer {
                protected [__keep_incompatibility]: never;
                public get scroll(): UnityEngine.InputSystem.Controls.DeltaControl;
                public get leftButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get middleButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get rightButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get backButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get forwardButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get clickCount(): UnityEngine.InputSystem.Controls.IntegerControl;
                public static get current(): UnityEngine.InputSystem.Mouse;
                constructor();
                public MakeCurrent(): void;
                public WarpCursorPosition($position: UnityEngine.Vector2): void;
            }

            enum PenButton {
                Tip = 0,
                Eraser = 1,
                BarrelFirst = 2,
                Barrel1 = 2,
                BarrelSecond = 3,
                Barrel2 = 3,
                InRange = 4,
                BarrelThird = 5,
                Barrel3 = 5,
                BarrelFourth = 6,
                Barrel4 = 6
            }

            class Pen extends UnityEngine.InputSystem.Pointer {
                protected [__keep_incompatibility]: never;
                public get tip(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get eraser(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get firstBarrelButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get secondBarrelButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get thirdBarrelButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get fourthBarrelButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get inRange(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get tilt(): UnityEngine.InputSystem.Controls.Vector2Control;
                public get twist(): UnityEngine.InputSystem.Controls.AxisControl;
                public static get current(): UnityEngine.InputSystem.Pen;
                constructor();
                public MakeCurrent(): void;
                public get_Item($button: UnityEngine.InputSystem.PenButton): UnityEngine.InputSystem.Controls.ButtonControl;
            }

            class Pointer extends UnityEngine.InputSystem.InputDevice implements UnityEngine.InputSystem.LowLevel.IInputStateCallbackReceiver {
                protected [__keep_incompatibility]: never;
                public get position(): UnityEngine.InputSystem.Controls.Vector2Control;
                public get delta(): UnityEngine.InputSystem.Controls.DeltaControl;
                public get radius(): UnityEngine.InputSystem.Controls.Vector2Control;
                public get pressure(): UnityEngine.InputSystem.Controls.AxisControl;
                public get press(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get displayIndex(): UnityEngine.InputSystem.Controls.IntegerControl;
                public static get current(): UnityEngine.InputSystem.Pointer;
                constructor();
                public MakeCurrent(): void;
            }

            class InputRemoting implements System.IObservable$1<UnityEngine.InputSystem.InputRemoting.Message>, System.IObserver$1<UnityEngine.InputSystem.InputRemoting.Message> {
                protected [__keep_incompatibility]: never;
                public get sending(): boolean;
                public StartSending(): void;
                public StopSending(): void;
                public Subscribe($observer: System.IObserver$1<UnityEngine.InputSystem.InputRemoting.Message>): System.IDisposable;
                public RemoveRemoteDevices($participantId: number): void;

                enum MessageType {
                    Connect = 0,
                    Disconnect = 1,
                    NewLayout = 2,
                    NewDevice = 3,
                    NewEvents = 4,
                    RemoveDevice = 5,
                    RemoveLayout = 6,
                    ChangeUsages = 7,
                    StartSending = 8,
                    StopSending = 9
                }

                class Message {
                    protected [__keep_incompatibility]: never;
                    public participantId: number;
                    public type: UnityEngine.InputSystem.InputRemoting.MessageType;
                    public data: System.Array$1<number>;
                }
            }

            class Sensor extends UnityEngine.InputSystem.InputDevice {
                protected [__keep_incompatibility]: never;
                public samplingFrequency: number;
                constructor();
            }

            class Accelerometer extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get acceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                public static get current(): UnityEngine.InputSystem.Accelerometer;
                constructor();
                public MakeCurrent(): void;
            }

            class Gyroscope extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get angularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                public static get current(): UnityEngine.InputSystem.Gyroscope;
                constructor();
                public MakeCurrent(): void;
            }

            class GravitySensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get gravity(): UnityEngine.InputSystem.Controls.Vector3Control;
                public static get current(): UnityEngine.InputSystem.GravitySensor;
                constructor();
                public MakeCurrent(): void;
            }

            class AttitudeSensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get attitude(): UnityEngine.InputSystem.Controls.QuaternionControl;
                public static get current(): UnityEngine.InputSystem.AttitudeSensor;
                constructor();
                public MakeCurrent(): void;
            }

            class LinearAccelerationSensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get acceleration(): UnityEngine.InputSystem.Controls.Vector3Control;
                public static get current(): UnityEngine.InputSystem.LinearAccelerationSensor;
                constructor();
                public MakeCurrent(): void;
            }

            class MagneticFieldSensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get magneticField(): UnityEngine.InputSystem.Controls.Vector3Control;
                public static get current(): UnityEngine.InputSystem.MagneticFieldSensor;
                constructor();
                public MakeCurrent(): void;
            }

            class LightSensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get lightLevel(): UnityEngine.InputSystem.Controls.AxisControl;
                public static get current(): UnityEngine.InputSystem.LightSensor;
                constructor();
                public MakeCurrent(): void;
            }

            class PressureSensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get atmosphericPressure(): UnityEngine.InputSystem.Controls.AxisControl;
                public static get current(): UnityEngine.InputSystem.PressureSensor;
                constructor();
                public MakeCurrent(): void;
            }

            class ProximitySensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get distance(): UnityEngine.InputSystem.Controls.AxisControl;
                public static get current(): UnityEngine.InputSystem.ProximitySensor;
                constructor();
                public MakeCurrent(): void;
            }

            class HumiditySensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get relativeHumidity(): UnityEngine.InputSystem.Controls.AxisControl;
                public static get current(): UnityEngine.InputSystem.HumiditySensor;
                constructor();
                public MakeCurrent(): void;
            }

            class AmbientTemperatureSensor extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get ambientTemperature(): UnityEngine.InputSystem.Controls.AxisControl;
                public static get current(): UnityEngine.InputSystem.AmbientTemperatureSensor;
                constructor();
                public MakeCurrent(): void;
            }

            class StepCounter extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get stepCounter(): UnityEngine.InputSystem.Controls.IntegerControl;
                public static get current(): UnityEngine.InputSystem.StepCounter;
                constructor();
                public MakeCurrent(): void;
            }

            class HingeAngle extends UnityEngine.InputSystem.Sensor {
                protected [__keep_incompatibility]: never;
                public get angle(): UnityEngine.InputSystem.Controls.AxisControl;
                public static get current(): UnityEngine.InputSystem.HingeAngle;
                constructor();
                public MakeCurrent(): void;
            }

            enum TouchPhase {
                None = 0,
                Began = 1,
                Moved = 2,
                Ended = 3,
                Canceled = 4,
                Stationary = 5
            }

            class Touchscreen extends UnityEngine.InputSystem.Pointer implements UnityEngine.InputSystem.LowLevel.ICustomDeviceReset, UnityEngine.InputSystem.LowLevel.IEventMerger {
                protected [__keep_incompatibility]: never;
                public get primaryTouch(): UnityEngine.InputSystem.Controls.TouchControl;
                public get touches(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Controls.TouchControl>;
                public static get current(): UnityEngine.InputSystem.Touchscreen;
                constructor();
                public MakeCurrent(): void;
            }

            class TrackedDevice extends UnityEngine.InputSystem.InputDevice {
                protected [__keep_incompatibility]: never;
                public get trackingState(): UnityEngine.InputSystem.Controls.IntegerControl;
                public get isTracked(): UnityEngine.InputSystem.Controls.ButtonControl;
                public get devicePosition(): UnityEngine.InputSystem.Controls.Vector3Control;
                public get deviceRotation(): UnityEngine.InputSystem.Controls.QuaternionControl;
                constructor();
            }

            class InputExtensions {
                protected [__keep_incompatibility]: never;
                public static IsInProgress(): boolean;
                public static IsEndedOrCanceled(): boolean;
                public static IsActive(): boolean;
                public static IsModifierKey(): boolean;
                public static IsTextInputKey(): boolean;
            }

            class InputSettings extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public updateMode: UnityEngine.InputSystem.InputSettings.UpdateMode;
                public scrollDeltaBehavior: UnityEngine.InputSystem.InputSettings.ScrollDeltaBehavior;
                public compensateForScreenOrientation: boolean;
                public filterNoiseOnCurrent: boolean;
                public defaultDeadzoneMin: number;
                public defaultDeadzoneMax: number;
                public defaultButtonPressPoint: number;
                public buttonReleaseThreshold: number;
                public defaultTapTime: number;
                public defaultSlowTapTime: number;
                public defaultHoldTime: number;
                public tapRadius: number;
                public multiTapDelayTime: number;
                public backgroundBehavior: UnityEngine.InputSystem.InputSettings.BackgroundBehavior;
                public editorInputBehaviorInPlayMode: UnityEngine.InputSystem.InputSettings.EditorInputBehaviorInPlayMode;
                public inputActionPropertyDrawerMode: UnityEngine.InputSystem.InputSettings.InputActionPropertyDrawerMode;
                public maxEventBytesPerUpdate: number;
                public maxQueuedEventsPerUpdate: number;
                public supportedDevices: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<string>;
                public disableRedundantEventsMerging: boolean;
                public shortcutKeysConsumeInput: boolean;
                public get useIMGUIEditorForAssets(): boolean;
                public get iOS(): UnityEngine.InputSystem.InputSettings.iOSSettings;
                constructor();
                public SetInternalFeatureFlag($featureName: string, $enabled: boolean): void;

                enum UpdateMode {
                    ProcessEventsInDynamicUpdate = 1,
                    ProcessEventsInFixedUpdate = 2,
                    ProcessEventsManually = 3
                }

                enum ScrollDeltaBehavior {
                    UniformAcrossAllPlatforms = 0,
                    KeepPlatformSpecificInputRange = 1
                }

                enum BackgroundBehavior {
                    ResetAndDisableNonBackgroundDevices = 0,
                    ResetAndDisableAllDevices = 1,
                    IgnoreFocus = 2
                }

                enum EditorInputBehaviorInPlayMode {
                    PointersAndKeyboardsRespectGameViewFocus = 0,
                    AllDevicesRespectGameViewFocus = 1,
                    AllDeviceInputAlwaysGoesToGameView = 2
                }

                enum InputActionPropertyDrawerMode {
                    Compact = 0,
                    MultilineEffective = 1,
                    MultilineBoth = 2
                }

                class iOSSettings {
                    protected [__keep_incompatibility]: never;
                    public motionUsage: UnityEngine.InputSystem.iOS.PrivacyDataUsage;
                    constructor();
                }
            }

            class DefaultInputActions implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputAction>, UnityEngine.InputSystem.IInputActionCollection, System.Collections.IEnumerable, UnityEngine.InputSystem.IInputActionCollection2, System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get asset(): UnityEngine.InputSystem.InputActionAsset;
                public bindingMask: UnityEngine.InputSystem.InputBinding | null;
                public devices: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice> | null;
                public get controlSchemes(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControlScheme>;
                public get bindings(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputBinding>;
                public get Player(): UnityEngine.InputSystem.DefaultInputActions.PlayerActions;
                public get UI(): UnityEngine.InputSystem.DefaultInputActions.UIActions;
                public get KeyboardMouseScheme(): UnityEngine.InputSystem.InputControlScheme;
                public get GamepadScheme(): UnityEngine.InputSystem.InputControlScheme;
                public get TouchScheme(): UnityEngine.InputSystem.InputControlScheme;
                public get JoystickScheme(): UnityEngine.InputSystem.InputControlScheme;
                public get XRScheme(): UnityEngine.InputSystem.InputControlScheme;
                constructor();
                public Dispose(): void;
                public Contains($action: UnityEngine.InputSystem.InputAction): boolean;
                public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.InputAction>;
                public Enable(): void;
                public Disable(): void;
                public FindAction($actionNameOrId: string, $throwIfNotFound?: boolean): UnityEngine.InputSystem.InputAction;
                public FindBinding($bindingMask: UnityEngine.InputSystem.InputBinding, $action: $Out<UnityEngine.InputSystem.InputAction>): number;

                class PlayerActions {
                    protected [__keep_incompatibility]: never;
                    public get Move(): UnityEngine.InputSystem.InputAction;
                    public get Look(): UnityEngine.InputSystem.InputAction;
                    public get Fire(): UnityEngine.InputSystem.InputAction;
                    public get enabled(): boolean;
                    constructor($wrapper: UnityEngine.InputSystem.DefaultInputActions);
                    public Get(): UnityEngine.InputSystem.InputActionMap;
                    public Enable(): void;
                    public Disable(): void;
                    public SetCallbacks($instance: UnityEngine.InputSystem.DefaultInputActions.IPlayerActions): void;
                }

                class UIActions {
                    protected [__keep_incompatibility]: never;
                    public get Navigate(): UnityEngine.InputSystem.InputAction;
                    public get Submit(): UnityEngine.InputSystem.InputAction;
                    public get Cancel(): UnityEngine.InputSystem.InputAction;
                    public get Point(): UnityEngine.InputSystem.InputAction;
                    public get Click(): UnityEngine.InputSystem.InputAction;
                    public get ScrollWheel(): UnityEngine.InputSystem.InputAction;
                    public get MiddleClick(): UnityEngine.InputSystem.InputAction;
                    public get RightClick(): UnityEngine.InputSystem.InputAction;
                    public get TrackedDevicePosition(): UnityEngine.InputSystem.InputAction;
                    public get TrackedDeviceOrientation(): UnityEngine.InputSystem.InputAction;
                    public get enabled(): boolean;
                    constructor($wrapper: UnityEngine.InputSystem.DefaultInputActions);
                    public Get(): UnityEngine.InputSystem.InputActionMap;
                    public Enable(): void;
                    public Disable(): void;
                    public SetCallbacks($instance: UnityEngine.InputSystem.DefaultInputActions.IUIActions): void;
                }

                interface IPlayerActions {
                    OnMove($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnLook($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnFire($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                }

                interface IUIActions {
                    OnNavigate($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnSubmit($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnCancel($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnPoint($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnClick($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnScrollWheel($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnMiddleClick($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnRightClick($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnTrackedDevicePosition($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    OnTrackedDeviceOrientation($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                }
            }

            class InputValue {
                protected [__keep_incompatibility]: never;
                public get isPressed(): boolean;
                constructor();
                public Get(): any;
                public Get<TValue>(): TValue;
            }

            class PlayerInput extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                public static readonly DeviceLostMessage: string;
                public static readonly DeviceRegainedMessage: string;
                public static readonly ControlsChangedMessage: string;
                public get inputIsActive(): boolean;
                public get active(): boolean;
                public get playerIndex(): number;
                public get splitScreenIndex(): number;
                public actions: UnityEngine.InputSystem.InputActionAsset;
                public get currentControlScheme(): string;
                public defaultControlScheme: string;
                public neverAutoSwitchControlSchemes: boolean;
                public currentActionMap: UnityEngine.InputSystem.InputActionMap;
                public defaultActionMap: string;
                public notificationBehavior: UnityEngine.InputSystem.PlayerNotifications;
                public actionEvents: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.PlayerInput.ActionEvent>;
                public get deviceLostEvent(): UnityEngine.InputSystem.PlayerInput.DeviceLostEvent;
                public get deviceRegainedEvent(): UnityEngine.InputSystem.PlayerInput.DeviceRegainedEvent;
                public get controlsChangedEvent(): UnityEngine.InputSystem.PlayerInput.ControlsChangedEvent;
                public camera: UnityEngine.Camera;
                public uiInputModule: UnityEngine.InputSystem.UI.InputSystemUIInputModule;
                public get user(): UnityEngine.InputSystem.Users.InputUser;
                public get devices(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice>;
                public get hasMissingRequiredDevices(): boolean;
                public static get all(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.PlayerInput>;
                public static get isSinglePlayer(): boolean;
                constructor();
                public GetDevice<TDevice extends UnityEngine.InputSystem.InputDevice>(): TDevice;
                public ActivateInput(): void;
                public DeactivateInput(): void;
                public PassivateInput(): void;
                public SwitchCurrentControlScheme(...devices: UnityEngine.InputSystem.InputDevice[]): boolean;
                public SwitchCurrentControlScheme($controlScheme: string, ...devices: UnityEngine.InputSystem.InputDevice[]): void;
                public SwitchCurrentActionMap($mapNameOrId: string): void;
                public static GetPlayerByIndex($playerIndex: number): UnityEngine.InputSystem.PlayerInput;
                public static FindFirstPairedToDevice($device: UnityEngine.InputSystem.InputDevice): UnityEngine.InputSystem.PlayerInput;
                public static Instantiate($prefab: UnityEngine.GameObject, $playerIndex?: number, $controlScheme?: string, $splitScreenIndex?: number, $pairWithDevice?: UnityEngine.InputSystem.InputDevice): UnityEngine.InputSystem.PlayerInput;
                public static Instantiate($prefab: UnityEngine.GameObject, $playerIndex?: number, $controlScheme?: string, $splitScreenIndex?: number, ...pairWithDevices: UnityEngine.InputSystem.InputDevice[]): UnityEngine.InputSystem.PlayerInput;
                public DebugLogAction($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                public add_onActionTriggered(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public remove_onActionTriggered(handler: System.Action$1<UnityEngine.InputSystem.InputAction.CallbackContext>): void;
                public add_onDeviceLost(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public remove_onDeviceLost(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public add_onDeviceRegained(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public remove_onDeviceRegained(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public add_onControlsChanged(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public remove_onControlsChanged(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;

                class ActionEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.InputSystem.InputAction.CallbackContext> {
                    protected [__keep_incompatibility]: never;
                    public get actionId(): string;
                    public get actionName(): string;
                    constructor();
                    constructor($action: UnityEngine.InputSystem.InputAction);
                    constructor($actionGUID: System.Guid, $name?: string);
                }

                class DeviceLostEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.InputSystem.PlayerInput> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class DeviceRegainedEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.InputSystem.PlayerInput> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class ControlsChangedEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.InputSystem.PlayerInput> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }
            }

            class PlayerInputManager extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                public static readonly PlayerJoinedMessage: string;
                public static readonly PlayerLeftMessage: string;
                public splitScreen: boolean;
                public get maintainAspectRatioInSplitScreen(): boolean;
                public get fixedNumberOfSplitScreens(): number;
                public get splitScreenArea(): UnityEngine.Rect;
                public get playerCount(): number;
                public get maxPlayerCount(): number;
                public get joiningEnabled(): boolean;
                public joinBehavior: UnityEngine.InputSystem.PlayerJoinBehavior;
                public joinAction: UnityEngine.InputSystem.InputActionProperty;
                public notificationBehavior: UnityEngine.InputSystem.PlayerNotifications;
                public get playerJoinedEvent(): UnityEngine.InputSystem.PlayerInputManager.PlayerJoinedEvent;
                public get playerLeftEvent(): UnityEngine.InputSystem.PlayerInputManager.PlayerLeftEvent;
                public playerPrefab: UnityEngine.GameObject;
                public static get instance(): UnityEngine.InputSystem.PlayerInputManager;
                constructor();
                public EnableJoining(): void;
                public DisableJoining(): void;
                public JoinPlayerFromAction($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                public JoinPlayerFromActionIfNotAlreadyJoined($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                public JoinPlayer($playerIndex?: number, $splitScreenIndex?: number, $controlScheme?: string, $pairWithDevice?: UnityEngine.InputSystem.InputDevice): UnityEngine.InputSystem.PlayerInput;
                public JoinPlayer($playerIndex?: number, $splitScreenIndex?: number, $controlScheme?: string, ...pairWithDevices: UnityEngine.InputSystem.InputDevice[]): UnityEngine.InputSystem.PlayerInput;
                public add_onPlayerJoined(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public remove_onPlayerJoined(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public add_onPlayerLeft(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;
                public remove_onPlayerLeft(handler: System.Action$1<UnityEngine.InputSystem.PlayerInput>): void;

                class PlayerJoinedEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.InputSystem.PlayerInput> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class PlayerLeftEvent extends UnityEngine.Events.UnityEvent$1<UnityEngine.InputSystem.PlayerInput> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }
            }

            enum PlayerJoinBehavior {
                JoinPlayersWhenButtonIsPressed = 0,
                JoinPlayersWhenJoinActionIsTriggered = 1,
                JoinPlayersManually = 2
            }

            enum PlayerNotifications {
                SendMessages = 0,
                BroadcastMessages = 1,
                InvokeUnityEvents = 2,
                InvokeCSharpEvents = 3
            }

            class AssetDatabaseUtils {
                protected [__keep_incompatibility]: never;
                public static ExternalDeleteFileOrDirectory($path: string): void;
                public static ExternalMoveFileOrDirectory($source: string, $dest: string): void;
                public static CreateDirectory(): string;
                public static CreateAsset<T extends UnityEngine.Object>($directoryPath: string, $filename?: string, $content?: string): T;
                public static CreateAsset<T extends UnityEngine.Object>($path?: string, $content?: string): T;
                public static Restore(): void;
                public static RandomDirectoryPath(): string;
            }

            class InputTestFixture {
                protected [__keep_incompatibility]: never;
                public currentTime: number;
                constructor();
                public Setup(): void;
                public TearDown(): void;
                public static AssertButtonPress<TState extends UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo>($device: UnityEngine.InputSystem.InputDevice, $state: TState, ...buttons: UnityEngine.InputSystem.Controls.ButtonControl[]): void;
                public static AssertStickValues($stick: UnityEngine.InputSystem.Controls.StickControl, $stickValue: UnityEngine.Vector2, $up: number, $down: number, $left: number, $right: number): void;
                public SetKeyboardLayout($name: string, $keyboard?: UnityEngine.InputSystem.Keyboard): void;
                public SetKeyInfo($key: UnityEngine.InputSystem.Key, $displayName: string, $scanCode?: number): void;
                public Started($action: UnityEngine.InputSystem.InputAction, $control?: UnityEngine.InputSystem.InputControl, $time?: number | null, $value?: any): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Started<TValue>($action: UnityEngine.InputSystem.InputAction, $control: UnityEngine.InputSystem.InputControl$1<TValue>, $value: TValue, $time?: number | null): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Performed($action: UnityEngine.InputSystem.InputAction, $control?: UnityEngine.InputSystem.InputControl, $time?: number | null, $duration?: number | null, $value?: any): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Performed<TValue>($action: UnityEngine.InputSystem.InputAction, $control: UnityEngine.InputSystem.InputControl$1<TValue>, $value: TValue, $time?: number | null, $duration?: number | null): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Canceled($action: UnityEngine.InputSystem.InputAction, $control?: UnityEngine.InputSystem.InputControl, $time?: number | null, $duration?: number | null, $value?: any): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Canceled<TValue>($action: UnityEngine.InputSystem.InputAction, $control: UnityEngine.InputSystem.InputControl$1<TValue>, $value: TValue, $time?: number | null, $duration?: number | null): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Started<TInteraction extends UnityEngine.InputSystem.IInputInteraction>($action: UnityEngine.InputSystem.InputAction, $control?: UnityEngine.InputSystem.InputControl, $value?: any, $time?: number | null): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Performed<TInteraction extends UnityEngine.InputSystem.IInputInteraction>($action: UnityEngine.InputSystem.InputAction, $control?: UnityEngine.InputSystem.InputControl, $value?: any, $time?: number | null, $duration?: number | null): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Canceled<TInteraction extends UnityEngine.InputSystem.IInputInteraction>($action: UnityEngine.InputSystem.InputAction, $control?: UnityEngine.InputSystem.InputControl, $value?: any, $time?: number | null, $duration?: number | null): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                public Press($button: UnityEngine.InputSystem.Controls.ButtonControl, $time?: number, $timeOffset?: number, $queueEventOnly?: boolean): void;
                public Release($button: UnityEngine.InputSystem.Controls.ButtonControl, $time?: number, $timeOffset?: number, $queueEventOnly?: boolean): void;
                public PressAndRelease($button: UnityEngine.InputSystem.Controls.ButtonControl, $time?: number, $timeOffset?: number, $queueEventOnly?: boolean): void;
                public Click($button: UnityEngine.InputSystem.Controls.ButtonControl, $time?: number, $timeOffset?: number, $queueEventOnly?: boolean): void;
                public Set<TValue>($device: UnityEngine.InputSystem.InputDevice, $path: string, $state: TValue, $time?: number, $timeOffset?: number, $queueEventOnly?: boolean): void;
                public Set<TValue>($control: UnityEngine.InputSystem.InputControl$1<TValue>, $state: TValue, $time?: number, $timeOffset?: number, $queueEventOnly?: boolean): void;
                public Move($positionControl: UnityEngine.InputSystem.InputControl$1<UnityEngine.Vector2>, $position: UnityEngine.Vector2, $delta?: UnityEngine.Vector2 | null, $time?: number, $timeOffset?: number, $queueEventOnly?: boolean): void;
                public BeginTouch($touchId: number, $position: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number, $displayIndex?: number): void;
                public BeginTouch($touchId: number, $position: UnityEngine.Vector2, $pressure: number, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number): void;
                public MoveTouch($touchId: number, $position: UnityEngine.Vector2, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number): void;
                public MoveTouch($touchId: number, $position: UnityEngine.Vector2, $pressure: number, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number): void;
                public EndTouch($touchId: number, $position: UnityEngine.Vector2, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number, $displayIndex?: number): void;
                public EndTouch($touchId: number, $position: UnityEngine.Vector2, $pressure: number, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number): void;
                public CancelTouch($touchId: number, $position: UnityEngine.Vector2, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number): void;
                public CancelTouch($touchId: number, $position: UnityEngine.Vector2, $pressure: number, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number): void;
                public SetTouch($touchId: number, $phase: UnityEngine.InputSystem.TouchPhase, $position: UnityEngine.Vector2, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number): void;
                public SetTouch($touchId: number, $phase: UnityEngine.InputSystem.TouchPhase, $position: UnityEngine.Vector2, $pressure: number, $delta?: UnityEngine.Vector2, $queueEventOnly?: boolean, $screen?: UnityEngine.InputSystem.Touchscreen, $time?: number, $timeOffset?: number, $displayIndex?: number): void;
                public Trigger<TValue>($action: UnityEngine.InputSystem.InputAction, $control: UnityEngine.InputSystem.InputControl$1<TValue>, $value: TValue): void;
                public Trigger($action: UnityEngine.InputSystem.InputAction): void;

                class ActionConstraint extends NUnit.Framework.Constraints.Constraint {
                    protected [__keep_incompatibility]: never;
                    public phase: UnityEngine.InputSystem.InputActionPhase;
                    public time: number | null;
                    public duration: number | null;
                    public action: UnityEngine.InputSystem.InputAction;
                    public control: UnityEngine.InputSystem.InputControl;
                    public value: any;
                    public interaction: System.Type;
                    constructor($phase: UnityEngine.InputSystem.InputActionPhase, $action: UnityEngine.InputSystem.InputAction, $control: UnityEngine.InputSystem.InputControl, $value?: any, $interaction?: System.Type, $time?: number | null, $duration?: number | null);
                    public ApplyTo($actual: any): NUnit.Framework.Constraints.ConstraintResult;
                    public AndThen($constraint: UnityEngine.InputSystem.InputTestFixture.ActionConstraint): UnityEngine.InputSystem.InputTestFixture.ActionConstraint;
                }
            }

        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Android {
                class AndroidGamepad extends UnityEngine.InputSystem.Gamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidGamepadWithDpadAxes extends UnityEngine.InputSystem.Android.AndroidGamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidGamepadWithDpadButtons extends UnityEngine.InputSystem.Android.AndroidGamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidJoystick extends UnityEngine.InputSystem.Joystick {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class DualShock4GamepadAndroid extends UnityEngine.InputSystem.DualShock.DualShockGamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class XboxOneGamepadAndroid extends UnityEngine.InputSystem.XInput.XInputController {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidAccelerometer extends UnityEngine.InputSystem.Accelerometer {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidMagneticFieldSensor extends UnityEngine.InputSystem.MagneticFieldSensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidGyroscope extends UnityEngine.InputSystem.Gyroscope {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidLightSensor extends UnityEngine.InputSystem.LightSensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidPressureSensor extends UnityEngine.InputSystem.PressureSensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidProximity extends UnityEngine.InputSystem.ProximitySensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidGravitySensor extends UnityEngine.InputSystem.GravitySensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidLinearAccelerationSensor extends UnityEngine.InputSystem.LinearAccelerationSensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidRotationVector extends UnityEngine.InputSystem.AttitudeSensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidRelativeHumidity extends UnityEngine.InputSystem.HumiditySensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidAmbientTemperature extends UnityEngine.InputSystem.AmbientTemperatureSensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidGameRotationVector extends UnityEngine.InputSystem.AttitudeSensor {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidStepCounter extends UnityEngine.InputSystem.StepCounter {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AndroidHingeAngle extends UnityEngine.InputSystem.HingeAngle {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Android {
                namespace LowLevel {
                    enum AndroidAxis {
                        X = 0,
                        Y = 1,
                        Pressure = 2,
                        Size = 3,
                        TouchMajor = 4,
                        TouchMinor = 5,
                        ToolMajor = 6,
                        ToolMinor = 7,
                        Orientation = 8,
                        Vscroll = 9,
                        Hscroll = 10,
                        Z = 11,
                        Rx = 12,
                        Ry = 13,
                        Rz = 14,
                        HatX = 15,
                        HatY = 16,
                        Ltrigger = 17,
                        Rtrigger = 18,
                        Throttle = 19,
                        Rudder = 20,
                        Wheel = 21,
                        Gas = 22,
                        Brake = 23,
                        Distance = 24,
                        Tilt = 25,
                        Generic1 = 32,
                        Generic2 = 33,
                        Generic3 = 34,
                        Generic4 = 35,
                        Generic5 = 36,
                        Generic6 = 37,
                        Generic7 = 38,
                        Generic8 = 39,
                        Generic9 = 40,
                        Generic10 = 41,
                        Generic11 = 42,
                        Generic12 = 43,
                        Generic13 = 44,
                        Generic14 = 45,
                        Generic15 = 46,
                        Generic16 = 47
                    }

                    class AndroidGameControllerState implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                        protected [__keep_incompatibility]: never;
                        public static readonly MaxAxes: number;
                        public static readonly MaxButtons: number;
                        public static kFormat: UnityEngine.InputSystem.Utilities.FourCC;
                        public buttons: UnityEngine.InputSystem.Android.LowLevel.AndroidGameControllerState.<buttons>e__FixedBuffer;
                        public axis: UnityEngine.InputSystem.Android.LowLevel.AndroidGameControllerState.<axis>e__FixedBuffer;
                        public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                        public WithButton($code: UnityEngine.InputSystem.Android.LowLevel.AndroidKeyCode, $value?: boolean): UnityEngine.InputSystem.Android.LowLevel.AndroidGameControllerState;
                        public WithAxis($axis: UnityEngine.InputSystem.Android.LowLevel.AndroidAxis, $value: number): UnityEngine.InputSystem.Android.LowLevel.AndroidGameControllerState;

                        class Variants {
                            protected [__keep_incompatibility]: never;
                            public static readonly Gamepad: string;
                            public static readonly Joystick: string;
                            public static readonly DPadAxes: string;
                            public static readonly DPadButtons: string;
                            constructor();
                        }
                    }

                    enum AndroidKeyCode {
                        Unknown = 0,
                        SoftLeft = 1,
                        SoftRight = 2,
                        Home = 3,
                        Back = 4,
                        Call = 5,
                        Endcall = 6,
                        Alpha0 = 7,
                        Alpha1 = 8,
                        Alpha2 = 9,
                        Alpha3 = 10,
                        Alpha4 = 11,
                        Alpha5 = 12,
                        Alpha6 = 13,
                        Alpha7 = 14,
                        Alpha8 = 15,
                        Alpha9 = 16,
                        Star = 17,
                        Pound = 18,
                        DpadUp = 19,
                        DpadDown = 20,
                        DpadLeft = 21,
                        DpadRight = 22,
                        DpadCenter = 23,
                        VolumeUp = 24,
                        VolumeDown = 25,
                        Power = 26,
                        Camera = 27,
                        Clear = 28,
                        A = 29,
                        B = 30,
                        C = 31,
                        D = 32,
                        E = 33,
                        F = 34,
                        G = 35,
                        H = 36,
                        I = 37,
                        J = 38,
                        K = 39,
                        L = 40,
                        M = 41,
                        N = 42,
                        O = 43,
                        P = 44,
                        Q = 45,
                        R = 46,
                        S = 47,
                        T = 48,
                        U = 49,
                        V = 50,
                        W = 51,
                        X = 52,
                        Y = 53,
                        Z = 54,
                        Comma = 55,
                        Period = 56,
                        AltLeft = 57,
                        AltRight = 58,
                        ShiftLeft = 59,
                        ShiftRight = 60,
                        Tab = 61,
                        Space = 62,
                        Sym = 63,
                        Explorer = 64,
                        Envelope = 65,
                        Enter = 66,
                        Del = 67,
                        Grave = 68,
                        Minus = 69,
                        Equals = 70,
                        LeftBracket = 71,
                        RightBracket = 72,
                        Backslash = 73,
                        Semicolon = 74,
                        Apostrophe = 75,
                        Slash = 76,
                        At = 77,
                        Num = 78,
                        Headsethook = 79,
                        Focus = 80,
                        Plus = 81,
                        Menu = 82,
                        Notification = 83,
                        Search = 84,
                        MediaPlayPause = 85,
                        MediaStop = 86,
                        MediaNext = 87,
                        MediaPrevious = 88,
                        MediaRewind = 89,
                        MediaFastForward = 90,
                        Mute = 91,
                        PageUp = 92,
                        PageDown = 93,
                        Pictsymbols = 94,
                        SwitchCharset = 95,
                        ButtonA = 96,
                        ButtonB = 97,
                        ButtonC = 98,
                        ButtonX = 99,
                        ButtonY = 100,
                        ButtonZ = 101,
                        ButtonL1 = 102,
                        ButtonR1 = 103,
                        ButtonL2 = 104,
                        ButtonR2 = 105,
                        ButtonThumbl = 106,
                        ButtonThumbr = 107,
                        ButtonStart = 108,
                        ButtonSelect = 109,
                        ButtonMode = 110,
                        Escape = 111,
                        ForwardDel = 112,
                        CtrlLeft = 113,
                        CtrlRight = 114,
                        CapsLock = 115,
                        ScrollLock = 116,
                        MetaLeft = 117,
                        MetaRight = 118,
                        Function = 119,
                        Sysrq = 120,
                        Break = 121,
                        MoveHome = 122,
                        MoveEnd = 123,
                        Insert = 124,
                        Forward = 125,
                        MediaPlay = 126,
                        MediaPause = 127,
                        MediaClose = 128,
                        MediaEject = 129,
                        MediaRecord = 130,
                        F1 = 131,
                        F2 = 132,
                        F3 = 133,
                        F4 = 134,
                        F5 = 135,
                        F6 = 136,
                        F7 = 137,
                        F8 = 138,
                        F9 = 139,
                        F10 = 140,
                        F11 = 141,
                        F12 = 142,
                        NumLock = 143,
                        Numpad0 = 144,
                        Numpad1 = 145,
                        Numpad2 = 146,
                        Numpad3 = 147,
                        Numpad4 = 148,
                        Numpad5 = 149,
                        Numpad6 = 150,
                        Numpad7 = 151,
                        Numpad8 = 152,
                        Numpad9 = 153,
                        NumpadDivide = 154,
                        NumpadMultiply = 155,
                        NumpadSubtract = 156,
                        NumpadAdd = 157,
                        NumpadDot = 158,
                        NumpadComma = 159,
                        NumpadEnter = 160,
                        NumpadEquals = 161,
                        NumpadLeftParen = 162,
                        NumpadRightParen = 163,
                        VolumeMute = 164,
                        Info = 165,
                        ChannelUp = 166,
                        ChannelDown = 167,
                        ZoomIn = 168,
                        ZoomOut = 169,
                        Tv = 170,
                        Window = 171,
                        Guide = 172,
                        Dvr = 173,
                        Bookmark = 174,
                        Captions = 175,
                        Settings = 176,
                        TvPower = 177,
                        TvInput = 178,
                        StbPower = 179,
                        StbInput = 180,
                        AvrPower = 181,
                        AvrInput = 182,
                        ProgRed = 183,
                        ProgGreen = 184,
                        ProgYellow = 185,
                        ProgBlue = 186,
                        AppSwitch = 187,
                        Button1 = 188,
                        Button2 = 189,
                        Button3 = 190,
                        Button4 = 191,
                        Button5 = 192,
                        Button6 = 193,
                        Button7 = 194,
                        Button8 = 195,
                        Button9 = 196,
                        Button10 = 197,
                        Button11 = 198,
                        Button12 = 199,
                        Button13 = 200,
                        Button14 = 201,
                        Button15 = 202,
                        Button16 = 203,
                        LanguageSwitch = 204,
                        MannerMode = 205,
                        Mode3D = 206,
                        Contacts = 207,
                        Calendar = 208,
                        Music = 209,
                        Calculator = 210,
                        ZenkakuHankaku = 211,
                        Eisu = 212,
                        Muhenkan = 213,
                        Henkan = 214,
                        KatakanaHiragana = 215,
                        Yen = 216,
                        Ro = 217,
                        Kana = 218,
                        Assist = 219
                    }

                }
            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Composites {
                class AxisComposite extends UnityEngine.InputSystem.InputBindingComposite$1<number> {
                    protected [__keep_incompatibility]: never;
                    public negative: number;
                    public positive: number;
                    public minValue: number;
                    public maxValue: number;
                    public whichSideWins: UnityEngine.InputSystem.Composites.AxisComposite.WhichSideWins;
                    public get midPoint(): number;
                    constructor();
                    public ReadValue($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;
                    public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;

                    enum WhichSideWins {
                        Neither = 0,
                        Positive = 1,
                        Negative = 2
                    }
                }

                class ButtonWithOneModifier extends UnityEngine.InputSystem.InputBindingComposite$1<number> {
                    protected [__keep_incompatibility]: never;
                    public modifier: number;
                    public button: number;
                    public overrideModifiersNeedToBePressedFirst: boolean;
                    public modifiersOrder: UnityEngine.InputSystem.Composites.ButtonWithOneModifier.ModifiersOrder;
                    constructor();
                    public ReadValue($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;
                    public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;

                    enum ModifiersOrder {
                        Default = 0,
                        Ordered = 1,
                        Unordered = 2
                    }
                }

                class ButtonWithTwoModifiers extends UnityEngine.InputSystem.InputBindingComposite$1<number> {
                    protected [__keep_incompatibility]: never;
                    public modifier1: number;
                    public modifier2: number;
                    public button: number;
                    public overrideModifiersNeedToBePressedFirst: boolean;
                    public modifiersOrder: UnityEngine.InputSystem.Composites.ButtonWithTwoModifiers.ModifiersOrder;
                    constructor();
                    public ReadValue($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;
                    public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;

                    enum ModifiersOrder {
                        Default = 0,
                        Ordered = 1,
                        Unordered = 2
                    }
                }

                class OneModifierComposite extends UnityEngine.InputSystem.InputBindingComposite {
                    protected [__keep_incompatibility]: never;
                    public modifier: number;
                    public binding: number;
                    public overrideModifiersNeedToBePressedFirst: boolean;
                    public modifiersOrder: UnityEngine.InputSystem.Composites.OneModifierComposite.ModifiersOrder;
                    public get valueType(): System.Type;
                    public get valueSizeInBytes(): number;
                    constructor();
                    public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;
                    public ReadValueAsObject($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): any;

                    enum ModifiersOrder {
                        Default = 0,
                        Ordered = 1,
                        Unordered = 2
                    }
                }

                class TwoModifiersComposite extends UnityEngine.InputSystem.InputBindingComposite {
                    protected [__keep_incompatibility]: never;
                    public modifier1: number;
                    public modifier2: number;
                    public binding: number;
                    public overrideModifiersNeedToBePressedFirst: boolean;
                    public modifiersOrder: UnityEngine.InputSystem.Composites.TwoModifiersComposite.ModifiersOrder;
                    public get valueType(): System.Type;
                    public get valueSizeInBytes(): number;
                    constructor();
                    public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;
                    public ReadValueAsObject($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): any;

                    enum ModifiersOrder {
                        Default = 0,
                        Ordered = 1,
                        Unordered = 2
                    }
                }

                class Vector2Composite extends UnityEngine.InputSystem.InputBindingComposite$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    public up: number;
                    public down: number;
                    public left: number;
                    public right: number;
                    public normalize: boolean;
                    public mode: UnityEngine.InputSystem.Composites.Vector2Composite.Mode;
                    constructor();
                    public ReadValue($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): UnityEngine.Vector2;
                    public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;

                    enum Mode {
                        DigitalNormalized = 0,
                        Digital = 1,
                        Analog = 2
                    }
                }

                class Vector3Composite extends UnityEngine.InputSystem.InputBindingComposite$1<UnityEngine.Vector3> {
                    protected [__keep_incompatibility]: never;
                    public up: number;
                    public down: number;
                    public left: number;
                    public right: number;
                    public forward: number;
                    public backward: number;
                    public mode: UnityEngine.InputSystem.Composites.Vector3Composite.Mode;
                    constructor();
                    public ReadValue($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): UnityEngine.Vector3;
                    public EvaluateMagnitude($context: $Ref<UnityEngine.InputSystem.InputBindingCompositeContext>): number;

                    enum Mode {
                        Analog = 0,
                        DigitalNormalized = 1,
                        Digital = 2
                    }
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Controls {
                class AnyKeyControl extends UnityEngine.InputSystem.Controls.ButtonControl {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class AxisControl extends UnityEngine.InputSystem.InputControl$1<number> {
                    protected [__keep_incompatibility]: never;
                    public clamp: UnityEngine.InputSystem.Controls.AxisControl.Clamp;
                    public clampMin: number;
                    public clampMax: number;
                    public clampConstant: number;
                    public invert: boolean;
                    public normalize: boolean;
                    public normalizeMin: number;
                    public normalizeMax: number;
                    public normalizeZero: number;
                    public scale: boolean;
                    public scaleFactor: number;
                    constructor();

                    enum Clamp {
                        None = 0,
                        BeforeNormalize = 1,
                        AfterNormalize = 2,
                        ToConstantBeforeNormalize = 3
                    }
                }

                class ButtonControl extends UnityEngine.InputSystem.Controls.AxisControl {
                    protected [__keep_incompatibility]: never;
                    public pressPoint: number;
                    public get pressPointOrDefault(): number;
                    public get isPressed(): boolean;
                    public get wasPressedThisFrame(): boolean;
                    public get wasReleasedThisFrame(): boolean;
                    constructor();
                    public IsValueConsideredPressed($value: number): boolean;
                }

                class DeltaControl extends UnityEngine.InputSystem.Controls.Vector2Control {
                    protected [__keep_incompatibility]: never;
                    public up: UnityEngine.InputSystem.Controls.AxisControl;
                    public down: UnityEngine.InputSystem.Controls.AxisControl;
                    public left: UnityEngine.InputSystem.Controls.AxisControl;
                    public right: UnityEngine.InputSystem.Controls.AxisControl;
                    constructor();
                }

                class DiscreteButtonControl extends UnityEngine.InputSystem.Controls.ButtonControl {
                    protected [__keep_incompatibility]: never;
                    public minValue: number;
                    public maxValue: number;
                    public wrapAtValue: number;
                    public nullValue: number;
                    public writeMode: UnityEngine.InputSystem.Controls.DiscreteButtonControl.WriteMode;
                    constructor();

                    enum WriteMode {
                        WriteDisabled = 0,
                        WriteNullAndMaxValue = 1
                    }
                }

                class DoubleControl extends UnityEngine.InputSystem.InputControl$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class DpadControl extends UnityEngine.InputSystem.Controls.Vector2Control {
                    protected [__keep_incompatibility]: never;
                    public up: UnityEngine.InputSystem.Controls.ButtonControl;
                    public down: UnityEngine.InputSystem.Controls.ButtonControl;
                    public left: UnityEngine.InputSystem.Controls.ButtonControl;
                    public right: UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                    public static MakeDpadVector($up: boolean, $down: boolean, $left: boolean, $right: boolean, $normalize?: boolean): UnityEngine.Vector2;
                    public static MakeDpadVector($up: number, $down: number, $left: number, $right: number): UnityEngine.Vector2;

                    class DpadAxisControl extends UnityEngine.InputSystem.Controls.AxisControl {
                        protected [__keep_incompatibility]: never;
                        public component: number;
                        constructor();
                    }
                }

                class IntegerControl extends UnityEngine.InputSystem.InputControl$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class KeyControl extends UnityEngine.InputSystem.Controls.ButtonControl {
                    protected [__keep_incompatibility]: never;
                    public keyCode: UnityEngine.InputSystem.Key;
                    public get scanCode(): number;
                    constructor();
                }

                class QuaternionControl extends UnityEngine.InputSystem.InputControl$1<UnityEngine.Quaternion> {
                    protected [__keep_incompatibility]: never;
                    public x: UnityEngine.InputSystem.Controls.AxisControl;
                    public y: UnityEngine.InputSystem.Controls.AxisControl;
                    public z: UnityEngine.InputSystem.Controls.AxisControl;
                    public w: UnityEngine.InputSystem.Controls.AxisControl;
                    constructor();
                }

                class StickControl extends UnityEngine.InputSystem.Controls.Vector2Control {
                    protected [__keep_incompatibility]: never;
                    public up: UnityEngine.InputSystem.Controls.ButtonControl;
                    public down: UnityEngine.InputSystem.Controls.ButtonControl;
                    public left: UnityEngine.InputSystem.Controls.ButtonControl;
                    public right: UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                }

                class TouchControl extends UnityEngine.InputSystem.InputControl$1<UnityEngine.InputSystem.LowLevel.TouchState> {
                    protected [__keep_incompatibility]: never;
                    public press: UnityEngine.InputSystem.Controls.TouchPressControl;
                    public displayIndex: UnityEngine.InputSystem.Controls.IntegerControl;
                    public touchId: UnityEngine.InputSystem.Controls.IntegerControl;
                    public position: UnityEngine.InputSystem.Controls.Vector2Control;
                    public delta: UnityEngine.InputSystem.Controls.DeltaControl;
                    public pressure: UnityEngine.InputSystem.Controls.AxisControl;
                    public radius: UnityEngine.InputSystem.Controls.Vector2Control;
                    public phase: UnityEngine.InputSystem.Controls.TouchPhaseControl;
                    public indirectTouch: UnityEngine.InputSystem.Controls.ButtonControl;
                    public tap: UnityEngine.InputSystem.Controls.ButtonControl;
                    public tapCount: UnityEngine.InputSystem.Controls.IntegerControl;
                    public startTime: UnityEngine.InputSystem.Controls.DoubleControl;
                    public startPosition: UnityEngine.InputSystem.Controls.Vector2Control;
                    public get isInProgress(): boolean;
                    constructor();
                }

                class TouchPhaseControl extends UnityEngine.InputSystem.InputControl$1<UnityEngine.InputSystem.TouchPhase> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class TouchPressControl extends UnityEngine.InputSystem.Controls.ButtonControl {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class Vector2Control extends UnityEngine.InputSystem.InputControl$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    public x: UnityEngine.InputSystem.Controls.AxisControl;
                    public y: UnityEngine.InputSystem.Controls.AxisControl;
                    constructor();
                }

                class Vector3Control extends UnityEngine.InputSystem.InputControl$1<UnityEngine.Vector3> {
                    protected [__keep_incompatibility]: never;
                    public x: UnityEngine.InputSystem.Controls.AxisControl;
                    public y: UnityEngine.InputSystem.Controls.AxisControl;
                    public z: UnityEngine.InputSystem.Controls.AxisControl;
                    constructor();
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace DualShock {
                class DualShockGamepad extends UnityEngine.InputSystem.Gamepad implements UnityEngine.InputSystem.DualShock.IDualShockHaptics {
                    protected [__keep_incompatibility]: never;
                    public get touchpadButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get optionsButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get shareButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get L1(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get R1(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get L2(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get R2(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get L3(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get R3(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public static get current(): UnityEngine.InputSystem.DualShock.DualShockGamepad;
                    constructor();
                    public MakeCurrent(): void;
                    public SetLightBarColor($color: UnityEngine.Color): void;
                }

                class DualSenseGamepadHID extends UnityEngine.InputSystem.DualShock.DualShockGamepad implements UnityEngine.InputSystem.LowLevel.IInputStateCallbackReceiver, UnityEngine.InputSystem.LowLevel.IEventMerger, UnityEngine.InputSystem.LowLevel.IEventPreProcessor {
                    protected [__keep_incompatibility]: never;
                    public get leftTriggerButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get rightTriggerButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get playStationButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                    public PauseHaptics(): void;
                    public ResetHaptics(): void;
                    public ResumeHaptics(): void;
                    public SetLightBarColor($color: UnityEngine.Color): void;
                    public SetMotorSpeeds($lowFrequency: number, $highFrequency: number): void;
                    public SetMotorSpeedsAndLightBarColor($lowFrequency: number | null, $highFrequency: number | null, $color: UnityEngine.Color | null): boolean;
                    public OnNextUpdate(): void;
                    public OnStateEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                    public GetStateOffsetForEvent($control: UnityEngine.InputSystem.InputControl, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr, $offset: $Ref<number>): boolean;
                }

                class DualShock4GamepadHID extends UnityEngine.InputSystem.DualShock.DualShockGamepad implements UnityEngine.InputSystem.LowLevel.IInputStateCallbackReceiver, UnityEngine.InputSystem.LowLevel.IEventPreProcessor {
                    protected [__keep_incompatibility]: never;
                    public get leftTriggerButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get rightTriggerButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get playStationButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                    public PauseHaptics(): void;
                    public ResetHaptics(): void;
                    public ResumeHaptics(): void;
                    public SetLightBarColor($color: UnityEngine.Color): void;
                    public SetMotorSpeeds($lowFrequency: number, $highFrequency: number): void;
                    public SetMotorSpeedsAndLightBarColor($lowFrequency: number, $highFrequency: number, $color: UnityEngine.Color): boolean;
                    public OnNextUpdate(): void;
                    public OnStateEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                    public GetStateOffsetForEvent($control: UnityEngine.InputSystem.InputControl, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr, $offset: $Ref<number>): boolean;
                }

                class DualShock3GamepadHID extends UnityEngine.InputSystem.DualShock.DualShockGamepad {
                    protected [__keep_incompatibility]: never;
                    public get leftTriggerButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get rightTriggerButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get playStationButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                }

                interface IDualShockHaptics extends UnityEngine.InputSystem.Haptics.IHaptics, UnityEngine.InputSystem.Haptics.IDualMotorRumble {
                    SetLightBarColor($color: UnityEngine.Color): void;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace DualShock {
                namespace LowLevel {
                    class DualSenseHIDInputReport implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                        protected [__keep_incompatibility]: never;
                        public static Format: UnityEngine.InputSystem.Utilities.FourCC;
                        public leftStickX: number;
                        public leftStickY: number;
                        public rightStickX: number;
                        public rightStickY: number;
                        public leftTrigger: number;
                        public rightTrigger: number;
                        public buttons0: number;
                        public buttons1: number;
                        public buttons2: number;
                        public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                    }

                }
            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Editor {
                class InputActionCodeGenerator {
                    protected [__keep_incompatibility]: never;
                    public static GenerateWrapperCode($asset: UnityEngine.InputSystem.InputActionAsset, $options?: UnityEngine.InputSystem.Editor.InputActionCodeGenerator.Options): string;
                    public static GenerateWrapperCode($filePath: string, $asset: UnityEngine.InputSystem.InputActionAsset, $options: UnityEngine.InputSystem.Editor.InputActionCodeGenerator.Options): boolean;

                    class Options {
                        protected [__keep_incompatibility]: never;
                        public className: string;
                        public namespaceName: string;
                        public sourceAssetPath: string;
                    }
                }

                class InputControlPathEditor implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get pathProperty(): UnityEditor.SerializedProperty;
                    public get onModified(): System.Action;
                    constructor($pathProperty: UnityEditor.SerializedProperty, $pickerState: UnityEngine.InputSystem.Editor.InputControlPickerState, $onModified: System.Action, $label?: UnityEngine.GUIContent);
                    public Dispose(): void;
                    public SetControlPathsToMatch($controlPaths: System.Collections.Generic.IEnumerable$1<string>): void;
                    public SetExpectedControlLayout($expectedControlLayout: string): void;
                    public SetExpectedControlLayoutFromAttribute(): void;
                    public OnGUI(): void;
                    public OnGUI($rect: UnityEngine.Rect, $label?: UnityEngine.GUIContent, $property?: UnityEditor.SerializedProperty, $modifiedCallback?: System.Action): void;
                }

                class InputControlPicker implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get state(): UnityEngine.InputSystem.Editor.InputControlPickerState;
                    constructor($mode: UnityEngine.InputSystem.Editor.InputControlPicker.Mode, $onPick: System.Action$1<string>, $state: UnityEngine.InputSystem.Editor.InputControlPickerState);
                    public Show($rect: UnityEngine.Rect): void;
                    public Dispose(): void;

                    enum Mode {
                        PickControl = 0,
                        PickDevice = 1
                    }
                }

                class InputControlPickerState {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class InputParameterEditor {
                    protected [__keep_incompatibility]: never;
                    public get target(): any;
                    public OnGUI(): void;
                    public OnDrawVisualElements($root: UnityEngine.UIElements.VisualElement, $onChangedCallback: System.Action): void;
                }

                class InputParameterEditor<TObject extends object> extends UnityEngine.InputSystem.Editor.InputParameterEditor {
                    protected [__keep_incompatibility]: never;
                    public get target(): TObject;
                    public OnDrawVisualElements($root: UnityEngine.UIElements.VisualElement, $onChangedCallback: System.Action): void;
                }

                class InputSystemPluginControl {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static RegisterPlatform($target: UnityEditor.BuildTarget): void;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace EnhancedTouch {
                class EnhancedTouchSupport {
                    protected [__keep_incompatibility]: never;
                    public static get enabled(): boolean;
                    public static Enable(): void;
                    public static Disable(): void;
                }

                class Finger {
                    protected [__keep_incompatibility]: never;
                    public get screen(): UnityEngine.InputSystem.Touchscreen;
                    public get index(): number;
                    public get isActive(): boolean;
                    public get screenPosition(): UnityEngine.Vector2;
                    public get lastTouch(): UnityEngine.InputSystem.EnhancedTouch.Touch;
                    public get currentTouch(): UnityEngine.InputSystem.EnhancedTouch.Touch;
                    public get touchHistory(): UnityEngine.InputSystem.EnhancedTouch.TouchHistory;
                }

                class Touch implements System.IEquatable$1<UnityEngine.InputSystem.EnhancedTouch.Touch> {
                    protected [__keep_incompatibility]: never;
                    public get valid(): boolean;
                    public get finger(): UnityEngine.InputSystem.EnhancedTouch.Finger;
                    public get phase(): UnityEngine.InputSystem.TouchPhase;
                    public get began(): boolean;
                    public get inProgress(): boolean;
                    public get ended(): boolean;
                    public get touchId(): number;
                    public get pressure(): number;
                    public get radius(): UnityEngine.Vector2;
                    public get startTime(): number;
                    public get time(): number;
                    public get screen(): UnityEngine.InputSystem.Touchscreen;
                    public get screenPosition(): UnityEngine.Vector2;
                    public get startScreenPosition(): UnityEngine.Vector2;
                    public get delta(): UnityEngine.Vector2;
                    public get tapCount(): number;
                    public get isTap(): boolean;
                    public get displayIndex(): number;
                    public get isInProgress(): boolean;
                    public get history(): UnityEngine.InputSystem.EnhancedTouch.TouchHistory;
                    public static get activeTouches(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.EnhancedTouch.Touch>;
                    public static get fingers(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.EnhancedTouch.Finger>;
                    public static get activeFingers(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.EnhancedTouch.Finger>;
                    public static get screens(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.Touchscreen>;
                    public static get maxHistoryLengthPerFinger(): number;
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.EnhancedTouch.Touch): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                    public static add_onFingerDown(handler: System.Action$1<UnityEngine.InputSystem.EnhancedTouch.Finger>): void;
                    public static remove_onFingerDown(handler: System.Action$1<UnityEngine.InputSystem.EnhancedTouch.Finger>): void;
                    public static add_onFingerUp(handler: System.Action$1<UnityEngine.InputSystem.EnhancedTouch.Finger>): void;
                    public static remove_onFingerUp(handler: System.Action$1<UnityEngine.InputSystem.EnhancedTouch.Finger>): void;
                    public static add_onFingerMove(handler: System.Action$1<UnityEngine.InputSystem.EnhancedTouch.Finger>): void;
                    public static remove_onFingerMove(handler: System.Action$1<UnityEngine.InputSystem.EnhancedTouch.Finger>): void;
                }

                class TouchHistory implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.EnhancedTouch.Touch>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<UnityEngine.InputSystem.EnhancedTouch.Touch>, System.Collections.Generic.IReadOnlyList$1<UnityEngine.InputSystem.EnhancedTouch.Touch> {
                    protected [__keep_incompatibility]: never;
                    public get Count(): number;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.EnhancedTouch.Touch>;
                    public get_Item($index: number): UnityEngine.InputSystem.EnhancedTouch.Touch;
                }

                class TouchSimulation extends UnityEngine.MonoBehaviour implements UnityEngine.InputSystem.LowLevel.IInputStateChangeMonitor {
                    protected [__keep_incompatibility]: never;
                    public get simulatedTouchscreen(): UnityEngine.InputSystem.Touchscreen;
                    public static get instance(): UnityEngine.InputSystem.EnhancedTouch.TouchSimulation;
                    constructor();
                    public static Enable(): void;
                    public static Disable(): void;
                    public static Destroy(): void;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Haptics {
                interface IDualMotorRumble extends UnityEngine.InputSystem.Haptics.IHaptics {
                    SetMotorSpeeds($lowFrequency: number, $highFrequency: number): void;
                }

                interface IHaptics {
                    PauseHaptics(): void;
                    ResumeHaptics(): void;
                    ResetHaptics(): void;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace HID {
                class HID extends UnityEngine.InputSystem.InputDevice {
                    protected [__keep_incompatibility]: never;
                    public static get QueryHIDReportDescriptorDeviceCommandType(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static get QueryHIDReportDescriptorSizeDeviceCommandType(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static get QueryHIDParsedReportDescriptorDeviceCommandType(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get hidDescriptor(): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptor;
                    constructor();
                    public static UsagePageToString($usagePage: UnityEngine.InputSystem.HID.HID.UsagePage): string;
                    public static UsageToString($usagePage: UnityEngine.InputSystem.HID.HID.UsagePage, $usage: number): string;

                    enum HIDReportType {
                        Unknown = 0,
                        Input = 1,
                        Output = 2,
                        Feature = 3
                    }

                    enum HIDCollectionType {
                        Physical = 0,
                        Application = 1,
                        Logical = 2,
                        Report = 3,
                        NamedArray = 4,
                        UsageSwitch = 5,
                        UsageModifier = 6
                    }

                    enum HIDElementFlags {
                        Constant = 1,
                        Variable = 2,
                        Relative = 4,
                        Wrap = 8,
                        NonLinear = 16,
                        NoPreferred = 32,
                        NullState = 64,
                        Volatile = 128,
                        BufferedBytes = 256
                    }

                    class HIDElementDescriptor {
                        protected [__keep_incompatibility]: never;
                        public usage: number;
                        public usagePage: UnityEngine.InputSystem.HID.HID.UsagePage;
                        public unit: number;
                        public unitExponent: number;
                        public logicalMin: number;
                        public logicalMax: number;
                        public physicalMin: number;
                        public physicalMax: number;
                        public reportType: UnityEngine.InputSystem.HID.HID.HIDReportType;
                        public collectionIndex: number;
                        public reportId: number;
                        public reportSizeInBits: number;
                        public reportOffsetInBits: number;
                        public flags: UnityEngine.InputSystem.HID.HID.HIDElementFlags;
                        public usageMin: number | null;
                        public usageMax: number | null;
                        public get hasNullState(): boolean;
                        public get hasPreferredState(): boolean;
                        public get isArray(): boolean;
                        public get isNonLinear(): boolean;
                        public get isRelative(): boolean;
                        public get isConstant(): boolean;
                        public get isWrapping(): boolean;
                        public Is($usagePage: UnityEngine.InputSystem.HID.HID.UsagePage, $usage: number): boolean;
                    }

                    class HIDCollectionDescriptor {
                        protected [__keep_incompatibility]: never;
                        public type: UnityEngine.InputSystem.HID.HID.HIDCollectionType;
                        public usage: number;
                        public usagePage: UnityEngine.InputSystem.HID.HID.UsagePage;
                        public parent: number;
                        public childCount: number;
                        public firstChild: number;
                    }

                    class HIDDeviceDescriptor {
                        protected [__keep_incompatibility]: never;
                        public vendorId: number;
                        public productId: number;
                        public usage: number;
                        public usagePage: UnityEngine.InputSystem.HID.HID.UsagePage;
                        public inputReportSize: number;
                        public outputReportSize: number;
                        public featureReportSize: number;
                        public elements: System.Array$1<UnityEngine.InputSystem.HID.HID.HIDElementDescriptor>;
                        public collections: System.Array$1<UnityEngine.InputSystem.HID.HID.HIDCollectionDescriptor>;
                        public ToJson(): string;
                        public static FromJson($json: string): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptor;
                    }

                    class HIDDeviceDescriptorBuilder {
                        protected [__keep_incompatibility]: never;
                        public usagePage: UnityEngine.InputSystem.HID.HID.UsagePage;
                        public usage: number;
                        constructor($usagePage: UnityEngine.InputSystem.HID.HID.UsagePage, $usage: number);
                        constructor($usage: UnityEngine.InputSystem.HID.HID.GenericDesktop);
                        public StartReport($reportType: UnityEngine.InputSystem.HID.HID.HIDReportType, $reportId?: number): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptorBuilder;
                        public AddElement($usagePage: UnityEngine.InputSystem.HID.HID.UsagePage, $usage: number, $sizeInBits: number): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptorBuilder;
                        public AddElement($usage: UnityEngine.InputSystem.HID.HID.GenericDesktop, $sizeInBits: number): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptorBuilder;
                        public WithPhysicalMinMax($min: number, $max: number): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptorBuilder;
                        public WithLogicalMinMax($min: number, $max: number): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptorBuilder;
                        public Finish(): UnityEngine.InputSystem.HID.HID.HIDDeviceDescriptor;
                    }

                    enum UsagePage {
                        Undefined = 0,
                        GenericDesktop = 1,
                        Simulation = 2,
                        VRControls = 3,
                        SportControls = 4,
                        GameControls = 5,
                        GenericDeviceControls = 6,
                        Keyboard = 7,
                        LEDs = 8,
                        Button = 9,
                        Ordinal = 10,
                        Telephony = 11,
                        Consumer = 12,
                        Digitizer = 13,
                        PID = 15,
                        Unicode = 16,
                        AlphanumericDisplay = 20,
                        MedicalInstruments = 64,
                        Monitor = 128,
                        Power = 132,
                        BarCodeScanner = 140,
                        MagneticStripeReader = 142,
                        Camera = 144,
                        Arcade = 145,
                        VendorDefined = 65280
                    }

                    enum GenericDesktop {
                        Undefined = 0,
                        Pointer = 1,
                        Mouse = 2,
                        Joystick = 4,
                        Gamepad = 5,
                        Keyboard = 6,
                        Keypad = 7,
                        MultiAxisController = 8,
                        TabletPCControls = 9,
                        AssistiveControl = 10,
                        X = 48,
                        Y = 49,
                        Z = 50,
                        Rx = 51,
                        Ry = 52,
                        Rz = 53,
                        Slider = 54,
                        Dial = 55,
                        Wheel = 56,
                        HatSwitch = 57,
                        CountedBuffer = 58,
                        ByteCount = 59,
                        MotionWakeup = 60,
                        Start = 61,
                        Select = 62,
                        Vx = 64,
                        Vy = 65,
                        Vz = 66,
                        Vbrx = 67,
                        Vbry = 68,
                        Vbrz = 69,
                        Vno = 70,
                        FeatureNotification = 71,
                        ResolutionMultiplier = 72,
                        SystemControl = 128,
                        SystemPowerDown = 129,
                        SystemSleep = 130,
                        SystemWakeUp = 131,
                        SystemContextMenu = 132,
                        SystemMainMenu = 133,
                        SystemAppMenu = 134,
                        SystemMenuHelp = 135,
                        SystemMenuExit = 136,
                        SystemMenuSelect = 137,
                        SystemMenuRight = 138,
                        SystemMenuLeft = 139,
                        SystemMenuUp = 140,
                        SystemMenuDown = 141,
                        SystemColdRestart = 142,
                        SystemWarmRestart = 143,
                        DpadUp = 144,
                        DpadDown = 145,
                        DpadRight = 146,
                        DpadLeft = 147,
                        SystemDock = 160,
                        SystemUndock = 161,
                        SystemSetup = 162,
                        SystemBreak = 163,
                        SystemDebuggerBreak = 164,
                        ApplicationBreak = 165,
                        ApplicationDebuggerBreak = 166,
                        SystemSpeakerMute = 167,
                        SystemHibernate = 168,
                        SystemDisplayInvert = 176,
                        SystemDisplayInternal = 177,
                        SystemDisplayExternal = 178,
                        SystemDisplayBoth = 179,
                        SystemDisplayDual = 180,
                        SystemDisplayToggleIntExt = 181,
                        SystemDisplaySwapPrimarySecondary = 182,
                        SystemDisplayLCDAutoScale = 183
                    }

                    enum Simulation {
                        Undefined = 0,
                        FlightSimulationDevice = 1,
                        AutomobileSimulationDevice = 2,
                        TankSimulationDevice = 3,
                        SpaceshipSimulationDevice = 4,
                        SubmarineSimulationDevice = 5,
                        SailingSimulationDevice = 6,
                        MotorcycleSimulationDevice = 7,
                        SportsSimulationDevice = 8,
                        AirplaneSimulationDevice = 9,
                        HelicopterSimulationDevice = 10,
                        MagicCarpetSimulationDevice = 11,
                        BicylcleSimulationDevice = 12,
                        FlightControlStick = 32,
                        FlightStick = 33,
                        CyclicControl = 34,
                        CyclicTrim = 35,
                        FlightYoke = 36,
                        TrackControl = 37,
                        Aileron = 176,
                        AileronTrim = 177,
                        AntiTorqueControl = 178,
                        AutopilotEnable = 179,
                        ChaffRelease = 180,
                        CollectiveControl = 181,
                        DiveBreak = 182,
                        ElectronicCountermeasures = 183,
                        Elevator = 184,
                        ElevatorTrim = 185,
                        Rudder = 186,
                        Throttle = 187,
                        FlightCommunications = 188,
                        FlareRelease = 189,
                        LandingGear = 190,
                        ToeBreak = 191,
                        Trigger = 192,
                        WeaponsArm = 193,
                        WeaponsSelect = 194,
                        WingFlaps = 195,
                        Accelerator = 196,
                        Brake = 197,
                        Clutch = 198,
                        Shifter = 199,
                        Steering = 200,
                        TurretDirection = 201,
                        BarrelElevation = 202,
                        DivePlane = 203,
                        Ballast = 204,
                        BicycleCrank = 205,
                        HandleBars = 206,
                        FrontBrake = 207,
                        RearBrake = 208
                    }

                    enum Button {
                        Undefined = 0,
                        Primary = 1,
                        Secondary = 2,
                        Tertiary = 3
                    }
                }

                class HIDSupport {
                    protected [__keep_incompatibility]: never;
                    public static supportedHIDUsages: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.HID.HIDSupport.HIDPageUsage>;

                    class HIDPageUsage {
                        protected [__keep_incompatibility]: never;
                        public page: UnityEngine.InputSystem.HID.HID.UsagePage;
                        public usage: number;
                        constructor($page: UnityEngine.InputSystem.HID.HID.UsagePage, $usage: number);
                        constructor($usage: UnityEngine.InputSystem.HID.HID.GenericDesktop);
                    }
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Interactions {
                class HoldInteraction implements UnityEngine.InputSystem.IInputInteraction {
                    protected [__keep_incompatibility]: never;
                    public duration: number;
                    public pressPoint: number;
                    constructor();
                    public Process($context: $Ref<UnityEngine.InputSystem.InputInteractionContext>): void;
                    public Reset(): void;
                }

                class MultiTapInteraction implements UnityEngine.InputSystem.IInputInteraction, UnityEngine.InputSystem.IInputInteraction$1<number> {
                    protected [__keep_incompatibility]: never;
                    public tapTime: number;
                    public tapDelay: number;
                    public tapCount: number;
                    public pressPoint: number;
                    constructor();
                    public Process($context: $Ref<UnityEngine.InputSystem.InputInteractionContext>): void;
                    public Reset(): void;
                }

                class PressInteraction implements UnityEngine.InputSystem.IInputInteraction {
                    protected [__keep_incompatibility]: never;
                    public pressPoint: number;
                    public behavior: UnityEngine.InputSystem.Interactions.PressBehavior;
                    constructor();
                    public Process($context: $Ref<UnityEngine.InputSystem.InputInteractionContext>): void;
                    public Reset(): void;
                }

                enum PressBehavior {
                    PressOnly = 0,
                    ReleaseOnly = 1,
                    PressAndRelease = 2
                }

                class SlowTapInteraction implements UnityEngine.InputSystem.IInputInteraction {
                    protected [__keep_incompatibility]: never;
                    public duration: number;
                    public pressPoint: number;
                    constructor();
                    public Process($context: $Ref<UnityEngine.InputSystem.InputInteractionContext>): void;
                    public Reset(): void;
                }

                class TapInteraction implements UnityEngine.InputSystem.IInputInteraction {
                    protected [__keep_incompatibility]: never;
                    public duration: number;
                    public pressPoint: number;
                    constructor();
                    public Process($context: $Ref<UnityEngine.InputSystem.InputInteractionContext>): void;
                    public Reset(): void;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace iOS {
                class PrivacyDataUsage {
                    protected [__keep_incompatibility]: never;
                    public enabled: boolean;
                    public usageDescription: string;
                    constructor();
                }

                class iOSGameController extends UnityEngine.InputSystem.Gamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class XboxOneGampadiOS extends UnityEngine.InputSystem.XInput.XInputController {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class DualShock4GampadiOS extends UnityEngine.InputSystem.DualShock.DualShockGamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class DualSenseGampadiOS extends UnityEngine.InputSystem.DualShock.DualShockGamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace iOS {
                namespace LowLevel {
                    enum MotionAuthorizationStatus {
                        NotDetermined = 0,
                        Restricted = 1,
                        Denied = 2,
                        Authorized = 3
                    }

                    class iOSStepCounter extends UnityEngine.InputSystem.StepCounter {
                        protected [__keep_incompatibility]: never;
                        public static get AuthorizationStatus(): UnityEngine.InputSystem.iOS.LowLevel.MotionAuthorizationStatus;
                        constructor();
                        public static IsAvailable(): boolean;
                    }

                }
            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Layouts {
                class InputControlAttribute extends UnityEngine.PropertyAttribute {
                    protected [__keep_incompatibility]: never;
                    public layout: string;
                    public variants: string;
                    public name: string;
                    public format: string;
                    public usage: string;
                    public usages: System.Array$1<string>;
                    public parameters: string;
                    public processors: string;
                    public alias: string;
                    public aliases: System.Array$1<string>;
                    public useStateFrom: string;
                    public bit: number;
                    public offset: number;
                    public sizeInBits: number;
                    public arraySize: number;
                    public displayName: string;
                    public shortDisplayName: string;
                    public noisy: boolean;
                    public synthetic: boolean;
                    public dontReset: boolean;
                    public defaultState: any;
                    public minValue: any;
                    public maxValue: any;
                    constructor();
                }

                interface InputDeviceFindControlLayoutDelegate {
                    ($description: $Ref<UnityEngine.InputSystem.Layouts.InputDeviceDescription>, $matchedLayout: string, $executeDeviceCommand: UnityEngine.InputSystem.LowLevel.InputDeviceExecuteCommandDelegate): string;
                    Invoke?: ($description: $Ref<UnityEngine.InputSystem.Layouts.InputDeviceDescription>, $matchedLayout: string, $executeDeviceCommand: UnityEngine.InputSystem.LowLevel.InputDeviceExecuteCommandDelegate) => string;
                }
                var InputDeviceFindControlLayoutDelegate: { new (func: ($description: $Ref<UnityEngine.InputSystem.Layouts.InputDeviceDescription>, $matchedLayout: string, $executeDeviceCommand: UnityEngine.InputSystem.LowLevel.InputDeviceExecuteCommandDelegate) => string): InputDeviceFindControlLayoutDelegate; };

                class InputControlLayout {
                    protected [__keep_incompatibility]: never;
                    public static readonly VariantSeparator: string;
                    public static get DefaultVariant(): UnityEngine.InputSystem.Utilities.InternedString;
                    public get name(): UnityEngine.InputSystem.Utilities.InternedString;
                    public get displayName(): string;
                    public get type(): System.Type;
                    public get variants(): UnityEngine.InputSystem.Utilities.InternedString;
                    public get stateFormat(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get stateSizeInBytes(): number;
                    public get baseLayouts(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.Utilities.InternedString>;
                    public get appliedOverrides(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.Utilities.InternedString>;
                    public get commonUsages(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.InternedString>;
                    public get controls(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Layouts.InputControlLayout.ControlItem>;
                    public get updateBeforeRender(): boolean;
                    public get isDeviceLayout(): boolean;
                    public get isControlLayout(): boolean;
                    public get isOverride(): boolean;
                    public get isGenericTypeOfDevice(): boolean;
                    public get hideInUI(): boolean;
                    public get isNoisy(): boolean;
                    public get canRunInBackground(): boolean | null;
                    public FindControl($path: UnityEngine.InputSystem.Utilities.InternedString): UnityEngine.InputSystem.Layouts.InputControlLayout.ControlItem | null;
                    public FindControlIncludingArrayElements($path: string, $arrayIndex: $Out<number>): UnityEngine.InputSystem.Layouts.InputControlLayout.ControlItem | null;
                    public GetValueType(): System.Type;
                    public static FromType($name: string, $type: System.Type): UnityEngine.InputSystem.Layouts.InputControlLayout;
                    public ToJson(): string;
                    public static FromJson($json: string): UnityEngine.InputSystem.Layouts.InputControlLayout;
                    public MergeLayout($other: UnityEngine.InputSystem.Layouts.InputControlLayout): void;
                    public get_Item($path: string): UnityEngine.InputSystem.Layouts.InputControlLayout.ControlItem;

                    class ControlItem {
                        protected [__keep_incompatibility]: never;
                        public get name(): UnityEngine.InputSystem.Utilities.InternedString;
                        public get layout(): UnityEngine.InputSystem.Utilities.InternedString;
                        public get variants(): UnityEngine.InputSystem.Utilities.InternedString;
                        public get useStateFrom(): string;
                        public get displayName(): string;
                        public get shortDisplayName(): string;
                        public get usages(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.InternedString>;
                        public get aliases(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.InternedString>;
                        public get parameters(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.NamedValue>;
                        public get processors(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.NameAndParameters>;
                        public get offset(): number;
                        public get bit(): number;
                        public get sizeInBits(): number;
                        public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                        public get arraySize(): number;
                        public get defaultState(): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                        public get minValue(): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                        public get maxValue(): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                        public get isModifyingExistingControl(): boolean;
                        public get isNoisy(): boolean;
                        public get isSynthetic(): boolean;
                        public get dontReset(): boolean;
                        public get isFirstDefinedInThisLayout(): boolean;
                        public get isArray(): boolean;
                        public Merge($other: UnityEngine.InputSystem.Layouts.InputControlLayout.ControlItem): UnityEngine.InputSystem.Layouts.InputControlLayout.ControlItem;
                    }

                    class Builder {
                        protected [__keep_incompatibility]: never;
                        public name: string;
                        public displayName: string;
                        public type: System.Type;
                        public stateFormat: UnityEngine.InputSystem.Utilities.FourCC;
                        public stateSizeInBytes: number;
                        public extendsLayout: string;
                        public updateBeforeRender: boolean | null;
                        public get controls(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Layouts.InputControlLayout.ControlItem>;
                        constructor();
                        public AddControl($name: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                        public WithName($name: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder;
                        public WithDisplayName($displayName: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder;
                        public WithType<T extends UnityEngine.InputSystem.InputControl>(): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder;
                        public WithFormat($format: UnityEngine.InputSystem.Utilities.FourCC): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder;
                        public WithFormat($format: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder;
                        public WithSizeInBytes($sizeInBytes: number): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder;
                        public Extend($baseLayoutName: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder;
                        public Build(): UnityEngine.InputSystem.Layouts.InputControlLayout;

                        class ControlBuilder {
                            protected [__keep_incompatibility]: never;
                            public WithDisplayName($displayName: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithLayout($layout: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithFormat($format: UnityEngine.InputSystem.Utilities.FourCC): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithFormat($format: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithByteOffset($offset: number): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithBitOffset($bit: number): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public IsSynthetic($value: boolean): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public IsNoisy($value: boolean): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public DontReset($value: boolean): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithSizeInBits($sizeInBits: number): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithRange($minValue: number, $maxValue: number): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithUsages(...usages: UnityEngine.InputSystem.Utilities.InternedString[]): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithUsages($usages: System.Collections.Generic.IEnumerable$1<string>): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithUsages(...usages: string[]): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithParameters($parameters: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithProcessors($processors: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public WithDefaultState($value: UnityEngine.InputSystem.Utilities.PrimitiveValue): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public UsingStateFrom($path: string): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                            public AsArrayOfControlsWithSize($arraySize: number): UnityEngine.InputSystem.Layouts.InputControlLayout.Builder.ControlBuilder;
                        }
                    }

                    class LayoutNotFoundException extends System.Exception {
                        protected [__keep_incompatibility]: never;
                        public get layout(): string;
                        constructor();
                        constructor($name: string, $message: string);
                        constructor($name: string);
                        constructor($message: string, $innerException: System.Exception);
                    }
                }

                class InputControlLayoutAttribute extends System.Attribute {
                    protected [__keep_incompatibility]: never;
                    public stateType: System.Type;
                    public stateFormat: string;
                    public commonUsages: System.Array$1<string>;
                    public variants: string;
                    public isNoisy: boolean;
                    public canRunInBackground: boolean;
                    public updateBeforeRender: boolean;
                    public isGenericTypeOfDevice: boolean;
                    public displayName: string;
                    public description: string;
                    public hideInUI: boolean;
                    constructor();
                }

                class InputDeviceDescription implements System.IEquatable$1<UnityEngine.InputSystem.Layouts.InputDeviceDescription> {
                    protected [__keep_incompatibility]: never;
                    public interfaceName: string;
                    public deviceClass: string;
                    public manufacturer: string;
                    public product: string;
                    public serial: string;
                    public version: string;
                    public capabilities: string;
                    public get empty(): boolean;
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.Layouts.InputDeviceDescription): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                    public ToJson(): string;
                    public static FromJson($json: string): UnityEngine.InputSystem.Layouts.InputDeviceDescription;
                }

                class InputDeviceMatcher implements System.IEquatable$1<UnityEngine.InputSystem.Layouts.InputDeviceMatcher> {
                    protected [__keep_incompatibility]: never;
                    public get empty(): boolean;
                    public get patterns(): System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<string, any>>;
                    public WithInterface($pattern: string, $supportRegex?: boolean): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public WithDeviceClass($pattern: string, $supportRegex?: boolean): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public WithManufacturer($pattern: string, $supportRegex?: boolean): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public WithManufacturerContains($noRegExPattern: string): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public WithProduct($pattern: string, $supportRegex?: boolean): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public WithVersion($pattern: string, $supportRegex?: boolean): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public WithCapability<TValue>($path: string, $value: TValue): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public MatchPercentage($deviceDescription: UnityEngine.InputSystem.Layouts.InputDeviceDescription): number;
                    public static FromDeviceDescription($deviceDescription: UnityEngine.InputSystem.Layouts.InputDeviceDescription): UnityEngine.InputSystem.Layouts.InputDeviceMatcher;
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.Layouts.InputDeviceMatcher): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace LowLevel {
                class DisableDeviceCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.DisableDeviceCommand;
                }

                class EnableDeviceCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.EnableDeviceCommand;
                }

                class EnableIMECompositionCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get imeEnabled(): boolean;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create($enabled: boolean): UnityEngine.InputSystem.LowLevel.EnableIMECompositionCommand;
                }

                interface IInputDeviceCommandInfo {
                    get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                }

                class InitiateUserAccountPairingCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.InitiateUserAccountPairingCommand;

                    enum Result {
                        SuccessfullyInitiated = 1,
                        ErrorAlreadyInProgress = -2,
                        ErrorNotSupported = -1
                    }
                }

                interface InputDeviceCommandDelegate {
                    ($device: UnityEngine.InputSystem.InputDevice, $command: any): bigint | null;
                    Invoke?: ($device: UnityEngine.InputSystem.InputDevice, $command: any) => bigint | null;
                }
                var InputDeviceCommandDelegate: { new (func: ($device: UnityEngine.InputSystem.InputDevice, $command: any) => bigint | null): InputDeviceCommandDelegate; };

                interface InputDeviceExecuteCommandDelegate {
                    ($command: $Ref<UnityEngine.InputSystem.LowLevel.InputDeviceCommand>): bigint;
                    Invoke?: ($command: $Ref<UnityEngine.InputSystem.LowLevel.InputDeviceCommand>) => bigint;
                }
                var InputDeviceExecuteCommandDelegate: { new (func: ($command: $Ref<UnityEngine.InputSystem.LowLevel.InputDeviceCommand>) => bigint): InputDeviceExecuteCommandDelegate; };

                class InputDeviceCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly BaseCommandSize: number;
                    public static readonly GenericFailure: bigint;
                    public static readonly GenericSuccess: bigint;
                    public type: UnityEngine.InputSystem.Utilities.FourCC;
                    public sizeInBytes: number;
                    public get payloadSizeInBytes(): number;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    constructor($type: UnityEngine.InputSystem.Utilities.FourCC, $sizeInBytes?: number);
                    public static AllocateNative($type: UnityEngine.InputSystem.Utilities.FourCC, $payloadSize: number): Unity.Collections.NativeArray$1<number>;
                }

                class QueryCanRunInBackground implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public canRunInBackground: boolean;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.QueryCanRunInBackground;
                }

                class QueryDimensionsCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public outDimensions: UnityEngine.Vector2;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.QueryDimensionsCommand;
                }

                class QueryEnabledStateCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public isEnabled: boolean;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.QueryEnabledStateCommand;
                }

                class QueryKeyboardLayoutCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public nameBuffer: UnityEngine.InputSystem.LowLevel.QueryKeyboardLayoutCommand.<nameBuffer>e__FixedBuffer;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public ReadLayoutName(): string;
                    public WriteLayoutName($name: string): void;
                    public static Create(): UnityEngine.InputSystem.LowLevel.QueryKeyboardLayoutCommand;
                }

                class QueryKeyNameCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public scanOrKeyCode: number;
                    public nameBuffer: UnityEngine.InputSystem.LowLevel.QueryKeyNameCommand.<nameBuffer>e__FixedBuffer;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public ReadKeyName(): string;
                    public static Create($key: UnityEngine.InputSystem.Key): UnityEngine.InputSystem.LowLevel.QueryKeyNameCommand;
                }

                class QueryPairedUserAccountCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public handle: bigint;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public id: string;
                    public name: string;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.QueryPairedUserAccountCommand;

                    enum Result {
                        DevicePairedToUserAccount = 2,
                        UserAccountSelectionInProgress = 4,
                        UserAccountSelectionComplete = 8,
                        UserAccountSelectionCanceled = 16
                    }
                }

                class RequestResetCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.RequestResetCommand;
                }

                class RequestSyncCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create(): UnityEngine.InputSystem.LowLevel.RequestSyncCommand;
                }

                class SetIMECursorPositionCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get position(): UnityEngine.Vector2;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create($cursorPosition: UnityEngine.Vector2): UnityEngine.InputSystem.LowLevel.SetIMECursorPositionCommand;
                }

                class SetSamplingFrequencyCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                    protected [__keep_incompatibility]: never;
                    public baseCommand: UnityEngine.InputSystem.LowLevel.InputDeviceCommand;
                    public frequency: number;
                    public static get Type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create($frequency: number): UnityEngine.InputSystem.LowLevel.SetSamplingFrequencyCommand;
                }

                class GamepadState implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public buttons: number;
                    public leftStick: UnityEngine.Vector2;
                    public rightStick: UnityEngine.Vector2;
                    public leftTrigger: number;
                    public rightTrigger: number;
                    public static get Format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                    constructor(...buttons: UnityEngine.InputSystem.LowLevel.GamepadButton[]);
                    public WithButton($button: UnityEngine.InputSystem.LowLevel.GamepadButton, $value?: boolean): UnityEngine.InputSystem.LowLevel.GamepadState;
                }

                enum GamepadButton {
                    DpadUp = 0,
                    DpadDown = 1,
                    DpadLeft = 2,
                    DpadRight = 3,
                    North = 4,
                    Y = 4,
                    Triangle = 4,
                    B = 5,
                    Circle = 5,
                    East = 5,
                    South = 6,
                    A = 6,
                    Cross = 6,
                    West = 7,
                    X = 7,
                    Square = 7,
                    LeftStick = 8,
                    RightStick = 9,
                    LeftShoulder = 10,
                    RightShoulder = 11,
                    Start = 12,
                    Select = 13,
                    LeftTrigger = 32,
                    RightTrigger = 33
                }

                interface IInputUpdateCallbackReceiver {
                    OnUpdate(): void;
                }

                interface ITextInputReceiver {
                    OnTextInput($character: number): void;
                    OnIMECompositionChanged($compositionString: UnityEngine.InputSystem.LowLevel.IMECompositionString): void;
                }

                class KeyboardState implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public keys: UnityEngine.InputSystem.LowLevel.KeyboardState.<keys>e__FixedBuffer;
                    public static get Format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                    constructor(...pressedKeys: UnityEngine.InputSystem.Key[]);
                    constructor($IMESelected: boolean, ...pressedKeys: UnityEngine.InputSystem.Key[]);
                    public Set($key: UnityEngine.InputSystem.Key, $state: boolean): void;
                    public Press($key: UnityEngine.InputSystem.Key): void;
                    public Release($key: UnityEngine.InputSystem.Key): void;
                }

                class MouseState implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public position: UnityEngine.Vector2;
                    public delta: UnityEngine.Vector2;
                    public scroll: UnityEngine.Vector2;
                    public buttons: number;
                    public displayIndex: number;
                    public clickCount: number;
                    public static get Format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public WithButton($button: UnityEngine.InputSystem.LowLevel.MouseButton, $state?: boolean): UnityEngine.InputSystem.LowLevel.MouseState;
                }

                enum MouseButton {
                    Left = 0,
                    Right = 1,
                    Middle = 2,
                    Forward = 3,
                    Back = 4
                }

                class PenState implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public position: UnityEngine.Vector2;
                    public delta: UnityEngine.Vector2;
                    public tilt: UnityEngine.Vector2;
                    public pressure: number;
                    public twist: number;
                    public buttons: number;
                    public static get Format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public WithButton($button: UnityEngine.InputSystem.PenButton, $state?: boolean): UnityEngine.InputSystem.LowLevel.PenState;
                }

                class TouchState implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public touchId: number;
                    public position: UnityEngine.Vector2;
                    public delta: UnityEngine.Vector2;
                    public pressure: number;
                    public radius: UnityEngine.Vector2;
                    public phaseId: number;
                    public tapCount: number;
                    public displayIndex: number;
                    public flags: number;
                    public startTime: number;
                    public startPosition: UnityEngine.Vector2;
                    public static get Format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public phase: UnityEngine.InputSystem.TouchPhase;
                    public get isNoneEndedOrCanceled(): boolean;
                    public get isInProgress(): boolean;
                    public isPrimaryTouch: boolean;
                    public isIndirectTouch: boolean;
                    public isTap: boolean;
                    public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                    public ToString(): string;
                }

                class DeltaStateEvent implements UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly Type: number;
                    public baseEvent: UnityEngine.InputSystem.LowLevel.InputEvent;
                    public stateFormat: UnityEngine.InputSystem.Utilities.FourCC;
                    public stateOffset: number;
                    public get deltaStateSizeInBytes(): number;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public ToEventPtr(): UnityEngine.InputSystem.LowLevel.InputEventPtr;
                    public static From($control: UnityEngine.InputSystem.InputControl, $eventPtr: $Out<UnityEngine.InputSystem.LowLevel.InputEventPtr>, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<number>;
                }

                class DeviceConfigurationEvent implements UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly Type: number;
                    public baseEvent: UnityEngine.InputSystem.LowLevel.InputEvent;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public ToEventPtr(): UnityEngine.InputSystem.LowLevel.InputEventPtr;
                    public static Create($deviceId: number, $time: number): UnityEngine.InputSystem.LowLevel.DeviceConfigurationEvent;
                }

                class DeviceRemoveEvent implements UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly Type: number;
                    public baseEvent: UnityEngine.InputSystem.LowLevel.InputEvent;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public ToEventPtr(): UnityEngine.InputSystem.LowLevel.InputEventPtr;
                    public static Create($deviceId: number, $time?: number): UnityEngine.InputSystem.LowLevel.DeviceRemoveEvent;
                }

                class DeviceResetEvent implements UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly Type: number;
                    public baseEvent: UnityEngine.InputSystem.LowLevel.InputEvent;
                    public hardReset: boolean;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create($deviceId: number, $hardReset?: boolean, $time?: number): UnityEngine.InputSystem.LowLevel.DeviceResetEvent;
                }

                interface IInputEventTypeInfo {
                    get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                }

                class IMECompositionEvent implements UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly Type: number;
                    public baseEvent: UnityEngine.InputSystem.LowLevel.InputEvent;
                    public compositionString: UnityEngine.InputSystem.LowLevel.IMECompositionString;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create($deviceId: number, $compositionString: string, $time: number): UnityEngine.InputSystem.LowLevel.IMECompositionEvent;
                }

                class IMECompositionString implements System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable {
                    protected [__keep_incompatibility]: never;
                    public get Count(): number;
                    constructor($characters: string);
                    public ToString(): string;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<number>;
                    public get_Item($index: number): number;
                }

                class InputEvent {
                    protected [__keep_incompatibility]: never;
                    public static readonly InvalidEventId: number;
                    public type: UnityEngine.InputSystem.Utilities.FourCC;
                    public sizeInBytes: number;
                    public eventId: number;
                    public deviceId: number;
                    public time: number;
                    public handled: boolean;
                    constructor($type: UnityEngine.InputSystem.Utilities.FourCC, $sizeInBytes: number, $deviceId: number, $time?: number);
                    public ToString(): string;
                }

                class InputEventBuffer implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>, System.Collections.IEnumerable, System.ICloneable, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public static readonly BufferSizeUnknown: bigint;
                    public get eventCount(): number;
                    public get sizeInBytes(): bigint;
                    public get capacityInBytes(): bigint;
                    public get data(): Unity.Collections.NativeArray$1<number>;
                    public get bufferPtr(): UnityEngine.InputSystem.LowLevel.InputEventPtr;
                    constructor($buffer: Unity.Collections.NativeArray$1<number>, $eventCount: number, $sizeInBytes?: number, $transferNativeArrayOwnership?: boolean);
                    public Reset(): void;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>;
                    public Dispose(): void;
                    public Clone(): UnityEngine.InputSystem.LowLevel.InputEventBuffer;
                }

                class InputEventListener implements System.IObservable$1<UnityEngine.InputSystem.LowLevel.InputEventPtr> {
                    protected [__keep_incompatibility]: never;
                    public Subscribe($observer: System.IObserver$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>): System.IDisposable;
                }

                class InputEventPtr implements System.IEquatable$1<UnityEngine.InputSystem.LowLevel.InputEventPtr> {
                    protected [__keep_incompatibility]: never;
                    public get valid(): boolean;
                    public handled: boolean;
                    public id: number;
                    public get type(): UnityEngine.InputSystem.Utilities.FourCC;
                    public get sizeInBytes(): number;
                    public deviceId: number;
                    public time: number;
                    public IsA<TOtherEvent extends UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo>(): boolean;
                    public Next(): UnityEngine.InputSystem.LowLevel.InputEventPtr;
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.LowLevel.InputEventPtr): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                }

                class InputEventTrace implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>, System.Collections.IEnumerable, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public static get FrameMarkerEvent(): UnityEngine.InputSystem.Utilities.FourCC;
                    public deviceId: number;
                    public get enabled(): boolean;
                    public recordFrameMarkers: boolean;
                    public get eventCount(): bigint;
                    public get totalEventSizeInBytes(): bigint;
                    public get allocatedSizeInBytes(): bigint;
                    public get maxSizeInBytes(): bigint;
                    public get deviceInfos(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.LowLevel.InputEventTrace.DeviceInfo>;
                    public onFilterEvent: System.Func$3<UnityEngine.InputSystem.LowLevel.InputEventPtr, UnityEngine.InputSystem.InputDevice, boolean>;
                    constructor($device: UnityEngine.InputSystem.InputDevice, $bufferSizeInBytes?: bigint, $growBuffer?: boolean, $maxBufferSizeInBytes?: bigint, $growIncrementSizeInBytes?: bigint);
                    constructor($bufferSizeInBytes?: bigint, $growBuffer?: boolean, $maxBufferSizeInBytes?: bigint, $growIncrementSizeInBytes?: bigint);
                    public WriteTo($filePath: string): void;
                    public WriteTo($stream: System.IO.Stream): void;
                    public ReadFrom($filePath: string): void;
                    public ReadFrom($stream: System.IO.Stream): void;
                    public static LoadFrom($filePath: string): UnityEngine.InputSystem.LowLevel.InputEventTrace;
                    public static LoadFrom($stream: System.IO.Stream): UnityEngine.InputSystem.LowLevel.InputEventTrace;
                    public Replay(): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                    public Resize($newBufferSize: bigint, $newMaxBufferSize?: bigint): boolean;
                    public Clear(): void;
                    public Enable(): void;
                    public Disable(): void;
                    public GetNextEvent($current: $Ref<UnityEngine.InputSystem.LowLevel.InputEventPtr>): boolean;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>;
                    public Dispose(): void;
                    public add_onEvent(handler: System.Action$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>): void;
                    public remove_onEvent(handler: System.Action$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>): void;

                    class ReplayController implements System.IDisposable {
                        protected [__keep_incompatibility]: never;
                        public get trace(): UnityEngine.InputSystem.LowLevel.InputEventTrace;
                        public get finished(): boolean;
                        public paused: boolean;
                        public get position(): number;
                        public get createdDevices(): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputDevice>;
                        public Dispose(): void;
                        public WithDeviceMappedFromTo($recordedDevice: UnityEngine.InputSystem.InputDevice, $playbackDevice: UnityEngine.InputSystem.InputDevice): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public WithDeviceMappedFromTo($recordedDeviceId: number, $playbackDeviceId: number): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public WithAllDevicesMappedToNewInstances(): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public OnFinished($action: System.Action): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public OnEvent($action: System.Action$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public PlayOneEvent(): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public Rewind(): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public PlayAllFramesOneByOne(): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public PlayAllEvents(): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                        public PlayAllEventsAccordingToTimestamps(): UnityEngine.InputSystem.LowLevel.InputEventTrace.ReplayController;
                    }

                    class DeviceInfo {
                        protected [__keep_incompatibility]: never;
                        public deviceId: number;
                        public layout: string;
                        public stateFormat: UnityEngine.InputSystem.Utilities.FourCC;
                        public stateSizeInBytes: number;
                    }
                }

                class StateEvent implements UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly Type: number;
                    public baseEvent: UnityEngine.InputSystem.LowLevel.InputEvent;
                    public stateFormat: UnityEngine.InputSystem.Utilities.FourCC;
                    public get stateSizeInBytes(): number;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public ToEventPtr(): UnityEngine.InputSystem.LowLevel.InputEventPtr;
                    public GetState<TState extends UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo>(): TState;
                    public static GetState<TState extends UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo>($ptr: UnityEngine.InputSystem.LowLevel.InputEventPtr): TState;
                    public static GetEventSizeWithPayload<TState>(): number;
                    public static From($device: UnityEngine.InputSystem.InputDevice, $eventPtr: $Out<UnityEngine.InputSystem.LowLevel.InputEventPtr>, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<number>;
                    public static FromDefaultStateFor($device: UnityEngine.InputSystem.InputDevice, $eventPtr: $Out<UnityEngine.InputSystem.LowLevel.InputEventPtr>, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<number>;
                }

                class TextEvent implements UnityEngine.InputSystem.LowLevel.IInputEventTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public static readonly Type: number;
                    public baseEvent: UnityEngine.InputSystem.LowLevel.InputEvent;
                    public character: number;
                    public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                    public static Create($deviceId: number, $character: number, $time?: number): UnityEngine.InputSystem.LowLevel.TextEvent;
                    public static Create($deviceId: number, $character: number, $time?: number): UnityEngine.InputSystem.LowLevel.TextEvent;
                }

                class InputMetrics {
                    protected [__keep_incompatibility]: never;
                    public maxNumDevices: number;
                    public currentNumDevices: number;
                    public maxStateSizeInBytes: number;
                    public currentStateSizeInBytes: number;
                    public currentControlCount: number;
                    public currentLayoutCount: number;
                    public totalEventBytes: number;
                    public totalEventCount: number;
                    public totalUpdateCount: number;
                    public totalEventProcessingTime: number;
                    public totalEventLagTime: number;
                    public get averageEventBytesPerFrame(): number;
                    public get averageProcessingTimePerEvent(): number;
                    public get averageLagTimePerEvent(): number;
                }

                enum InputUpdateType {
                    None = 0,
                    Dynamic = 1,
                    Fixed = 2,
                    BeforeRender = 4,
                    Editor = 8,
                    Default = 11,
                    Manual = 16
                }

                interface IInputStateCallbackReceiver {
                    OnNextUpdate(): void;
                    OnStateEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                    GetStateOffsetForEvent($control: UnityEngine.InputSystem.InputControl, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr, $offset: $Ref<number>): boolean;
                }

                interface IInputStateChangeMonitor {
                    NotifyControlStateChanged($control: UnityEngine.InputSystem.InputControl, $time: number, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr, $monitorIndex: bigint): void;
                    NotifyTimerExpired($control: UnityEngine.InputSystem.InputControl, $time: number, $monitorIndex: bigint, $timerIndex: number): void;
                }

                interface IInputStateTypeInfo {
                    get format(): UnityEngine.InputSystem.Utilities.FourCC;
                }

                class InputState {
                    protected [__keep_incompatibility]: never;
                    public static get currentUpdateType(): UnityEngine.InputSystem.LowLevel.InputUpdateType;
                    public static get updateCount(): number;
                    public static get currentTime(): number;
                    public static Change($device: UnityEngine.InputSystem.InputDevice, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr, $updateType?: UnityEngine.InputSystem.LowLevel.InputUpdateType): void;
                    public static Change<TState>($control: UnityEngine.InputSystem.InputControl, $state: TState, $updateType?: UnityEngine.InputSystem.LowLevel.InputUpdateType, $eventPtr?: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                    public static Change<TState>($control: UnityEngine.InputSystem.InputControl, $state: $Ref<TState>, $updateType?: UnityEngine.InputSystem.LowLevel.InputUpdateType, $eventPtr?: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                    public static IsIntegerFormat(): boolean;
                    public static AddChangeMonitor($control: UnityEngine.InputSystem.InputControl, $monitor: UnityEngine.InputSystem.LowLevel.IInputStateChangeMonitor, $monitorIndex?: bigint, $groupIndex?: number): void;
                    public static AddChangeMonitor($control: UnityEngine.InputSystem.InputControl, $valueChangeCallback: System.Action$4<UnityEngine.InputSystem.InputControl, number, UnityEngine.InputSystem.LowLevel.InputEventPtr, bigint>, $monitorIndex?: number, $timerExpiredCallback?: System.Action$4<UnityEngine.InputSystem.InputControl, number, bigint, number>): UnityEngine.InputSystem.LowLevel.IInputStateChangeMonitor;
                    public static RemoveChangeMonitor($control: UnityEngine.InputSystem.InputControl, $monitor: UnityEngine.InputSystem.LowLevel.IInputStateChangeMonitor, $monitorIndex?: bigint): void;
                    public static AddChangeMonitorTimeout($control: UnityEngine.InputSystem.InputControl, $monitor: UnityEngine.InputSystem.LowLevel.IInputStateChangeMonitor, $time: number, $monitorIndex?: bigint, $timerIndex?: number): void;
                    public static RemoveChangeMonitorTimeout($monitor: UnityEngine.InputSystem.LowLevel.IInputStateChangeMonitor, $monitorIndex?: bigint, $timerIndex?: number): void;
                    public static add_onChange(handler: System.Action$2<UnityEngine.InputSystem.InputDevice, UnityEngine.InputSystem.LowLevel.InputEventPtr>): void;
                    public static remove_onChange(handler: System.Action$2<UnityEngine.InputSystem.InputDevice, UnityEngine.InputSystem.LowLevel.InputEventPtr>): void;
                }

                class InputStateBlock {
                    protected [__keep_incompatibility]: never;
                    public static readonly InvalidOffset: number;
                    public static readonly AutomaticOffset: number;
                    public static readonly FormatInvalid: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatBit: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatSBit: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatInt: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatUInt: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatShort: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatUShort: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatByte: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatSByte: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatLong: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatULong: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatFloat: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatDouble: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatVector2: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatVector3: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatQuaternion: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatVector2Short: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatVector3Short: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatVector2Byte: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatVector3Byte: UnityEngine.InputSystem.Utilities.FourCC;
                    public static readonly FormatPose: UnityEngine.InputSystem.Utilities.FourCC;
                    public format: UnityEngine.InputSystem.Utilities.FourCC;
                    public byteOffset: number;
                    public bitOffset: number;
                    public sizeInBits: number;
                    public static GetSizeOfPrimitiveFormatInBits($type: UnityEngine.InputSystem.Utilities.FourCC): number;
                    public static GetPrimitiveFormatFromType($type: System.Type): UnityEngine.InputSystem.Utilities.FourCC;
                }

                class InputStateHistory implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.LowLevel.InputStateHistory.Record>, System.Collections.IEnumerable, UnityEngine.InputSystem.LowLevel.IInputStateChangeMonitor, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get Count(): number;
                    public get version(): number;
                    public historyDepth: number;
                    public extraMemoryPerRecord: number;
                    public updateMask: UnityEngine.InputSystem.LowLevel.InputUpdateType;
                    public get controls(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputControl>;
                    public onRecordAdded: System.Action$1<UnityEngine.InputSystem.LowLevel.InputStateHistory.Record>;
                    public onShouldRecordStateChange: System.Func$4<UnityEngine.InputSystem.InputControl, number, UnityEngine.InputSystem.LowLevel.InputEventPtr, boolean>;
                    constructor($maxStateSizeInBytes: number);
                    constructor($path: string);
                    constructor($control: UnityEngine.InputSystem.InputControl);
                    constructor($controls: System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.InputControl>);
                    public Clear(): void;
                    public AddRecord($record: UnityEngine.InputSystem.LowLevel.InputStateHistory.Record): UnityEngine.InputSystem.LowLevel.InputStateHistory.Record;
                    public StartRecording(): void;
                    public StopRecording(): void;
                    public RecordStateChange($control: UnityEngine.InputSystem.InputControl, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): UnityEngine.InputSystem.LowLevel.InputStateHistory.Record;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.LowLevel.InputStateHistory.Record>;
                    public Dispose(): void;
                    public get_Item($index: number): UnityEngine.InputSystem.LowLevel.InputStateHistory.Record;
                    public set_Item($index: number, value: UnityEngine.InputSystem.LowLevel.InputStateHistory.Record): void;

                    class Record implements System.IEquatable$1<UnityEngine.InputSystem.LowLevel.InputStateHistory.Record> {
                        protected [__keep_incompatibility]: never;
                        public get valid(): boolean;
                        public get owner(): UnityEngine.InputSystem.LowLevel.InputStateHistory;
                        public get index(): number;
                        public get time(): number;
                        public get control(): UnityEngine.InputSystem.InputControl;
                        public get next(): UnityEngine.InputSystem.LowLevel.InputStateHistory.Record;
                        public get previous(): UnityEngine.InputSystem.LowLevel.InputStateHistory.Record;
                        public ReadValue<TValue>(): TValue;
                        public ReadValueAsObject(): any;
                        public CopyFrom($record: UnityEngine.InputSystem.LowLevel.InputStateHistory.Record): void;
                        public Equals($other: UnityEngine.InputSystem.LowLevel.InputStateHistory.Record): boolean;
                        public Equals($obj: any): boolean;
                        public GetHashCode(): number;
                        public ToString(): string;
                    }
                }

                class InputStateHistory<TValue> extends UnityEngine.InputSystem.LowLevel.InputStateHistory implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>>, System.Collections.Generic.IReadOnlyCollection$1<UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>>, System.Collections.Generic.IReadOnlyList$1<UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>> {
                    protected [__keep_incompatibility]: never;
                    constructor($maxStateSizeInBytes?: number | null);
                    constructor($control: UnityEngine.InputSystem.InputControl$1<TValue>);
                    constructor($path: string);
                    public AddRecord($record: UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>): UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>;
                    public RecordStateChange($control: UnityEngine.InputSystem.InputControl$1<TValue>, $value: TValue, $time?: number): UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>>;
                    public get_Item($index: number): UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>;
                    public set_Item($index: number, value: UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>): void;

                    class Record<TValue> implements System.IEquatable$1<UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>> {
                        protected [__keep_incompatibility]: never;
                        public get valid(): boolean;
                        public get owner(): UnityEngine.InputSystem.LowLevel.InputStateHistory$1<TValue>;
                        public get index(): number;
                        public get time(): number;
                        public get control(): UnityEngine.InputSystem.InputControl$1<TValue>;
                        public get next(): UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>;
                        public get previous(): UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>;
                        public ReadValue(): TValue;
                        public CopyFrom($record: UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>): void;
                        public Equals($other: UnityEngine.InputSystem.LowLevel.InputStateHistory$1.Record$1<TValue>): boolean;
                        public Equals($obj: any): boolean;
                        public GetHashCode(): number;
                        public ToString(): string;
                    }
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace OnScreen {
                class OnScreenButton extends UnityEngine.InputSystem.OnScreen.OnScreenControl implements UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IEventSystemHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public OnPointerUp($eventData: UnityEngine.EventSystems.PointerEventData): void;
                    public OnPointerDown($eventData: UnityEngine.EventSystems.PointerEventData): void;
                }

                class OnScreenControl extends UnityEngine.MonoBehaviour {
                    protected [__keep_incompatibility]: never;
                    public controlPath: string;
                    public get control(): UnityEngine.InputSystem.InputControl;
                }

                class OnScreenStick extends UnityEngine.InputSystem.OnScreen.OnScreenControl implements UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEventSystemHandler {
                    protected [__keep_incompatibility]: never;
                    public movementRange: number;
                    public dynamicOriginRange: number;
                    public useIsolatedInputActions: boolean;
                    public behaviour: UnityEngine.InputSystem.OnScreen.OnScreenStick.Behaviour;
                    constructor();
                    public OnPointerDown($eventData: UnityEngine.EventSystems.PointerEventData): void;
                    public OnDrag($eventData: UnityEngine.EventSystems.PointerEventData): void;
                    public OnPointerUp($eventData: UnityEngine.EventSystems.PointerEventData): void;

                    enum Behaviour {
                        RelativePositionWithStaticOrigin = 0,
                        ExactPositionWithStaticOrigin = 1,
                        ExactPositionWithDynamicOrigin = 2
                    }
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace OSX {
                class NimbusGamepadHid extends UnityEngine.InputSystem.Gamepad {
                    protected [__keep_incompatibility]: never;
                    public get homeButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Processors {
                class AxisDeadzoneProcessor extends UnityEngine.InputSystem.InputProcessor$1<number> {
                    protected [__keep_incompatibility]: never;
                    public min: number;
                    public max: number;
                    constructor();
                    public Process($value: number, $control?: UnityEngine.InputSystem.InputControl): number;
                    public ToString(): string;
                }

                class ClampProcessor extends UnityEngine.InputSystem.InputProcessor$1<number> {
                    protected [__keep_incompatibility]: never;
                    public min: number;
                    public max: number;
                    constructor();
                    public Process($value: number, $control: UnityEngine.InputSystem.InputControl): number;
                    public ToString(): string;
                }

                class EditorWindowSpaceProcessor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Process($value: UnityEngine.Vector2, $control: UnityEngine.InputSystem.InputControl): UnityEngine.Vector2;
                }

                class InvertProcessor extends UnityEngine.InputSystem.InputProcessor$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Process($value: number, $control: UnityEngine.InputSystem.InputControl): number;
                    public ToString(): string;
                }

                class InvertVector2Processor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    public invertX: boolean;
                    public invertY: boolean;
                    constructor();
                    public Process($value: UnityEngine.Vector2, $control: UnityEngine.InputSystem.InputControl): UnityEngine.Vector2;
                    public ToString(): string;
                }

                class InvertVector3Processor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector3> {
                    protected [__keep_incompatibility]: never;
                    public invertX: boolean;
                    public invertY: boolean;
                    public invertZ: boolean;
                    constructor();
                    public Process($value: UnityEngine.Vector3, $control: UnityEngine.InputSystem.InputControl): UnityEngine.Vector3;
                    public ToString(): string;
                }

                class NormalizeProcessor extends UnityEngine.InputSystem.InputProcessor$1<number> {
                    protected [__keep_incompatibility]: never;
                    public min: number;
                    public max: number;
                    public zero: number;
                    constructor();
                    public Process($value: number, $control: UnityEngine.InputSystem.InputControl): number;
                    public static Normalize($value: number, $min: number, $max: number, $zero: number): number;
                    public ToString(): string;
                }

                class NormalizeVector2Processor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Process($value: UnityEngine.Vector2, $control: UnityEngine.InputSystem.InputControl): UnityEngine.Vector2;
                    public ToString(): string;
                }

                class NormalizeVector3Processor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector3> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Process($value: UnityEngine.Vector3, $control: UnityEngine.InputSystem.InputControl): UnityEngine.Vector3;
                    public ToString(): string;
                }

                class ScaleProcessor extends UnityEngine.InputSystem.InputProcessor$1<number> {
                    protected [__keep_incompatibility]: never;
                    public factor: number;
                    constructor();
                    public Process($value: number, $control: UnityEngine.InputSystem.InputControl): number;
                    public ToString(): string;
                }

                class ScaleVector2Processor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    public x: number;
                    public y: number;
                    constructor();
                    public Process($value: UnityEngine.Vector2, $control: UnityEngine.InputSystem.InputControl): UnityEngine.Vector2;
                    public ToString(): string;
                }

                class ScaleVector3Processor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector3> {
                    protected [__keep_incompatibility]: never;
                    public x: number;
                    public y: number;
                    public z: number;
                    constructor();
                    public Process($value: UnityEngine.Vector3, $control: UnityEngine.InputSystem.InputControl): UnityEngine.Vector3;
                    public ToString(): string;
                }

                class StickDeadzoneProcessor extends UnityEngine.InputSystem.InputProcessor$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    public min: number;
                    public max: number;
                    constructor();
                    public Process($value: UnityEngine.Vector2, $control?: UnityEngine.InputSystem.InputControl): UnityEngine.Vector2;
                    public ToString(): string;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Switch {
                class SwitchProControllerHID extends UnityEngine.InputSystem.Gamepad implements UnityEngine.InputSystem.LowLevel.IInputStateCallbackReceiver, UnityEngine.InputSystem.LowLevel.IEventPreProcessor {
                    protected [__keep_incompatibility]: never;
                    public get captureButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get homeButton(): UnityEngine.InputSystem.Controls.ButtonControl;
                    constructor();
                    public OnNextUpdate(): void;
                    public OnStateEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): void;
                    public GetStateOffsetForEvent($control: UnityEngine.InputSystem.InputControl, $eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr, $offset: $Ref<number>): boolean;
                    public PreProcessEvent($eventPtr: UnityEngine.InputSystem.LowLevel.InputEventPtr): boolean;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace UI {
                class ExtendedPointerEventData extends UnityEngine.EventSystems.PointerEventData {
                    protected [__keep_incompatibility]: never;
                    public control: UnityEngine.InputSystem.InputControl;
                    public device: UnityEngine.InputSystem.InputDevice;
                    public touchId: number;
                    public pointerType: UnityEngine.InputSystem.UI.UIPointerType;
                    public uiToolkitPointerId: number;
                    public trackedDevicePosition: UnityEngine.Vector3;
                    public trackedDeviceOrientation: UnityEngine.Quaternion;
                    constructor($eventSystem: UnityEngine.EventSystems.EventSystem);
                    public ToString(): string;
                }

                enum UIPointerType {
                    None = 0,
                    MouseOrPen = 1,
                    Touch = 2,
                    Tracked = 3
                }

                enum UIPointerBehavior {
                    SingleMouseOrPenButMultiTouchAndTrack = 0,
                    SingleUnifiedPointer = 1,
                    AllPointersAsIs = 2
                }

                class InputSystemUIInputModule extends UnityEngine.EventSystems.BaseInputModule {
                    protected [__keep_incompatibility]: never;
                    public deselectOnBackgroundClick: boolean;
                    public pointerBehavior: UnityEngine.InputSystem.UI.UIPointerBehavior;
                    public cursorLockBehavior: UnityEngine.InputSystem.UI.InputSystemUIInputModule.CursorLockBehavior;
                    public scrollDeltaPerTick: number;
                    public moveRepeatDelay: number;
                    public moveRepeatRate: number;
                    public repeatRate: number;
                    public repeatDelay: number;
                    public xrTrackingOrigin: UnityEngine.Transform;
                    public trackedDeviceDragThresholdMultiplier: number;
                    public point: UnityEngine.InputSystem.InputActionReference;
                    public scrollWheel: UnityEngine.InputSystem.InputActionReference;
                    public leftClick: UnityEngine.InputSystem.InputActionReference;
                    public middleClick: UnityEngine.InputSystem.InputActionReference;
                    public rightClick: UnityEngine.InputSystem.InputActionReference;
                    public move: UnityEngine.InputSystem.InputActionReference;
                    public submit: UnityEngine.InputSystem.InputActionReference;
                    public cancel: UnityEngine.InputSystem.InputActionReference;
                    public trackedDeviceOrientation: UnityEngine.InputSystem.InputActionReference;
                    public trackedDevicePosition: UnityEngine.InputSystem.InputActionReference;
                    public actionsAsset: UnityEngine.InputSystem.InputActionAsset;
                    constructor();
                    public ActivateModule(): void;
                    public IsPointerOverGameObject($pointerOrTouchId: number): boolean;
                    public GetLastRaycastResult($pointerOrTouchId: number): UnityEngine.EventSystems.RaycastResult;
                    public AssignDefaultActions(): void;
                    public UnassignActions(): void;
                    public Process(): void;
                    public ConvertUIToolkitPointerId($sourcePointerData: UnityEngine.EventSystems.PointerEventData): number;
                    public ConvertPointerEventScrollDeltaToTicks($scrollDelta: UnityEngine.Vector2): UnityEngine.Vector2;
                    public GetNavigationEventDeviceType($eventData: UnityEngine.EventSystems.BaseEventData): UnityEngine.EventSystems.NavigationDeviceType;

                    enum CursorLockBehavior {
                        OutsideScreen = 0,
                        ScreenCenter = 1
                    }
                }

                class MultiplayerEventSystem extends UnityEngine.EventSystems.EventSystem {
                    protected [__keep_incompatibility]: never;
                    public playerRoot: UnityEngine.GameObject;
                    constructor();
                }

                class TrackedDeviceRaycaster extends UnityEngine.EventSystems.BaseRaycaster {
                    protected [__keep_incompatibility]: never;
                    public get eventCamera(): UnityEngine.Camera;
                    public blockingMask: UnityEngine.LayerMask;
                    public checkFor3DOcclusion: boolean;
                    public checkFor2DOcclusion: boolean;
                    public ignoreReversedGraphics: boolean;
                    public maxDistance: number;
                    constructor();
                    public Raycast($eventData: UnityEngine.EventSystems.PointerEventData, $resultAppendList: System.Collections.Generic.List$1<UnityEngine.EventSystems.RaycastResult>): void;
                }

                class VirtualMouseInput extends UnityEngine.MonoBehaviour {
                    protected [__keep_incompatibility]: never;
                    public cursorTransform: UnityEngine.RectTransform;
                    public cursorSpeed: number;
                    public cursorMode: UnityEngine.InputSystem.UI.VirtualMouseInput.CursorMode;
                    public cursorGraphic: UnityEngine.UI.Graphic;
                    public scrollSpeed: number;
                    public get virtualMouse(): UnityEngine.InputSystem.Mouse;
                    public stickAction: UnityEngine.InputSystem.InputActionProperty;
                    public leftButtonAction: UnityEngine.InputSystem.InputActionProperty;
                    public rightButtonAction: UnityEngine.InputSystem.InputActionProperty;
                    public middleButtonAction: UnityEngine.InputSystem.InputActionProperty;
                    public forwardButtonAction: UnityEngine.InputSystem.InputActionProperty;
                    public backButtonAction: UnityEngine.InputSystem.InputActionProperty;
                    public scrollWheelAction: UnityEngine.InputSystem.InputActionProperty;
                    constructor();

                    enum CursorMode {
                        SoftwareCursor = 0,
                        HardwareCursorIfAvailable = 1
                    }
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Users {
                class InputUser implements System.IEquatable$1<UnityEngine.InputSystem.Users.InputUser> {
                    protected [__keep_incompatibility]: never;
                    public static readonly InvalidId: number;
                    public get valid(): boolean;
                    public get index(): number;
                    public get id(): number;
                    public get platformUserAccountHandle(): UnityEngine.InputSystem.Users.InputUserAccountHandle | null;
                    public get platformUserAccountName(): string;
                    public get platformUserAccountId(): string;
                    public get pairedDevices(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice>;
                    public get lostDevices(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.InputDevice>;
                    public get actions(): UnityEngine.InputSystem.IInputActionCollection;
                    public get controlScheme(): UnityEngine.InputSystem.InputControlScheme | null;
                    public get controlSchemeMatch(): UnityEngine.InputSystem.InputControlScheme.MatchResult;
                    public get hasMissingRequiredDevices(): boolean;
                    public static get all(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Users.InputUser>;
                    public static listenForUnpairedDeviceActivity: number;
                    public ToString(): string;
                    public AssociateActionsWithUser($actions: UnityEngine.InputSystem.IInputActionCollection): void;
                    public ActivateControlScheme($schemeName: string): UnityEngine.InputSystem.Users.InputUser.ControlSchemeChangeSyntax;
                    public ActivateControlScheme($scheme: UnityEngine.InputSystem.InputControlScheme): UnityEngine.InputSystem.Users.InputUser.ControlSchemeChangeSyntax;
                    public UnpairDevice($device: UnityEngine.InputSystem.InputDevice): void;
                    public UnpairDevices(): void;
                    public UnpairDevicesAndRemoveUser(): void;
                    public static GetUnpairedInputDevices(): UnityEngine.InputSystem.InputControlList$1<UnityEngine.InputSystem.InputDevice>;
                    public static GetUnpairedInputDevices($list: $Ref<UnityEngine.InputSystem.InputControlList$1<UnityEngine.InputSystem.InputDevice>>): number;
                    public static FindUserPairedToDevice($device: UnityEngine.InputSystem.InputDevice): UnityEngine.InputSystem.Users.InputUser | null;
                    public static FindUserByAccount($platformUserAccountHandle: UnityEngine.InputSystem.Users.InputUserAccountHandle): UnityEngine.InputSystem.Users.InputUser | null;
                    public static CreateUserWithoutPairedDevices(): UnityEngine.InputSystem.Users.InputUser;
                    public static PerformPairingWithDevice($device: UnityEngine.InputSystem.InputDevice, $user?: UnityEngine.InputSystem.Users.InputUser, $options?: UnityEngine.InputSystem.Users.InputUserPairingOptions): UnityEngine.InputSystem.Users.InputUser;
                    public Equals($other: UnityEngine.InputSystem.Users.InputUser): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                    public static add_onChange(handler: System.Action$3<UnityEngine.InputSystem.Users.InputUser, UnityEngine.InputSystem.Users.InputUserChange, UnityEngine.InputSystem.InputDevice>): void;
                    public static remove_onChange(handler: System.Action$3<UnityEngine.InputSystem.Users.InputUser, UnityEngine.InputSystem.Users.InputUserChange, UnityEngine.InputSystem.InputDevice>): void;
                    public static add_onUnpairedDeviceUsed(handler: System.Action$2<UnityEngine.InputSystem.InputControl, UnityEngine.InputSystem.LowLevel.InputEventPtr>): void;
                    public static remove_onUnpairedDeviceUsed(handler: System.Action$2<UnityEngine.InputSystem.InputControl, UnityEngine.InputSystem.LowLevel.InputEventPtr>): void;
                    public static add_onPrefilterUnpairedDeviceActivity(handler: System.Func$3<UnityEngine.InputSystem.InputDevice, UnityEngine.InputSystem.LowLevel.InputEventPtr, boolean>): void;
                    public static remove_onPrefilterUnpairedDeviceActivity(handler: System.Func$3<UnityEngine.InputSystem.InputDevice, UnityEngine.InputSystem.LowLevel.InputEventPtr, boolean>): void;

                    class ControlSchemeChangeSyntax {
                        protected [__keep_incompatibility]: never;
                        public AndPairRemainingDevices(): UnityEngine.InputSystem.Users.InputUser.ControlSchemeChangeSyntax;
                    }
                }

                class InputUserAccountHandle implements System.IEquatable$1<UnityEngine.InputSystem.Users.InputUserAccountHandle> {
                    protected [__keep_incompatibility]: never;
                    public get apiName(): string;
                    public get handle(): bigint;
                    constructor($apiName: string, $handle: bigint);
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.Users.InputUserAccountHandle): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                }

                enum InputUserChange {
                    Added = 0,
                    Removed = 1,
                    DevicePaired = 2,
                    DeviceUnpaired = 3,
                    DeviceLost = 4,
                    DeviceRegained = 5,
                    AccountChanged = 6,
                    AccountNameChanged = 7,
                    AccountSelectionInProgress = 8,
                    AccountSelectionCanceled = 9,
                    AccountSelectionComplete = 10,
                    ControlSchemeChanged = 11,
                    ControlsChanged = 12
                }

                enum InputUserPairingOptions {
                    None = 0,
                    ForcePlatformUserAccountSelection = 1,
                    ForceNoPlatformUserAccountSelection = 2,
                    UnpairCurrentDevicesFromUser = 8
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace Utilities {
                class InputActionTrace implements System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.Utilities.InputActionTrace.ActionEventPtr>, System.Collections.IEnumerable, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get buffer(): UnityEngine.InputSystem.LowLevel.InputEventBuffer;
                    public get count(): number;
                    constructor();
                    constructor($action: UnityEngine.InputSystem.InputAction);
                    constructor($actionMap: UnityEngine.InputSystem.InputActionMap);
                    public SubscribeToAll(): void;
                    public UnsubscribeFromAll(): void;
                    public SubscribeTo($action: UnityEngine.InputSystem.InputAction): void;
                    public SubscribeTo($actionMap: UnityEngine.InputSystem.InputActionMap): void;
                    public UnsubscribeFrom($action: UnityEngine.InputSystem.InputAction): void;
                    public UnsubscribeFrom($actionMap: UnityEngine.InputSystem.InputActionMap): void;
                    public RecordAction($context: UnityEngine.InputSystem.InputAction.CallbackContext): void;
                    public Clear(): void;
                    public ToString(): string;
                    public Dispose(): void;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.InputSystem.Utilities.InputActionTrace.ActionEventPtr>;

                    class ActionEventPtr {
                        protected [__keep_incompatibility]: never;
                        public get action(): UnityEngine.InputSystem.InputAction;
                        public get phase(): UnityEngine.InputSystem.InputActionPhase;
                        public get control(): UnityEngine.InputSystem.InputControl;
                        public get interaction(): UnityEngine.InputSystem.IInputInteraction;
                        public get time(): number;
                        public get startTime(): number;
                        public get duration(): number;
                        public get valueSizeInBytes(): number;
                        public ReadValueAsObject(): any;
                        public ReadValue<TValue>(): TValue;
                        public ToString(): string;
                    }
                }

                class Vector2MagnitudeComparer implements System.Collections.Generic.IComparer$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    public Compare($x: UnityEngine.Vector2, $y: UnityEngine.Vector2): number;
                }

                class Vector3MagnitudeComparer implements System.Collections.Generic.IComparer$1<UnityEngine.Vector3> {
                    protected [__keep_incompatibility]: never;
                    public Compare($x: UnityEngine.Vector3, $y: UnityEngine.Vector3): number;
                }

                class DisplayStringFormatAttribute extends System.Attribute {
                    protected [__keep_incompatibility]: never;
                    public formatString: string;
                    constructor($formatString: string);
                }

                class FourCC implements System.IEquatable$1<UnityEngine.InputSystem.Utilities.FourCC> {
                    protected [__keep_incompatibility]: never;
                    constructor($code: number);
                    constructor($a: number, $b?: number, $c?: number, $d?: number);
                    constructor($str: string);
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.Utilities.FourCC): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                    public static FromInt32($i: number): UnityEngine.InputSystem.Utilities.FourCC;
                    public static ToInt32($fourCC: UnityEngine.InputSystem.Utilities.FourCC): number;
                }

                class InternedString implements System.IEquatable$1<UnityEngine.InputSystem.Utilities.InternedString>, System.IComparable$1<UnityEngine.InputSystem.Utilities.InternedString> {
                    protected [__keep_incompatibility]: never;
                    public get length(): number;
                    constructor($text: string);
                    public IsEmpty(): boolean;
                    public ToLower(): string;
                    public Equals($obj: any): boolean;
                    public Equals($other: UnityEngine.InputSystem.Utilities.InternedString): boolean;
                    public CompareTo($other: UnityEngine.InputSystem.Utilities.InternedString): number;
                    public GetHashCode(): number;
                    public ToString(): string;
                }

                class NameAndParameters {
                    protected [__keep_incompatibility]: never;
                    public name: string;
                    public parameters: UnityEngine.InputSystem.Utilities.ReadOnlyArray$1<UnityEngine.InputSystem.Utilities.NamedValue>;
                    public ToString(): string;
                    public static ParseMultiple($text: string): System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.Utilities.NameAndParameters>;
                    public static Parse($text: string): UnityEngine.InputSystem.Utilities.NameAndParameters;
                }

                class NamedValue implements System.IEquatable$1<UnityEngine.InputSystem.Utilities.NamedValue> {
                    protected [__keep_incompatibility]: never;
                    public static readonly Separator: string;
                    public name: string;
                    public value: UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public get type(): System.TypeCode;
                    public ConvertTo($type: System.TypeCode): UnityEngine.InputSystem.Utilities.NamedValue;
                    public static From<TValue>($name: string, $value: TValue): UnityEngine.InputSystem.Utilities.NamedValue;
                    public ToString(): string;
                    public Equals($other: UnityEngine.InputSystem.Utilities.NamedValue): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                    public static ParseMultiple($parameterString: string): System.Array$1<UnityEngine.InputSystem.Utilities.NamedValue>;
                    public static Parse($str: string): UnityEngine.InputSystem.Utilities.NamedValue;
                    public ApplyToObject($instance: any): void;
                    public static ApplyAllToObject<TParameterList extends System.Collections.Generic.IEnumerable$1<UnityEngine.InputSystem.Utilities.NamedValue>>($instance: any, $parameters: TParameterList): void;
                }

                class Observable {
                    protected [__keep_incompatibility]: never;
                    public static Where<TValue>($predicate: System.Func$2<TValue, boolean>): System.IObservable$1<TValue>;
                    public static Select<TSource, TResult>($filter: System.Func$2<TSource, TResult>): System.IObservable$1<TResult>;
                    public static SelectMany<TSource, TResult>($filter: System.Func$2<TSource, System.Collections.Generic.IEnumerable$1<TResult>>): System.IObservable$1<TResult>;
                    public static Take<TValue>($count: number): System.IObservable$1<TValue>;
                    public static ForDevice($device: UnityEngine.InputSystem.InputDevice): System.IObservable$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>;
                    public static ForDevice<TDevice extends UnityEngine.InputSystem.InputDevice>(): System.IObservable$1<UnityEngine.InputSystem.LowLevel.InputEventPtr>;
                    public static CallOnce<TValue>($action: System.Action$1<TValue>): System.IDisposable;
                    public static Call<TValue>($action: System.Action$1<TValue>): System.IDisposable;
                }

                class PrimitiveValue implements System.IEquatable$1<UnityEngine.InputSystem.Utilities.PrimitiveValue>, System.IConvertible {
                    protected [__keep_incompatibility]: never;
                    public get type(): System.TypeCode;
                    public get isEmpty(): boolean;
                    constructor($value: boolean);
                    constructor($value: number);
                    constructor($value: number);
                    constructor($value: number);
                    constructor($value: number);
                    constructor($value: number);
                    constructor($value: number);
                    constructor($value: number);
                    constructor($value: bigint);
                    constructor($value: bigint);
                    constructor($value: number);
                    constructor($value: number);
                    public ConvertTo($type: System.TypeCode): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public Equals($other: UnityEngine.InputSystem.Utilities.PrimitiveValue): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                    public ToString(): string;
                    public static FromString($value: string): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public GetTypeCode(): System.TypeCode;
                    public ToBoolean($provider?: System.IFormatProvider): boolean;
                    public ToByte($provider?: System.IFormatProvider): number;
                    public ToChar($provider?: System.IFormatProvider): number;
                    public ToDateTime($provider?: System.IFormatProvider): System.DateTime;
                    public ToDecimal($provider?: System.IFormatProvider): number;
                    public ToDouble($provider?: System.IFormatProvider): number;
                    public ToInt16($provider?: System.IFormatProvider): number;
                    public ToInt32($provider?: System.IFormatProvider): number;
                    public ToInt64($provider?: System.IFormatProvider): bigint;
                    public ToSByte($provider?: System.IFormatProvider): number;
                    public ToSingle($provider?: System.IFormatProvider): number;
                    public ToString($provider: System.IFormatProvider): string;
                    public ToType($conversionType: System.Type, $provider: System.IFormatProvider): any;
                    public ToUInt16($provider?: System.IFormatProvider): number;
                    public ToUInt32($provider?: System.IFormatProvider): number;
                    public ToUInt64($provider?: System.IFormatProvider): bigint;
                    public ToObject(): any;
                    public static From<TValue>($value: TValue): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromObject($value: any): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromBoolean($value: boolean): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromChar($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromByte($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromSByte($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromInt16($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromUInt16($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromInt32($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromUInt32($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromInt64($value: bigint): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromUInt64($value: bigint): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromSingle($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                    public static FromDouble($value: number): UnityEngine.InputSystem.Utilities.PrimitiveValue;
                }

                class ReadOnlyArray<TValue> implements System.Collections.Generic.IEnumerable$1<TValue>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<TValue>, System.Collections.Generic.IReadOnlyList$1<TValue> {
                    protected [__keep_incompatibility]: never;
                    public get Count(): number;
                    constructor($array: System.Array$1<TValue>);
                    constructor($array: System.Array$1<TValue>, $index: number, $length: number);
                    public ToArray(): System.Array$1<TValue>;
                    public IndexOf($predicate: System.Predicate$1<TValue>): number;
                    public GetEnumerator(): UnityEngine.InputSystem.Utilities.ReadOnlyArray$1.Enumerator$1<TValue>;
                    public get_Item($index: number): TValue;

                    class Enumerator<TValue> implements System.Collections.Generic.IEnumerator$1<TValue>, System.Collections.IEnumerator, System.IDisposable {
                        protected [__keep_incompatibility]: never;
                        public get Current(): TValue;
                        public Dispose(): void;
                        public MoveNext(): boolean;
                        public Reset(): void;
                    }
                }

                class ReadOnlyArrayExtensions {
                    protected [__keep_incompatibility]: never;
                    public static Contains<TValue extends System.IComparable$1<TValue>>($value: TValue): boolean;
                    public static ContainsReference<TValue extends object>($value: TValue): boolean;
                    public static IndexOfReference<TValue extends object>($value: TValue): number;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace WebGL {
                class WebGLGamepad extends UnityEngine.InputSystem.Gamepad {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class WebGLJoystick extends UnityEngine.InputSystem.Joystick {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace XInput {
                interface IXboxOneRumble extends UnityEngine.InputSystem.Haptics.IHaptics, UnityEngine.InputSystem.Haptics.IDualMotorRumble {
                    SetMotorSpeeds($lowFrequency: number, $highFrequency: number, $leftTrigger: number, $rightTrigger: number): void;
                }

                class XboxGamepadMacOS extends UnityEngine.InputSystem.XInput.XInputController {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class XboxGamepadMacOSNative extends UnityEngine.InputSystem.XInput.XInputController {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class XboxOneGampadMacOSWireless extends UnityEngine.InputSystem.XInput.XInputController {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class XboxGamepadMacOSWireless extends UnityEngine.InputSystem.XInput.XInputController {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class XInputController extends UnityEngine.InputSystem.Gamepad {
                    protected [__keep_incompatibility]: never;
                    public get menu(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get view(): UnityEngine.InputSystem.Controls.ButtonControl;
                    public get subType(): UnityEngine.InputSystem.XInput.XInputController.DeviceSubType;
                    public get flags(): UnityEngine.InputSystem.XInput.XInputController.DeviceFlags;
                    constructor();

                    enum DeviceSubType {
                        Unknown = 0,
                        Gamepad = 1,
                        Wheel = 2,
                        ArcadeStick = 3,
                        FlightStick = 4,
                        DancePad = 5,
                        Guitar = 6,
                        GuitarAlternate = 7,
                        DrumKit = 8,
                        GuitarBass = 11,
                        ArcadePad = 19
                    }

                    enum DeviceFlags {
                        ForceFeedbackSupported = 1,
                        Wireless = 2,
                        VoiceSupported = 4,
                        PluginModulesSupported = 8,
                        NoNavigation = 16
                    }
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace XR {
                class PoseState implements UnityEngine.InputSystem.LowLevel.IInputStateTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public isTracked: boolean;
                    public trackingState: UnityEngine.XR.InputTrackingState;
                    public position: UnityEngine.Vector3;
                    public rotation: UnityEngine.Quaternion;
                    public velocity: UnityEngine.Vector3;
                    public angularVelocity: UnityEngine.Vector3;
                    public get format(): UnityEngine.InputSystem.Utilities.FourCC;
                    constructor($isTracked: boolean, $trackingState: UnityEngine.XR.InputTrackingState, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $velocity: UnityEngine.Vector3, $angularVelocity: UnityEngine.Vector3);
                }

                class PoseControl extends UnityEngine.InputSystem.InputControl$1<UnityEngine.InputSystem.XR.PoseState> {
                    protected [__keep_incompatibility]: never;
                    public isTracked: UnityEngine.InputSystem.Controls.ButtonControl;
                    public trackingState: UnityEngine.InputSystem.Controls.IntegerControl;
                    public position: UnityEngine.InputSystem.Controls.Vector3Control;
                    public rotation: UnityEngine.InputSystem.Controls.QuaternionControl;
                    public velocity: UnityEngine.InputSystem.Controls.Vector3Control;
                    public angularVelocity: UnityEngine.InputSystem.Controls.Vector3Control;
                    constructor();
                }

                class XRHMD extends UnityEngine.InputSystem.TrackedDevice {
                    protected [__keep_incompatibility]: never;
                    public get leftEyePosition(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get leftEyeRotation(): UnityEngine.InputSystem.Controls.QuaternionControl;
                    public get rightEyePosition(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get rightEyeRotation(): UnityEngine.InputSystem.Controls.QuaternionControl;
                    public get centerEyePosition(): UnityEngine.InputSystem.Controls.Vector3Control;
                    public get centerEyeRotation(): UnityEngine.InputSystem.Controls.QuaternionControl;
                    constructor();
                }

                class XRController extends UnityEngine.InputSystem.TrackedDevice {
                    protected [__keep_incompatibility]: never;
                    public static get leftHand(): UnityEngine.InputSystem.XR.XRController;
                    public static get rightHand(): UnityEngine.InputSystem.XR.XRController;
                    constructor();
                }

                class XRControllerWithRumble extends UnityEngine.InputSystem.XR.XRController {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SendImpulse($amplitude: number, $duration: number): void;
                }

                class TrackedPoseDriver extends UnityEngine.MonoBehaviour implements UnityEngine.ISerializationCallbackReceiver {
                    protected [__keep_incompatibility]: never;
                    public trackingType: UnityEngine.InputSystem.XR.TrackedPoseDriver.TrackingType;
                    public updateType: UnityEngine.InputSystem.XR.TrackedPoseDriver.UpdateType;
                    public ignoreTrackingState: boolean;
                    public positionInput: UnityEngine.InputSystem.InputActionProperty;
                    public rotationInput: UnityEngine.InputSystem.InputActionProperty;
                    public trackingStateInput: UnityEngine.InputSystem.InputActionProperty;
                    public positionAction: UnityEngine.InputSystem.InputAction;
                    public rotationAction: UnityEngine.InputSystem.InputAction;
                    constructor();

                    enum TrackingType {
                        RotationAndPosition = 0,
                        RotationOnly = 1,
                        PositionOnly = 2
                    }

                    enum UpdateType {
                        UpdateAndBeforeRender = 0,
                        Update = 1,
                        BeforeRender = 2
                    }
                }

                class XRUtilities {
                    protected [__keep_incompatibility]: never;
                    public static readonly InterfaceMatchAnyVersion: string;
                    public static readonly InterfaceV1: string;
                    public static readonly InterfaceCurrent: string;
                }

                enum FeatureType {
                    Custom = 0,
                    Binary = 1,
                    DiscreteStates = 2,
                    Axis1D = 3,
                    Axis2D = 4,
                    Axis3D = 5,
                    Rotation = 6,
                    Hand = 7,
                    Bone = 8,
                    Eyes = 9
                }

                class UsageHint {
                    protected [__keep_incompatibility]: never;
                    public content: string;
                }

                class XRFeatureDescriptor {
                    protected [__keep_incompatibility]: never;
                    public name: string;
                    public usageHints: System.Collections.Generic.List$1<UnityEngine.InputSystem.XR.UsageHint>;
                    public featureType: UnityEngine.InputSystem.XR.FeatureType;
                    public customSize: number;
                }

                class XRDeviceDescriptor {
                    protected [__keep_incompatibility]: never;
                    public deviceName: string;
                    public manufacturer: string;
                    public serialNumber: string;
                    public characteristics: UnityEngine.XR.InputDeviceCharacteristics;
                    public deviceId: number;
                    public inputFeatures: System.Collections.Generic.List$1<UnityEngine.InputSystem.XR.XRFeatureDescriptor>;
                    constructor();
                    public ToJson(): string;
                    public static FromJson($json: string): UnityEngine.InputSystem.XR.XRDeviceDescriptor;
                }

                class Bone {
                    protected [__keep_incompatibility]: never;
                    public m_ParentBoneIndex: number;
                    public m_Position: UnityEngine.Vector3;
                    public m_Rotation: UnityEngine.Quaternion;
                    public parentBoneIndex: number;
                    public position: UnityEngine.Vector3;
                    public rotation: UnityEngine.Quaternion;
                }

                class Eyes {
                    protected [__keep_incompatibility]: never;
                    public m_LeftEyePosition: UnityEngine.Vector3;
                    public m_LeftEyeRotation: UnityEngine.Quaternion;
                    public m_RightEyePosition: UnityEngine.Vector3;
                    public m_RightEyeRotation: UnityEngine.Quaternion;
                    public m_FixationPoint: UnityEngine.Vector3;
                    public m_LeftEyeOpenAmount: number;
                    public m_RightEyeOpenAmount: number;
                    public leftEyePosition: UnityEngine.Vector3;
                    public leftEyeRotation: UnityEngine.Quaternion;
                    public rightEyePosition: UnityEngine.Vector3;
                    public rightEyeRotation: UnityEngine.Quaternion;
                    public fixationPoint: UnityEngine.Vector3;
                    public leftEyeOpenAmount: number;
                    public rightEyeOpenAmount: number;
                }

                class BoneControl extends UnityEngine.InputSystem.InputControl$1<UnityEngine.InputSystem.XR.Bone> {
                    protected [__keep_incompatibility]: never;
                    public parentBoneIndex: UnityEngine.InputSystem.Controls.IntegerControl;
                    public position: UnityEngine.InputSystem.Controls.Vector3Control;
                    public rotation: UnityEngine.InputSystem.Controls.QuaternionControl;
                    constructor();
                }

                class EyesControl extends UnityEngine.InputSystem.InputControl$1<UnityEngine.InputSystem.XR.Eyes> {
                    protected [__keep_incompatibility]: never;
                    public leftEyePosition: UnityEngine.InputSystem.Controls.Vector3Control;
                    public leftEyeRotation: UnityEngine.InputSystem.Controls.QuaternionControl;
                    public rightEyePosition: UnityEngine.InputSystem.Controls.Vector3Control;
                    public rightEyeRotation: UnityEngine.InputSystem.Controls.QuaternionControl;
                    public fixationPoint: UnityEngine.InputSystem.Controls.Vector3Control;
                    public leftEyeOpenAmount: UnityEngine.InputSystem.Controls.AxisControl;
                    public rightEyeOpenAmount: UnityEngine.InputSystem.Controls.AxisControl;
                    constructor();
                }

            }
        }
    }
    namespace UnityEngine {
        namespace InputSystem {
            namespace XR {
                namespace Haptics {
                    class BufferedRumble {
                        protected [__keep_incompatibility]: never;
                        public get capabilities(): UnityEngine.InputSystem.XR.Haptics.HapticCapabilities;
                        constructor($device: UnityEngine.InputSystem.InputDevice);
                        public EnqueueRumble($samples: System.Array$1<number>): void;
                    }

                    class HapticState {
                        protected [__keep_incompatibility]: never;
                        public get samplesQueued(): number;
                        public get samplesAvailable(): number;
                        constructor($samplesQueued: number, $samplesAvailable: number);
                    }

                    class GetCurrentHapticStateCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                        protected [__keep_incompatibility]: never;
                        public samplesQueued: number;
                        public samplesAvailable: number;
                        public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                        public get currentState(): UnityEngine.InputSystem.XR.Haptics.HapticState;
                        public static Create(): UnityEngine.InputSystem.XR.Haptics.GetCurrentHapticStateCommand;
                    }

                    class HapticCapabilities {
                        protected [__keep_incompatibility]: never;
                        public get numChannels(): number;
                        public get supportsImpulse(): boolean;
                        public get supportsBuffer(): boolean;
                        public get frequencyHz(): number;
                        public get maxBufferSize(): number;
                        public get optimalBufferSize(): number;
                        constructor($numChannels: number, $supportsImpulse: boolean, $supportsBuffer: boolean, $frequencyHz: number, $maxBufferSize: number, $optimalBufferSize: number);
                        constructor($numChannels: number, $frequencyHz: number, $maxBufferSize: number);
                    }

                    class GetHapticCapabilitiesCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                        protected [__keep_incompatibility]: never;
                        public numChannels: number;
                        public supportsImpulse: boolean;
                        public supportsBuffer: boolean;
                        public frequencyHz: number;
                        public maxBufferSize: number;
                        public optimalBufferSize: number;
                        public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                        public get capabilities(): UnityEngine.InputSystem.XR.Haptics.HapticCapabilities;
                        public static Create(): UnityEngine.InputSystem.XR.Haptics.GetHapticCapabilitiesCommand;
                    }

                    class SendBufferedHapticCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                        protected [__keep_incompatibility]: never;
                        public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                        public static Create($rumbleBuffer: System.Array$1<number>): UnityEngine.InputSystem.XR.Haptics.SendBufferedHapticCommand;
                    }

                    class SendHapticImpulseCommand implements UnityEngine.InputSystem.LowLevel.IInputDeviceCommandInfo {
                        protected [__keep_incompatibility]: never;
                        public get typeStatic(): UnityEngine.InputSystem.Utilities.FourCC;
                        public static Create($motorChannel: number, $motorAmplitude: number, $motorDuration: number): UnityEngine.InputSystem.XR.Haptics.SendHapticImpulseCommand;
                    }

                }
            }
        }
    }
    namespace UnityEngine {
        namespace XR {
            namespace WindowsMR {
                namespace Input {
                    class WMRHMD extends UnityEngine.InputSystem.XR.XRHMD {
                        protected [__keep_incompatibility]: never;
                        public get userPresence(): UnityEngine.InputSystem.Controls.ButtonControl;
                        constructor();
                    }

                    class HololensHand extends UnityEngine.InputSystem.XR.XRController {
                        protected [__keep_incompatibility]: never;
                        public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get airTap(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get sourceLossRisk(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get sourceLossMitigationDirection(): UnityEngine.InputSystem.Controls.Vector3Control;
                        constructor();
                    }

                    class WMRSpatialController extends UnityEngine.InputSystem.XR.XRControllerWithRumble {
                        protected [__keep_incompatibility]: never;
                        public get joystick(): UnityEngine.InputSystem.Controls.Vector2Control;
                        public get touchpad(): UnityEngine.InputSystem.Controls.Vector2Control;
                        public get grip(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get gripPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get menu(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get trigger(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get triggerPressed(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get joystickClicked(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get touchpadClicked(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get touchpadTouched(): UnityEngine.InputSystem.Controls.ButtonControl;
                        public get deviceVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get deviceAngularVelocity(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get batteryLevel(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get sourceLossRisk(): UnityEngine.InputSystem.Controls.AxisControl;
                        public get sourceLossMitigationDirection(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get pointerPosition(): UnityEngine.InputSystem.Controls.Vector3Control;
                        public get pointerRotation(): UnityEngine.InputSystem.Controls.QuaternionControl;
                        constructor();
                    }

                }
            }
        }
    }
}
