declare namespace CS {
    const __keep_incompatibility: symbol;

    namespace UnityEngine {
        class ColliderArray2D implements System.Collections.Generic.IEnumerable$1<UnityEngine.Collider2D>, System.Collections.IEnumerable, System.IDisposable {
            protected [__keep_incompatibility]: never;
            public get Length(): number;
            public Dispose(): void;
            public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.Collider2D>;
            public get_Item($index: number): UnityEngine.Collider2D;
        }

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
            public Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.RaycastHit2D;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>): number;
            public CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $layerMask?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public OverlapPoint($point: UnityEngine.Vector2, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapPoint($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask?: number): UnityEngine.Collider2D;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D): UnityEngine.Collider2D;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask?: number): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($position: UnityEngine.Vector2, $angle: number, $collider: UnityEngine.Collider2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($position: UnityEngine.Vector2, $angle: number, $collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public static OverlapCollider($position: UnityEngine.Vector2, $angle: number, $collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
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
            public static Linecast($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
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
            public static Raycast($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
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
            public static CircleCast($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
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
            public static BoxCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
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
            public static CapsuleCast($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static CapsuleCastAll($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.RaycastHit2D>;
            public static GetRayIntersection($ray: UnityEngine.Ray): UnityEngine.RaycastHit2D;
            public static GetRayIntersection($ray: UnityEngine.Ray, $distance: number): UnityEngine.RaycastHit2D;
            public static GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $layerMask?: number): UnityEngine.RaycastHit2D;
            public static GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $layerMask?: number): number;
            public static GetRayIntersection($ray: UnityEngine.Ray, $distance: number, $layerMask?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
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
            public static OverlapPoint($point: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
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
            public static OverlapCircle($point: UnityEngine.Vector2, $radius: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
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
            public static OverlapBox($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
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
            public static OverlapArea($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
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
            public static OverlapCapsule($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCapsuleAll($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number): System.Array$1<UnityEngine.Collider2D>;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public static OverlapCollider($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public static OverlapCollider($position: UnityEngine.Vector2, $angle: number, $collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
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
            public static GetContacts($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.ContactPoint2D>;
            public static GetContacts($collider1: UnityEngine.Collider2D, $collider2: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.ContactPoint2D>;
            public static GetContacts($rigidbody: UnityEngine.Rigidbody2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.ContactPoint2D>;
            public static GetContactColliders($collider: UnityEngine.Collider2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public static GetContactColliders($rigidbody: UnityEngine.Rigidbody2D, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            /** @deprecated LinecastNonAlloc has neen deprecated. Please use Linecast. */
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            /** @deprecated LinecastNonAlloc has been deprecated. Please use Linecast. */
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask: number): number;
            /** @deprecated LinecastNonAlloc has been deprecated. Please use Linecast. */
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask: number, $minDepth: number): number;
            /** @deprecated LinecastNonAlloc has been deprecated. Please use Linecast. */
            public static LinecastNonAlloc($start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated RaycastNonAlloc has been deprecated. Please use Raycast. */
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            /** @deprecated RaycastNonAlloc has been deprecated. Please use Raycast. */
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            /** @deprecated RaycastNonAlloc has been deprecated. Please use Raycast. */
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            /** @deprecated RaycastNonAlloc has been deprecated. Please use Raycast. */
            public static RaycastNonAlloc($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated CircleCastNonAlloc has been deprecated. Please use CircleCast instead. */
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            /** @deprecated CircleCastNonAlloc has been deprecated. Please use CircleCast instead. */
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            /** @deprecated CircleCastNonAlloc has been deprecated. Please use CircleCast instead. */
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            /** @deprecated CircleCastNonAlloc has been deprecated. Please use CircleCast instead. */
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            /** @deprecated CircleCastNonAlloc has been deprecated. Please use CircleCast instead. */
            public static CircleCastNonAlloc($origin: UnityEngine.Vector2, $radius: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated BoxCastNonAlloc has been deprecated. Please use BoxCast. */
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            /** @deprecated BoxCastNonAlloc has been deprecated. Please use BoxCast. */
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            /** @deprecated BoxCastNonAlloc has been deprecated. Please use BoxCast. */
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            /** @deprecated BoxCastNonAlloc has been deprecated. Please use BoxCast. */
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            /** @deprecated BoxCastNonAlloc has been deprecated. Please use BoxCast. */
            public static BoxCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated CapsuleCastNonAlloc has been deprecated. Please use CapsuleCast. */
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            /** @deprecated CapsuleCastNonAlloc has been deprecated. Please use CapsuleCast. */
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            /** @deprecated CapsuleCastNonAlloc has been deprecated. Please use CapsuleCast. */
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            /** @deprecated CapsuleCastNonAlloc has been deprecated. Please use CapsuleCast. */
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            /** @deprecated CapsuleCastNonAlloc has been deprecated. Please use CapsuleCast. */
            public static CapsuleCastNonAlloc($origin: UnityEngine.Vector2, $size: UnityEngine.Vector2, $capsuleDirection: UnityEngine.CapsuleDirection2D, $angle: number, $direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated GetRayIntersectionNonAlloc is deprecated. Please use GetRayIntersection. */
            public static GetRayIntersectionNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            /** @deprecated GetRayIntersectionNonAlloc is deprecated. Please use GetRayIntersection. */
            public static GetRayIntersectionNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            /** @deprecated OverlapPointNonAlloc has been deprecated. Please use OverlapPoint. */
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>): number;
            /** @deprecated OverlapPointNonAlloc has been deprecated. Please use OverlapPoint. */
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            /** @deprecated OverlapPointNonAlloc has been deprecated. Please use OverlapPoint. */
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            /** @deprecated OverlapPointNonAlloc has been deprecated. Please use OverlapPoint. */
            public static OverlapPointNonAlloc($point: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated OverlapCircleNonAlloc has been deprecated. Please use OverlapCircle. */
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>): number;
            /** @deprecated OverlapCircleNonAlloc has been deprecated. Please use OverlapCircle. */
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            /** @deprecated OverlapCircleNonAlloc has been deprecated. Please use OverlapCircle. */
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            /** @deprecated OverlapCircleNonAlloc has been deprecated. Please use OverlapCircle. */
            public static OverlapCircleNonAlloc($point: UnityEngine.Vector2, $radius: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated OverlapBoxNonAlloc has been deprecated. Please use OverlapBox. */
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>): number;
            /** @deprecated OverlapBoxNonAlloc has been deprecated. Please use OverlapBox. */
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            /** @deprecated OverlapBoxNonAlloc has been deprecated. Please use OverlapBox. */
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            /** @deprecated OverlapBoxNonAlloc has been deprecated. Please use OverlapBox. */
            public static OverlapBoxNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated OverlapAreaNonAlloc has been deprecated. Please use OverlapArea. */
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>): number;
            /** @deprecated OverlapAreaNonAlloc has been deprecated. Please use OverlapArea. */
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            /** @deprecated OverlapAreaNonAlloc has been deprecated. Please use OverlapArea. */
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            /** @deprecated OverlapAreaNonAlloc has been deprecated. Please use OverlapArea. */
            public static OverlapAreaNonAlloc($pointA: UnityEngine.Vector2, $pointB: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            /** @deprecated OverlapCapsuleNonAlloc has been deprecated. Please use OverlapCapsule. */
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>): number;
            /** @deprecated OverlapCapsuleNonAlloc has been deprecated. Please use OverlapCapsule. */
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number): number;
            /** @deprecated OverlapCapsuleNonAlloc has been deprecated. Please use OverlapCapsule. */
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number): number;
            /** @deprecated OverlapCapsuleNonAlloc has been deprecated. Please use OverlapCapsule. */
            public static OverlapCapsuleNonAlloc($point: UnityEngine.Vector2, $size: UnityEngine.Vector2, $direction: UnityEngine.CapsuleDirection2D, $angle: number, $results: System.Array$1<UnityEngine.Collider2D>, $layerMask: number, $minDepth: number, $maxDepth: number): number;
        }

        enum CapsuleDirection2D {
            Vertical = 0,
            Horizontal = 1
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
            /** @deprecated ContactFilter2D.NoFilter method has been deprecated. Please use the static ContactFilter2D.noFilter property. */
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
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.ContactPoint2D>;
            public GetContactColliders($contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public GetAttachedColliders($results: $Out<System.Array$1<UnityEngine.Collider2D>>): number;
            public GetAttachedColliders($results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public GetAttachedColliders($results: $Out<System.Array$1<UnityEngine.Collider2D>>, $findTriggers?: boolean): number;
            public GetAttachedColliders($results: System.Collections.Generic.List$1<UnityEngine.Collider2D>, $findTriggers?: boolean): number;
            public GetAttachedColliders($findTriggers: boolean, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public GetShapes($physicsShapeGroup: UnityEngine.PhysicsShapeGroup2D): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Cast($direction: UnityEngine.Vector2, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public Overlap($contactFilter: UnityEngine.ContactFilter2D, $results: $Out<System.Array$1<UnityEngine.Collider2D>>): number;
            public Overlap($results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($position: UnityEngine.Vector2, $angle: number, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            public Overlap($position: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
            /** @deprecated OverlapCollider has been deprecated. Please use Overlap (UnityUpgradable) -> Overlap(*) */
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: $Out<System.Array$1<UnityEngine.Collider2D>>): number;
            /** @deprecated OverlapCollider has been deprecated. Please use Overlap (UnityUpgradable) -> Overlap(*) */
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
        }
        namespace Rigidbody2D {
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
            public Overlap($contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public Overlap($position: UnityEngine.Vector2, $angle: number, $contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
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
            public Cast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $ignoreSiblingColliders?: boolean, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public Cast($position: UnityEngine.Vector2, $angle: number, $direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $ignoreSiblingColliders?: boolean, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number): number;
            public Raycast($direction: UnityEngine.Vector2, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number): number;
            public Raycast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>): number;
            public Raycast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.RaycastHit2D>, $distance: number): number;
            public Raycast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.RaycastHit2D>, $distance?: number): number;
            public Raycast($direction: UnityEngine.Vector2, $contactFilter: UnityEngine.ContactFilter2D, $distance?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.RaycastHit2D>;
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
            public GetContacts($contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.ContactPoint2D>;
            public GetContactColliders($contactFilter: UnityEngine.ContactFilter2D, $allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            /** @deprecated OverlapCollider has been deprecated. Please use Overlap. (UnityUpgradable) -> Overlap(*) */
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: System.Array$1<UnityEngine.Collider2D>): number;
            /** @deprecated OverlapCollider has been deprecated. Please use Overlap. (UnityUpgradable) -> Overlap(*) */
            public OverlapCollider($contactFilter: UnityEngine.ContactFilter2D, $results: System.Collections.Generic.List$1<UnityEngine.Collider2D>): number;
        }
        namespace Collider2D {
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
            public GetPath($index: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector2>): number;
            public SetPath($index: number, $points: System.Array$1<UnityEngine.Vector2>): void;
            public SetPath($index: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector2>): void;
            public GetPath($index?: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.Vector2>;
            public SetPath($index: number, $points: System.ReadOnlySpan$1<UnityEngine.Vector2>): void;
            public CreatePrimitive($sides: number): void;
            public CreatePrimitive($sides: number, $scale: UnityEngine.Vector2): void;
            public CreatePrimitive($sides: number, $scale: UnityEngine.Vector2, $offset: UnityEngine.Vector2): void;
            public CreateFromSprite($sprite: UnityEngine.Sprite, $detail: number, $alphaTolerance: number, $holeDetection: boolean): boolean;
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
            public GetCompositedColliders($colliders: $Out<System.Collections.Generic.List$1<UnityEngine.Collider2D>>): number;
            public GetCompositedColliders($allocator?: Unity.Collections.Allocator): UnityEngine.ColliderArray2D;
            public GetPathPointCount($index: number): number;
            public GetPath($index: number, $points: System.Array$1<UnityEngine.Vector2>): number;
            public GetPath($index: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector2>): number;
            public GetPath($index: number, $allocator?: Unity.Collections.Allocator): Unity.Collections.NativeArray$1<UnityEngine.Vector2>;
        }
        namespace CompositeCollider2D {
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
                public physicsLayerNames: Unity.U2D.Physics.PhysicsLayers.LayerNames;
                public useFullLayers: boolean;
                public physicsWorldDefinition: Unity.U2D.Physics.PhysicsWorldDefinition;
                public physicsBodyDefinition: Unity.U2D.Physics.PhysicsBodyDefinition;
                public physicsShapeDefinition: Unity.U2D.Physics.PhysicsShapeDefinition;
                public physicsChainDefinition: Unity.U2D.Physics.PhysicsChainDefinition;
                public concurrentSimulations: number;
                public lengthUnitsPerMeter: number;
                public drawInBuild: boolean;
                public bypassLowLevel: boolean;
                constructor();
            }

        }
    }
}
