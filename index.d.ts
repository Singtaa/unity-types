// Unity Type Definitions for OneJS
// https://github.com/Singtaa/unity-types
//
// Usage:
//   npm install unity-types@~6000.3.0
//
// Add to tsconfig.json:
//   { "compilerOptions": { "types": ["unity-types"], "skipLibCheck": true } }

// Helper types for C# interop
declare interface $Ref<T> { __doNotAccess: T }
declare interface $Out<T> { __doNotAccess: T }
declare interface $Task<T> { __doNotAccess: T }

// Type incompatibility marker (prevents accidental type assignment)
declare namespace CS {
    const __keep_incompatibility: symbol;
}

// Base .NET types
/// <reference path="./_system.d.ts" />

// Unity modules
/// <reference path="./UnityEngine.CoreModule.d.ts" />
/// <reference path="./UnityEngine.UIElementsModule.d.ts" />
/// <reference path="./UnityEngine.InputLegacyModule.d.ts" />
/// <reference path="./Unity.InputSystem.d.ts" />
/// <reference path="./UnityEngine.PhysicsModule.d.ts" />
/// <reference path="./UnityEngine.Physics2DModule.d.ts" />
/// <reference path="./UnityEngine.AudioModule.d.ts" />
/// <reference path="./UnityEngine.UnityWebRequestModule.d.ts" />
