# unity-types

TypeScript definitions for Unity, designed for use with [OneJS](https://onejs.com).

> **Note:** Only Unity 6000.3 and later versions are supported.

## Installation

Install the version matching your Unity version:

```bash
npm install unity-types@~6000.3.0
```

## Usage

The types are automatically available after installation:

```typescript
const go = new CS.UnityEngine.GameObject("MyObject")
const pos: CS.UnityEngine.Vector3 = go.transform.position
```

## Included Assemblies

- `UnityEngine.CoreModule` - GameObject, Transform, Vector3, Color, etc.
- `UnityEngine.UIElementsModule` - VisualElement, Button, Label, etc.
- `UnityEngine.InputLegacyModule` - Input, KeyCode, etc.
- `UnityEngine.PhysicsModule` - Rigidbody, Collider, Physics, etc.
- `UnityEngine.AudioModule` - AudioSource, AudioClip, etc.

## Versioning

Package versions match Unity versions directly:

| Package Version | Unity Version |
|-----------------|---------------|
| `6000.3.0` | Unity 6000.3 |

## License

MIT
