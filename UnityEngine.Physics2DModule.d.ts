declare namespace CS {
    namespace UnityEngine {
        class PhysicsScene2D implements System.IEquatable$1<UnityEngine.PhysicsScene2D> {
            protected [__keep_incompatibility]: never;
            public get subStepCount(): number;
            public get subStepLostTime(): number;
            public ToString(): string;
            public GetHashCode(): number;
            public Equals($other: any): boolean;
            public Equals($other: UnityEngine.PhysicsScene2D): boolean;
            public IsValid(): boolean;
            public IsEmpty(): boolean;
            public Simulate($deltaTime: number): boolean;
            public Simulate($deltaTime: number, $simulationLayers?: number): boolean;
            public Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $layerMask?: number): UnityEngine.RaycastHit2D;
            public Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public OverlapPoint($point: UnityEngine.Vector2, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapPoint($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($position: UnityEngine.Vector2, $angle: number, $collider: UnityEngine.Collider2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($position: UnityEngine.Vector2, $angle: number, $collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
        }

        class PhysicsSceneExtensions2D {
            protected [__keep_incompatibility]: never;
            public static GetPhysicsScene2D(): UnityEngine.PhysicsScene2D;
        }

        class Physics2D {
            protected [__keep_incompatibility]: never;
            public static readonly IgnoreRaycastLayer: number;
            public static readonly DefaultRaycastLayers: number;
            public static readonly AllLayers: number;
            public static readonly MaxPolygonShapeVertices: number;
            public static get defaultPhysicsScene(): UnityEngine.PhysicsScene2D;
            public static velocityIterations: number;
            public static positionIterations: number;
            public static gravity: UnityEngine.Vector2;
            public static queriesHitTriggers: boolean;
            public static queriesStartInColliders: boolean;
            public static callbacksOnDisable: boolean;
            public static reuseCollisionCallbacks: boolean;
            public static simulationMode: UnityEngine.SimulationMode2D;
            public static simulationLayers: UnityEngine.LayerMask;
            public static useSubStepping: boolean;
            public static useSubStepContacts: boolean;
            public static minSubStepFPS: number;
            public static maxSubStepCount: number;
            public static jobOptions: UnityEngine.PhysicsJobOptions2D;
            public static bounceThreshold: number;
            public static contactThreshold: number;
            public static maxLinearCorrection: number;
            public static maxAngularCorrection: number;
            public static maxTranslationSpeed: number;
            public static maxRotationSpeed: number;
            public static defaultContactOffset: number;
            public static baumgarteScale: number;
            public static baumgarteTOIScale: number;
            public static timeToSleep: number;
            public static linearSleepTolerance: number;
            public static angularSleepTolerance: number;
            public static autoSyncTransforms: boolean;
            constructor();
            public static Simulate($deltaTime: number): boolean;
            public static Simulate($deltaTime: number, $simulationLayers?: number): boolean;
            public static SyncTransforms(): void;
            public static IgnoreCollision($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D): void;
            public static IgnoreCollision($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D, $ignore: boolean): void;
            public static GetIgnoreCollision($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D): boolean;
            public static IgnoreLayerCollision($layer1: number, $layer2: number): void;
            public static IgnoreLayerCollision($layer1: number, $layer2: number, $ignore: boolean): void;
            public static GetIgnoreLayerCollision($layer1: number, $layer2: number): boolean;
            public static SetLayerCollisionMask($layer: number, $layerMask: number): void;
            public static GetLayerCollisionMask($layer: number): number;
            public static IsTouching($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D): boolean;
            public static IsTouching($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D): boolean;
            public static IsTouching($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D): boolean;
            public static IsTouchingLayers($collider: UnityEngine.Collider2D): boolean;
            public static IsTouchingLayers($collider: UnityEngine.Collider2D, $layerMask: number): boolean;
            public static Distance($colliderA: UnityEngine.Collider2D, $colliderB: UnityEngine.Collider2D): UnityEngine.ColliderDistance2D;
            public static Distance($colliderA: UnityEngine.Collider2D, $positionA: UnityEngine.Vector2, $angleA: number, $colliderB: UnityEngine.Collider2D, $positionB: UnityEngine.Vector2, $angleB: number): UnityEngine.ColliderDistance2D;
            public static ClosestPoint($position: UnityEngine.Vector2, $collider: UnityEngine.Collider2D): UnityEngine.Vector2;
            public static ClosestPoint($position: UnityEngine.Vector2, $rigidbody: UnityEngine.Rigidbody2D): UnityEngine.Vector2;
            public static Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
            public static Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $layerMask: number): UnityEngine.RaycastHit2D;
            public static Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $layerMask: number, $minDepth: number): UnityEngine.RaycastHit2D;
            public static Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.RaycastHit2D;
            public static Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public static LinecastAll($start: UnityEngine.Vector2, $end: UnityEngine.Vector2): System.Array$1<UnityEngine.RaycastHit2D>;
            public static LinecastAll($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $layerMask: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static LinecastAll($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static LinecastAll($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number): UnityEngine.RaycastHit2D;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): UnityEngine.RaycastHit2D;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): UnityEngine.RaycastHit2D;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.RaycastHit2D;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public static RaycastAll($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2): System.Array$1<UnityEngine.RaycastHit2D>;
            public static RaycastAll($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static RaycastAll($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static RaycastAll($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static RaycastAll($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number): UnityEngine.RaycastHit2D;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): UnityEngine.RaycastHit2D;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): UnityEngine.RaycastHit2D;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.RaycastHit2D;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public static CircleCastAll($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CircleCastAll($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CircleCastAll($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CircleCastAll($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CircleCastAll($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number): UnityEngine.RaycastHit2D;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): UnityEngine.RaycastHit2D;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): UnityEngine.RaycastHit2D;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.RaycastHit2D;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public static BoxCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2): System.Array$1<UnityEngine.RaycastHit2D>;
            public static BoxCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static BoxCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static BoxCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static BoxCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number): UnityEngine.RaycastHit2D;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): UnityEngine.RaycastHit2D;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): UnityEngine.RaycastHit2D;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.RaycastHit2D;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static GetRayIntersection($ray: UnityEngine.Ray): UnityEngine.RaycastHit2D;
            public static GetRayIntersection($ray: UnityEngine.Ray, $distance: number): UnityEngine.RaycastHit2D;
            public static GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public static GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public static GetRayIntersectionAll($ray: UnityEngine.Ray): System.Array$1<UnityEngine.RaycastHit2D>;
            public static GetRayIntersectionAll($ray: UnityEngine.Ray, $distance: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static GetRayIntersectionAll($ray: UnityEngine.Ray, $distance: number, $layerMask?: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static GetRayIntersectionNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask?: number): number;
            public static OverlapPoint($point: UnityEngine.Vector2): UnityEngine.Collider2D;
            public static OverlapPoint($point: UnityEngine.Vector2, $layerMask: number): UnityEngine.Collider2D;
            public static OverlapPoint($point: UnityEngine.Vector2, $layerMask: number, $minDepth: number): UnityEngine.Collider2D;
            public static OverlapPoint($point: UnityEngine.Vector2, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.Collider2D;
            public static OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapPointAll($point: UnityEngine.Vector2): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapPointAll($point: UnityEngine.Vector2, $layerMask: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapPointAll($point: UnityEngine.Vector2, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapPointAll($point: UnityEngine.Vector2, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCircle($point: UnityEngine.Vector2, $radius: number): UnityEngine.Collider2D;
            public static OverlapCircle($point: UnityEngine.Vector2, $radius: number, $layerMask: number): UnityEngine.Collider2D;
            public static OverlapCircle($point: UnityEngine.Vector2, $radius: number, $layerMask: number, $minDepth: number): UnityEngine.Collider2D;
            public static OverlapCircle($point: UnityEngine.Vector2, $radius: number, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.Collider2D;
            public static OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCircleAll($point: UnityEngine.Vector2, $radius: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCircleAll($point: UnityEngine.Vector2, $radius: number, $layerMask: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCircleAll($point: UnityEngine.Vector2, $radius: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCircleAll($point: UnityEngine.Vector2, $radius: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number): UnityEngine.Collider2D;
            public static OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask: number): UnityEngine.Collider2D;
            public static OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask: number, $minDepth: number): UnityEngine.Collider2D;
            public static OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.Collider2D;
            public static OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapBoxAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapBoxAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapBoxAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapBoxAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2): UnityEngine.Collider2D;
            public static OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask: number): UnityEngine.Collider2D;
            public static OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask: number, $minDepth: number): UnityEngine.Collider2D;
            public static OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.Collider2D;
            public static OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapAreaAll($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapAreaAll($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapAreaAll($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapAreaAll($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number): UnityEngine.Collider2D;
            public static OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number): UnityEngine.Collider2D;
            public static OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number): UnityEngine.Collider2D;
            public static OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number): UnityEngine.Collider2D;
            public static OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static GetContacts($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public static GetContacts($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static GetContacts($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask: number): number;
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask: number, $minDepth: number): number;
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static GetRayIntersectionNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public static GetRayIntersectionNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
        }

        enum SimulationMode2D {
            FixedUpdate = 0,
            Update = 1,
            Script = 2
        }

        enum CapsuleDirection2D {
            Vertical = 0,
            Horizontal = 1
        }

        enum RigidbodyConstraints2D {
            None = 0,
            FreezePositionX = 1,
            FreezePositionY = 2,
            FreezePosition = 3,
            FreezeRotation = 4,
            FreezeAll = 7
        }

        enum RigidbodyInterpolation2D {
            None = 0,
            Interpolate = 1,
            Extrapolate = 2
        }

        enum RigidbodySleepMode2D {
            NeverSleep = 0,
            StartAwake = 1,
            StartAsleep = 2
        }

        enum CollisionDetectionMode2D {
            None = 0,
            Discrete = 0,
            Continuous = 1
        }

        enum RigidbodyType2D {
            Dynamic = 0,
            Kinematic = 1,
            Static = 2
        }

        enum ForceMode2D {
            Force = 0,
            Impulse = 1
        }

        enum ColliderErrorState2D {
            None = 0,
            NoShapes = 1,
            RemovedShapes = 2
        }

        enum JointLimitState2D {
            Inactive = 0,
            LowerLimit = 1,
            UpperLimit = 2,
            EqualLimits = 3
        }

        enum JointBreakAction2D {
            Ignore = 0,
            CallbackOnly = 1,
            Disable = 2,
            Destroy = 3
        }

        enum EffectorSelection2D {
            Rigidbody = 0,
            Collider = 1
        }

        enum EffectorForceMode2D {
            Constant = 0,
            InverseLinear = 1,
            InverseSquared = 2
        }

        enum PhysicsShapeType2D {
            Circle = 0,
            Capsule = 1,
            Polygon = 2,
            Edges = 3
        }

        enum PhysicsMaterialCombine2D {
            Average = 0,
            Mean = 1,
            Multiply = 2,
            Minimum = 3,
            Maximum = 4
        }

        class PhysicsShape2D {
            protected [__keep_incompatibility]: never;
            public shapeType: UnityEngine.PhysicsShapeType2D;
            public radius: number;
            public vertexStartIndex: number;
            public vertexCount: number;
            public useAdjacentStart: boolean;
            public useAdjacentEnd: boolean;
            public adjacentStart: UnityEngine.Vector2;
            public adjacentEnd: UnityEngine.Vector2;
        }

        class PhysicsShapeGroup2D {
            protected [__keep_incompatibility]: never;
            public get shapeCount(): number;
            public get vertexCount(): number;
            public localToWorldMatrix: UnityEngine.Matrix4x4;
            constructor($shapeCapacity?: number, $vertexCapacity?: number);
            public Clear(): void;
            public Add($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D): void;
            public GetShapeData($shapes: System.Collections.Generic.List$1<UnityEngine.PhysicsShape2D>, $vertices: System.Collections.Generic.List$1<UnityEngine.Vector2>): void;
            public GetShapeData($shapes: Unity.Collections.NativeArray$1<UnityEngine.PhysicsShape2D>, $vertices: Unity.Collections.NativeArray$1<UnityEngine.Vector2>): void;
            public GetShapeVertices($shapeIndex: number, $vertices: System.Collections.Generic.List$1<UnityEngine.Vector2>): void;
            public GetShapeVertex($shapeIndex: number, $vertexIndex: number): UnityEngine.Vector2;
            public SetShapeVertex($shapeIndex: number, $vertexIndex: number, $vertex: UnityEngine.Vector2): void;
            public SetShapeRadius($shapeIndex: number, $radius: number): void;
            public SetShapeAdjacentVertices($shapeIndex: number, $useAdjacentStart: boolean, $useAdjacentEnd: boolean, $adjacentStart: UnityEngine.Vector2, $adjacentEnd: UnityEngine.Vector2): void;
            public DeleteShape($shapeIndex: number): void;
            public GetShape($shapeIndex: number): UnityEngine.PhysicsShape2D;
            public AddCircle($center: UnityEngine.Vector2, $radius: number): number;
            public AddCapsule($vertex0: UnityEngine.Vector2, $vertex1: UnityEngine.Vector2, $radius: number): number;
            public AddBox($center: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle?: number, $edgeRadius?: number): number;
            public AddPolygon($vertices: System.Collections.Generic.List$1<UnityEngine.Vector2>): number;
            public AddEdges($vertices: System.Collections.Generic.List$1<UnityEngine.Vector2>, $edgeRadius?: number): number;
            public AddEdges($vertices: System.Collections.Generic.List$1<UnityEngine.Vector2>, $useAdjacentStart: boolean, $useAdjacentEnd: boolean, $adjacentStart: UnityEngine.Vector2, $adjacentEnd: UnityEngine.Vector2, $edgeRadius?: number): number;
        }

        class ColliderDistance2D {
            protected [__keep_incompatibility]: never;
            public pointA: UnityEngine.Vector2;
            public pointB: UnityEngine.Vector2;
            public get normal(): UnityEngine.Vector2;
            public distance: number;
            public get isOverlapped(): boolean;
            public isValid: boolean;
        }

        class ContactFilter2D {
            protected [__keep_incompatibility]: never;
            public useTriggers: boolean;
            public useLayerMask: boolean;
            public useDepth: boolean;
            public useOutsideDepth: boolean;
            public useNormalAngle: boolean;
            public useOutsideNormalAngle: boolean;
            public layerMask: UnityEngine.LayerMask;
            public minDepth: number;
            public maxDepth: number;
            public minNormalAngle: number;
            public maxNormalAngle: number;
            public static readonly NormalAngleUpperLimit: number;
            public static get noFilter(): UnityEngine.ContactFilter2D;
            public get isFiltering(): boolean;
            public ClearLayerMask(): void;
            public SetLayerMask($layerMask: UnityEngine.LayerMask): void;
            public ClearDepth(): void;
            public SetDepth($minDepth: number, $maxDepth: number): void;
            public ClearNormalAngle(): void;
            public SetNormalAngle($minNormalAngle: number, $maxNormalAngle: number): void;
            public IsFilteringTrigger($collider: UnityEngine.Collider2D): boolean;
            public IsFilteringLayerMask($obj: UnityEngine.GameObject): boolean;
            public IsFilteringDepth($obj: UnityEngine.GameObject): boolean;
            public IsFilteringNormalAngle($normal: UnityEngine.Vector2): boolean;
            public IsFilteringNormalAngle($angle: number): boolean;
            public NoFilter(): UnityEngine.ContactFilter2D;
        }

        class Collision2D {
            protected [__keep_incompatibility]: never;
            public get collider(): UnityEngine.Collider2D;
            public get otherCollider(): UnityEngine.Collider2D;
            public get rigidbody(): UnityEngine.Rigidbody2D;
            public get otherRigidbody(): UnityEngine.Rigidbody2D;
            public get transform(): UnityEngine.Transform;
            public get gameObject(): UnityEngine.GameObject;
            public get relativeVelocity(): UnityEngine.Vector2;
            public get enabled(): boolean;
            public get contacts(): System.Array$1<UnityEngine.ContactPoint2D>;
            public get contactCount(): number;
            constructor();
            public GetContact($index: number): UnityEngine.ContactPoint2D;
            public GetContacts($contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
        }

        class ContactPoint2D {
            protected [__keep_incompatibility]: never;
            public get point(): UnityEngine.Vector2;
            public get normal(): UnityEngine.Vector2;
            public get separation(): number;
            public get normalImpulse(): number;
            public get tangentImpulse(): number;
            public get relativeVelocity(): UnityEngine.Vector2;
            public get friction(): number;
            public get bounciness(): number;
            public get collider(): UnityEngine.Collider2D;
            public get otherCollider(): UnityEngine.Collider2D;
            public get rigidbody(): UnityEngine.Rigidbody2D;
            public get otherRigidbody(): UnityEngine.Rigidbody2D;
            public get enabled(): boolean;
        }

        class JointAngleLimits2D {
            protected [__keep_incompatibility]: never;
            public min: number;
            public max: number;
        }

        class JointTranslationLimits2D {
            protected [__keep_incompatibility]: never;
            public min: number;
            public max: number;
        }

        class JointMotor2D {
            protected [__keep_incompatibility]: never;
            public motorSpeed: number;
            public maxMotorTorque: number;
        }

        class JointSuspension2D {
            protected [__keep_incompatibility]: never;
            public dampingRatio: number;
            public frequency: number;
            public angle: number;
        }

        class RaycastHit2D {
            protected [__keep_incompatibility]: never;
            public centroid: UnityEngine.Vector2;
            public point: UnityEngine.Vector2;
            public normal: UnityEngine.Vector2;
            public distance: number;
            public fraction: number;
            public get collider(): UnityEngine.Collider2D;
            public get rigidbody(): UnityEngine.Rigidbody2D;
            public get transform(): UnityEngine.Transform;
            public CompareTo($other: UnityEngine.RaycastHit2D): number;
        }

        class PhysicsJobOptions2D {
            protected [__keep_incompatibility]: never;
            public useMultithreading: boolean;
            public useConsistencySorting: boolean;
            public interpolationPosesPerJob: number;
            public newContactsPerJob: number;
            public collideContactsPerJob: number;
            public clearFlagsPerJob: number;
            public clearBodyForcesPerJob: number;
            public syncDiscreteFixturesPerJob: number;
            public syncContinuousFixturesPerJob: number;
            public findNearestContactsPerJob: number;
            public updateTriggerContactsPerJob: number;
            public islandSolverCostThreshold: number;
            public islandSolverBodyCostScale: number;
            public islandSolverContactCostScale: number;
            public islandSolverJointCostScale: number;
            public islandSolverBodiesPerJob: number;
            public islandSolverContactsPerJob: number;
        }

        class Rigidbody2D extends UnityEngine.Component {
            protected [__keep_incompatibility]: never;
            public position: UnityEngine.Vector2;
            public rotation: number;
            public linearVelocity: UnityEngine.Vector2;
            public linearVelocityX: number;
            public linearVelocityY: number;
            public angularVelocity: number;
            public useAutoMass: boolean;
            public mass: number;
            public sharedMaterial: UnityEngine.PhysicsMaterial2D;
            public centerOfMass: UnityEngine.Vector2;
            public get worldCenterOfMass(): UnityEngine.Vector2;
            public inertia: number;
            public linearDamping: number;
            public angularDamping: number;
            public gravityScale: number;
            public bodyType: UnityEngine.RigidbodyType2D;
            public useFullKinematicContacts: boolean;
            public freezeRotation: boolean;
            public constraints: UnityEngine.RigidbodyConstraints2D;
            public simulated: boolean;
            public interpolation: UnityEngine.RigidbodyInterpolation2D;
            public sleepMode: UnityEngine.RigidbodySleepMode2D;
            public collisionDetectionMode: UnityEngine.CollisionDetectionMode2D;
            public get attachedColliderCount(): number;
            public totalForce: UnityEngine.Vector2;
            public totalTorque: number;
            public excludeLayers: UnityEngine.LayerMask;
            public includeLayers: UnityEngine.LayerMask;
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            public isKinematic: boolean;
            public drag: number;
            public angularDrag: number;
            public velocity: UnityEngine.Vector2;
            public velocityX: number;
            public velocityY: number;
            constructor();
            public SetRotation($angle: number): void;
            public SetRotation($rotation: UnityEngine.Quaternion): void;
            public MovePosition($position: UnityEngine.Vector2): void;
            public MoveRotation($angle: number): void;
            public MoveRotation($rotation: UnityEngine.Quaternion): void;
            public MovePositionAndRotation($position: UnityEngine.Vector2, $angle: number): void;
            public MovePositionAndRotation($position: UnityEngine.Vector2, $rotation: UnityEngine.Quaternion): void;
            public Slide($velocity: UnityEngine.Vector2, $deltaTime: number, $slideMovement: UnityEngine.Rigidbody2D.SlideMovement): UnityEngine.Rigidbody2D.SlideResults;
            public IsSleeping(): boolean;
            public IsAwake(): boolean;
            public Sleep(): void;
            public WakeUp(): void;
            public IsTouching($collider: UnityEngine.Collider2D): boolean;
            public IsTouching($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D): boolean;
            public IsTouching($contactFilter: UnityEngine.ContactFilter2D): boolean;
            public IsTouchingLayers(): boolean;
            public IsTouchingLayers($layerMask?: number): boolean;
            public OverlapPoint($point: UnityEngine.Vector2): boolean;
            public Distance($collider: UnityEngine.Collider2D): UnityEngine.ColliderDistance2D;
            public Distance($thisPosition: UnityEngine.Vector2, $thisAngle: number, $collider: UnityEngine.Collider2D, $position: UnityEngine.Vector2, $angle: number): UnityEngine.ColliderDistance2D;
            public ClosestPoint($position: UnityEngine.Vector2): UnityEngine.Vector2;
            public AddForce($force: UnityEngine.Vector2): void;
            public AddForce($force: UnityEngine.Vector2, $mode?: UnityEngine.ForceMode2D): void;
            public AddForceX($force: number, $mode?: UnityEngine.ForceMode2D): void;
            public AddForceY($force: number, $mode?: UnityEngine.ForceMode2D): void;
            public AddRelativeForce($relativeForce: UnityEngine.Vector2): void;
            public AddRelativeForce($relativeForce: UnityEngine.Vector2, $mode?: UnityEngine.ForceMode2D): void;
            public AddRelativeForceX($force: number, $mode?: UnityEngine.ForceMode2D): void;
            public AddRelativeForceY($force: number, $mode?: UnityEngine.ForceMode2D): void;
            public AddForceAtPosition($force: UnityEngine.Vector2, $position: UnityEngine.Vector2): void;
            public AddForceAtPosition($force: UnityEngine.Vector2, $position: UnityEngine.Vector2, $mode: UnityEngine.ForceMode2D): void;
            public AddTorque($torque: number): void;
            public AddTorque($torque: number, $mode: UnityEngine.ForceMode2D): void;
            public GetPoint($point: UnityEngine.Vector2): UnityEngine.Vector2;
            public GetRelativePoint($relativePoint: UnityEngine.Vector2): UnityEngine.Vector2;
            public GetVector($vector: UnityEngine.Vector2): UnityEngine.Vector2;
            public GetRelativeVector($relativeVector: UnityEngine.Vector2): UnityEngine.Vector2;
            public GetPointVelocity($point: UnityEngine.Vector2): UnityEngine.Vector2;
            public GetRelativePointVelocity($relativePoint: UnityEngine.Vector2): UnityEngine.Vector2;
            public GetContacts($contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public GetContacts($colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public GetAttachedColliders($results: $Out<System.Array$1<UnityEngine.Collider2D>>): number;
            public GetAttachedColliders($results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public GetAttachedColliders($results: $Out<System.Array$1<UnityEngine.Collider2D>>, $findTriggers?: boolean): number;
            public GetAttachedColliders($results: System.Collections.Generic.List$1<UnityEngine.Collider2D>, $findTriggers?: boolean): number;
            public GetShapes($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Overlap($contactFilter: UnityEngine.ContactFilter2D, $results: $Out<System.Array$1<UnityEngine.Collider2D>>): number;
            public Overlap($results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($position: UnityEngine.Vector2, $angle: number, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($position: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: $Out<System.Array$1<UnityEngine.Collider2D>>): number;
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;

            class SlideMovement {
                protected [__keep_incompatibility]: never;
                public maxIterations: number;
                public surfaceSlideAngle: number;
                public gravitySlipAngle: number;
                public surfaceUp: UnityEngine.Vector2;
                public surfaceAnchor: UnityEngine.Vector2;
                public gravity: UnityEngine.Vector2;
                public startPosition: UnityEngine.Vector2;
                public selectedCollider: UnityEngine.Collider2D;
                public layerMask: UnityEngine.LayerMask;
                public useLayerMask: boolean;
                public useStartPosition: boolean;
                public useNoMove: boolean;
                public useSimulationMove: boolean;
                public useAttachedTriggers: boolean;
                constructor();
                public SetLayerMask($mask: UnityEngine.LayerMask): void;
                public SetStartPosition($position: UnityEngine.Vector2): void;
            }

            class SlideResults {
                protected [__keep_incompatibility]: never;
                public remainingVelocity: UnityEngine.Vector2;
                public position: UnityEngine.Vector2;
                public iterationsUsed: number;
                public slideHit: UnityEngine.RaycastHit2D;
                public surfaceHit: UnityEngine.RaycastHit2D;
            }
        }

        class Collider2D extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public density: number;
            public isTrigger: boolean;
            public usedByEffector: boolean;
            public compositeOperation: UnityEngine.Collider2D.CompositeOperation;
            public compositeOrder: number;
            public get composite(): UnityEngine.CompositeCollider2D;
            public offset: UnityEngine.Vector2;
            public get attachedRigidbody(): UnityEngine.Rigidbody2D;
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            public get shapeCount(): number;
            public get bounds(): UnityEngine.Bounds;
            public get errorState(): UnityEngine.ColliderErrorState2D;
            public get compositeCapable(): boolean;
            public sharedMaterial: UnityEngine.PhysicsMaterial2D;
            public layerOverridePriority: number;
            public excludeLayers: UnityEngine.LayerMask;
            public includeLayers: UnityEngine.LayerMask;
            public forceSendLayers: UnityEngine.LayerMask;
            public forceReceiveLayers: UnityEngine.LayerMask;
            public contactCaptureLayers: UnityEngine.LayerMask;
            public callbackLayers: UnityEngine.LayerMask;
            public get friction(): number;
            public get bounciness(): number;
            public get frictionCombine(): UnityEngine.PhysicsMaterialCombine2D;
            public get bounceCombine(): UnityEngine.PhysicsMaterialCombine2D;
            public get contactMask(): UnityEngine.LayerMask;
            public usedByComposite: boolean;
            constructor();
            public CreateMesh($useBodyPosition: boolean, $useBodyRotation: boolean): UnityEngine.Mesh;
            public CreateMesh($useBodyPosition: boolean, $useBodyRotation: boolean, $useDelaunay?: boolean): UnityEngine.Mesh;
            public GetShapeHash(): number;
            public GetShapes($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D): number;
            public GetShapes($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D, $shapeIndex: number, $shapeCount?: number): number;
            public GetShapeBounds($bounds: System.Collections.Generic.List$1<UnityEngine.Bounds>, $useRadii: boolean, $useWorldSpace: boolean): UnityEngine.Bounds;
            public CanContact($collider: UnityEngine.Collider2D): boolean;
            public IsTouching($collider: UnityEngine.Collider2D): boolean;
            public IsTouching($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D): boolean;
            public IsTouching($contactFilter: UnityEngine.ContactFilter2D): boolean;
            public IsTouchingLayers(): boolean;
            public IsTouchingLayers($layerMask: number): boolean;
            public OverlapPoint($point: UnityEngine.Vector2): boolean;
            public Overlap($contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public Overlap($results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($position: UnityEngine.Vector2, $angle: number, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($position: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $ignoreSiblingColliders: boolean): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $ignoreSiblingColliders: boolean): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number, $ignoreSiblingColliders?: boolean): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number, $ignoreSiblingColliders?: boolean): number;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number, $ignoreSiblingColliders?: boolean): number;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number, $ignoreSiblingColliders?: boolean): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public Raycast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Raycast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Distance($collider: UnityEngine.Collider2D): UnityEngine.ColliderDistance2D;
            public Distance($thisPosition: UnityEngine.Vector2, $thisAngle: number, $collider: UnityEngine.Collider2D, $position: UnityEngine.Vector2, $angle: number): UnityEngine.ColliderDistance2D;
            public ClosestPoint($position: UnityEngine.Vector2): UnityEngine.Vector2;
            public GetContacts($contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Array$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint2D>): number;
            public GetContacts($colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public GetContacts($colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Array$1<UnityEngine.Collider2D>): number;
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;

            enum CompositeOperation {
                None = 0,
                Merge = 1,
                Intersect = 2,
                Difference = 3,
                Flip = 4
            }
        }

        class CustomCollider2D extends UnityEngine.Collider2D {
            protected [__keep_incompatibility]: never;
            public get customShapeCount(): number;
            public get customVertexCount(): number;
            constructor();
            public GetCustomShapes($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D): number;
            public GetCustomShapes($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D, $shapeIndex: number, $shapeCount?: number): number;
            public GetCustomShapes($shapes: Unity.Collections.NativeArray$1<UnityEngine.PhysicsShape2D>, $vertices: Unity.Collections.NativeArray$1<UnityEngine.Vector2>): number;
            public SetCustomShapes($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D): void;
            public SetCustomShapes($shapes: Unity.Collections.NativeArray$1<UnityEngine.PhysicsShape2D>, $vertices: Unity.Collections.NativeArray$1<UnityEngine.Vector2>): void;
            public SetCustomShape($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D, $srcShapeIndex: number, $dstShapeIndex: number): void;
            public SetCustomShape($shapes: Unity.Collections.NativeArray$1<UnityEngine.PhysicsShape2D>, $vertices: Unity.Collections.NativeArray$1<UnityEngine.Vector2>, $srcShapeIndex: number, $dstShapeIndex: number): void;
            public ClearCustomShapes($shapeIndex: number, $shapeCount: number): void;
            public ClearCustomShapes(): void;
        }

        class CircleCollider2D extends UnityEngine.Collider2D {
            protected [__keep_incompatibility]: never;
            public radius: number;
            constructor();
        }

        class CapsuleCollider2D extends UnityEngine.Collider2D {
            protected [__keep_incompatibility]: never;
            public size: UnityEngine.Vector2;
            public direction: UnityEngine.CapsuleDirection2D;
            constructor();
        }

        class EdgeCollider2D extends UnityEngine.Collider2D {
            protected [__keep_incompatibility]: never;
            public edgeRadius: number;
            public get edgeCount(): number;
            public get pointCount(): number;
            public points: System.Array$1<UnityEngine.Vector2>;
            public useAdjacentStartPoint: boolean;
            public useAdjacentEndPoint: boolean;
            public adjacentStartPoint: UnityEngine.Vector2;
            public adjacentEndPoint: UnityEngine.Vector2;
            constructor();
            public Reset(): void;
            public GetPoints($points: System.Collections.Generic.List$1<UnityEngine.Vector2>): number;
            public SetPoints($points: System.Collections.Generic.List$1<UnityEngine.Vector2>): boolean;
        }

        class BoxCollider2D extends UnityEngine.Collider2D {
            protected [__keep_incompatibility]: never;
            public size: UnityEngine.Vector2;
            public edgeRadius: number;
            public autoTiling: boolean;
            constructor();
        }

        class PolygonCollider2D extends UnityEngine.Collider2D {
            protected [__keep_incompatibility]: never;
            public useDelaunayMesh: boolean;
            public autoTiling: boolean;
            public points: System.Array$1<UnityEngine.Vector2>;
            public pathCount: number;
            constructor();
            public GetTotalPointCount(): number;
            public GetPath($index: number): System.Array$1<UnityEngine.Vector2>;
            public SetPath($index: number, $points: System.Array$1<UnityEngine.Vector2>): void;
            public GetPath($index: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector2>): number;
            public SetPath($index: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector2>): void;
            public CreatePrimitive($sides: number): void;
            public CreatePrimitive($sides: number, $scale: UnityEngine.Vector2): void;
            public CreatePrimitive($sides: number, $scale: UnityEngine.Vector2, $offset: UnityEngine.Vector2): void;
            public CreateFromSprite($sprite: UnityEngine.Sprite, $detail?: number, $alphaTolerance?: number, $holeDetection?: boolean, $usePhysicsShapes?: boolean): boolean;
        }

        class CompositeCollider2D extends UnityEngine.Collider2D {
            protected [__keep_incompatibility]: never;
            public geometryType: UnityEngine.CompositeCollider2D.GeometryType;
            public generationType: UnityEngine.CompositeCollider2D.GenerationType;
            public useDelaunayMesh: boolean;
            public vertexDistance: number;
            public edgeRadius: number;
            public offsetDistance: number;
            public get pathCount(): number;
            public get pointCount(): number;
            constructor();
            public GenerateGeometry(): void;
            public GetCompositedColliders($colliders: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public GetPathPointCount($index: number): number;
            public GetPath($index: number, $points: System.Array$1<UnityEngine.Vector2>): number;
            public GetPath($index: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector2>): number;

            enum GeometryType {
                Outlines = 0,
                Polygons = 1
            }

            enum GenerationType {
                Synchronous = 0,
                Manual = 1
            }
        }

        class Joint2D extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public get attachedRigidbody(): UnityEngine.Rigidbody2D;
            public connectedBody: UnityEngine.Rigidbody2D;
            public enableCollision: boolean;
            public breakForce: number;
            public breakTorque: number;
            public breakAction: UnityEngine.JointBreakAction2D;
            public get reactionForce(): UnityEngine.Vector2;
            public get reactionTorque(): number;
            constructor();
            public GetReactionForce($timeStep: number): UnityEngine.Vector2;
            public GetReactionTorque($timeStep: number): number;
        }

        class AnchoredJoint2D extends UnityEngine.Joint2D {
            protected [__keep_incompatibility]: never;
            public anchor: UnityEngine.Vector2;
            public connectedAnchor: UnityEngine.Vector2;
            public autoConfigureConnectedAnchor: boolean;
            constructor();
        }

        class SpringJoint2D extends UnityEngine.AnchoredJoint2D {
            protected [__keep_incompatibility]: never;
            public autoConfigureDistance: boolean;
            public distance: number;
            public dampingRatio: number;
            public frequency: number;
            constructor();
        }

        class DistanceJoint2D extends UnityEngine.AnchoredJoint2D {
            protected [__keep_incompatibility]: never;
            public autoConfigureDistance: boolean;
            public distance: number;
            public maxDistanceOnly: boolean;
            constructor();
        }

        class FrictionJoint2D extends UnityEngine.AnchoredJoint2D {
            protected [__keep_incompatibility]: never;
            public maxForce: number;
            public maxTorque: number;
            constructor();
        }

        class HingeJoint2D extends UnityEngine.AnchoredJoint2D {
            protected [__keep_incompatibility]: never;
            public useMotor: boolean;
            public useLimits: boolean;
            public useConnectedAnchor: boolean;
            public motor: UnityEngine.JointMotor2D;
            public limits: UnityEngine.JointAngleLimits2D;
            public get limitState(): UnityEngine.JointLimitState2D;
            public get referenceAngle(): number;
            public get jointAngle(): number;
            public get jointSpeed(): number;
            constructor();
            public GetMotorTorque($timeStep: number): number;
        }

        class RelativeJoint2D extends UnityEngine.Joint2D {
            protected [__keep_incompatibility]: never;
            public maxForce: number;
            public maxTorque: number;
            public correctionScale: number;
            public autoConfigureOffset: boolean;
            public linearOffset: UnityEngine.Vector2;
            public angularOffset: number;
            public get target(): UnityEngine.Vector2;
            constructor();
        }

        class SliderJoint2D extends UnityEngine.AnchoredJoint2D {
            protected [__keep_incompatibility]: never;
            public autoConfigureAngle: boolean;
            public angle: number;
            public useMotor: boolean;
            public useLimits: boolean;
            public motor: UnityEngine.JointMotor2D;
            public limits: UnityEngine.JointTranslationLimits2D;
            public get limitState(): UnityEngine.JointLimitState2D;
            public get referenceAngle(): number;
            public get jointTranslation(): number;
            public get jointSpeed(): number;
            constructor();
            public GetMotorForce($timeStep: number): number;
        }

        class TargetJoint2D extends UnityEngine.Joint2D {
            protected [__keep_incompatibility]: never;
            public anchor: UnityEngine.Vector2;
            public target: UnityEngine.Vector2;
            public autoConfigureTarget: boolean;
            public maxForce: number;
            public dampingRatio: number;
            public frequency: number;
            constructor();
        }

        class FixedJoint2D extends UnityEngine.AnchoredJoint2D {
            protected [__keep_incompatibility]: never;
            public dampingRatio: number;
            public frequency: number;
            public get referenceAngle(): number;
            constructor();
        }

        class WheelJoint2D extends UnityEngine.AnchoredJoint2D {
            protected [__keep_incompatibility]: never;
            public suspension: UnityEngine.JointSuspension2D;
            public useMotor: boolean;
            public motor: UnityEngine.JointMotor2D;
            public get jointTranslation(): number;
            public get jointLinearSpeed(): number;
            public get jointSpeed(): number;
            public get jointAngle(): number;
            constructor();
            public GetMotorTorque($timeStep: number): number;
        }

        class Effector2D extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public useColliderMask: boolean;
            public colliderMask: number;
            constructor();
        }

        class AreaEffector2D extends UnityEngine.Effector2D {
            protected [__keep_incompatibility]: never;
            public forceAngle: number;
            public useGlobalAngle: boolean;
            public forceMagnitude: number;
            public forceVariation: number;
            public linearDamping: number;
            public angularDamping: number;
            public forceTarget: UnityEngine.EffectorSelection2D;
            constructor();
        }

        class BuoyancyEffector2D extends UnityEngine.Effector2D {
            protected [__keep_incompatibility]: never;
            public surfaceLevel: number;
            public density: number;
            public linearDamping: number;
            public angularDamping: number;
            public flowAngle: number;
            public flowMagnitude: number;
            public flowVariation: number;
            constructor();
        }

        class PointEffector2D extends UnityEngine.Effector2D {
            protected [__keep_incompatibility]: never;
            public forceMagnitude: number;
            public forceVariation: number;
            public distanceScale: number;
            public linearDamping: number;
            public angularDamping: number;
            public forceSource: UnityEngine.EffectorSelection2D;
            public forceTarget: UnityEngine.EffectorSelection2D;
            public forceMode: UnityEngine.EffectorForceMode2D;
            constructor();
        }

        class PlatformEffector2D extends UnityEngine.Effector2D {
            protected [__keep_incompatibility]: never;
            public useOneWay: boolean;
            public useOneWayGrouping: boolean;
            public useSideFriction: boolean;
            public useSideBounce: boolean;
            public surfaceArc: number;
            public sideArc: number;
            public rotationalOffset: number;
            constructor();
        }

        class SurfaceEffector2D extends UnityEngine.Effector2D {
            protected [__keep_incompatibility]: never;
            public speed: number;
            public speedVariation: number;
            public forceScale: number;
            public useContactForce: boolean;
            public useFriction: boolean;
            public useBounce: boolean;
            constructor();
        }

        class PhysicsUpdateBehaviour2D extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            constructor();
        }

        class ConstantForce2D extends UnityEngine.PhysicsUpdateBehaviour2D {
            protected [__keep_incompatibility]: never;
            public force: UnityEngine.Vector2;
            public relativeForce: UnityEngine.Vector2;
            public torque: number;
            constructor();
        }

        class PhysicsMaterial2D extends UnityEngine.Object {
            protected [__keep_incompatibility]: never;
            public bounciness: number;
            public friction: number;
            public frictionCombine: UnityEngine.PhysicsMaterialCombine2D;
            public bounceCombine: UnityEngine.PhysicsMaterialCombine2D;
            constructor();
            constructor($name: string);
            public static GetCombinedValues($valueA: number, $valueB: number, $materialCombineA: UnityEngine.PhysicsMaterialCombine2D, $materialCombineB: UnityEngine.PhysicsMaterialCombine2D): number;
        }

    }
    namespace UnityEngine {
        namespace LowLevelPhysics2D {
            class PhysicsLowLevelSettings2D extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public physicsLayerNames: UnityEngine.LowLevelPhysics2D.PhysicsLayers.LayerNames;
                public useFullLayers: boolean;
                public physicsWorldDefinition: UnityEngine.LowLevelPhysics2D.PhysicsWorldDefinition;
                public physicsBodyDefinition: UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition;
                public physicsShapeDefinition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition;
                public physicsChainDefinition: UnityEngine.LowLevelPhysics2D.PhysicsChainDefinition;
                public concurrentSimulations: number;
                public lengthUnitsPerMeter: number;
                public drawInBuild: boolean;
                public bypassLowLevel: boolean;
                constructor();
            }

            class PhysicsDistanceJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsDistanceJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public distance: number;
                public get currentDistance(): number;
                public enableSpring: boolean;
                public springFrequency: number;
                public springDamping: number;
                public springLowerForce: number;
                public springUpperForce: number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorForce: number;
                public get currentMotorForce(): number;
                public enableLimit: boolean;
                public minDistanceLimit: number;
                public maxDistanceLimit: number;
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsDistanceJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsDistanceJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsDistanceJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
            }

            class PhysicsDistanceJointDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsDistanceJointDefinition;
                public bodyA: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public bodyB: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public distance: number;
                public enableSpring: boolean;
                public springFrequency: number;
                public springDamping: number;
                public springLowerForce: number;
                public springUpperForce: number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorForce: number;
                public enableLimit: boolean;
                public minDistanceLimit: number;
                public maxDistanceLimit: number;
                public forceThreshold: number;
                public torqueThreshold: number;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public collideConnected: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsFixedJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsFixedJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public linearFrequency: number;
                public linearDamping: number;
                public angularFrequency: number;
                public angularDamping: number;
                constructor($physicsJoint: UnityEngine.LowLevelPhysics2D.PhysicsJoint);
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsFixedJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsFixedJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsFixedJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
            }

            class PhysicsFixedJointDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsFixedJointDefinition;
                public bodyA: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public bodyB: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public linearFrequency: number;
                public linearDamping: number;
                public angularFrequency: number;
                public angularDamping: number;
                public forceThreshold: number;
                public torqueThreshold: number;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public collideConnected: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsHingeJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsHingeJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public enableSpring: boolean;
                public springFrequency: number;
                public springDamping: number;
                public springTargetAngle: number;
                public get angle(): number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorTorque: number;
                public get currentMotorTorque(): number;
                public enableLimit: boolean;
                public lowerAngleLimit: number;
                public upperAngleLimit: number;
                constructor($physicsJoint: UnityEngine.LowLevelPhysics2D.PhysicsJoint);
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsHingeJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsHingeJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsHingeJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
            }

            class PhysicsHingeJointDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsHingeJointDefinition;
                public bodyA: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public bodyB: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public enableSpring: boolean;
                public springTargetAngle: number;
                public springFrequency: number;
                public springDamping: number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorTorque: number;
                public enableLimit: boolean;
                public lowerAngleLimit: number;
                public upperAngleLimit: number;
                public forceThreshold: number;
                public torqueThreshold: number;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public collideConnected: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsIgnoreJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                constructor($physicsJoint: UnityEngine.LowLevelPhysics2D.PhysicsJoint);
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
            }

            class PhysicsIgnoreJointDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJointDefinition;
                public bodyA: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public bodyB: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                constructor();
            }

            class PhysicsJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static CreateJoint($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsDistanceJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsDistanceJoint;
                public static CreateJoint($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsRelativeJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsRelativeJoint;
                public static CreateJoint($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJoint;
                public static CreateJoint($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsSliderJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsSliderJoint;
                public static CreateJoint($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsHingeJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsHingeJoint;
                public static CreateJoint($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsFixedJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsFixedJoint;
                public static CreateJoint($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsWheelJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsWheelJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;

                enum JointType {
                    DistanceJoint = 0,
                    IgnoreJoint = 1,
                    RelativeJoint = 2,
                    SliderJoint = 3,
                    HingeJoint = 4,
                    FixedJoint = 5,
                    WheelJoint = 6
                }
            }

            class PhysicsRelativeJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsRelativeJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public linearVelocity: UnityEngine.Vector2;
                public angularVelocity: number;
                public maxForce: number;
                public maxTorque: number;
                public springLinearFrequency: number;
                public springAngularFrequency: number;
                public springLinearDamping: number;
                public springAngularDamping: number;
                public springMaxForce: number;
                public springMaxTorque: number;
                constructor($physicsJoint: UnityEngine.LowLevelPhysics2D.PhysicsJoint);
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsRelativeJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsRelativeJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsRelativeJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
            }

            class PhysicsRelativeJointDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsRelativeJointDefinition;
                public bodyA: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public bodyB: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public linearVelocity: UnityEngine.Vector2;
                public angularVelocity: number;
                public maxForce: number;
                public maxTorque: number;
                public springLinearFrequency: number;
                public springAngularFrequency: number;
                public springLinearDamping: number;
                public springAngularDamping: number;
                public springMaxForce: number;
                public springMaxTorque: number;
                public forceThreshold: number;
                public torqueThreshold: number;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public collideConnected: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsSliderJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsSliderJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public enableSpring: boolean;
                public springFrequency: number;
                public springDamping: number;
                public springTargetTranslation: number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorForce: number;
                public get currentMotorForce(): number;
                public enableLimit: boolean;
                public lowerTranslationLimit: number;
                public upperTranslationLimit: number;
                public get currentTranslation(): number;
                public get currentSpeed(): number;
                constructor($physicsJoint: UnityEngine.LowLevelPhysics2D.PhysicsJoint);
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsSliderJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsSliderJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsSliderJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
            }

            class PhysicsSliderJointDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsSliderJointDefinition;
                public bodyA: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public bodyB: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public enableSpring: boolean;
                public springTargetTranslation: number;
                public springFrequency: number;
                public springDamping: number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorForce: number;
                public enableLimit: boolean;
                public lowerTranslationLimit: number;
                public upperTranslationLimit: number;
                public forceThreshold: number;
                public torqueThreshold: number;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public collideConnected: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsWheelJoint implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsWheelJoint>, UnityEngine.LowLevelPhysics2D.IPhysicsJoint {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get jointType(): UnityEngine.LowLevelPhysics2D.PhysicsJoint.JointType;
                public get bodyA(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get bodyB(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public forceThreshold: number;
                public torqueThreshold: number;
                public collideConnected: boolean;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public get currentConstraintForce(): UnityEngine.Vector2;
                public get currentConstraintTorque(): number;
                public get currentLinearSeparationError(): number;
                public get currentAngularSeparationError(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public enableSpring: boolean;
                public springFrequency: number;
                public springDamping: number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorTorque: number;
                public get currentMotorTorque(): number;
                public enableLimit: boolean;
                public lowerTranslationLimit: number;
                public upperTranslationLimit: number;
                constructor($physicsJoint: UnityEngine.LowLevelPhysics2D.PhysicsJoint);
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsWheelJoint): boolean;
                public GetHashCode(): number;
                public Destroy($ownerKey?: number): boolean;
                public WakeBodies(): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Draw(): void;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsWheelJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsWheelJoint;
                public static DestroyBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
            }

            class PhysicsWheelJointDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsWheelJointDefinition;
                public bodyA: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public bodyB: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public localAnchorA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public localAnchorB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public enableSpring: boolean;
                public springFrequency: number;
                public springDamping: number;
                public enableMotor: boolean;
                public motorSpeed: number;
                public maxMotorTorque: number;
                public enableLimit: boolean;
                public lowerTranslationLimit: number;
                public upperTranslationLimit: number;
                public forceThreshold: number;
                public torqueThreshold: number;
                public tuningFrequency: number;
                public tuningDamping: number;
                public drawScale: number;
                public collideConnected: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsAABB {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public lowerBound: UnityEngine.Vector2;
                public upperBound: UnityEngine.Vector2;
                public get center(): UnityEngine.Vector2;
                public get extents(): UnityEngine.Vector2;
                public get perimeter(): number;
                constructor($lowerBound: UnityEngine.Vector2, $upperBound: UnityEngine.Vector2);
                public Normalized(): void;
                public OverlapPoint($point: UnityEngine.Vector2): boolean;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public Overlap($aabb: UnityEngine.LowLevelPhysics2D.PhysicsAABB): boolean;
                public Overlap($point: UnityEngine.Vector2): boolean;
                public Union($aabb: UnityEngine.LowLevelPhysics2D.PhysicsAABB): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public Contains($aabb: UnityEngine.LowLevelPhysics2D.PhysicsAABB): boolean;
                public ToString(): string;
            }

            class PhysicsLayers {
                protected [__keep_incompatibility]: never;
                public static readonly InvalidLayerOrdinal: number;
                public static GetLayerMask(...layerNames: string[]): UnityEngine.LowLevelPhysics2D.PhysicsMask;
                public static GetLayerOrdinal($layerName: string): number;
                public static GetLayerName($layerOrdinal: number): string;

                class LayerNames implements UnityEngine.ISerializationCallbackReceiver {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public OnBeforeSerialize(): void;
                    public OnAfterDeserialize(): void;
                }
            }

            class PhysicsMask implements System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable {
                protected [__keep_incompatibility]: never;
                public bitMask: bigint;
                public static readonly None: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                public static readonly One: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                public static readonly All: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                constructor(...bitIndicies: number[]);
                constructor($layerMask: UnityEngine.LayerMask);
                public ToLayerMask(): UnityEngine.LayerMask;
                public SetBit($bitIndex: number): void;
                public ResetBit($bitIndex: number): void;
                public IsBitSet($bitIndex: number): boolean;
                public AreBitsSet($physicsMask: UnityEngine.LowLevelPhysics2D.PhysicsMask): boolean;
                public GetEnumerator(): System.Collections.Generic.IEnumerator$1<number>;
                public ToString(): string;

                class ResetBitIterator implements System.Collections.Generic.IEnumerator$1<number>, System.Collections.IEnumerator, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    constructor($bitMask: UnityEngine.LowLevelPhysics2D.PhysicsMask);
                }

                class SetBitIterator implements System.Collections.Generic.IEnumerator$1<number>, System.Collections.IEnumerator, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    constructor($bitMask: UnityEngine.LowLevelPhysics2D.PhysicsMask);
                }

                class ShowAsPhysicsMaskAttribute extends UnityEngine.PropertyAttribute {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }
            }

            class PhysicsPlane {
                protected [__keep_incompatibility]: never;
                public normal: UnityEngine.Vector2;
                public offset: number;
                public get isValid(): boolean;
                public GetSeparation($point: UnityEngine.Vector2): number;
                public ToString(): string;
            }

            class PhysicsRotate implements UnityEngine.ISerializationCallbackReceiver {
                protected [__keep_incompatibility]: never;
                public direction: UnityEngine.Vector2;
                public get cos(): number;
                public get sin(): number;
                public get isNormalized(): boolean;
                public get isValid(): boolean;
                public get angle(): number;
                public static get identity(): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public static get right(): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public static get left(): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public static get up(): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public static get down(): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                constructor();
                constructor($direction: UnityEngine.Vector2);
                constructor($angle: number);
                constructor($rotation: UnityEngine.Quaternion, $transformPlane: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane);
                public GetRelativeAngle($rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate): number;
                public static UnwindAngle($angle: number): number;
                public IntegrateRotation($deltaAngle: number): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public LerpRotation($rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate, $interval: number): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public static LerpRotation($rotationA: UnityEngine.LowLevelPhysics2D.PhysicsRotate, $rotationB: UnityEngine.LowLevelPhysics2D.PhysicsRotate, $interval: number): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public AngularVelocity($rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate, $deltaTime: number): number;
                public static AngularVelocity($rotationA: UnityEngine.LowLevelPhysics2D.PhysicsRotate, $rotationB: UnityEngine.LowLevelPhysics2D.PhysicsRotate, $deltaTime: number): number;
                public MultiplyRotation($rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public InverseMultiplyRotation($rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public RotateVector($vector: UnityEngine.Vector2): UnityEngine.Vector2;
                public InverseRotateVector($vector: UnityEngine.Vector2): UnityEngine.Vector2;
                public Rotate($deltaAngle: number): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public GetMatrix($transformPlane: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Matrix4x4;
                public Normalized(): UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public OnBeforeSerialize(): void;
                public OnAfterDeserialize(): void;
                public ToString(): string;
            }

            class PhysicsTransform {
                protected [__keep_incompatibility]: never;
                public position: UnityEngine.Vector2;
                public rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public get isValid(): boolean;
                public static get identity(): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                constructor();
                constructor($position: UnityEngine.Vector2);
                constructor($position: UnityEngine.Vector2, $rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate);
                public GetPositionAndRotation($position: $Out<UnityEngine.Vector2>, $rotation: $Out<UnityEngine.LowLevelPhysics2D.PhysicsRotate>): void;
                public TransformPoint($point: UnityEngine.Vector2): UnityEngine.Vector2;
                public InverseTransformPoint($point: UnityEngine.Vector2): UnityEngine.Vector2;
                public MultiplyTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public InverseMultiplyTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public ToString(): string;
            }

            class PhysicsUserData {
                protected [__keep_incompatibility]: never;
                public objectValue: UnityEngine.Object;
                public physicsMaskValue: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                public floatValue: number;
                public intValue: number;
                public int64Value: bigint;
                public boolValue: boolean;
                public ToString(): string;
            }

            class PhysicsBody implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsBody> {
                protected [__keep_incompatibility]: never;
                public definition: UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public type: UnityEngine.LowLevelPhysics2D.PhysicsBody.BodyType;
                public bodyType: UnityEngine.RigidbodyType2D;
                public constraints: UnityEngine.LowLevelPhysics2D.PhysicsBody.BodyConstraints;
                public bodyConstraints: UnityEngine.RigidbodyConstraints2D;
                public position: UnityEngine.Vector2;
                public rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public linearVelocity: UnityEngine.Vector2;
                public angularVelocity: number;
                public get mass(): number;
                public get rotationalInertia(): number;
                public get localCenterOfMass(): UnityEngine.Vector2;
                public get worldCenterOfMass(): UnityEngine.Vector2;
                public massConfiguration: UnityEngine.LowLevelPhysics2D.PhysicsBody.MassConfiguration;
                public linearDamping: number;
                public angularDamping: number;
                public gravityScale: number;
                public awake: boolean;
                public sleepingAllowed: boolean;
                public sleepThreshold: number;
                public enabled: boolean;
                public fastRotationAllowed: boolean;
                public fastCollisionsAllowed: boolean;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public transformObject: UnityEngine.Transform;
                public transformWriteMode: UnityEngine.LowLevelPhysics2D.PhysicsBody.TransformWriteMode;
                public get shapeCount(): number;
                public get jointCount(): number;
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsBody): boolean;
                public GetHashCode(): number;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public static Create($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public static CreateBatch($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definition: UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition, $bodyCount: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsBody>;
                public static CreateBatch($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $definitions: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition>, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsBody>;
                public Destroy($ownerKey?: number): boolean;
                public static DestroyBatch($bodies: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBody>): void;
                public static SetBatchVelocity($batch: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBody.BatchVelocity>): void;
                public static SetBatchForce($batch: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBody.BatchForce>): void;
                public static SetBatchImpulse($batch: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBody.BatchImpulse>): void;
                public static SetBatchTransform($batch: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBody.BatchTransform>): void;
                public SetTransformTarget($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $deltaTime: number): void;
                public GetPositionAndRotation3D($transform: UnityEngine.Transform, $transformWriteMode: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformWriteMode, $transformPlane: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane, $position: $Out<UnityEngine.Vector3>, $rotation: $Out<UnityEngine.Quaternion>): void;
                public SetAndWriteTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): boolean;
                public GetLocalPoint($worldPoint: UnityEngine.Vector2): UnityEngine.Vector2;
                public GetWorldPoint($localPoint: UnityEngine.Vector2): UnityEngine.Vector2;
                public GetLocalVector($worldVector: UnityEngine.Vector2): UnityEngine.Vector2;
                public GetWorldVector($localVector: UnityEngine.Vector2): UnityEngine.Vector2;
                public GetLocalPointVelocity($localPoint: UnityEngine.Vector2): UnityEngine.Vector2;
                public GetWorldPointVelocity($worldPoint: UnityEngine.Vector2): UnityEngine.Vector2;
                public ApplyMassFromShapes(): void;
                public ApplyForce($force: UnityEngine.Vector2, $point: UnityEngine.Vector2, $wake?: boolean): void;
                public ApplyForceToCenter($force: UnityEngine.Vector2, $wake?: boolean): void;
                public ApplyTorque($torque: number, $wake?: boolean): void;
                public ApplyLinearImpulse($impulse: UnityEngine.Vector2, $point: UnityEngine.Vector2, $wake?: boolean): void;
                public ApplyLinearImpulseToCenter($impulse: UnityEngine.Vector2, $wake?: boolean): void;
                public ApplyAngularImpulse($impulse: number, $wake?: boolean): void;
                public ClearForces(): void;
                public WakeTouching(): void;
                public SetContactEvents($contactEvents: boolean): void;
                public SetHitEvents($hitEvents: boolean): void;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public GetShapes($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public GetJoints($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>;
                public GetContacts($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape.Contact>;
                public GetAABB(): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShapeBatch($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CircleGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShapeBatch($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShapeBatch($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CapsuleGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShapeBatch($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.SegmentGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShape($geometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public CreateShapeBatch($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public CreateChain($geometry: UnityEngine.LowLevelPhysics2D.ChainGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsChainDefinition): UnityEngine.LowLevelPhysics2D.PhysicsChain;
                public Draw(): void;

                enum BodyType {
                    Dynamic = 0,
                    Kinematic = 1,
                    Static = 2
                }

                enum BodyConstraints {
                    None = 0,
                    PositionX = 1,
                    PositionY = 2,
                    Position = 3,
                    Rotation = 4,
                    All = 7
                }

                enum TransformWriteMode {
                    Current = 0,
                    Interpolate = 1,
                    Extrapolate = 2,
                    Off = 3
                }

                class TransformWriteTween {
                    protected [__keep_incompatibility]: never;
                    public body: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                    public transformWriteMode: UnityEngine.LowLevelPhysics2D.PhysicsBody.TransformWriteMode;
                    public physicsTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public linearVelocity: UnityEngine.Vector2;
                    public angularVelocity: number;
                    public positionFrom: UnityEngine.Vector3;
                    public rotationFrom: UnityEngine.Quaternion;
                }

                class MassConfiguration {
                    protected [__keep_incompatibility]: never;
                    public mass: number;
                    public center: UnityEngine.Vector2;
                    public rotationalInertia: number;
                }

                class BatchVelocity {
                    protected [__keep_incompatibility]: never;
                    public physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                    public linearVelocity: UnityEngine.Vector2;
                    public angularVelocity: number;
                    constructor($physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody);
                }

                class BatchForce {
                    protected [__keep_incompatibility]: never;
                    public physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                    constructor($physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody);
                    public ApplyForce($force: UnityEngine.Vector2, $point: UnityEngine.Vector2, $wake?: boolean): void;
                    public ApplyForceToCenter($force: UnityEngine.Vector2, $wake?: boolean): void;
                    public ApplyTorque($torque: number, $wake?: boolean): void;
                }

                class BatchImpulse {
                    protected [__keep_incompatibility]: never;
                    public physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                    constructor($physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody);
                    public ApplyLinearImpulse($impulse: UnityEngine.Vector2, $point: UnityEngine.Vector2, $wake?: boolean): void;
                    public ApplyLinearImpulseToCenter($impulse: UnityEngine.Vector2, $wake?: boolean): void;
                    public ApplyAngularImpulse($impulse: number, $wake?: boolean): void;
                }

                class BatchTransform {
                    protected [__keep_incompatibility]: never;
                    public physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody;
                    public position: UnityEngine.Vector2;
                    public rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                    public transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    constructor($physicsBody: UnityEngine.LowLevelPhysics2D.PhysicsBody);
                }
            }

            class PhysicsBodyDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition;
                public type: UnityEngine.LowLevelPhysics2D.PhysicsBody.BodyType;
                public bodyType: UnityEngine.RigidbodyType2D;
                public constraints: UnityEngine.LowLevelPhysics2D.PhysicsBody.BodyConstraints;
                public bodyConstraints: UnityEngine.RigidbodyConstraints2D;
                public transformWriteMode: UnityEngine.LowLevelPhysics2D.PhysicsBody.TransformWriteMode;
                public position: UnityEngine.Vector2;
                public rotation: UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                public linearVelocity: UnityEngine.Vector2;
                public angularVelocity: number;
                public linearDamping: number;
                public angularDamping: number;
                public gravityScale: number;
                public sleepThreshold: number;
                public fastRotationAllowed: boolean;
                public fastCollisionsAllowed: boolean;
                public sleepingAllowed: boolean;
                public awake: boolean;
                public enabled: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsCallbacks {
                protected [__keep_incompatibility]: never;

                interface IBodyUpdateCallback {
                    OnBodyUpdate2D($bodyUpdateEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.BodyUpdateEvent): void;
                }

                interface IContactFilterCallback {
                    OnContactFilter2D($contactFilterEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactFilterEvent): boolean;
                }

                interface IPreSolveCallback {
                    OnPreSolve2D($preSolveEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.PreSolveEvent): boolean;
                }

                interface ITriggerCallback {
                    OnTriggerBegin2D($beginEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.TriggerBeginEvent): void;
                    OnTriggerEnd2D($endEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.TriggerEndEvent): void;
                }

                interface IContactCallback {
                    OnContactBegin2D($beginEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactBeginEvent): void;
                    OnContactEnd2D($endEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactEndEvent): void;
                }

                interface IJointThresholdCallback {
                    OnJointThreshold2D($thresholdEvent: UnityEngine.LowLevelPhysics2D.PhysicsEvents.JointThresholdEvent): void;
                }

                class BodyUpdateCallbackTargets implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get bodyUpdateCallbackTargets(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.BodyUpdateCallbackTargets.BodyUpdateTarget>;
                    public Dispose(): void;

                    class BodyUpdateTarget {
                        protected [__keep_incompatibility]: never;
                        public get bodyUpdateEvent(): UnityEngine.LowLevelPhysics2D.PhysicsEvents.BodyUpdateEvent;
                        public get bodyTarget(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.IBodyUpdateCallback;
                    }
                }

                class TriggerCallbackTargets implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get BeginCallbackTargets(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.TriggerCallbackTargets.TriggerBeginTarget>;
                    public get EndCallbackTargets(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.TriggerCallbackTargets.TriggerEndTarget>;
                    public Dispose(): void;

                    class TriggerBeginTarget {
                        protected [__keep_incompatibility]: never;
                        public get beginEvent(): UnityEngine.LowLevelPhysics2D.PhysicsEvents.TriggerBeginEvent;
                        public get triggerShapeTarget(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.ITriggerCallback;
                        public get visitorShapeTarget(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.ITriggerCallback;
                    }

                    class TriggerEndTarget {
                        protected [__keep_incompatibility]: never;
                        public get endEvent(): UnityEngine.LowLevelPhysics2D.PhysicsEvents.TriggerEndEvent;
                        public get triggerShapeTarget(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.ITriggerCallback;
                        public get visitorShapeTarget(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.ITriggerCallback;
                    }
                }

                class ContactCallbackTargets implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get BeginCallbackTargets(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.ContactCallbackTargets.ContactBeginTarget>;
                    public get EndCallbackTargets(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.ContactCallbackTargets.ContactEndTarget>;
                    public Dispose(): void;

                    class ContactBeginTarget {
                        protected [__keep_incompatibility]: never;
                        public get beginEvent(): UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactBeginEvent;
                        public get shapeTargetA(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.IContactCallback;
                        public get shapeTargetB(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.IContactCallback;
                    }

                    class ContactEndTarget {
                        protected [__keep_incompatibility]: never;
                        public get endEvent(): UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactEndEvent;
                        public get shapeTargetA(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.IContactCallback;
                        public get shapeTargetB(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.IContactCallback;
                    }
                }

                class JointThresholdCallbackTargets implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get jointThresholdCallbackTargets(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.JointThresholdCallbackTargets.JointThresholdTarget>;
                    public Dispose(): void;

                    class JointThresholdTarget {
                        protected [__keep_incompatibility]: never;
                        public get jointThresholdEvent(): UnityEngine.LowLevelPhysics2D.PhysicsEvents.JointThresholdEvent;
                        public get jointTarget(): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.IJointThresholdCallback;
                    }
                }
            }

            class PhysicsChain implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsChain> {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get body(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public get aabb(): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public friction: number;
                public bounciness: number;
                public frictionMixing: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial.MixingMode;
                public frictionCombine: UnityEngine.PhysicsMaterialCombine2D;
                public bouncinessMixing: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial.MixingMode;
                public bouncinessCombine: UnityEngine.PhysicsMaterialCombine2D;
                public get segmentCount(): number;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsChain): boolean;
                public GetHashCode(): number;
                public static Create($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.ChainGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsChainDefinition): UnityEngine.LowLevelPhysics2D.PhysicsChain;
                public Destroy($ownerKey?: number): boolean;
                public ClosestPoint($point: UnityEngine.Vector2, $chainSegmentShape: $Out<UnityEngine.LowLevelPhysics2D.PhysicsShape>): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput, $chainSegmentShape: $Out<UnityEngine.LowLevelPhysics2D.PhysicsShape>): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput, $chainSegmentShape: $Out<UnityEngine.LowLevelPhysics2D.PhysicsShape>): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public GetSegments($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public GetSegmentIndex($chainSegmentShape: UnityEngine.LowLevelPhysics2D.PhysicsShape): number;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
            }

            class PhysicsChainDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsChainDefinition;
                public surfaceMaterial: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial;
                public contactFilter: UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactFilter;
                public isLoop: boolean;
                public triggerEvents: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsComposer implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsComposer> {
                protected [__keep_incompatibility]: never;
                public static readonly DefaultCurveStride: number;
                public static readonly MinCurveStride: number;
                public get isValid(): boolean;
                public useDelaunay: boolean;
                public maxPolygonVertices: number;
                public get layerCount(): number;
                public get layerHandles(): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle>;
                public get rejectedGeometryCount(): number;
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsComposer): boolean;
                public GetHashCode(): number;
                public static Create($allocator?: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsComposer;
                public Destroy(): boolean;
                public AddLayer($geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CircleGeometry>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CapsuleGeometry>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($shape: UnityEngine.LowLevelPhysics2D.PhysicsShape, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($shapes: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $curveStride?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public AddLayer($vertices: System.ReadOnlySpan$1<UnityEngine.Vector2>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $operation?: UnityEngine.LowLevelPhysics2D.PhysicsComposer.Operation, $order?: number, $reverseWinding?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle;
                public RemoveLayer($layerHandle: UnityEngine.LowLevelPhysics2D.PhysicsComposer.LayerHandle): void;
                public CreatePolygonGeometry($vertexScale: UnityEngine.Vector2, $allocator: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>;
                public CreateConvexHulls($vertexScale: UnityEngine.Vector2, $allocator: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry.ConvexHull>;
                public CreateChainGeometry($vertices: $Out<Unity.Collections.NativeArray$1<UnityEngine.Vector2>>, $vertexScale: UnityEngine.Vector2, $allocator: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.ChainGeometry>;

                class LayerHandle {
                    protected [__keep_incompatibility]: never;
                    public ToString(): string;
                }

                enum Operation {
                    OR = 0,
                    AND = 1,
                    NOT = 2,
                    XOR = 3
                }
            }

            class PhysicsConstants {
                protected [__keep_incompatibility]: never;
                public static readonly MaxWorlds: number;
                public static readonly MaxWorkers: number;
                public static readonly MaxPolygonVertices: number;
            }

            class PhysicsDestructor {
                protected [__keep_incompatibility]: never;
                public static Fragment($target: UnityEngine.LowLevelPhysics2D.PhysicsDestructor.FragmentGeometry, $fragmentPoints: System.ReadOnlySpan$1<UnityEngine.Vector2>, $allocator: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsDestructor.FragmentResult;
                public static Fragment($target: UnityEngine.LowLevelPhysics2D.PhysicsDestructor.FragmentGeometry, $mask: UnityEngine.LowLevelPhysics2D.PhysicsDestructor.FragmentGeometry, $fragmentPoints: System.ReadOnlySpan$1<UnityEngine.Vector2>, $allocator: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsDestructor.FragmentResult;
                public static Slice($target: UnityEngine.LowLevelPhysics2D.PhysicsDestructor.FragmentGeometry, $origin: UnityEngine.Vector2, $translation: UnityEngine.Vector2, $allocator: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsDestructor.SliceResult;

                class FragmentGeometry {
                    protected [__keep_incompatibility]: never;
                    constructor($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>);
                }

                class FragmentResult implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get transform(): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public get unbrokenGeometry(): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>;
                    public get brokenGeometry(): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>;
                    public Dispose(): void;
                }

                class SliceResult implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get transform(): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public get leftGeometry(): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>;
                    public get rightGeometry(): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>;
                    public Dispose(): void;
                }
            }

            class PhysicsEvents {
                protected [__keep_incompatibility]: never;
                public static add_PreSimulate(handler: UnityEngine.LowLevelPhysics2D.PhysicsEvents.PreSimulateEventHandler): void;
                public static remove_PreSimulate(handler: UnityEngine.LowLevelPhysics2D.PhysicsEvents.PreSimulateEventHandler): void;
                public static add_PostSimulate(handler: UnityEngine.LowLevelPhysics2D.PhysicsEvents.PreSimulateEventHandler): void;
                public static remove_PostSimulate(handler: UnityEngine.LowLevelPhysics2D.PhysicsEvents.PreSimulateEventHandler): void;

                class BodyUpdateEvent {
                    protected [__keep_incompatibility]: never;
                    public get transform(): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public get body(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                    public get fellAsleep(): boolean;
                    public ToString(): string;
                }

                class TriggerBeginEvent {
                    protected [__keep_incompatibility]: never;
                    public get triggerShape(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get visitorShape(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public ToString(): string;
                }

                class TriggerEndEvent {
                    protected [__keep_incompatibility]: never;
                    public get triggerShape(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get visitorShape(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public ToString(): string;
                }

                class ContactBeginEvent {
                    protected [__keep_incompatibility]: never;
                    public get shapeA(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get shapeB(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get contactId(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactId;
                    public ToString(): string;
                }

                class ContactEndEvent {
                    protected [__keep_incompatibility]: never;
                    public get shapeA(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get shapeB(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get contactId(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactId;
                    public ToString(): string;
                }

                class ContactHitEvent {
                    protected [__keep_incompatibility]: never;
                    public get shapeA(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get shapeB(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get point(): UnityEngine.Vector2;
                    public get normal(): UnityEngine.Vector2;
                    public get approachSpeed(): number;
                    public ToString(): string;
                }

                class ContactFilterEvent {
                    protected [__keep_incompatibility]: never;
                    public get physicsWorld(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                    public get shapeA(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get shapeB(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public ToString(): string;
                }

                class PreSolveEvent {
                    protected [__keep_incompatibility]: never;
                    public get physicsWorld(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                    public get shapeA(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get shapeB(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get point(): UnityEngine.Vector2;
                    public get normal(): UnityEngine.Vector2;
                    public ToString(): string;
                }

                class JointThresholdEvent {
                    protected [__keep_incompatibility]: never;
                    public get joint(): UnityEngine.LowLevelPhysics2D.PhysicsJoint;
                    public ToString(): string;
                }

                interface PreSimulateEventHandler {
                    ($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $deltaTime: number): void;
                    Invoke?: ($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $deltaTime: number) => void;
                }
                var PreSimulateEventHandler: { new (func: ($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $deltaTime: number) => void): PreSimulateEventHandler; };

                interface PostSimulateEventHandler {
                    ($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $deltaTime: number): void;
                    Invoke?: ($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $deltaTime: number) => void;
                }
                var PostSimulateEventHandler: { new (func: ($world: UnityEngine.LowLevelPhysics2D.PhysicsWorld, $deltaTime: number) => void): PostSimulateEventHandler; };
            }

            class CircleGeometry {
                protected [__keep_incompatibility]: never;
                public static readonly defaultGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry;
                public get isValid(): boolean;
                public center: UnityEngine.Vector2;
                public radius: number;
                constructor();
                public static Create($radius: number): UnityEngine.LowLevelPhysics2D.CircleGeometry;
                public static Create($radius: number, $center: UnityEngine.Vector2): UnityEngine.LowLevelPhysics2D.CircleGeometry;
                public CalculateMassConfiguration($density?: number): UnityEngine.LowLevelPhysics2D.PhysicsBody.MassConfiguration;
                public CalculateAABB($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public OverlapPoint($point: UnityEngine.Vector2): boolean;
                public ClosestPoint($point: UnityEngine.Vector2): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Transform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.CircleGeometry;
                public InverseTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.CircleGeometry;
                public Transform($transform: UnityEngine.Matrix4x4, $scaleRadius: boolean): UnityEngine.LowLevelPhysics2D.CircleGeometry;
                public InverseTransform($transform: UnityEngine.Matrix4x4, $scaleRadius: boolean): UnityEngine.LowLevelPhysics2D.CircleGeometry;
            }

            class CapsuleGeometry {
                protected [__keep_incompatibility]: never;
                public static readonly defaultGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                public get isValid(): boolean;
                public center1: UnityEngine.Vector2;
                public center2: UnityEngine.Vector2;
                public radius: number;
                constructor();
                public static Create($center1: UnityEngine.Vector2, $center2: UnityEngine.Vector2, $radius: number): UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                public CalculateMassConfiguration($density?: number): UnityEngine.LowLevelPhysics2D.PhysicsBody.MassConfiguration;
                public CalculateAABB($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public OverlapPoint($point: UnityEngine.Vector2): boolean;
                public ClosestPoint($point: UnityEngine.Vector2): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Transform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                public InverseTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                public Transform($transform: UnityEngine.Matrix4x4, $scaleRadius: boolean): UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                public InverseTransform($transform: UnityEngine.Matrix4x4, $scaleRadius: boolean): UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
            }

            class PolygonGeometry {
                protected [__keep_incompatibility]: never;
                public static readonly defaultGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public vertices: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeArray;
                public normals: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeArray;
                public get isValid(): boolean;
                public centroid: UnityEngine.Vector2;
                public radius: number;
                public count: number;
                constructor();
                public static CreateBox($size: UnityEngine.Vector2, $radius?: number, $inscribe?: boolean): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public static CreatePolygons($vertices: System.ReadOnlySpan$1<UnityEngine.Vector2>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $vertexScale: UnityEngine.Vector2, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>;
                public static CreateBox($size: UnityEngine.Vector2, $radius: number, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $inscribe?: boolean): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public static Create($vertices: System.ReadOnlySpan$1<UnityEngine.Vector2>, $radius?: number): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public static Create($vertices: System.ReadOnlySpan$1<UnityEngine.Vector2>, $radius: number, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public static Create($vertices: System.ReadOnlySpan$1<UnityEngine.Vector2>, $radius: number, $transform: UnityEngine.Matrix4x4): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public static Create($convexHull: $Ref<UnityEngine.LowLevelPhysics2D.PolygonGeometry.ConvexHull>, $radius: number): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public static InsertVertex($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $index: number, $vertex: UnityEngine.Vector2): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public static DeleteVertex($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $index: number): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public AsReadOnlySpan(): System.ReadOnlySpan$1<UnityEngine.Vector2>;
                public Validate(): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public CalculateMassConfiguration($density?: number): UnityEngine.LowLevelPhysics2D.PhysicsBody.MassConfiguration;
                public CalculateAABB($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public OverlapPoint($point: UnityEngine.Vector2): boolean;
                public ClosestPoint($point: UnityEngine.Vector2): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Transform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public InverseTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public Transform($transform: UnityEngine.Matrix4x4, $scaleRadius: boolean): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public InverseTransform($transform: UnityEngine.Matrix4x4, $scaleRadius: boolean): UnityEngine.LowLevelPhysics2D.PolygonGeometry;

                class ConvexHull {
                    protected [__keep_incompatibility]: never;
                    public vertices: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeArray;
                    public count: number;
                    public AsReadOnlySpan(): System.ReadOnlySpan$1<UnityEngine.Vector2>;
                }
            }

            class SegmentGeometry {
                protected [__keep_incompatibility]: never;
                public static readonly defaultGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public get isValid(): boolean;
                public point1: UnityEngine.Vector2;
                public point2: UnityEngine.Vector2;
                public get midPoint(): UnityEngine.Vector2;
                public get forward(): UnityEngine.Vector2;
                public get backward(): UnityEngine.Vector2;
                constructor();
                public static Create($point1: UnityEngine.Vector2, $point2: UnityEngine.Vector2): UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public CalculateAABB($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public ClosestPoint($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $point: UnityEngine.Vector2): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput, $oneSided?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Transform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public InverseTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public Transform($transform: UnityEngine.Matrix4x4): UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public InverseTransform($transform: UnityEngine.Matrix4x4): UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public Scale($scale: number): UnityEngine.LowLevelPhysics2D.SegmentGeometry;
            }

            class ChainSegmentGeometry {
                protected [__keep_incompatibility]: never;
                public static readonly defaultGeometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry;
                public get isValid(): boolean;
                public ghost1: UnityEngine.Vector2;
                public segment: UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public ghost2: UnityEngine.Vector2;
                constructor();
                constructor($segmentGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $ghost1: UnityEngine.Vector2, $ghost2: UnityEngine.Vector2);
                public CalculateAABB($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public ClosestPoint($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $point: UnityEngine.Vector2): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput, $oneSided: boolean): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public Transform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry;
                public InverseTransform($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry;
                public Transform($transform: UnityEngine.Matrix4x4): UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry;
                public InverseTransform($transform: UnityEngine.Matrix4x4): UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry;
            }

            class ChainGeometry {
                protected [__keep_incompatibility]: never;
                public get isValid(): boolean;
                public get vertices(): System.ReadOnlySpan$1<UnityEngine.Vector2>;
                constructor($vertices: Unity.Collections.NativeArray$1<UnityEngine.Vector2>);
                constructor($vertices: System.ReadOnlySpan$1<UnityEngine.Vector2>);
                public CalculateAABB($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public ClosestPoint($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $point: UnityEngine.Vector2): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput, $oneSided?: boolean): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
            }

            class PhysicsMath {
                protected [__keep_incompatibility]: never;
                public static get PI(): number;
                public static get TAU(): number;
                public static ToDegrees($radians: number): number;
                public static ToRadians($degrees: number): number;
                public static Atan2($y: number, $x: number): number;
                public static CosSin($angle: number, $cosine: $Out<number>, $sine: $Out<number>): void;
                public static SpringDamper($frequency: number, $damping: number, $translation: number, $speed: number, $deltaTime: number): number;
                public static MinAbsComponent($vector: UnityEngine.Vector2): number;
                public static MinAbsComponent($vector: UnityEngine.Vector3): number;
                public static MaxAbsComponent($vector: UnityEngine.Vector2): number;
                public static MaxAbsComponent($vector: UnityEngine.Vector3): number;
                public static GetTranslationAxes($transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector3;
                public static GetTranslationIgnoredAxes($transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector3;
                public static GetTranslationIgnoredAxis($position: UnityEngine.Vector3, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): number;
                public static GetRotationAxes($transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector3;
                public static GetRotationIgnoredAxes($transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector3;
                public static GetRelativeMatrix($transformFrom: UnityEngine.Transform, $transformTo: UnityEngine.Transform, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane, $useScale?: boolean): UnityEngine.Matrix4x4;
                public static Swizzle($position: UnityEngine.Vector3, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector3;
                public static Swizzle($position: UnityEngine.Vector4, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector4;
                public static Swizzle($matrix: UnityEngine.Matrix4x4, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Matrix4x4;
                public static ToPosition3D($position: UnityEngine.Vector2, $reference: UnityEngine.Vector3, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector3;
                public static ToPosition2D($position: UnityEngine.Vector3, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Vector2;
                public static ToRotation2D($quaternion: UnityEngine.Quaternion, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): number;
                public static ToPhysicsTransform($transform: UnityEngine.Transform, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public static AngularVelocityToQuaternion($angularVelocity: number, $deltaTime: number, $transformPlane: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Quaternion;
                public static ToRotationFast3D($angle: number, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Quaternion;
                public static ToRotationSlow3D($angle: number, $reference: UnityEngine.Quaternion, $transformPlane?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane): UnityEngine.Quaternion;
            }

            class PhysicsQuery {
                protected [__keep_incompatibility]: never;
                public static ShapeAndShape($shapeA: UnityEngine.LowLevelPhysics2D.PhysicsShape, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $shapeB: UnityEngine.LowLevelPhysics2D.PhysicsShape, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static CircleAndCircle($geometryA: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static CapsuleAndCircle($geometryA: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static SegmentAndCircle($geometryA: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static PolygonAndCircle($geometryA: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static CapsuleAndCapsule($geometryA: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static SegmentAndCapsule($geometryA: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static PolygonAndCapsule($geometryA: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static PolygonAndPolygon($geometryA: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static SegmentAndPolygon($geometryA: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static ChainSegmentAndCircle($geometryA: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static ChainSegmentAndCapsule($geometryA: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static ChainSegmentAndPolygon($geometryA: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public static SegmentDistance($geometryA: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $geometryB: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsQuery.SegmentDistanceResult;
                public static CastShapes($castShapePairInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapePairInput): void;
                public static ShapeDistance($distanceInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.DistanceInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.DistanceResult;
                public static ShapeTimeOfImpact($toiInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.TimeOfImpactInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.TimeOfImpactResult;

                class QueryFilter {
                    protected [__keep_incompatibility]: never;
                    public static readonly DefaultCategories: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public static readonly DefaultHitCategories: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public static readonly Everything: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter;
                    public static readonly defaultFilter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter;
                    public categories: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public hitCategories: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    constructor();
                    constructor($categories: UnityEngine.LowLevelPhysics2D.PhysicsMask, $hitCategories: UnityEngine.LowLevelPhysics2D.PhysicsMask);
                }

                class WorldOverlapResult {
                    protected [__keep_incompatibility]: never;
                    public get shape(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get isValid(): boolean;
                }

                class WorldCastResult {
                    protected [__keep_incompatibility]: never;
                    public get shape(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get point(): UnityEngine.Vector2;
                    public get normal(): UnityEngine.Vector2;
                    public get fraction(): number;
                    public get isValid(): boolean;
                }

                class WorldMoverInput {
                    protected [__keep_incompatibility]: never;
                    public geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                    public transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public targetPosition: UnityEngine.Vector2;
                    public velocity: UnityEngine.Vector2;
                    public overlapFilter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter;
                    public castFilter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter;
                    public maxIterations: number;
                    public moveTolerance: number;
                    public static get defaultInput(): UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldMoverInput;
                    constructor();
                }

                class WorldMoverResult {
                    protected [__keep_incompatibility]: never;
                    public get transform(): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public get velocity(): UnityEngine.Vector2;
                }

                enum WorldCastMode {
                    Closest = 0,
                    All = 1,
                    AllSorted = 2
                }

                class CastRayInput {
                    protected [__keep_incompatibility]: never;
                    public origin: UnityEngine.Vector2;
                    public translation: UnityEngine.Vector2;
                    public maxFraction: number;
                    constructor();
                    constructor($origin: UnityEngine.Vector2, $translation: UnityEngine.Vector2);
                    public static FromTo($from: UnityEngine.Vector2, $to: UnityEngine.Vector2): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput;
                }

                class CastShapePairInput {
                    protected [__keep_incompatibility]: never;
                    public shapeProxyA: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                    public shapeProxyB: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                    public transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public translationB: UnityEngine.Vector2;
                    public maxFraction: number;
                    public canEncroach: boolean;
                }

                class CastShapeInput {
                    protected [__keep_incompatibility]: never;
                    public shapeProxy: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                    public translation: UnityEngine.Vector2;
                    public maxFraction: number;
                    public canEncroach: boolean;
                    constructor();
                    constructor($circleGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $translation: UnityEngine.Vector2);
                    constructor($capsuleGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $translation: UnityEngine.Vector2);
                    constructor($segmentGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $translation: UnityEngine.Vector2);
                    constructor($polygonGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $translation: UnityEngine.Vector2);
                    constructor($chainSegmentGeometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $translation: UnityEngine.Vector2);
                    public static FromShape($shape: UnityEngine.LowLevelPhysics2D.PhysicsShape, $translation: UnityEngine.Vector2): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput;
                }

                class CastResult {
                    protected [__keep_incompatibility]: never;
                    public get normal(): UnityEngine.Vector2;
                    public get point(): UnityEngine.Vector2;
                    public get fraction(): number;
                    public get iterations(): number;
                    public get hit(): boolean;
                }

                class DistanceInput {
                    protected [__keep_incompatibility]: never;
                    public shapeProxyA: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                    public shapeProxyB: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                    public transformA: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public transformB: UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                    public useRadii: boolean;
                }

                class DistanceResult {
                    protected [__keep_incompatibility]: never;
                    public get pointA(): UnityEngine.Vector2;
                    public get pointB(): UnityEngine.Vector2;
                    public get normal(): UnityEngine.Vector2;
                    public get distance(): number;
                    public get iterations(): number;
                }

                class SegmentDistanceResult {
                    protected [__keep_incompatibility]: never;
                    public get closest1(): UnityEngine.Vector2;
                    public get closest2(): UnityEngine.Vector2;
                    public get fraction1(): number;
                    public get fraction2(): number;
                    public get distance(): number;
                }

                class ShapeSweep {
                    protected [__keep_incompatibility]: never;
                    public localCOM: UnityEngine.Vector2;
                    public positionStart: UnityEngine.Vector2;
                    public positionEnd: UnityEngine.Vector2;
                    public rotationStart: UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                    public rotationEnd: UnityEngine.LowLevelPhysics2D.PhysicsRotate;
                }

                class TimeOfImpactInput {
                    protected [__keep_incompatibility]: never;
                    public shapeProxyA: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                    public shapeProxyB: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                    public shapeSweepA: UnityEngine.LowLevelPhysics2D.PhysicsQuery.ShapeSweep;
                    public shapeSweepB: UnityEngine.LowLevelPhysics2D.PhysicsQuery.ShapeSweep;
                    public maxFraction: number;
                }

                class TimeOfImpactResult {
                    protected [__keep_incompatibility]: never;
                    public get point(): UnityEngine.Vector2;
                    public get normal(): UnityEngine.Vector2;
                    public get impactState(): UnityEngine.LowLevelPhysics2D.PhysicsQuery.TimeOfImpactResult.State;
                    public get fraction(): number;

                    enum State {
                        Unknown = 0,
                        Failed = 1,
                        Overlapped = 2,
                        Hit = 3,
                        Separated = 4
                    }
                }
            }

            class PhysicsShape implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsShape> {
                protected [__keep_incompatibility]: never;
                public definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition;
                public get isValid(): boolean;
                public get world(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public get body(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public isTrigger: boolean;
                public get shapeType(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeType;
                public get transform(): UnityEngine.LowLevelPhysics2D.PhysicsTransform;
                public get massConfiguration(): UnityEngine.LowLevelPhysics2D.PhysicsBody.MassConfiguration;
                public friction: number;
                public bounciness: number;
                public frictionMixing: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial.MixingMode;
                public frictionCombine: UnityEngine.PhysicsMaterialCombine2D;
                public bouncinessMixing: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial.MixingMode;
                public bouncinessCombine: UnityEngine.PhysicsMaterialCombine2D;
                public frictionPriority: number;
                public bouncinessPriority: number;
                public rollingResistance: number;
                public tangentSpeed: number;
                public customColor: UnityEngine.Color32;
                public surfaceMaterial: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial;
                public contactFilter: UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactFilter;
                public moverData: UnityEngine.LowLevelPhysics2D.PhysicsShape.MoverData;
                public triggerEvents: boolean;
                public contactEvents: boolean;
                public hitEvents: boolean;
                public contactFilterCallbacks: boolean;
                public preSolveCallbacks: boolean;
                public circleGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry;
                public capsuleGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                public polygonGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                public segmentGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                public get chainSegmentGeometry(): UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry;
                public get isChainSegment(): boolean;
                public get chain(): UnityEngine.LowLevelPhysics2D.PhysicsChain;
                public get aabb(): UnityEngine.LowLevelPhysics2D.PhysicsAABB;
                public get localCenter(): UnityEngine.Vector2;
                public get isOwned(): boolean;
                public callbackTarget: any;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsShape): boolean;
                public GetHashCode(): number;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShapeBatch($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CircleGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShapeBatch($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShapeBatch($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CapsuleGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShapeBatch($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.SegmentGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShape($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                public static CreateShapeBatch($body: UnityEngine.LowLevelPhysics2D.PhysicsBody, $geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry>, $definition: UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public Destroy($updateBodyMass?: boolean, $ownerKey?: number): boolean;
                public static DestroyBatch($shapes: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>, $updateBodyMass: boolean): void;
                public SetDensity($density: number, $updateBodyMass: boolean): void;
                public GetDensity(): number;
                public ApplyWind($force: UnityEngine.Vector2, $drag: number, $lift: number, $wake?: boolean): void;
                public OverlapPoint($point: UnityEngine.Vector2): boolean;
                public ClosestPoint($point: UnityEngine.Vector2): UnityEngine.Vector2;
                public CastRay($castRayInput: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public CastShape($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastShapeInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastResult;
                public Intersect($otherShape: UnityEngine.LowLevelPhysics2D.PhysicsShape): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public Intersect($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $otherShape: UnityEngine.LowLevelPhysics2D.PhysicsShape, $otherTransform: UnityEngine.LowLevelPhysics2D.PhysicsTransform): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                public GetContacts($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape.Contact>;
                public GetTriggerVisitors($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>;
                public GetPerimeter(): number;
                public GetPerimeterProjected($axis: UnityEngine.Vector2): number;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public CreateShapeProxy(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy;
                public Draw(): void;

                enum ShapeType {
                    Circle = 0,
                    Capsule = 1,
                    Segment = 2,
                    Polygon = 3,
                    ChainSegment = 4
                }

                class SurfaceMaterial {
                    protected [__keep_incompatibility]: never;
                    public static get Default(): UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial;
                    public friction: number;
                    public bounciness: number;
                    public frictionMixing: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial.MixingMode;
                    public frictionCombine: UnityEngine.PhysicsMaterialCombine2D;
                    public bouncinessMixing: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial.MixingMode;
                    public bouncinessCombine: UnityEngine.PhysicsMaterialCombine2D;
                    public frictionPriority: number;
                    public bouncinessPriority: number;
                    public rollingResistance: number;
                    public tangentSpeed: number;
                    public customColor: UnityEngine.Color32;
                    constructor();

                    enum MixingMode {
                        Average = 0,
                        Mean = 1,
                        Multiply = 2,
                        Minimum = 3,
                        Maximum = 4
                    }
                }

                class ContactManifold implements System.Collections.Generic.IEnumerable$1<UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPoint>, System.Collections.IEnumerable {
                    protected [__keep_incompatibility]: never;
                    public get normal(): UnityEngine.Vector2;
                    public get rollingImpulse(): number;
                    public get points(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPointArray;
                    public get pointCount(): number;
                    public get speculativePointCount(): number;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPoint>;
                    public get_Item($index: number): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPoint;

                    class ManifoldPoint {
                        protected [__keep_incompatibility]: never;
                        public get point(): UnityEngine.Vector2;
                        public get anchorA(): UnityEngine.Vector2;
                        public get anchorB(): UnityEngine.Vector2;
                        public get separation(): number;
                        public get normalImpulse(): number;
                        public get tangentImpulse(): number;
                        public get totalNormalImpulse(): number;
                        public get normalVelocity(): number;
                        public get id(): number;
                        public get persisted(): boolean;
                        public get speculative(): boolean;
                    }

                    class ManifoldPointArray {
                        protected [__keep_incompatibility]: never;
                        public get contactInfo0(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPoint;
                        public get contactInfo1(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPoint;
                        public get speculativePointCount(): number;
                        public get_Item($index: number): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPoint;
                    }

                    class ManifoldPointIterator implements System.Collections.Generic.IEnumerator$1<UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold.ManifoldPoint>, System.Collections.IEnumerator, System.IDisposable {
                        protected [__keep_incompatibility]: never;
                        constructor($contactManifold: UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold);
                    }
                }

                class Contact {
                    protected [__keep_incompatibility]: never;
                    public get contactId(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactId;
                    public get shapeA(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get shapeB(): UnityEngine.LowLevelPhysics2D.PhysicsShape;
                    public get manifold(): UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactManifold;
                }

                class ContactId {
                    protected [__keep_incompatibility]: never;
                    public get isValid(): boolean;
                    public get contact(): UnityEngine.LowLevelPhysics2D.PhysicsShape.Contact;
                    public ToString(): string;
                }

                class ContactFilter {
                    protected [__keep_incompatibility]: never;
                    public static DefaultCategories: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public static DefaultContacts: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public static Everything: UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactFilter;
                    public static defaultFilter: UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactFilter;
                    public categories: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public contacts: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public groupIndex: number;
                    constructor($categories: UnityEngine.LowLevelPhysics2D.PhysicsMask, $contacts: UnityEngine.LowLevelPhysics2D.PhysicsMask, $groupIndex?: number);
                }

                class ShapeArray {
                    protected [__keep_incompatibility]: never;
                    public vertex0: UnityEngine.Vector2;
                    public vertex1: UnityEngine.Vector2;
                    public vertex2: UnityEngine.Vector2;
                    public vertex3: UnityEngine.Vector2;
                    public vertex4: UnityEngine.Vector2;
                    public vertex5: UnityEngine.Vector2;
                    public vertex6: UnityEngine.Vector2;
                    public vertex7: UnityEngine.Vector2;
                    public get_Item($index: number): $Ref<UnityEngine.Vector2>;
                }

                class MoverData {
                    protected [__keep_incompatibility]: never;
                    public pushLimit: number;
                    public clipVelocity: boolean;
                    constructor();
                }

                class ShapeProxy {
                    protected [__keep_incompatibility]: never;
                    public get circleGeometry(): UnityEngine.LowLevelPhysics2D.CircleGeometry;
                    public get capsuleGeometry(): UnityEngine.LowLevelPhysics2D.CapsuleGeometry;
                    public get polygonGeometry(): UnityEngine.LowLevelPhysics2D.PolygonGeometry;
                    public get segmentGeometry(): UnityEngine.LowLevelPhysics2D.SegmentGeometry;
                    public vertices: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeArray;
                    public count: number;
                    public radius: number;
                    constructor($point: UnityEngine.Vector2);
                    constructor($circleGeometry: UnityEngine.LowLevelPhysics2D.CircleGeometry);
                    constructor($capsuleGeometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry);
                    constructor($polygonGeometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry);
                    constructor($segmentGeometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry);
                    constructor($chainSegmentGeometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry);
                }
            }

            class PhysicsShapeDefinition {
                protected [__keep_incompatibility]: never;
                public surfaceMaterial: UnityEngine.LowLevelPhysics2D.PhysicsShape.SurfaceMaterial;
                public contactFilter: UnityEngine.LowLevelPhysics2D.PhysicsShape.ContactFilter;
                public moverData: UnityEngine.LowLevelPhysics2D.PhysicsShape.MoverData;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsShapeDefinition;
                public density: number;
                public isTrigger: boolean;
                public triggerEvents: boolean;
                public contactEvents: boolean;
                public hitEvents: boolean;
                public contactFilterCallbacks: boolean;
                public preSolveCallbacks: boolean;
                public startStaticContacts: boolean;
                public startMassUpdate: boolean;
                constructor();
                constructor($useSettings: boolean);
            }

            class PhysicsWorld implements System.IEquatable$1<UnityEngine.LowLevelPhysics2D.PhysicsWorld> {
                protected [__keep_incompatibility]: never;
                public static safetyLocksEnabled: boolean;
                public static get bypassLowLevel(): boolean;
                public static get isRenderingAllowed(): boolean;
                public static get worldCount(): number;
                public static get concurrentSimulations(): number;
                public static get lengthUnitsPerMeter(): number;
                public static get useFullLayers(): boolean;
                public static get hugeWorldExtent(): number;
                public static get linearSlop(): number;
                public static get speculativeContactDistance(): number;
                public static get aabbMargin(): number;
                public static get bodyMaxRotation(): number;
                public static get bodyTimeToSleep(): number;
                public static get defaultWorld(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public definition: UnityEngine.LowLevelPhysics2D.PhysicsWorldDefinition;
                public get isOwned(): boolean;
                public userData: UnityEngine.LowLevelPhysics2D.PhysicsUserData;
                public get isValid(): boolean;
                public get isEmpty(): boolean;
                public get isDefaultWorld(): boolean;
                public paused: boolean;
                public sleepingAllowed: boolean;
                public continuousAllowed: boolean;
                public contactFilterCallbacks: boolean;
                public preSolveCallbacks: boolean;
                public autoBodyUpdateCallbacks: boolean;
                public autoContactCallbacks: boolean;
                public autoTriggerCallbacks: boolean;
                public autoJointThresholdCallbacks: boolean;
                public warmStartingAllowed: boolean;
                public bounceThreshold: number;
                public contactHitEventThreshold: number;
                public contactFrequency: number;
                public contactDamping: number;
                public contactSpeed: number;
                public maximumLinearSpeed: number;
                public gravity: UnityEngine.Vector2;
                public simulationWorkers: number;
                public simulationType: UnityEngine.LowLevelPhysics2D.PhysicsWorld.SimulationType;
                public simulationMode: UnityEngine.SimulationMode2D;
                public simulationSubSteps: number;
                public get lastSimulationTimestamp(): number;
                public get lastSimulationDeltaTime(): number;
                public transformPlane: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane;
                public transformWriteMode: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformWriteMode;
                public transformTweening: boolean;
                public get bodyUpdateEvents(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsEvents.BodyUpdateEvent>;
                public get triggerBeginEvents(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsEvents.TriggerBeginEvent>;
                public get triggerEndEvents(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsEvents.TriggerEndEvent>;
                public get contactBeginEvents(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactBeginEvent>;
                public get contactEndEvents(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactEndEvent>;
                public get contactHitEvents(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsEvents.ContactHitEvent>;
                public get jointThresholdEvents(): System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsEvents.JointThresholdEvent>;
                public get awakeBodyCount(): number;
                public get counters(): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters;
                public static get globalCounters(): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters;
                public get profile(): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile;
                public static get globalProfile(): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile;
                public drawOptions: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawOptions;
                public drawFillOptions: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions;
                public drawThickness: number;
                public drawFillAlpha: number;
                public drawPointScale: number;
                public drawNormalScale: number;
                public drawImpulseScale: number;
                public drawCapacity: number;
                public drawColors: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawColors;
                public elementDepth: number;
                public ToString(): string;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.LowLevelPhysics2D.PhysicsWorld): boolean;
                public GetHashCode(): number;
                public static GetWorlds($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsWorld>;
                public GetBodies($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsBody>;
                public GetJoints($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>;
                public static Create(): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public static Create($definition: UnityEngine.LowLevelPhysics2D.PhysicsWorldDefinition): UnityEngine.LowLevelPhysics2D.PhysicsWorld;
                public Destroy($ownerKey?: number): boolean;
                public SetOwner($owner: UnityEngine.Object): number;
                public GetOwner(): UnityEngine.Object;
                public Reset(): void;
                public GetTransformWriteTweens(): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsBody.TransformWriteTween>;
                public Simulate($deltaTime: number): void;
                public static Simulate($worlds: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsWorld>, $deltaTime: number): void;
                public Explode($definition: UnityEngine.LowLevelPhysics2D.PhysicsWorld.ExplosionDefinition): void;
                public GetBodyUpdateUserData($allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsUserData>;
                public SendAllCallbacks(): void;
                public SendBodyUpdateCallbacks(): void;
                public SendContactCallbacks(): void;
                public SendTriggerCallbacks(): void;
                public SendJointThresholdCallbacks(): void;
                public GetBodyUpdateCallbackTargets($allocator?: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.BodyUpdateCallbackTargets;
                public GetTriggerCallbackTargets($allocator?: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.TriggerCallbackTargets;
                public GetContactCallbackTargets($allocator?: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.ContactCallbackTargets;
                public GetJointThresholdCallbackTargets($allocator?: Unity.Collections.Allocator): UnityEngine.LowLevelPhysics2D.PhysicsCallbacks.JointThresholdCallbackTargets;
                public TestOverlapAABB($aabb: UnityEngine.LowLevelPhysics2D.PhysicsAABB, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapShape($shape: UnityEngine.LowLevelPhysics2D.PhysicsShape, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapShapeProxy($shapeProxy: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapPoint($point: UnityEngine.Vector2, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public TestOverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter): boolean;
                public OverlapAABB($aabb: UnityEngine.LowLevelPhysics2D.PhysicsAABB, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapShape($shape: UnityEngine.LowLevelPhysics2D.PhysicsShape, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapShapeProxy($shapeProxy: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapPoint($point: UnityEngine.Vector2, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public OverlapGeometry($geometry: UnityEngine.LowLevelPhysics2D.ChainSegmentGeometry, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldOverlapResult>;
                public CastRay($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.CastRayInput, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $castMode?: UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastMode, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastResult>;
                public CastShape($shape: UnityEngine.LowLevelPhysics2D.PhysicsShape, $translation: UnityEngine.Vector2, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $castMode?: UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastMode, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastResult>;
                public CastShapeProxy($shapeProxy: UnityEngine.LowLevelPhysics2D.PhysicsShape.ShapeProxy, $translation: UnityEngine.Vector2, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $castMode?: UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastMode, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastResult>;
                public CastMover($input: UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldMoverInput): UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldMoverResult;
                public CastGeometry($geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $translation: UnityEngine.Vector2, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $castMode?: UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastMode, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastResult>;
                public CastGeometry($geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $translation: UnityEngine.Vector2, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $castMode?: UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastMode, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastResult>;
                public CastGeometry($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $translation: UnityEngine.Vector2, $filter: UnityEngine.LowLevelPhysics2D.PhysicsQuery.QueryFilter, $castMode?: UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastMode, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsQuery.WorldCastResult>;
                public CreateBody(): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public CreateBody($definition: UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition): UnityEngine.LowLevelPhysics2D.PhysicsBody;
                public CreateBodyBatch($definition: UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition, $bodyCount: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsBody>;
                public CreateBodyBatch($definitions: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBodyDefinition>, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics2D.PhysicsBody>;
                public static DestroyBodyBatch($bodies: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsBody>): void;
                public static DestroyShapeBatch($shapes: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsShape>, $updateBodyMass: boolean): void;
                public static DestroyJointBatch($joints: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PhysicsJoint>): void;
                public CreateJoint($definition: UnityEngine.LowLevelPhysics2D.PhysicsDistanceJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsDistanceJoint;
                public CreateJoint($definition: UnityEngine.LowLevelPhysics2D.PhysicsRelativeJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsRelativeJoint;
                public CreateJoint($definition: UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsIgnoreJoint;
                public CreateJoint($definition: UnityEngine.LowLevelPhysics2D.PhysicsSliderJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsSliderJoint;
                public CreateJoint($definition: UnityEngine.LowLevelPhysics2D.PhysicsHingeJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsHingeJoint;
                public CreateJoint($definition: UnityEngine.LowLevelPhysics2D.PhysicsFixedJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsFixedJoint;
                public CreateJoint($definition: UnityEngine.LowLevelPhysics2D.PhysicsWheelJointDefinition): UnityEngine.LowLevelPhysics2D.PhysicsWheelJoint;
                public SetElementDepth3D($position: UnityEngine.Vector3): void;
                public ClearDraw(): void;
                public DrawGeometry($geometry: UnityEngine.LowLevelPhysics2D.CircleGeometry, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawGeometry($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CircleGeometry>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawGeometry($geometry: UnityEngine.LowLevelPhysics2D.CapsuleGeometry, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawGeometry($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.CapsuleGeometry>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawGeometry($geometry: UnityEngine.LowLevelPhysics2D.PolygonGeometry, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawGeometry($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.PolygonGeometry>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawGeometry($geometry: UnityEngine.LowLevelPhysics2D.SegmentGeometry, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number): void;
                public DrawGeometry($geometry: System.ReadOnlySpan$1<UnityEngine.LowLevelPhysics2D.SegmentGeometry>, $transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $color: UnityEngine.Color, $lifetime?: number): void;
                public DrawBox($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $size: UnityEngine.Vector2, $radius: number, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawCircle($center: UnityEngine.Vector2, $radius: number, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawCapsule($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $center1: UnityEngine.Vector2, $center2: UnityEngine.Vector2, $radius: number, $color: UnityEngine.Color, $lifetime?: number, $drawFillOptions?: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions): void;
                public DrawPoint($position: UnityEngine.Vector2, $radius: number, $color: UnityEngine.Color, $lifetime?: number): void;
                public DrawLine($point0: UnityEngine.Vector2, $point1: UnityEngine.Vector2, $color: UnityEngine.Color, $lifetime?: number): void;
                public DrawLineStrip($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $vertices: System.ReadOnlySpan$1<UnityEngine.Vector2>, $loop: boolean, $color: UnityEngine.Color, $lifetime?: number): void;
                public DrawTransformAxis($transform: UnityEngine.LowLevelPhysics2D.PhysicsTransform, $scale: number, $lifetime?: number): void;

                enum SimulationType {
                    FixedUpdate = 0,
                    Update = 1,
                    Script = 2
                }

                enum TransformWriteMode {
                    Off = 0,
                    Fast2D = 1,
                    Slow3D = 2
                }

                enum TransformPlane {
                    XY = 0,
                    XZ = 1,
                    ZY = 2
                }

                class ExplosionDefinition {
                    protected [__keep_incompatibility]: never;
                    public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsWorld.ExplosionDefinition;
                    public hitCategories: UnityEngine.LowLevelPhysics2D.PhysicsMask;
                    public position: UnityEngine.Vector2;
                    public radius: number;
                    public falloff: number;
                    public impulsePerLength: number;
                    constructor();
                }

                class WorldCounters {
                    protected [__keep_incompatibility]: never;
                    public bodyCount: number;
                    public shapeCount: number;
                    public contactCount: number;
                    public jointCount: number;
                    public islandCount: number;
                    public stackUsed: number;
                    public memoryUsed: number;
                    public staticBroadphaseHeight: number;
                    public broadphaseHeight: number;
                    public taskCount: number;
                    public static Add($countersA: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters, $countersB: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters;
                    public static Maximum($countersA: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters, $countersB: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldCounters;
                }

                class WorldProfile {
                    protected [__keep_incompatibility]: never;
                    public simulationStep: number;
                    public contactPairs: number;
                    public contactUpdates: number;
                    public solving: number;
                    public prepareStages: number;
                    public solveConstraints: number;
                    public prepareConstraints: number;
                    public integrateVelocities: number;
                    public warmStarting: number;
                    public solveImpulses: number;
                    public integrateTransforms: number;
                    public relaxImpulses: number;
                    public applyBounciness: number;
                    public storeImpulses: number;
                    public splitIslands: number;
                    public bodyTransforms: number;
                    public fastTriggers: number;
                    public jointEvents: number;
                    public hitEvents: number;
                    public broadphaseUpdates: number;
                    public solveContinuous: number;
                    public sleepIslands: number;
                    public updateTriggers: number;
                    public writeTransforms: number;
                    public static Add($profileA: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile, $profileB: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile;
                    public static Maximum($profileA: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile, $profileB: UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile): UnityEngine.LowLevelPhysics2D.PhysicsWorld.WorldProfile;
                }

                enum DrawOptions {
                    Off = 0,
                    SelectedBodies = 1,
                    SelectedShapes = 2,
                    SelectedShapeBounds = 4,
                    SelectedJoints = 8,
                    AllBodies = 16,
                    AllShapes = 32,
                    AllShapeBounds = 64,
                    AllJoints = 128,
                    AllContactPoints = 256,
                    AllContactNormal = 512,
                    AllContactImpulse = 1024,
                    AllContactFriction = 2048,
                    AllCustom = 4096,
                    DefaultSelected = 4106,
                    DefaultAll = 4256,
                    AllSolverIslands = 8192
                }

                enum DrawFillOptions {
                    Interior = 1,
                    Outline = 2,
                    Orientation = 4,
                    All = 7
                }

                class DrawColors {
                    protected [__keep_incompatibility]: never;
                    public transformAxisX: UnityEngine.Color;
                    public transformAxisY: UnityEngine.Color;
                    public bodyBad: UnityEngine.Color;
                    public bodyDisabled: UnityEngine.Color;
                    public bodyAwake: UnityEngine.Color;
                    public bodyStatic: UnityEngine.Color;
                    public bodyKinematic: UnityEngine.Color;
                    public bodyTimeOfImpactEvent: UnityEngine.Color;
                    public bodyFastCollisions: UnityEngine.Color;
                    public bodyMovingFast: UnityEngine.Color;
                    public bodySpeedCapped: UnityEngine.Color;
                    public shapeTrigger: UnityEngine.Color;
                    public shapeOther: UnityEngine.Color;
                    public shapeBounds: UnityEngine.Color;
                    public contactSpeculative: UnityEngine.Color;
                    public contactAdded: UnityEngine.Color;
                    public contactPersisted: UnityEngine.Color;
                    public contactNormal: UnityEngine.Color;
                    public contactImpulse: UnityEngine.Color;
                    public contactFriction: UnityEngine.Color;
                    public solverIsland: UnityEngine.Color;
                }
            }

            class PhysicsWorldDefinition {
                protected [__keep_incompatibility]: never;
                public static get defaultDefinition(): UnityEngine.LowLevelPhysics2D.PhysicsWorldDefinition;
                public gravity: UnityEngine.Vector2;
                public simulateType: UnityEngine.LowLevelPhysics2D.PhysicsWorld.SimulationType;
                public simulationMode: UnityEngine.SimulationMode2D;
                public simulationSubSteps: number;
                public simulationWorkers: number;
                public transformWriteMode: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformWriteMode;
                public transformPlane: UnityEngine.LowLevelPhysics2D.PhysicsWorld.TransformPlane;
                public transformTweening: boolean;
                public sleepingAllowed: boolean;
                public continuousAllowed: boolean;
                public contactFilterCallbacks: boolean;
                public preSolveCallbacks: boolean;
                public autoBodyUpdateCallbacks: boolean;
                public autoContactCallbacks: boolean;
                public autoTriggerCallbacks: boolean;
                public autoJointThresholdCallbacks: boolean;
                public bounceThreshold: number;
                public contactHitEventThreshold: number;
                public contactFrequency: number;
                public contactDamping: number;
                public contactSpeed: number;
                public maximumLinearSpeed: number;
                public drawOptions: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawOptions;
                public drawFillOptions: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawFillOptions;
                public drawThickness: number;
                public drawFillAlpha: number;
                public drawPointScale: number;
                public drawNormalScale: number;
                public drawImpulseScale: number;
                public drawCapacity: number;
                public drawColors: UnityEngine.LowLevelPhysics2D.PhysicsWorld.DrawColors;
                constructor();
                constructor($useSettings: boolean);
            }

        }
    }
}
