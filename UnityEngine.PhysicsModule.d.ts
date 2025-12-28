declare namespace CS {
    namespace UnityEngine {
        class ContactPoint {
            protected [__keep_incompatibility]: never;
            public get point(): UnityEngine.Vector3;
            public get normal(): UnityEngine.Vector3;
            public get impulse(): UnityEngine.Vector3;
            public get thisCollider(): UnityEngine.Collider;
            public get otherCollider(): UnityEngine.Collider;
            public get separation(): number;
        }

        class Collision {
            protected [__keep_incompatibility]: never;
            public get impulse(): UnityEngine.Vector3;
            public get relativeVelocity(): UnityEngine.Vector3;
            public get rigidbody(): UnityEngine.Rigidbody;
            public get articulationBody(): UnityEngine.ArticulationBody;
            public get body(): UnityEngine.Component;
            public get collider(): UnityEngine.Collider;
            public get transform(): UnityEngine.Transform;
            public get gameObject(): UnityEngine.GameObject;
            public get contactCount(): number;
            public get contacts(): System.Array$1<UnityEngine.ContactPoint>;
            constructor();
            public GetContact($index: number): UnityEngine.ContactPoint;
            public GetContacts($contacts: System.Array$1<UnityEngine.ContactPoint>): number;
            public GetContacts($contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint>): number;
        }

        enum CollisionDetectionMode {
            Discrete = 0,
            Continuous = 1,
            ContinuousDynamic = 2,
            ContinuousSpeculative = 3
        }

        enum ForceMode {
            Force = 0,
            Impulse = 1,
            VelocityChange = 2,
            Acceleration = 5
        }

        class SoftJointLimit {
            protected [__keep_incompatibility]: never;
            public limit: number;
            public bounciness: number;
            public contactDistance: number;
        }

        class SoftJointLimitSpring {
            protected [__keep_incompatibility]: never;
            public spring: number;
            public damper: number;
        }

        class JointDrive {
            protected [__keep_incompatibility]: never;
            public positionSpring: number;
            public positionDamper: number;
            public maximumForce: number;
            public useAcceleration: boolean;
        }

        class JointMotor {
            protected [__keep_incompatibility]: never;
            public targetVelocity: number;
            public force: number;
            public freeSpin: boolean;
        }

        class JointSpring {
            protected [__keep_incompatibility]: never;
            public spring: number;
            public damper: number;
            public targetPosition: number;
        }

        class JointLimits {
            protected [__keep_incompatibility]: never;
            public min: number;
            public max: number;
            public bounciness: number;
            public bounceMinVelocity: number;
            public contactDistance: number;
        }

        class WheelFrictionCurve {
            protected [__keep_incompatibility]: never;
            public extremumSlip: number;
            public extremumValue: number;
            public asymptoteSlip: number;
            public asymptoteValue: number;
            public stiffness: number;
        }

        enum ArticulationJointType {
            FixedJoint = 0,
            PrismaticJoint = 1,
            RevoluteJoint = 2,
            SphericalJoint = 3
        }

        enum ArticulationDofLock {
            LockedMotion = 0,
            LimitedMotion = 1,
            FreeMotion = 2
        }

        enum ArticulationDriveType {
            Force = 0,
            Acceleration = 1,
            Target = 2,
            Velocity = 3
        }

        class ArticulationDrive {
            protected [__keep_incompatibility]: never;
            public lowerLimit: number;
            public upperLimit: number;
            public stiffness: number;
            public damping: number;
            public forceLimit: number;
            public target: number;
            public targetVelocity: number;
            public driveType: UnityEngine.ArticulationDriveType;
        }

        class ArticulationReducedSpace {
            protected [__keep_incompatibility]: never;
            public dofCount: number;
            constructor($a: number);
            constructor($a: number, $b: number);
            constructor($a: number, $b: number, $c: number);
            public get_Item($i: number): number;
            public set_Item($i: number, value: number): void;
        }

        class ArticulationJacobian {
            protected [__keep_incompatibility]: never;
            public rows: number;
            public columns: number;
            public elements: System.Collections.Generic.List$1<number>;
            constructor($rows: number, $cols: number);
            public get_Item($row: number, $col: number): number;
            public set_Item($row: number, $col: number, value: number): void;
        }

        enum ArticulationDriveAxis {
            X = 0,
            Y = 1,
            Z = 2
        }

        class ArticulationBody extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public jointType: UnityEngine.ArticulationJointType;
            public anchorPosition: UnityEngine.Vector3;
            public parentAnchorPosition: UnityEngine.Vector3;
            public anchorRotation: UnityEngine.Quaternion;
            public parentAnchorRotation: UnityEngine.Quaternion;
            public get isRoot(): boolean;
            public matchAnchors: boolean;
            public linearLockX: UnityEngine.ArticulationDofLock;
            public linearLockY: UnityEngine.ArticulationDofLock;
            public linearLockZ: UnityEngine.ArticulationDofLock;
            public swingYLock: UnityEngine.ArticulationDofLock;
            public swingZLock: UnityEngine.ArticulationDofLock;
            public twistLock: UnityEngine.ArticulationDofLock;
            public xDrive: UnityEngine.ArticulationDrive;
            public yDrive: UnityEngine.ArticulationDrive;
            public zDrive: UnityEngine.ArticulationDrive;
            public immovable: boolean;
            public useGravity: boolean;
            public linearDamping: number;
            public angularDamping: number;
            public jointFriction: number;
            public excludeLayers: UnityEngine.LayerMask;
            public includeLayers: UnityEngine.LayerMask;
            public linearVelocity: UnityEngine.Vector3;
            public angularVelocity: UnityEngine.Vector3;
            public mass: number;
            public automaticCenterOfMass: boolean;
            public centerOfMass: UnityEngine.Vector3;
            public get worldCenterOfMass(): UnityEngine.Vector3;
            public automaticInertiaTensor: boolean;
            public inertiaTensor: UnityEngine.Vector3;
            public inertiaTensorRotation: UnityEngine.Quaternion;
            public sleepThreshold: number;
            public solverIterations: number;
            public solverVelocityIterations: number;
            public maxAngularVelocity: number;
            public maxLinearVelocity: number;
            public maxJointVelocity: number;
            public maxDepenetrationVelocity: number;
            public jointPosition: UnityEngine.ArticulationReducedSpace;
            public jointVelocity: UnityEngine.ArticulationReducedSpace;
            public jointAcceleration: UnityEngine.ArticulationReducedSpace;
            public jointForce: UnityEngine.ArticulationReducedSpace;
            public get driveForce(): UnityEngine.ArticulationReducedSpace;
            public get dofCount(): number;
            public get index(): number;
            public collisionDetectionMode: UnityEngine.CollisionDetectionMode;
            public velocity: UnityEngine.Vector3;
            public computeParentAnchor: boolean;
            constructor();
            public GetAccumulatedForce($step: number): UnityEngine.Vector3;
            public GetAccumulatedForce(): UnityEngine.Vector3;
            public GetAccumulatedTorque($step: number): UnityEngine.Vector3;
            public GetAccumulatedTorque(): UnityEngine.Vector3;
            public AddForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddForce($force: UnityEngine.Vector3): void;
            public AddRelativeForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddRelativeForce($force: UnityEngine.Vector3): void;
            public AddTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddTorque($torque: UnityEngine.Vector3): void;
            public AddRelativeTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddRelativeTorque($torque: UnityEngine.Vector3): void;
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3): void;
            public ResetCenterOfMass(): void;
            public ResetInertiaTensor(): void;
            public Sleep(): void;
            public IsSleeping(): boolean;
            public WakeUp(): void;
            public TeleportRoot($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion): void;
            public GetClosestPoint($point: UnityEngine.Vector3): UnityEngine.Vector3;
            public GetRelativePointVelocity($relativePoint: UnityEngine.Vector3): UnityEngine.Vector3;
            public GetPointVelocity($worldPoint: UnityEngine.Vector3): UnityEngine.Vector3;
            public GetDenseJacobian($jacobian: $Ref<UnityEngine.ArticulationJacobian>): number;
            public GetJointPositions($positions: System.Collections.Generic.List$1<number>): number;
            public SetJointPositions($positions: System.Collections.Generic.List$1<number>): void;
            public GetJointVelocities($velocities: System.Collections.Generic.List$1<number>): number;
            public SetJointVelocities($velocities: System.Collections.Generic.List$1<number>): void;
            public GetJointAccelerations($accelerations: System.Collections.Generic.List$1<number>): number;
            public GetJointForces($forces: System.Collections.Generic.List$1<number>): number;
            public SetJointForces($forces: System.Collections.Generic.List$1<number>): void;
            public GetJointForcesForAcceleration($acceleration: UnityEngine.ArticulationReducedSpace): UnityEngine.ArticulationReducedSpace;
            public GetDriveForces($forces: System.Collections.Generic.List$1<number>): number;
            public GetJointGravityForces($forces: System.Collections.Generic.List$1<number>): number;
            public GetJointCoriolisCentrifugalForces($forces: System.Collections.Generic.List$1<number>): number;
            public GetJointExternalForces($forces: System.Collections.Generic.List$1<number>, $step: number): number;
            public GetDriveTargets($targets: System.Collections.Generic.List$1<number>): number;
            public SetDriveTargets($targets: System.Collections.Generic.List$1<number>): void;
            public GetDriveTargetVelocities($targetVelocities: System.Collections.Generic.List$1<number>): number;
            public SetDriveTargetVelocities($targetVelocities: System.Collections.Generic.List$1<number>): void;
            public GetDofStartIndices($dofStartIndices: System.Collections.Generic.List$1<number>): number;
            public SetDriveTarget($axis: UnityEngine.ArticulationDriveAxis, $value: number): void;
            public SetDriveTargetVelocity($axis: UnityEngine.ArticulationDriveAxis, $value: number): void;
            public SetDriveLimits($axis: UnityEngine.ArticulationDriveAxis, $lower: number, $upper: number): void;
            public SetDriveStiffness($axis: UnityEngine.ArticulationDriveAxis, $value: number): void;
            public SetDriveDamping($axis: UnityEngine.ArticulationDriveAxis, $value: number): void;
            public SetDriveForceLimit($axis: UnityEngine.ArticulationDriveAxis, $value: number): void;
            public PublishTransform(): void;
            public SnapAnchorToClosestContact(): void;
        }

        class BoxCollider extends UnityEngine.Collider {
            protected [__keep_incompatibility]: never;
            public center: UnityEngine.Vector3;
            public size: UnityEngine.Vector3;
            constructor();
        }

        class CapsuleCollider extends UnityEngine.Collider {
            protected [__keep_incompatibility]: never;
            public center: UnityEngine.Vector3;
            public radius: number;
            public height: number;
            public direction: number;
            constructor();
        }

        enum CollisionFlags {
            None = 0,
            Sides = 1,
            CollidedSides = 1,
            Above = 2,
            CollidedAbove = 2,
            Below = 4,
            CollidedBelow = 4
        }

        class ControllerColliderHit {
            protected [__keep_incompatibility]: never;
            public get controller(): UnityEngine.CharacterController;
            public get collider(): UnityEngine.Collider;
            public get rigidbody(): UnityEngine.Rigidbody;
            public get gameObject(): UnityEngine.GameObject;
            public get transform(): UnityEngine.Transform;
            public get point(): UnityEngine.Vector3;
            public get normal(): UnityEngine.Vector3;
            public get moveDirection(): UnityEngine.Vector3;
            public get moveLength(): number;
            constructor();
        }

        class CharacterController extends UnityEngine.Collider {
            protected [__keep_incompatibility]: never;
            public get velocity(): UnityEngine.Vector3;
            public get isGrounded(): boolean;
            public get collisionFlags(): UnityEngine.CollisionFlags;
            public radius: number;
            public height: number;
            public center: UnityEngine.Vector3;
            public slopeLimit: number;
            public stepOffset: number;
            public skinWidth: number;
            public minMoveDistance: number;
            public detectCollisions: boolean;
            public enableOverlapRecovery: boolean;
            constructor();
            public SimpleMove($speed: UnityEngine.Vector3): boolean;
            public Move($motion: UnityEngine.Vector3): UnityEngine.CollisionFlags;
        }

        class CharacterJoint extends UnityEngine.Joint {
            protected [__keep_incompatibility]: never;
            public swingAxis: UnityEngine.Vector3;
            public twistLimitSpring: UnityEngine.SoftJointLimitSpring;
            public swingLimitSpring: UnityEngine.SoftJointLimitSpring;
            public lowTwistLimit: UnityEngine.SoftJointLimit;
            public highTwistLimit: UnityEngine.SoftJointLimit;
            public swing1Limit: UnityEngine.SoftJointLimit;
            public swing2Limit: UnityEngine.SoftJointLimit;
            public enableProjection: boolean;
            public projectionDistance: number;
            public projectionAngle: number;
            constructor();
        }

        class Collider extends UnityEngine.Component {
            protected [__keep_incompatibility]: never;
            public enabled: boolean;
            public get attachedRigidbody(): UnityEngine.Rigidbody;
            public get attachedArticulationBody(): UnityEngine.ArticulationBody;
            public isTrigger: boolean;
            public contactOffset: number;
            public get bounds(): UnityEngine.Bounds;
            public hasModifiableContacts: boolean;
            public providesContacts: boolean;
            public layerOverridePriority: number;
            public excludeLayers: UnityEngine.LayerMask;
            public includeLayers: UnityEngine.LayerMask;
            public get GeometryHolder(): UnityEngine.LowLevelPhysics.GeometryHolder;
            public sharedMaterial: UnityEngine.PhysicsMaterial;
            public material: UnityEngine.PhysicsMaterial;
            constructor();
            public ClosestPoint($position: UnityEngine.Vector3): UnityEngine.Vector3;
            public GetGeometry<T extends UnityEngine.LowLevelPhysics.IGeometry>(): T;
            public Raycast($ray: UnityEngine.Ray, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number): boolean;
            public ClosestPointOnBounds($position: UnityEngine.Vector3): UnityEngine.Vector3;
        }

        enum JointProjectionMode {
            None = 0,
            PositionAndRotation = 1,
            PositionOnly = 2
        }

        enum RotationDriveMode {
            XYAndZ = 0,
            Slerp = 1
        }

        enum ConfigurableJointMotion {
            Locked = 0,
            Limited = 1,
            Free = 2
        }

        class ConfigurableJoint extends UnityEngine.Joint {
            protected [__keep_incompatibility]: never;
            public secondaryAxis: UnityEngine.Vector3;
            public xMotion: UnityEngine.ConfigurableJointMotion;
            public yMotion: UnityEngine.ConfigurableJointMotion;
            public zMotion: UnityEngine.ConfigurableJointMotion;
            public angularXMotion: UnityEngine.ConfigurableJointMotion;
            public angularYMotion: UnityEngine.ConfigurableJointMotion;
            public angularZMotion: UnityEngine.ConfigurableJointMotion;
            public linearLimitSpring: UnityEngine.SoftJointLimitSpring;
            public angularXLimitSpring: UnityEngine.SoftJointLimitSpring;
            public angularYZLimitSpring: UnityEngine.SoftJointLimitSpring;
            public linearLimit: UnityEngine.SoftJointLimit;
            public lowAngularXLimit: UnityEngine.SoftJointLimit;
            public highAngularXLimit: UnityEngine.SoftJointLimit;
            public angularYLimit: UnityEngine.SoftJointLimit;
            public angularZLimit: UnityEngine.SoftJointLimit;
            public targetPosition: UnityEngine.Vector3;
            public targetVelocity: UnityEngine.Vector3;
            public xDrive: UnityEngine.JointDrive;
            public yDrive: UnityEngine.JointDrive;
            public zDrive: UnityEngine.JointDrive;
            public targetRotation: UnityEngine.Quaternion;
            public targetAngularVelocity: UnityEngine.Vector3;
            public rotationDriveMode: UnityEngine.RotationDriveMode;
            public angularXDrive: UnityEngine.JointDrive;
            public angularYZDrive: UnityEngine.JointDrive;
            public slerpDrive: UnityEngine.JointDrive;
            public projectionMode: UnityEngine.JointProjectionMode;
            public projectionDistance: number;
            public projectionAngle: number;
            public configuredInWorldSpace: boolean;
            public swapBodies: boolean;
            constructor();
        }

        class ConstantForce extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public force: UnityEngine.Vector3;
            public torque: UnityEngine.Vector3;
            public relativeForce: UnityEngine.Vector3;
            public relativeTorque: UnityEngine.Vector3;
            constructor();
        }

        class Physics {
            protected [__keep_incompatibility]: never;
            public static readonly IgnoreRaycastLayer: number;
            public static readonly DefaultRaycastLayers: number;
            public static readonly AllLayers: number;
            public static gravity: UnityEngine.Vector3;
            public static defaultContactOffset: number;
            public static sleepThreshold: number;
            public static queriesHitTriggers: boolean;
            public static queriesHitBackfaces: boolean;
            public static bounceThreshold: number;
            public static defaultMaxDepenetrationVelocity: number;
            public static defaultSolverIterations: number;
            public static defaultSolverVelocityIterations: number;
            public static simulationMode: UnityEngine.SimulationMode;
            public static defaultMaxAngularSpeed: number;
            public static improvedPatchFriction: boolean;
            public static invokeCollisionCallbacks: boolean;
            public static get defaultPhysicsScene(): UnityEngine.PhysicsScene;
            public static reuseCollisionCallbacks: boolean;
            public static interCollisionDistance: number;
            public static interCollisionStiffness: number;
            public static interCollisionSettingsToggle: boolean;
            public static clothGravity: UnityEngine.Vector3;
            public static autoSimulation: boolean;
            public static autoSyncTransforms: boolean;
            constructor();
            public static GetCurrentIntegrationInfo(): UnityEngine.IntegrationInfo;
            public static IgnoreCollision($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider, $ignore: boolean): void;
            public static IgnoreCollision($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider): void;
            public static IgnoreLayerCollision($layer1: number, $layer2: number, $ignore: boolean): void;
            public static IgnoreLayerCollision($layer1: number, $layer2: number): void;
            public static GetIgnoreLayerCollision($layer1: number, $layer2: number): boolean;
            public static GetIgnoreCollision($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number): boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public static Raycast($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static Raycast($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number): boolean;
            public static Raycast($ray: UnityEngine.Ray, $maxDistance: number): boolean;
            public static Raycast($ray: UnityEngine.Ray): boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number): boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number): boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3): boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $layerMask: number): boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number): boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number): boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $maxDistance: number): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number): boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion): boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray, $maxDistance: number): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray): System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): number;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number): number;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>): number;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.RaycastHit>;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit>;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number): System.Array$1<UnityEngine.RaycastHit>;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number, $maxDistance: number): System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number): System.Array$1<UnityEngine.RaycastHit>;
            public static OverlapCapsule($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.Collider>;
            public static OverlapCapsule($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number): System.Array$1<UnityEngine.Collider>;
            public static OverlapCapsule($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number): System.Array$1<UnityEngine.Collider>;
            public static OverlapSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.Collider>;
            public static OverlapSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number): System.Array$1<UnityEngine.Collider>;
            public static OverlapSphere($position: UnityEngine.Vector3, $radius: number): System.Array$1<UnityEngine.Collider>;
            public static Simulate($step: number): void;
            public static SyncTransforms(): void;
            public static ComputePenetration($colliderA: UnityEngine.Collider, $positionA: UnityEngine.Vector3, $rotationA: UnityEngine.Quaternion, $colliderB: UnityEngine.Collider, $positionB: UnityEngine.Vector3, $rotationB: UnityEngine.Quaternion, $direction: $Out<UnityEngine.Vector3>, $distance: $Out<number>): boolean;
            public static ClosestPoint($point: UnityEngine.Vector3, $collider: UnityEngine.Collider, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion): UnityEngine.Vector3;
            public static OverlapSphereNonAlloc($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static OverlapSphereNonAlloc($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number): number;
            public static OverlapSphereNonAlloc($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>): number;
            public static CheckSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static CheckSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number): boolean;
            public static CheckSphere($position: UnityEngine.Vector3, $radius: number): boolean;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): number;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number): number;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>): number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number): number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>): number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number): number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number): number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>): number;
            public static CheckCapsule($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static CheckCapsule($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number): boolean;
            public static CheckCapsule($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number): boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layermask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number): boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion): boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3): boolean;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.Collider>;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number): System.Array$1<UnityEngine.Collider>;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion): System.Array$1<UnityEngine.Collider>;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3): System.Array$1<UnityEngine.Collider>;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number): number;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion): number;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>): number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion): number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number): number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number): number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>): number;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number): System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion): System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3): System.Array$1<UnityEngine.RaycastHit>;
            public static OverlapCapsuleNonAlloc($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public static OverlapCapsuleNonAlloc($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number): number;
            public static OverlapCapsuleNonAlloc($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>): number;
            public static RebuildBroadphaseRegions($worldBounds: UnityEngine.Bounds, $subdivisions: number): void;
            public static BakeMesh($meshEntityId: UnityEngine.EntityId, $convex: boolean, $cookingOptions: UnityEngine.MeshColliderCookingOptions): void;
            public static BakeMesh($meshID: number, $convex: boolean, $cookingOptions: UnityEngine.MeshColliderCookingOptions): void;
            public static BakeMesh($meshID: number, $convex: boolean): void;
            public static BakeMesh($meshEntityId: UnityEngine.EntityId, $convex: boolean): void;
            public static add_ContactModifyEvent(handler: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>): void;
            public static remove_ContactModifyEvent(handler: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>): void;
            public static add_ContactModifyEventCCD(handler: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>): void;
            public static remove_ContactModifyEventCCD(handler: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>): void;
            public static add_ContactEvent(handler: UnityEngine.Physics.ContactEventDelegate): void;
            public static remove_ContactEvent(handler: UnityEngine.Physics.ContactEventDelegate): void;

            interface ContactEventDelegate {
                ($scene: UnityEngine.PhysicsScene, $headerArray: Unity.Collections.NativeArray$1.ReadOnly$1<UnityEngine.ContactPairHeader>): void;
                Invoke?: ($scene: UnityEngine.PhysicsScene, $headerArray: Unity.Collections.NativeArray$1.ReadOnly$1<UnityEngine.ContactPairHeader>) => void;
            }
            var ContactEventDelegate: { new (func: ($scene: UnityEngine.PhysicsScene, $headerArray: Unity.Collections.NativeArray$1.ReadOnly$1<UnityEngine.ContactPairHeader>) => void): ContactEventDelegate; };
        }

        class ModifiableContactPair {
            protected [__keep_incompatibility]: never;
            public rotation: UnityEngine.Quaternion;
            public position: UnityEngine.Vector3;
            public otherRotation: UnityEngine.Quaternion;
            public otherPosition: UnityEngine.Vector3;
            public get colliderInstanceID(): number;
            public get otherColliderInstanceID(): number;
            public get bodyInstanceID(): number;
            public get otherBodyInstanceID(): number;
            public get bodyVelocity(): UnityEngine.Vector3;
            public get bodyAngularVelocity(): UnityEngine.Vector3;
            public get otherBodyVelocity(): UnityEngine.Vector3;
            public get otherBodyAngularVelocity(): UnityEngine.Vector3;
            public get contactCount(): number;
            public massProperties: UnityEngine.ModifiableMassProperties;
            public GetPoint($i: number): UnityEngine.Vector3;
            public SetPoint($i: number, $v: UnityEngine.Vector3): void;
            public GetNormal($i: number): UnityEngine.Vector3;
            public SetNormal($i: number, $normal: UnityEngine.Vector3): void;
            public GetSeparation($i: number): number;
            public SetSeparation($i: number, $separation: number): void;
            public GetTargetVelocity($i: number): UnityEngine.Vector3;
            public SetTargetVelocity($i: number, $velocity: UnityEngine.Vector3): void;
            public GetBounciness($i: number): number;
            public SetBounciness($i: number, $bounciness: number): void;
            public GetStaticFriction($i: number): number;
            public SetStaticFriction($i: number, $staticFriction: number): void;
            public GetDynamicFriction($i: number): number;
            public SetDynamicFriction($i: number, $dynamicFriction: number): void;
            public GetMaxImpulse($i: number): number;
            public SetMaxImpulse($i: number, $value: number): void;
            public IgnoreContact($i: number): void;
            public GetFaceIndex($i: number): number;
        }

        class ModifiableMassProperties {
            protected [__keep_incompatibility]: never;
            public inverseMassScale: number;
            public inverseInertiaScale: number;
            public otherInverseMassScale: number;
            public otherInverseInertiaScale: number;
        }

        class FixedJoint extends UnityEngine.Joint {
            protected [__keep_incompatibility]: never;
            constructor();
        }

        class HingeJoint extends UnityEngine.Joint {
            protected [__keep_incompatibility]: never;
            public motor: UnityEngine.JointMotor;
            public limits: UnityEngine.JointLimits;
            public spring: UnityEngine.JointSpring;
            public useMotor: boolean;
            public useLimits: boolean;
            public extendedLimits: boolean;
            public useSpring: boolean;
            public get velocity(): number;
            public get angle(): number;
            public useAcceleration: boolean;
            constructor();
        }

        class Joint extends UnityEngine.Component {
            protected [__keep_incompatibility]: never;
            public connectedBody: UnityEngine.Rigidbody;
            public connectedArticulationBody: UnityEngine.ArticulationBody;
            public axis: UnityEngine.Vector3;
            public anchor: UnityEngine.Vector3;
            public connectedAnchor: UnityEngine.Vector3;
            public autoConfigureConnectedAnchor: boolean;
            public breakForce: number;
            public breakTorque: number;
            public enableCollision: boolean;
            public enablePreprocessing: boolean;
            public massScale: number;
            public connectedMassScale: number;
            public get currentForce(): UnityEngine.Vector3;
            public get currentTorque(): UnityEngine.Vector3;
            constructor();
        }

        enum MeshColliderCookingOptions {
            None = 0,
            InflateConvexMesh = 1,
            CookForFasterSimulation = 2,
            EnableMeshCleaning = 4,
            WeldColocatedVertices = 8,
            UseFastMidphase = 16
        }

        class MeshCollider extends UnityEngine.Collider {
            protected [__keep_incompatibility]: never;
            public sharedMesh: UnityEngine.Mesh;
            public convex: boolean;
            public cookingOptions: UnityEngine.MeshColliderCookingOptions;
            constructor();
        }

        enum QueryTriggerInteraction {
            UseGlobal = 0,
            Ignore = 1,
            Collide = 2
        }

        enum SimulationMode {
            FixedUpdate = 0,
            Update = 1,
            Script = 2
        }

        enum SimulationStage {
            None = 0,
            PrepareSimulation = 1,
            RunSimulation = 2,
            PublishSimulationResults = 4,
            All = 7
        }

        enum SimulationOption {
            None = 0,
            SyncTransforms = 1,
            IgnoreEmptyScenes = 2,
            All = 3
        }

        class IntegrationInfo {
            protected [__keep_incompatibility]: never;
            public get id(): number;
            public get name(): string;
            public get description(): string;
            public get isFallback(): boolean;
        }

        class ContactPairHeader {
            protected [__keep_incompatibility]: never;
            public get bodyInstanceID(): number;
            public get otherBodyInstanceID(): number;
            public get bodyEntityId(): UnityEngine.EntityId;
            public get otherBodyEntityId(): UnityEngine.EntityId;
            public get body(): UnityEngine.Component;
            public get otherBody(): UnityEngine.Component;
            public get pairCount(): number;
            public get BodyInstanceID(): number;
            public get OtherBodyInstanceID(): number;
            public get Body(): UnityEngine.Component;
            public get OtherBody(): UnityEngine.Component;
            public get PairCount(): number;
            public GetContactPair($index: number): $Ref<UnityEngine.ContactPair>;
        }

        class ContactPair {
            protected [__keep_incompatibility]: never;
            public get colliderInstanceID(): number;
            public get otherColliderInstanceID(): number;
            public get colliderEntityId(): UnityEngine.EntityId;
            public get otherColliderEntityId(): UnityEngine.EntityId;
            public get collider(): UnityEngine.Collider;
            public get otherCollider(): UnityEngine.Collider;
            public get contactCount(): number;
            public get impulseSum(): UnityEngine.Vector3;
            public get isCollisionEnter(): boolean;
            public get isCollisionExit(): boolean;
            public get isCollisionStay(): boolean;
            public get ColliderInstanceID(): number;
            public get OtherColliderInstanceID(): number;
            public get Collider(): UnityEngine.Collider;
            public get OtherCollider(): UnityEngine.Collider;
            public get ContactCount(): number;
            public get ImpulseSum(): UnityEngine.Vector3;
            public get IsCollisionEnter(): boolean;
            public get IsCollisionExit(): boolean;
            public get IsCollisionStay(): boolean;
            public CopyToNativeArray($buffer: Unity.Collections.NativeArray$1<UnityEngine.ContactPairPoint>): void;
            public GetContactPoint($index: number): $Ref<UnityEngine.ContactPairPoint>;
            public GetContactPointFaceIndex($contactIndex: number): number;
        }

        class ContactPairPoint {
            protected [__keep_incompatibility]: never;
            public get position(): UnityEngine.Vector3;
            public get separation(): number;
            public get normal(): UnityEngine.Vector3;
            public get impulse(): UnityEngine.Vector3;
            public get Position(): UnityEngine.Vector3;
            public get Separation(): number;
            public get Normal(): UnityEngine.Vector3;
            public get Impulse(): UnityEngine.Vector3;
        }

        enum PhysicsMaterialCombine {
            Average = 0,
            Multiply = 1,
            Minimum = 2,
            Maximum = 3
        }

        class PhysicsMaterial extends UnityEngine.Object {
            protected [__keep_incompatibility]: never;
            public bounciness: number;
            public dynamicFriction: number;
            public staticFriction: number;
            public frictionCombine: UnityEngine.PhysicsMaterialCombine;
            public bounceCombine: UnityEngine.PhysicsMaterialCombine;
            constructor();
            constructor($name: string);
        }

        enum PhysicMaterialCombine {
            Average = 0,
            Multiply = 1,
            Minimum = 2,
            Maximum = 3
        }

        class PhysicMaterial extends UnityEngine.Object {
            protected [__keep_incompatibility]: never;
            public bounciness: number;
            public dynamicFriction: number;
            public staticFriction: number;
            public frictionCombine: UnityEngine.PhysicMaterialCombine;
            public bounceCombine: UnityEngine.PhysicMaterialCombine;
            public bouncyness: number;
            constructor();
            constructor($name: string);
        }

        class PhysicsScene implements System.IEquatable$1<UnityEngine.PhysicsScene> {
            protected [__keep_incompatibility]: never;
            public ToString(): string;
            public GetHashCode(): number;
            public Equals($other: any): boolean;
            public Equals($other: UnityEngine.PhysicsScene): boolean;
            public IsValid(): boolean;
            public IsEmpty(): boolean;
            public Simulate($step: number): void;
            public RunSimulationStages($step: number, $stages: UnityEngine.SimulationStage, $options?: UnityEngine.SimulationOption): void;
            public InterpolateBodies(): void;
            public ResetInterpolationPoses(): void;
            public Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): boolean;
            public Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): boolean;
            public Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $raycastHits: System.Array$1<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): number;
            public CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): boolean;
            public CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): number;
            public OverlapCapsule($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): number;
            public SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): boolean;
            public SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): number;
            public OverlapSphere($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
            public BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): boolean;
            public BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): number;
            public OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>): number;
            public BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction): number;
            public BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>): number;
        }

        class PhysicsSceneExtensions {
            protected [__keep_incompatibility]: never;
            public static GetPhysicsScene(): UnityEngine.PhysicsScene;
        }

        class QueryParameters {
            protected [__keep_incompatibility]: never;
            public layerMask: number;
            public hitMultipleFaces: boolean;
            public hitTriggers: UnityEngine.QueryTriggerInteraction;
            public hitBackfaces: boolean;
            public static get Default(): UnityEngine.QueryParameters;
            constructor($layerMask?: number, $hitMultipleFaces?: boolean, $hitTriggers?: UnityEngine.QueryTriggerInteraction, $hitBackfaces?: boolean);
        }

        class ColliderHit {
            protected [__keep_incompatibility]: never;
            public get instanceID(): number;
            public get collider(): UnityEngine.Collider;
        }

        class RaycastCommand {
            protected [__keep_incompatibility]: never;
            public queryParameters: UnityEngine.QueryParameters;
            public from: UnityEngine.Vector3;
            public direction: UnityEngine.Vector3;
            public physicsScene: UnityEngine.PhysicsScene;
            public distance: number;
            public maxHits: number;
            public layerMask: number;
            constructor($from: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $from: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($from: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number, $maxHits?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $from: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number, $maxHits?: number);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.RaycastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.RaycastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class SpherecastCommand {
            protected [__keep_incompatibility]: never;
            public queryParameters: UnityEngine.QueryParameters;
            public origin: UnityEngine.Vector3;
            public radius: number;
            public direction: UnityEngine.Vector3;
            public distance: number;
            public physicsScene: UnityEngine.PhysicsScene;
            public layerMask: number;
            constructor($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.SpherecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.SpherecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class CapsulecastCommand {
            protected [__keep_incompatibility]: never;
            public queryParameters: UnityEngine.QueryParameters;
            public point1: UnityEngine.Vector3;
            public point2: UnityEngine.Vector3;
            public radius: number;
            public direction: UnityEngine.Vector3;
            public distance: number;
            public physicsScene: UnityEngine.PhysicsScene;
            public layerMask: number;
            constructor($p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.CapsulecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.CapsulecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class BoxcastCommand {
            protected [__keep_incompatibility]: never;
            public queryParameters: UnityEngine.QueryParameters;
            public center: UnityEngine.Vector3;
            public halfExtents: UnityEngine.Vector3;
            public orientation: UnityEngine.Quaternion;
            public direction: UnityEngine.Vector3;
            public distance: number;
            public physicsScene: UnityEngine.PhysicsScene;
            public layerMask: number;
            constructor($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number);
            constructor($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number);
            constructor($physicsScene: UnityEngine.PhysicsScene, $center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $direction: UnityEngine.Vector3, $distance?: number, $layerMask?: number);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.BoxcastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.BoxcastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class ClosestPointCommand {
            protected [__keep_incompatibility]: never;
            public point: UnityEngine.Vector3;
            public colliderInstanceID: number;
            public position: UnityEngine.Vector3;
            public rotation: UnityEngine.Quaternion;
            public scale: UnityEngine.Vector3;
            constructor($point: UnityEngine.Vector3, $colliderInstanceID: number, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $scale: UnityEngine.Vector3);
            constructor($point: UnityEngine.Vector3, $collider: UnityEngine.Collider, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $scale: UnityEngine.Vector3);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.ClosestPointCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.Vector3>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class OverlapSphereCommand {
            protected [__keep_incompatibility]: never;
            public queryParameters: UnityEngine.QueryParameters;
            public point: UnityEngine.Vector3;
            public radius: number;
            public physicsScene: UnityEngine.PhysicsScene;
            constructor($point: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters);
            constructor($physicsScene: UnityEngine.PhysicsScene, $point: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.OverlapSphereCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.ColliderHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class OverlapBoxCommand {
            protected [__keep_incompatibility]: never;
            public queryParameters: UnityEngine.QueryParameters;
            public center: UnityEngine.Vector3;
            public halfExtents: UnityEngine.Vector3;
            public orientation: UnityEngine.Quaternion;
            public physicsScene: UnityEngine.PhysicsScene;
            constructor($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $queryParameters: UnityEngine.QueryParameters);
            constructor($physicsScene: UnityEngine.PhysicsScene, $center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $queryParameters: UnityEngine.QueryParameters);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.OverlapBoxCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.ColliderHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class OverlapCapsuleCommand {
            protected [__keep_incompatibility]: never;
            public queryParameters: UnityEngine.QueryParameters;
            public point0: UnityEngine.Vector3;
            public point1: UnityEngine.Vector3;
            public radius: number;
            public physicsScene: UnityEngine.PhysicsScene;
            constructor($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters);
            constructor($physicsScene: UnityEngine.PhysicsScene, $point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters);
            public static ScheduleBatch($commands: Unity.Collections.NativeArray$1<UnityEngine.OverlapCapsuleCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.ColliderHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle): Unity.Jobs.JobHandle;
        }

        class RaycastHit {
            protected [__keep_incompatibility]: never;
            public get collider(): UnityEngine.Collider;
            public get colliderInstanceID(): number;
            public get colliderEntityId(): UnityEngine.EntityId;
            public point: UnityEngine.Vector3;
            public normal: UnityEngine.Vector3;
            public barycentricCoordinate: UnityEngine.Vector3;
            public distance: number;
            public get triangleIndex(): number;
            public get textureCoord(): UnityEngine.Vector2;
            public get textureCoord2(): UnityEngine.Vector2;
            public get transform(): UnityEngine.Transform;
            public get rigidbody(): UnityEngine.Rigidbody;
            public get articulationBody(): UnityEngine.ArticulationBody;
            public get lightmapCoord(): UnityEngine.Vector2;
        }

        enum RigidbodyConstraints {
            None = 0,
            FreezePositionX = 2,
            FreezePositionY = 4,
            FreezePositionZ = 8,
            FreezePosition = 14,
            FreezeRotationX = 16,
            FreezeRotationY = 32,
            FreezeRotationZ = 64,
            FreezeRotation = 112,
            FreezeAll = 126
        }

        enum RigidbodyInterpolation {
            None = 0,
            Interpolate = 1,
            Extrapolate = 2
        }

        class Rigidbody extends UnityEngine.Component {
            protected [__keep_incompatibility]: never;
            public linearVelocity: UnityEngine.Vector3;
            public angularVelocity: UnityEngine.Vector3;
            public linearDamping: number;
            public angularDamping: number;
            public mass: number;
            public useGravity: boolean;
            public maxDepenetrationVelocity: number;
            public isKinematic: boolean;
            public freezeRotation: boolean;
            public constraints: UnityEngine.RigidbodyConstraints;
            public collisionDetectionMode: UnityEngine.CollisionDetectionMode;
            public automaticCenterOfMass: boolean;
            public centerOfMass: UnityEngine.Vector3;
            public get worldCenterOfMass(): UnityEngine.Vector3;
            public automaticInertiaTensor: boolean;
            public inertiaTensorRotation: UnityEngine.Quaternion;
            public inertiaTensor: UnityEngine.Vector3;
            public detectCollisions: boolean;
            public position: UnityEngine.Vector3;
            public rotation: UnityEngine.Quaternion;
            public interpolation: UnityEngine.RigidbodyInterpolation;
            public solverIterations: number;
            public sleepThreshold: number;
            public maxAngularVelocity: number;
            public maxLinearVelocity: number;
            public solverVelocityIterations: number;
            public excludeLayers: UnityEngine.LayerMask;
            public includeLayers: UnityEngine.LayerMask;
            public drag: number;
            public angularDrag: number;
            public velocity: UnityEngine.Vector3;
            constructor();
            public MovePosition($position: UnityEngine.Vector3): void;
            public MoveRotation($rotation: UnityEngine.Quaternion): void;
            public Move($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion): void;
            public Sleep(): void;
            public IsSleeping(): boolean;
            public WakeUp(): void;
            public ResetCenterOfMass(): void;
            public ResetInertiaTensor(): void;
            public GetRelativePointVelocity($relativePoint: UnityEngine.Vector3): UnityEngine.Vector3;
            public GetPointVelocity($worldPoint: UnityEngine.Vector3): UnityEngine.Vector3;
            public PublishTransform(): void;
            public GetAccumulatedForce($step: number): UnityEngine.Vector3;
            public GetAccumulatedForce(): UnityEngine.Vector3;
            public GetAccumulatedTorque($step: number): UnityEngine.Vector3;
            public GetAccumulatedTorque(): UnityEngine.Vector3;
            public AddForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddForce($force: UnityEngine.Vector3): void;
            public AddForce($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode): void;
            public AddForce($x: number, $y: number, $z: number): void;
            public AddRelativeForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddRelativeForce($force: UnityEngine.Vector3): void;
            public AddRelativeForce($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode): void;
            public AddRelativeForce($x: number, $y: number, $z: number): void;
            public AddTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddTorque($torque: UnityEngine.Vector3): void;
            public AddTorque($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode): void;
            public AddTorque($x: number, $y: number, $z: number): void;
            public AddRelativeTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddRelativeTorque($torque: UnityEngine.Vector3): void;
            public AddRelativeTorque($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode): void;
            public AddRelativeTorque($x: number, $y: number, $z: number): void;
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode): void;
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3): void;
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: UnityEngine.ForceMode): void;
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number): void;
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number): void;
            public ClosestPointOnBounds($position: UnityEngine.Vector3): UnityEngine.Vector3;
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>, $maxDistance: number): boolean;
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Out<UnityEngine.RaycastHit>): boolean;
            public SweepTestAll($direction: UnityEngine.Vector3, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): System.Array$1<UnityEngine.RaycastHit>;
            public SweepTestAll($direction: UnityEngine.Vector3, $maxDistance: number): System.Array$1<UnityEngine.RaycastHit>;
            public SweepTestAll($direction: UnityEngine.Vector3): System.Array$1<UnityEngine.RaycastHit>;
            public SetDensity($density: number): void;
        }

        class SphereCollider extends UnityEngine.Collider {
            protected [__keep_incompatibility]: never;
            public center: UnityEngine.Vector3;
            public radius: number;
            constructor();
        }

        class SpringJoint extends UnityEngine.Joint {
            protected [__keep_incompatibility]: never;
            public spring: number;
            public damper: number;
            public minDistance: number;
            public maxDistance: number;
            public tolerance: number;
            constructor();
        }

    }
    namespace UnityEngine {
        namespace LowLevelPhysics {
            class ImmediateTransform {
                protected [__keep_incompatibility]: never;
                public Rotation: UnityEngine.Quaternion;
                public Position: UnityEngine.Vector3;
            }

            class ImmediateContact {
                protected [__keep_incompatibility]: never;
                public Normal: UnityEngine.Vector3;
                public Separation: number;
                public Point: UnityEngine.Vector3;
            }

            class ImmediatePhysics {
                protected [__keep_incompatibility]: never;
                public static GenerateContacts($geom1: Unity.Collections.NativeArray$1.ReadOnly$1<UnityEngine.LowLevelPhysics.GeometryHolder>, $geom2: Unity.Collections.NativeArray$1.ReadOnly$1<UnityEngine.LowLevelPhysics.GeometryHolder>, $xform1: Unity.Collections.NativeArray$1.ReadOnly$1<UnityEngine.LowLevelPhysics.ImmediateTransform>, $xform2: Unity.Collections.NativeArray$1.ReadOnly$1<UnityEngine.LowLevelPhysics.ImmediateTransform>, $pairCount: number, $outContacts: Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics.ImmediateContact>, $outContactCounts: Unity.Collections.NativeArray$1<number>, $contactDistance?: number): number;
            }

            interface IGeometry {
                get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
            }

            class BoxGeometry implements UnityEngine.LowLevelPhysics.IGeometry {
                protected [__keep_incompatibility]: never;
                public HalfExtents: UnityEngine.Vector3;
                public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
                constructor($halfExtents: UnityEngine.Vector3);
            }

            class SphereGeometry implements UnityEngine.LowLevelPhysics.IGeometry {
                protected [__keep_incompatibility]: never;
                public Radius: number;
                public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
                constructor($radius: number);
            }

            class CapsuleGeometry implements UnityEngine.LowLevelPhysics.IGeometry {
                protected [__keep_incompatibility]: never;
                public Radius: number;
                public HalfLength: number;
                public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
                constructor($radius: number, $halfLength: number);
            }

            class ConvexMeshGeometry implements UnityEngine.LowLevelPhysics.IGeometry {
                protected [__keep_incompatibility]: never;
                public Scale: UnityEngine.Vector3;
                public ScaleAxisRotation: UnityEngine.Quaternion;
                public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
            }

            class TriangleMeshGeometry implements UnityEngine.LowLevelPhysics.IGeometry {
                protected [__keep_incompatibility]: never;
                public Scale: UnityEngine.Vector3;
                public ScaleAxisRotation: UnityEngine.Quaternion;
                public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
            }

            class TerrainGeometry implements UnityEngine.LowLevelPhysics.IGeometry {
                protected [__keep_incompatibility]: never;
                public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
            }

            enum GeometryType {
                Sphere = 0,
                Capsule = 2,
                Box = 3,
                ConvexMesh = 4,
                TriangleMesh = 5,
                Terrain = 6,
                Invalid = -1
            }

            class GeometryHolder {
                protected [__keep_incompatibility]: never;
                public get Type(): UnityEngine.LowLevelPhysics.GeometryType;
                public As<T extends UnityEngine.LowLevelPhysics.IGeometry>(): T;
                public static Create<T extends UnityEngine.LowLevelPhysics.IGeometry>($geometry: T): UnityEngine.LowLevelPhysics.GeometryHolder;
            }

        }
    }
}
