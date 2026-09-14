# unity-types

TypeScript definitions for Unity, designed for use with [OneJS](https://onejs.com).

> **Note:** Only Unity 6000.3 and later versions are supported. This build is generated against 6000.5.

## Installation

```bash
npm install -D unity-types@~6000.5.0
```

## Setup

Add `unity-types` to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["unity-types"],
    "skipLibCheck": true
  }
}
```

> **Note:** `skipLibCheck: true` is recommended. Some C# constructs (like compiler-generated fixed buffers) produce type names that aren't valid TypeScript identifiers.

Or add a triple-slash reference in a `global.d.ts` file:

```typescript
/// <reference types="unity-types" />
```

## Usage

The `CS` namespace is globally available after setup:

```typescript
// Create a GameObject
const go = new CS.UnityEngine.GameObject("MyObject")

// Access transform
const pos: CS.UnityEngine.Vector3 = go.transform.position
pos.x = 10

// UI Elements
const button = new CS.UnityEngine.UIElements.Button()
button.text = "Click me"

// Physics - generic overloads return the correct type directly
const rb = go.AddComponent(CS.UnityEngine.Rigidbody)  // Type: Rigidbody
rb.mass = 5

// Audio
const audio = go.GetComponent(CS.UnityEngine.AudioSource)  // Type: AudioSource
audio.Play()

// Web requests
const request = CS.UnityEngine.Networking.UnityWebRequest.Get("https://api.example.com")
```

## Included Assemblies

| Assembly | Size | Description |
|----------|------|-------------|
| `UnityEngine.CoreModule` | ~1 MB | GameObject, Transform, Vector3, Color, MonoBehaviour, etc. |
| `UnityEngine.UIElementsModule` | ~350 KB | VisualElement, Button, Label, TextField, etc. |
| `UnityEngine.PhysicsModule` | ~88 KB | Rigidbody, Collider, Physics, RaycastHit, etc. |
| `UnityEngine.Physics2DModule` | ~262 KB | Rigidbody2D, Collider2D, Physics2D, etc. |
| `UnityEngine.AudioModule` | ~41 KB | AudioSource, AudioClip, AudioListener, etc. |
| `UnityEngine.InputLegacyModule` | ~9 KB | Input, KeyCode, Touch, etc. |
| `UnityEngine.UnityWebRequestModule` | ~14 KB | UnityWebRequest, DownloadHandler, etc. |
| `Unity.InputSystem` | ~342 KB | InputAction, InputDevice, Keyboard, Mouse, etc. |

## Helper Types

The package includes helper types for C# interop:

```typescript
// Reference parameters (ref keyword in C#)
declare interface $Ref<T> { __doNotAccess: T }

// Output parameters (out keyword in C#)
declare interface $Out<T> { __doNotAccess: T }

// Task/async return types
declare interface $Task<T> { __doNotAccess: T }
```

## Versioning

Package versions match Unity versions:

| Package Version | Unity Version |
|-----------------|---------------|
| `6000.5.x` | Unity 6000.5.x |
| `6000.3.x` | Unity 6000.3.x |

Use semver ranges to get compatible updates:

```bash
# Exact version
npm install -D unity-types@6000.5.0

# Compatible updates within Unity 6000.5
npm install -D unity-types@~6000.5.0
```

## Generating Custom Types

If you need types for additional Unity assemblies or your own C# code, use the TypeGenerator in Unity:

```csharp
// Via menu: OneJS > Type Generator

// Or programmatically:
TypeGenerator.GenerateFromAssembly("output.d.ts", "MyGame.Core");

// Or use the fluent API:
TypeGenerator.Create()
    .AddType<MyCustomClass>()
    .AddNamespace("MyGame.Systems")
    .Build()
    .WriteTo("my-types.d.ts");
```

## Regenerating this package

Against the editor whose Unity version the package will claim, with the project
open and the OneJS MCP bridge up:

1. For each assembly below, run the generator and write it over the file of the
   same name:

   ```csharp
   OneJS.Editor.TypeGenerator.TypeGenerator.Create()
       .AddAssemblyByName("UnityEngine.CoreModule").Build()
       .WriteTo("<repo>/JSModules/unity-types/UnityEngine.CoreModule.d.ts", false);
   ```

   The nine: `UnityEngine.CoreModule`, `UnityEngine.UIElementsModule`,
   `UnityEngine.InputLegacyModule`, `Unity.InputSystem`,
   `UnityEngine.PhysicsModule`, `UnityEngine.Physics2DModule`,
   `UnityEngine.AudioModule`, `UnityEngine.UnityWebRequestModule`, `OneJS`.

2. `node tools/strip-preamble.mjs`

3. Bump `version` and `description` in `package.json`, and the table above.

`index.d.ts` and `_system.d.ts` are hand written and are not regenerated. They
hold the triple-slash references, the ES6 module declarations, and the `$Ref`,
`$Out` and `$Task` helpers the generated files use.

Nothing else is hand edited. Earlier releases were: roughly 1300 array types
and 118 `System.TypeLike` parameters were written in by hand over the
generator's output, because the generator emitted `any` for every array and
`System.Type` for every `Type` parameter. Both are fixed in the generator as of
OneJS 3.4.3, so a regeneration now reproduces them. If you find yourself editing
a generated file, fix the generator instead: the hand written layer is also how
`System.TypeLikeCode`, a type that exists nowhere, reached two published
signatures.

## License

MIT
