# unity-types

TypeScript definitions for Unity, designed for use with [OneJS](https://onejs.com).

> **Note:** Only Unity 6000.3 and later versions are supported.

## Installation

```bash
npm install -D unity-types@~6000.3.0
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

// Physics
const rb: CS.UnityEngine.Rigidbody = go.AddComponent($typeof(CS.UnityEngine.Rigidbody))
rb.mass = 5

// Audio
const audio: CS.UnityEngine.AudioSource = go.GetComponent($typeof(CS.UnityEngine.AudioSource))
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
| `6000.3.x` | Unity 6000.3.x |

Use semver ranges to get compatible updates:

```bash
# Exact version
npm install -D unity-types@6000.3.0

# Compatible updates within Unity 6000.3
npm install -D unity-types@~6000.3.0
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

## License

MIT
