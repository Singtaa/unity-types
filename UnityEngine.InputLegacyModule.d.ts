declare namespace CS {
    namespace UnityEngine {
        class AndroidInput {
            protected [__keep_incompatibility]: never;
            public static get touchCountSecondary(): number;
            public static get secondaryTouchEnabled(): boolean;
            public static get secondaryTouchWidth(): number;
            public static get secondaryTouchHeight(): number;
            public static GetSecondaryTouch($index: number): UnityEngine.Touch;
        }

        enum TouchPhase {
            Began = 0,
            Moved = 1,
            Stationary = 2,
            Ended = 3,
            Canceled = 4
        }

        enum IMECompositionMode {
            Auto = 0,
            On = 1,
            Off = 2
        }

        enum TouchType {
            Direct = 0,
            Indirect = 1,
            Stylus = 2
        }

        class Touch {
            protected [__keep_incompatibility]: never;
            public fingerId: number;
            public position: UnityEngine.Vector2;
            public rawPosition: UnityEngine.Vector2;
            public deltaPosition: UnityEngine.Vector2;
            public deltaTime: number;
            public tapCount: number;
            public phase: UnityEngine.TouchPhase;
            public pressure: number;
            public maximumPossiblePressure: number;
            public type: UnityEngine.TouchType;
            public altitudeAngle: number;
            public azimuthAngle: number;
            public radius: number;
            public radiusVariance: number;
        }

        enum PenStatus {
            None = 0,
            Contact = 1,
            Barrel = 2,
            Inverted = 4,
            Eraser = 8
        }

        enum PenEventType {
            NoContact = 0,
            PenDown = 1,
            PenUp = 2
        }

        class PenData {
            protected [__keep_incompatibility]: never;
            public position: UnityEngine.Vector2;
            public tilt: UnityEngine.Vector2;
            public penStatus: UnityEngine.PenStatus;
            public twist: number;
            public pressure: number;
            public contactType: UnityEngine.PenEventType;
            public deltaPos: UnityEngine.Vector2;
        }

        enum DeviceOrientation {
            Unknown = 0,
            Portrait = 1,
            PortraitUpsideDown = 2,
            LandscapeLeft = 3,
            LandscapeRight = 4,
            FaceUp = 5,
            FaceDown = 6
        }

        class AccelerationEvent {
            protected [__keep_incompatibility]: never;
            public get acceleration(): UnityEngine.Vector3;
            public get deltaTime(): number;
        }

        class Gyroscope {
            protected [__keep_incompatibility]: never;
            public get rotationRate(): UnityEngine.Vector3;
            public get rotationRateUnbiased(): UnityEngine.Vector3;
            public get gravity(): UnityEngine.Vector3;
            public get userAcceleration(): UnityEngine.Vector3;
            public get attitude(): UnityEngine.Quaternion;
            public enabled: boolean;
            public updateInterval: number;
        }

        class LocationInfo {
            protected [__keep_incompatibility]: never;
            public get latitude(): number;
            public get longitude(): number;
            public get altitude(): number;
            public get horizontalAccuracy(): number;
            public get verticalAccuracy(): number;
            public get timestamp(): number;
        }

        enum LocationServiceStatus {
            Stopped = 0,
            Initializing = 1,
            Running = 2,
            Failed = 3
        }

        class LocationService {
            protected [__keep_incompatibility]: never;
            public get isEnabledByUser(): boolean;
            public get status(): UnityEngine.LocationServiceStatus;
            public get lastData(): UnityEngine.LocationInfo;
            constructor();
            public Start($desiredAccuracyInMeters: number, $updateDistanceInMeters: number): void;
            public Start($desiredAccuracyInMeters: number): void;
            public Start(): void;
            public Stop(): void;
        }

        class Compass {
            protected [__keep_incompatibility]: never;
            public get magneticHeading(): number;
            public get trueHeading(): number;
            public get headingAccuracy(): number;
            public get rawVector(): UnityEngine.Vector3;
            public get timestamp(): number;
            public enabled: boolean;
            constructor();
        }

        class Input {
            protected [__keep_incompatibility]: never;
            public static simulateMouseWithTouches: boolean;
            public static get anyKey(): boolean;
            public static get anyKeyDown(): boolean;
            public static get inputString(): string;
            public static get mousePosition(): UnityEngine.Vector3;
            public static get mousePositionDelta(): UnityEngine.Vector3;
            public static get mouseScrollDelta(): UnityEngine.Vector2;
            public static imeCompositionMode: UnityEngine.IMECompositionMode;
            public static get compositionString(): string;
            public static get imeIsSelected(): boolean;
            public static compositionCursorPos: UnityEngine.Vector2;
            public static eatKeyPressOnTextFieldFocus: boolean;
            public static get mousePresent(): boolean;
            public static get touchSupported(): boolean;
            public static get penEventCount(): number;
            public static get touchCount(): number;
            public static get touchPressureSupported(): boolean;
            public static get stylusTouchSupported(): boolean;
            public static multiTouchEnabled: boolean;
            public static get isGyroAvailable(): boolean;
            public static get deviceOrientation(): UnityEngine.DeviceOrientation;
            public static get acceleration(): UnityEngine.Vector3;
            public static compensateSensors: boolean;
            public static get accelerationEventCount(): number;
            public static backButtonLeavesApp: boolean;
            public static get location(): UnityEngine.LocationService;
            public static get compass(): UnityEngine.Compass;
            public static get gyro(): UnityEngine.Gyroscope;
            public static get touches(): System.Array$1<UnityEngine.Touch>;
            public static get accelerationEvents(): System.Array$1<UnityEngine.AccelerationEvent>;
            constructor();
            public static GetAxis($axisName: string): number;
            public static GetAxisRaw($axisName: string): number;
            public static GetButton($buttonName: string): boolean;
            public static GetButtonDown($buttonName: string): boolean;
            public static GetButtonUp($buttonName: string): boolean;
            public static GetMouseButton($button: number): boolean;
            public static GetMouseButtonDown($button: number): boolean;
            public static GetMouseButtonUp($button: number): boolean;
            public static ResetInputAxes(): void;
            public static IsJoystickPreconfigured($joystickName: string): boolean;
            public static GetJoystickNames(): System.Array$1<string>;
            public static GetTouch($index: number): UnityEngine.Touch;
            public static GetPenEvent($index: number): UnityEngine.PenData;
            public static GetLastPenContactEvent(): UnityEngine.PenData;
            public static ResetPenEvents(): void;
            public static ClearLastPenContactEvent(): void;
            public static GetAccelerationEvent($index: number): UnityEngine.AccelerationEvent;
            public static GetKey($key: UnityEngine.KeyCode): boolean;
            public static GetKey($name: string): boolean;
            public static GetKeyUp($key: UnityEngine.KeyCode): boolean;
            public static GetKeyUp($name: string): boolean;
            public static GetKeyDown($key: UnityEngine.KeyCode): boolean;
            public static GetKeyDown($name: string): boolean;
        }

    }
}
