# unity-types

TypeScript definitions for Unity, designed for use with [OneJS](https://onejs.com).

## Installation

Install the version matching your Unity version:

```bash
# Unity 6000.3
npm install unity-types@6000.3.0

# Unity 2022.3 LTS
npm install unity-types@2022.3.0
```

## Usage

The types are automatically available after installation:

```typescript
import { CS } from "onejs"

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
| `2022.3.0` | Unity 2022.3 LTS |

## License

MIT
