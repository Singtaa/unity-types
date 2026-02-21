// Unity Type Definitions for OneJS
// https://github.com/Singtaa/unity-types
//
// Usage:
//   npm install unity-types
//
// Add to tsconfig.json:
//   { "compilerOptions": { "types": ["unity-types"] } }
//
// Then use CS.* types directly:
//   const go = new CS.UnityEngine.GameObject("MyObject")
//   const vec = new CS.UnityEngine.Vector3(1, 2, 3)

/// <reference path="_system.d.ts" />
/// <reference path="UnityEngine.CoreModule.d.ts" />
/// <reference path="UnityEngine.UIElementsModule.d.ts" />
/// <reference path="UnityEngine.PhysicsModule.d.ts" />
/// <reference path="UnityEngine.Physics2DModule.d.ts" />
/// <reference path="UnityEngine.AudioModule.d.ts" />
/// <reference path="UnityEngine.InputLegacyModule.d.ts" />
/// <reference path="UnityEngine.UnityWebRequestModule.d.ts" />
/// <reference path="Unity.InputSystem.d.ts" />
/// <reference path="OneJS.d.ts" />

// =============================================================================
// CS as a runtime value
// At runtime, CS is a Proxy object created by QuickJSBootstrap.js that provides
// access to all C# types. This declaration makes it usable as both a namespace
// (for type annotations) and a value (for runtime usage like CS.UnityEngine.GameObject.Find(...)).
// =============================================================================

declare const CS: typeof CS;

// =============================================================================
// ES6 Module Declarations
// Allows ES6-style imports: import { GameObject } from "UnityEngine"
// =============================================================================

declare module "UnityEngine" {
    export = CS.UnityEngine;
}

declare module "UnityEngine/UIElements" {
    export = CS.UnityEngine.UIElements;
}

declare module "System" {
    export = CS.System;
}
