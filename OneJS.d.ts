declare namespace CS {
    const __keep_incompatibility: symbol;

    class MyEditorUpdater {
        protected [__keep_incompatibility]: never;
    }

    namespace OneJS {
        class AssetLoader {
            protected [__keep_incompatibility]: never;
            public static LoadResourceAsync($path: string, $type: System.TypeLike): $Task;
            public static LoadResourceAsync($path: string): $Task;
        }

        /** @deprecated CartridgeTypeGenerator is now PackTypeGenerator. */
        class CartridgeTypeGenerator {
            protected [__keep_incompatibility]: never;
            public static readonly VersionLinePrefix: string;
            public static Generate($cartridge: OneJS.UICartridge): string;
            public static ParseVersion($dtsText: string): string;
        }

        /** @deprecated CartridgeUtils is now PackUtils (packs) and RunnerUtils (EscapeJsString, ApplyStylesheets, InjectPlatformDefines). */
        class CartridgeUtils {
            protected [__keep_incompatibility]: never;
            public static EscapeJsString($s: string): string;
            public static GetCartridgePath($baseDir: string, $cartridge: OneJS.UICartridge): string;
            public static ExtractCartridges($baseDir: string, $cartridges: System.Collections.Generic.IReadOnlyList$1<OneJS.UICartridge>, $overwriteExisting: boolean, $logPrefix?: string): System.Collections.Generic.List$1<string>;
            public static GetExtractedVersion($baseDir: string, $cartridge: OneJS.UICartridge): string;
            public static InjectCartridgeGlobals($bridge: OneJS.QuickJSUIBridge, $cartridges: System.Collections.Generic.IReadOnlyList$1<OneJS.UICartridge>): void;
            public static ApplyStylesheets($root: UnityEngine.UIElements.VisualElement, $stylesheets: System.Collections.Generic.IReadOnlyList$1<UnityEngine.UIElements.StyleSheet>): void;
            public static InjectPlatformDefines($bridge: OneJS.QuickJSUIBridge): void;
        }

        class CodeField extends UnityEngine.UIElements.TextField {
            protected [__keep_incompatibility]: never;
            public Highlighter: OneJS.CodeField.ISyntaxHighlighter;
            public IndentUsingSpaces: boolean;
            public IndentSize: number;
            public AutoHeight: boolean;
            public LineHeight: number;
            public MinLines: number;
            constructor();
            constructor($label: string);
            constructor($label: string, $maxLength: number, $multiline: boolean, $isPasswordField: boolean, $maskChar: number);
        }
        namespace CodeField {
            interface ISyntaxHighlighter {
                Highlight($text: string): System.Array$1<UnityEngine.Color32>;
            }

            class SimpleKeywordHighlighter implements OneJS.CodeField.ISyntaxHighlighter {
                protected [__keep_incompatibility]: never;
                public DefaultColor: UnityEngine.Color32;
                public KeywordColor: UnityEngine.Color32;
                public StringColor: UnityEngine.Color32;
                public NumberColor: UnityEngine.Color32;
                public CommentColor: UnityEngine.Color32;
                public JsxTagColor: UnityEngine.Color32;
                public JsxAttributeColor: UnityEngine.Color32;
                constructor();
                public Highlight($text: string): System.Array$1<UnityEngine.Color32>;
            }

            type UxmlSerializedData = any;

        }

        class FileSystem {
            protected [__keep_incompatibility]: never;
            public static ReadTextFileAsync($path: string): $Task;
            public static FileExists($path: string): boolean;
            public static DirectoryExists($path: string): boolean;
            public static WriteTextFileAsync($path: string, $content: string): System.Threading.Tasks.Task;
            public static DeleteFile($path: string): boolean;
            public static ListFiles($path: string, $pattern?: string, $recursive?: boolean): System.Collections.Generic.List$1<string>;
        }

        class JSException extends System.Exception {
            protected [__keep_incompatibility]: never;
            public get JsStack(): string;
            public get StackTrace(): string;
            constructor($message: string, $jsStack: string, $innerException?: System.Exception);
            public ToString(): string;
            public static FromText($text: string): OneJS.JSException;
            public static HasFrames($text: string): boolean;
            public Translate($translate: System.Func$2<string, string>): OneJS.JSException;
        }

        class JSPadModuleEntry {
            protected [__keep_incompatibility]: never;
            public name: string;
            public version: string;
            constructor();
        }

        class JSPad extends UnityEngine.MonoBehaviour implements UnityEngine.ISerializationCallbackReceiver {
            protected [__keep_incompatibility]: never;
            public SourceCode: string;
            public get Bridge(): OneJS.QuickJSUIBridge;
            public get IsRunning(): boolean;
            public get CurrentBuildState(): OneJS.JSPad.BuildState;
            public get LastBuildError(): string;
            public get LastBuildOutput(): string;
            public get TempDir(): string;
            public get OutputFile(): string;
            public get SourceMapFile(): string;
            public get DevelopmentOutputFile(): string;
            public get ProgramManifestFile(): string;
            public get HasBuiltBundle(): boolean;
            public get CompressedBundleSize(): number;
            public get BuiltBundle(): string;
            public get BuiltSourceMap(): string;
            public get Packs(): System.Collections.Generic.IReadOnlyList$1<OneJS.Pack>;
            public get PackFolder(): string;
            public get Cartridges(): System.Collections.Generic.IReadOnlyList$1<OneJS.Pack>;
            public get Modules(): System.Collections.Generic.IReadOnlyList$1<OneJS.JSPadModuleEntry>;
            public get Stylesheets(): System.Collections.Generic.IReadOnlyList$1<UnityEngine.UIElements.StyleSheet>;
            public get EmbeddedPanelSettings(): UnityEngine.UIElements.PanelSettings;
            constructor();
            public SaveBundleToSerializedFields(): void;
            public ClearSerializedBundle(): void;
            public GetPackPath($pack: OneJS.Pack): string;
            /** @deprecated GetCartridgePath is now GetPackPath. */
            public GetCartridgePath($cartridge: OneJS.UICartridge): string;
            public EnsureTempDirectory(): void;
            public WriteSourceFile(): void;
            public Reload(): void;
            public Stop(): void;
            public SetBuildState($state: OneJS.JSPad.BuildState, $output?: string, $error?: string): void;
            public HasNodeModules(): boolean;
            public NeedsNpmInstall(): boolean;
            public ExtractPacks(): void;
            /** @deprecated ExtractCartridges is now ExtractPacks. */
            public ExtractCartridges(): void;
            public OnBeforeSerialize(): void;
            public OnAfterDeserialize(): void;
            public PopulateDefaultFiles(): void;
        }
        namespace JSPad {
            enum BuildState {
                Idle = 0,
                InstallingDeps = 1,
                Building = 2,
                Ready = 3,
                Error = 4
            }

        }

        class PairDrawerAttribute extends UnityEngine.PropertyAttribute {
            protected [__keep_incompatibility]: never;
            public get Separator(): string;
            constructor($separator?: string);
        }

        enum TickMode {
            Update = 0,
            LateUpdate = 1
        }

        class GlobalEntry {
            protected [__keep_incompatibility]: never;
            public key: string;
            public value: UnityEngine.Object;
            constructor();
        }

        class DefaultFileEntry {
            protected [__keep_incompatibility]: never;
            public path: string;
            public content: UnityEngine.TextAsset;
            constructor();
        }

        enum DefaultFileStatus {
            UpToDate = 0,
            Modified = 1,
            Missing = 2,
            Invalid = 3,
            TemplateUpdated = 4,
            Differs = 5
        }

        class JSRunner extends UnityEngine.MonoBehaviour {
            protected [__keep_incompatibility]: never;
            public static EditModeUpdateFilter: System.Func$2<OneJS.JSRunner, boolean>;
            public static PlayModeUpdateFilter: System.Func$2<OneJS.JSRunner, boolean>;
            public static get Instances(): System.Collections.Generic.IReadOnlyList$1<OneJS.JSRunner>;
            public get Bridge(): OneJS.QuickJSUIBridge;
            public get IsRunning(): boolean;
            public get IsLiveReloadEnabled(): boolean;
            public get ReloadCount(): number;
            public get LastModifiedTime(): System.DateTime;
            public get LastReloadTime(): System.DateTime;
            public get IncludeSourceMap(): boolean;
            public get ExcludeFromBuild(): boolean;
            public get PanelSettingsAsset(): UnityEngine.UIElements.PanelSettings;
            public get BundleAsset(): UnityEngine.TextAsset;
            public get SourceMapAsset(): UnityEngine.TextAsset;
            public get IsEditModePreviewActive(): boolean;
            public get ProjectRoot(): string;
            public get SceneFolder(): string;
            public get InstanceFolder(): string;
            public get InstanceFolderAssetPath(): string;
            public get WorkingDirFullPath(): string;
            public get EntryFileFullPath(): string;
            public get SourceMapFilePath(): string;
            public get BundleAssetPath(): string;
            public get SourceMapAssetPath(): string;
            public get PanelSettingsAssetPath(): string;
            public get VisualTreeAssetPath(): string;
            public get IsSceneSaved(): boolean;
            public get HasBundle(): boolean;
            public get HasNodeModules(): boolean;
            public get HasPackageJson(): boolean;
            public get TypingAssemblies(): System.Collections.Generic.IReadOnlyList$1<string>;
            public get AutoGenerateTypings(): boolean;
            public get TypingsOutputPath(): string;
            public get TypingsFullPath(): string;
            public get Globals(): System.Collections.Generic.IReadOnlyList$1<OneJS.GlobalEntry>;
            public get Packs(): System.Collections.Generic.IReadOnlyList$1<OneJS.Pack>;
            public get PackFolder(): string;
            public get Cartridges(): System.Collections.Generic.IReadOnlyList$1<OneJS.Pack>;
            public get ScaffoldingPaths(): System.Collections.Generic.IReadOnlyList$1<string>;
            constructor();
            public GetJSFunction<TDelegate extends Function>($globalName: string): TDelegate;
            public SetPanelSettings($panelSettings: UnityEngine.UIElements.PanelSettings): void;
            public SetVisualTreeAsset($visualTreeAsset: UnityEngine.UIElements.VisualTreeAsset): void;
            public SetBundleAsset($asset: UnityEngine.TextAsset): void;
            public RunScript($code: string): void;
            public SetSourceMapAsset($asset: UnityEngine.TextAsset): void;
            public ClearGeneratedAssets(): void;
            public EnsureProjectFolderAndAssets($useSceneNameAsRootFolder?: boolean): void;
            public CreateDefaultPanelSettingsAsset(): void;
            public CreateDefaultVisualTreeAsset(): void;
            public EnsureProjectSetup(): boolean;
            public IsPanelSettingsInValidProjectFolder(): boolean;
            public GetInvalidProjectFolderReason(): string;
            public GetPackPath($pack: OneJS.Pack): string;
            /** @deprecated GetCartridgePath is now GetPackPath. */
            public GetCartridgePath($cartridge: OneJS.UICartridge): string;
            public DescribeMissingDefaultFiles(): string;
            public ForceReload(): void;
            public PopulateDefaultFiles(): void;
            public AddMissingDefaultFiles(): void;
            public ListsDefaultFile($path: string): boolean;
            public GetDefaultFileStatus($index: number): OneJS.DefaultFileStatus;
            public GetDefaultFileStatus($path: string): OneJS.DefaultFileStatus;
            public RestoreDefaultFile($index: number): boolean;
            public RestoreDefaultFile($path: string): boolean;
            public static add_EditModePreviewStarted(handler: System.Action$1<OneJS.JSRunner>): void;
            public static remove_EditModePreviewStarted(handler: System.Action$1<OneJS.JSRunner>): void;
            public add_Reloaded(handler: System.Action$1<OneJS.JSRunner>): void;
            public remove_Reloaded(handler: System.Action$1<OneJS.JSRunner>): void;
            public static add_EditorLoadingBundle(handler: System.Action$1<string>): void;
            public static remove_EditorLoadingBundle(handler: System.Action$1<string>): void;
        }

        class Janitor extends UnityEngine.MonoBehaviour {
            protected [__keep_incompatibility]: never;
            constructor();
            public Clean(): void;
        }

        class JsLog {
            protected [__keep_incompatibility]: never;
            public static readonly LevelMarker: number;
            public static readonly SourceMarker: number;
            public static get ErrorCount(): number;
            public static get LastError(): string;
            public static ResetErrorCount(): void;
            public static SplitLevel($raw: string, $body: $Out<string>): OneJS.JsLog.Level;
            public static SplitLevel($raw: string, $body: $Out<string>, $sourceId: $Out<number>): OneJS.JsLog.Level;
            public static Route($msg: string): void;
        }
        namespace JsLog {
            enum Level {
                Log = 0,
                Warn = 1,
                Error = 2
            }

        }

        class Network {
            protected [__keep_incompatibility]: never;
            public static FetchAsync($url: string, $method: string, $body: string, $headersJson: string): $Task;
            public static LoadTextureFromUrl($url: string): $Task;
        }

        class NodeBridge {
            protected [__keep_incompatibility]: never;
            public static Add($parentHandle: number, $childHandle: number): void;
            public static Insert($parentHandle: number, $index: number, $childHandle: number): void;
            public static RemoveFromHierarchy($childHandle: number): void;
        }

        class PackFileEntry {
            protected [__keep_incompatibility]: never;
            public path: string;
            public content: UnityEngine.TextAsset;
            constructor();
        }

        class PackObjectEntry {
            protected [__keep_incompatibility]: never;
            public key: string;
            public value: UnityEngine.Object;
            constructor();
        }

        /** @deprecated CartridgeFileEntry is now PackFileEntry. */
        class CartridgeFileEntry extends OneJS.PackFileEntry {
            protected [__keep_incompatibility]: never;
            constructor();
        }

        /** @deprecated CartridgeObjectEntry is now PackObjectEntry. */
        class CartridgeObjectEntry extends OneJS.PackObjectEntry {
            protected [__keep_incompatibility]: never;
            constructor();
        }

        class Pack extends OneJS.UICartridge {
            protected [__keep_incompatibility]: never;
            public get Namespace(): string;
            public get Slug(): string;
            public get DisplayName(): string;
            public get Description(): string;
            public get Version(): string;
            public get Files(): System.Collections.Generic.IReadOnlyList$1<OneJS.PackFileEntry>;
            public get Objects(): System.Collections.Generic.IReadOnlyList$1<OneJS.PackObjectEntry>;
            public get RelativePath(): string;
            constructor();
        }

        class PackTypeGenerator {
            protected [__keep_incompatibility]: never;
            public static readonly VersionLinePrefix: string;
            public static Generate($pack: OneJS.Pack): string;
            public static ParseVersion($dtsText: string): string;
        }

        class PackUtils {
            protected [__keep_incompatibility]: never;
            public static readonly Folder: string;
            public static readonly LegacyFolder: string;
            public static GetPackPath($baseDir: string, $folder: string, $pack: OneJS.Pack): string;
            public static ExtractPacks($baseDir: string, $folder: string, $packs: System.Collections.Generic.IReadOnlyList$1<OneJS.Pack>, $overwriteExisting: boolean, $logPrefix?: string): System.Collections.Generic.List$1<string>;
            public static GetExtractedVersion($baseDir: string, $folder: string, $pack: OneJS.Pack): string;
            public static InjectPackGlobals($bridge: OneJS.QuickJSUIBridge, $packs: System.Collections.Generic.IReadOnlyList$1<OneJS.Pack>): void;
        }

        class PainterBridge {
            protected [__keep_incompatibility]: never;
            public static Execute($mgc: UnityEngine.UIElements.MeshGenerationContext, $bufferObj: any): void;
        }

        class ParticleBridge {
            protected [__keep_incompatibility]: never;
            public static get LiveSystemCount(): number;
            public static Create($ve: UnityEngine.UIElements.VisualElement, $json: string, $texture: UnityEngine.Texture2D): OneJS.ParticleSystem2D;
            public static TickAll(): void;
            public static DisposeOwnedBy($contextId: number): void;
            public static DisposeAll(): void;
        }

        class ParticleSystem2D {
            protected [__keep_incompatibility]: never;
            public get IsDisposed(): boolean;
            public get AliveCount(): number;
            public get EmitterCount(): number;
            public get TextureGroupCount(): number;
            public Dispose(): void;
            public SetEmitterPos($index: number, $x: number, $y: number): void;
            public SetEmitterAttractor($index: number, $x: number, $y: number): void;
            public SetEmitterTexture($index: number, $texture: UnityEngine.Texture2D): void;
            public SetEmitterRate($index: number, $rate: number): void;
            public StartEmitter($index: number): void;
            public StopEmitter($index: number): void;
            public Burst($index: number, $x: number, $y: number, $count: number): void;
            public Pause(): void;
            public Resume(): void;
            public Clear(): void;
            public GetParticleX($i: number): number;
            public GetParticleY($i: number): number;
            public Tick($dt: number): void;
            public static SheetFrame($cfg: OneJS.WireEmitter, $life: number, $t: number, $startFrame: number): number;
        }

        class ParticleWireDoc {
            protected [__keep_incompatibility]: never;
            public v: number;
            public max: number;
            public space: number;
            public seed: number;
            public emitters: System.Array$1<OneJS.WireEmitter>;
            constructor();
        }

        class WireEmitter {
            protected [__keep_incompatibility]: never;
            public rate: number;
            public emitting: boolean;
            public x: number;
            public y: number;
            public shape: number;
            public shapeW: number;
            public shapeH: number;
            public angleMin: number;
            public angleMax: number;
            public speedMin: number;
            public speedMax: number;
            public lifeMin: number;
            public lifeMax: number;
            public sizeMin: number;
            public sizeMax: number;
            public aspectMin: number;
            public aspectMax: number;
            public gravityX: number;
            public gravityY: number;
            public drag: number;
            public rotMin: number;
            public rotMax: number;
            public angVelMin: number;
            public angVelMax: number;
            public additiveness: number;
            public attractX: number;
            public attractY: number;
            public attractStrength: number;
            public attractEase: number;
            public edge: number;
            public bounciness: number;
            public pivotX: number;
            public pivotY: number;
            public sheetCols: number;
            public sheetRows: number;
            public sheetMode: number;
            public sheetFps: number;
            public sheetFrames: number;
            public sheetRandomStart: boolean;
            public colorKeys: System.Array$1<OneJS.WireColorKey>;
            public sizeKeys: System.Array$1<OneJS.WireFloatKey>;
            public tintPalette: System.Array$1<OneJS.WireRGBA>;
            constructor();
        }

        class WireColorKey {
            protected [__keep_incompatibility]: never;
            public t: number;
            public r: number;
            public g: number;
            public b: number;
            public a: number;
            constructor();
        }

        class WireFloatKey {
            protected [__keep_incompatibility]: never;
            public t: number;
            public v: number;
            constructor();
        }

        class WireRGBA {
            protected [__keep_incompatibility]: never;
            public r: number;
            public g: number;
            public b: number;
            public a: number;
            constructor();
        }

        class ParticleWire {
            protected [__keep_incompatibility]: never;
            public static readonly Version: number;
            public static readonly MinVersion: number;
            public static readonly MaxParticlesLimit: number;
            public static readonly MaxEmitters: number;
            public static readonly MaxCurveKeys: number;
            public static readonly MaxPaletteColors: number;
            public static readonly MaxSheetDim: number;
            public static readonly MaxSheetFrames: number;
            public static Parse($json: string): OneJS.ParticleWireDoc;
        }

        class PerElementEventSupport {
            protected [__keep_incompatibility]: never;
            public static RegisterBridge($contextId: number, $bridge: OneJS.QuickJSUIBridge): void;
            public static UnregisterBridge($contextId: number): void;
            public static RegisterHandler($element: UnityEngine.UIElements.VisualElement, $eventType: string, $contextId: number): void;
            public static UnregisterHandler($element: UnityEngine.UIElements.VisualElement, $eventType: string, $contextId: number): void;
        }

        class Physics2DBridge {
            protected [__keep_incompatibility]: never;
            public static get LiveWorldCount(): number;
            public static Create($host: UnityEngine.UIElements.VisualElement, $json: string): OneJS.PhysicsWorld2D;
            public static TickAll(): void;
            public static DisposeOwnedBy($contextId: number): void;
            public static DisposeAll(): void;
        }

        class Physics2DWireDoc {
            protected [__keep_incompatibility]: never;
            public v: number;
            public pixelsPerUnit: number;
            public gravityX: number;
            public gravityY: number;
            public velocityIterations: number;
            public positionIterations: number;
            public bounds: boolean;
            public boundsRestitution: number;
            public boundsFriction: number;
            public bodies: System.Array$1<OneJS.WireBody>;
            constructor();
        }

        class WireBody {
            protected [__keep_incompatibility]: never;
            public type: number;
            public x: number;
            public y: number;
            public rotation: number;
            public shape: number;
            public w: number;
            public h: number;
            public density: number;
            public friction: number;
            public restitution: number;
            public linearDamping: number;
            public angularDamping: number;
            public fixedRotation: boolean;
            public reportCollisions: boolean;
            public sensor: boolean;
            public tag: number;
            public vx: number;
            public vy: number;
            public angularVelocity: number;
            constructor();
        }

        class Physics2DWire {
            protected [__keep_incompatibility]: never;
            public static readonly Version: number;
            public static Parse($json: string): OneJS.Physics2DWireDoc;
        }

        class PhysicsWorld2D implements System.IDisposable {
            protected [__keep_incompatibility]: never;
            public static readonly EventStride: number;
            public get IsDisposed(): boolean;
            public get BodyCount(): number;
            public get PendingEventCount(): number;
            constructor($host: UnityEngine.UIElements.VisualElement, $doc: OneJS.Physics2DWireDoc);
            public Bind($index: number, $element: UnityEngine.UIElements.VisualElement): void;
            public Tick($dt: number): void;
            public DrainEvents(): string;
            public ApplyImpulse($index: number, $x: number, $y: number): void;
            public SetVelocity($index: number, $x: number, $y: number): void;
            public SetPosition($index: number, $x: number, $y: number): void;
            public SetGravity($x: number, $y: number): void;
            public SetBodyEnabled($index: number, $enabled: boolean): void;
            public ReadTransforms(): string;
            public Dispose(): void;
        }

        class QuickJSContext implements System.IDisposable {
            protected [__keep_incompatibility]: never;
            public get NativePtr(): number;
            public get Id(): number;
            public get IsAlive(): boolean;
            constructor($bufferSize?: number);
            public Eval($code: string, $filename?: string, $evalFlags?: number): string;
            public RunGC(): void;
            public ExecutePendingJobs(): number;
            public MaybeRunGC(): void;
            public Dispose(): void;
            public InvokeCallback($handle: number, ...args: any[]): any;
            public InvokeCallbackNoAlloc($handle: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: number, $arg2: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: boolean): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: UnityEngine.Vector3): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: UnityEngine.Quaternion): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: UnityEngine.Color): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: UnityEngine.Vector3): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: number, $arg2: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: number, $arg2: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: number, $arg2: number, $arg3: number): void;
            public InvokeCallbackNoAlloc($handle: number, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number): void;
            public InvokeCallbackReturnInt($handle: number, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number): number;
            public InvokeCallbackReturnInt($handle: number, $arg0: number, $arg1: number, $arg2: number): number;
            public GetJSFunction<TDelegate extends Function>($globalName: string): TDelegate;
        }

        class QuickJSNative {
            protected [__keep_incompatibility]: never;
            public static DebugFastPath: boolean;
            public static get InteropCallCount(): bigint;
            public static get ZeroAllocBindingCount(): number;
            public static RegisterObject($obj: any): number;
            public static UnregisterObjectForTest($handle: number): boolean;
            public static GetRefCountForTest($handle: number): number;
            public static GetObjectByHandle($handle: number): any;
            public static GetHandleForObject($obj: any): number;
            public static GetHandleForElementOrAncestor($el: UnityEngine.UIElements.VisualElement): number;
            public static GetHandleCount(): number;
            public static ClearAllHandles(): void;
            public static GetPeakHandleCount(): number;
            public static ResetHandleMonitoring(): void;
            public static RegisterStructType<T>(): void;
            public static RegisterStructType<T>($serializer: System.Func$2<T, string>, $deserializer: System.Func$2<System.Collections.Generic.Dictionary$2<string, any>, T>): void;
            public static RegisterStructType($type: System.TypeLike): void;
            public static IsSerializableStruct($type: System.TypeLike): boolean;
            public static SerializeStruct($value: any): string;
            public static DeserializeStruct($json: string, $targetType: System.TypeLike): any;
            public static DeserializeFromDict($dict: System.Collections.Generic.Dictionary$2<string, any>, $targetType: System.TypeLike): any;
            public static RegisterTask($ctx: OneJS.QuickJSContext, $task: System.Threading.Tasks.Task): number;
            public static IsTaskType($type: System.TypeLike): boolean;
            public static ProcessCompletedTasks($ctx: OneJS.QuickJSContext): number;
            public static ClearPendingTasks(): void;
            public static DiscardCompletionsForContext($contextId: number): number;
            public static GetPendingTaskCount(): number;
            public static GetPeakTaskQueueSize(): number;
            public static GetForeignCompletionCount(): number;
            public static ResetTaskQueueMonitoring(): void;
            public static RegisterZeroAllocBinding($handler: OneJS.QuickJSNative.ZeroAllocHandler): number;
            public static UnregisterZeroAllocBinding($bindingId: number): boolean;
            public static RegisterZeroAllocMethodBinding($typeName: string, $methodName: string, $argCount: number): number;
            public static Bind<TResult>($func: System.Func$1<TResult>): number;
            public static Bind<T0>($action: System.Action$1<T0>): number;
            public static Bind<T0, TResult>($func: System.Func$2<T0, TResult>): number;
            public static Bind<T0, T1>($action: System.Action$2<T0, T1>): number;
            public static Bind<T0, T1, TResult>($func: System.Func$3<T0, T1, TResult>): number;
            public static Bind<T0, T1, T2>($action: System.Action$3<T0, T1, T2>): number;
            public static Bind<T0, T1, T2, TResult>($func: System.Func$4<T0, T1, T2, TResult>): number;
            public static Bind<T0, T1, T2, T3>($action: System.Action$4<T0, T1, T2, T3>): number;
            public static Bind<T0, T1, T2, T3, TResult>($func: System.Func$5<T0, T1, T2, T3, TResult>): number;
            public static Bind<T0, T1, T2, T3, T4>($action: System.Action$5<T0, T1, T2, T3, T4>): number;
            public static Bind<T0, T1, T2, T3, T4, TResult>($func: System.Func$6<T0, T1, T2, T3, T4, TResult>): number;
            public static Bind<T0, T1, T2, T3, T4, T5>($action: System.Action$6<T0, T1, T2, T3, T4, T5>): number;
            public static Bind<T0, T1, T2, T3, T4, T5, TResult>($func: System.Func$7<T0, T1, T2, T3, T4, T5, TResult>): number;
            public static Bind($action: System.Action): number;
        }
        namespace QuickJSNative {
            interface StructPacker$1<T> {
                ($value: $Ref<T>, $result: any): void;
                Invoke?: ($value: $Ref<T>, $result: any) => void;
            }

            interface StructUnpacker$1<T> {
                ($source: any, $value: $Out<T>): void;
                Invoke?: ($source: any, $value: $Out<T>) => void;
            }

            interface DictConverter$1<T> {
                ($dict: System.Collections.Generic.Dictionary$2<string, any>): T;
                Invoke?: ($dict: System.Collections.Generic.Dictionary$2<string, any>) => T;
            }

            class FastPath {
                protected [__keep_incompatibility]: never;
                public static get Count(): number;
                public static get StructCount(): number;
                public static Property<TTarget extends object, TValue>($name: string, $getter: System.Func$2<TTarget, TValue>, $setter?: System.Action$2<TTarget, TValue>): void;
                public static StaticProperty<TOwner, TValue>($name: string, $getter: System.Func$1<TValue>, $setter?: System.Action$1<TValue>): void;
                public static Method<TTarget extends object>($name: string, $method: System.Action$1<TTarget>): void;
                public static Method<TTarget extends object, TResult>($name: string, $method: System.Func$2<TTarget, TResult>): void;
                public static Method<TTarget extends object, TArg0, TResult>($name: string, $method: System.Func$3<TTarget, TArg0, TResult>): void;
                public static Method<TTarget extends object, TArg0>($name: string, $method: System.Action$2<TTarget, TArg0>): void;
                public static StaticMethod<TOwner, TResult>($name: string, $method: System.Func$1<TResult>): void;
                public static StaticMethod<TOwner, TArg0, TResult>($name: string, $method: System.Func$2<TArg0, TResult>): void;
                public static StaticMethod<TOwner, TArg0, TArg1, TResult>($name: string, $method: System.Func$3<TArg0, TArg1, TResult>): void;
                public static StaticMethod<TOwner, TArg0, TArg1, TArg2, TResult>($name: string, $method: System.Func$4<TArg0, TArg1, TArg2, TResult>): void;
                public static StaticMethod<TOwner, TArg0, TArg1, TArg2, TArg3, TResult>($name: string, $method: System.Func$5<TArg0, TArg1, TArg2, TArg3, TResult>): void;
                public static StaticMethod<TOwner, TArg0, TArg1, TArg2, TArg3, TArg4, TResult>($name: string, $method: System.Func$6<TArg0, TArg1, TArg2, TArg3, TArg4, TResult>): void;
                public static StaticMethod<TOwner, TArg0, TArg1, TArg2, TArg3, TArg4, TArg5, TResult>($name: string, $method: System.Func$7<TArg0, TArg1, TArg2, TArg3, TArg4, TArg5, TResult>): void;
                public static StaticMethodByTypeName<TArg0, TResult>($typeName: string, $methodName: string, $method: System.Func$2<TArg0, TResult>): void;
                public static StaticMethodByTypeName<TArg0, TArg1, TResult>($typeName: string, $methodName: string, $method: System.Func$3<TArg0, TArg1, TResult>): void;
                public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TResult>($typeName: string, $methodName: string, $method: System.Func$4<TArg0, TArg1, TArg2, TResult>): void;
                public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TArg3, TResult>($typeName: string, $methodName: string, $method: System.Func$5<TArg0, TArg1, TArg2, TArg3, TResult>): void;
                public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TArg3, TArg4, TResult>($typeName: string, $methodName: string, $method: System.Func$6<TArg0, TArg1, TArg2, TArg3, TArg4, TResult>): void;
                public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TArg3, TArg4, TArg5, TResult>($typeName: string, $methodName: string, $method: System.Func$7<TArg0, TArg1, TArg2, TArg3, TArg4, TArg5, TResult>): void;
                public static Struct<T>($pack: OneJS.QuickJSNative.StructPacker$1<T>, $unpack?: OneJS.QuickJSNative.StructUnpacker$1<T>, $fromDict?: OneJS.QuickJSNative.DictConverter$1<T>): void;
                public static BlittableStruct<T>(): void;
                public static HasStructHandler<T>(): boolean;
                public static HasStructHandler($type: System.TypeLike): boolean;
                public static IsTypeRegistered<T>(): boolean;
                public static IsTypeRegistered($type: System.TypeLike): boolean;
                public static IsRegistered<T>($memberName: string): boolean;
                public static IsRegistered($type: System.TypeLike, $memberName: string): boolean;
                public static GetRegisteredMembers<T>(): System.Array$1<string>;
                public static GetRegisteredMembers($type: System.TypeLike): System.Array$1<string>;
                public static Clear(): void;
            }

            interface ZeroAllocHandler {
                ($args: any, $argCount: number, $result: any): void;
                Invoke?: ($args: any, $argCount: number, $result: any) => void;
            }
            var ZeroAllocHandler: { new (func: ($args: any, $argCount: number, $result: any) => void): ZeroAllocHandler; };

            interface CsLogCallback {
                ($msg: number): void;
                Invoke?: ($msg: number) => void;
            }
            var CsLogCallback: { new (func: ($msg: number) => void): CsLogCallback; };

            interface CsInvokeCallback {
                ($ctx: number, $req: any, $res: any): void;
                Invoke?: ($ctx: number, $req: any, $res: any) => void;
            }
            var CsInvokeCallback: { new (func: ($ctx: number, $req: any, $res: any) => void): CsInvokeCallback; };

            interface CsReleaseHandleCallback {
                ($handle: number): void;
                Invoke?: ($handle: number) => void;
            }
            var CsReleaseHandleCallback: { new (func: ($handle: number) => void): CsReleaseHandleCallback; };

            interface CsFreeCallback {
                ($ptr: number): void;
                Invoke?: ($ptr: number) => void;
            }
            var CsFreeCallback: { new (func: ($ptr: number) => void): CsFreeCallback; };

            interface CsZeroAllocCallback {
                ($bindingId: number, $args: any, $argCount: number, $outResult: any): void;
                Invoke?: ($bindingId: number, $args: any, $argCount: number, $outResult: any) => void;
            }
            var CsZeroAllocCallback: { new (func: ($bindingId: number, $args: any, $argCount: number, $outResult: any) => void): CsZeroAllocCallback; };

            enum InteropType {
                Null = 0,
                Bool = 1,
                Int32 = 2,
                Double = 3,
                String = 4,
                ObjectHandle = 5,
                Int64 = 6,
                Float32 = 7,
                Array = 8,
                JsonObject = 9,
                Vector3 = 10,
                Vector4 = 11,
                TaskHandle = 12,
                MethodRef = 13
            }

            enum InteropInvokeCallKind {
                Ctor = 0,
                Method = 1,
                GetProp = 2,
                SetProp = 3,
                GetField = 4,
                SetField = 5,
                TypeExists = 6,
                IsEnumType = 7,
                MakeGenericType = 8,
                RegisterExtensionType = 9,
                TryGetProp = 10
            }

            class InteropValue {
                protected [__keep_incompatibility]: never;
                public type: OneJS.QuickJSNative.InteropType;
                public pad: number;
                public i32: number;
                public b: number;
                public handle: number;
                public i64: bigint;
                public f32: number;
                public f64: number;
                public str: number;
                public vecX: number;
                public vecY: number;
                public vecZ: number;
                public vecW: number;
                public typeHint: number;
            }

            class InteropInvokeRequest {
                protected [__keep_incompatibility]: never;
                public typeName: number;
                public memberName: number;
                public callKind: OneJS.QuickJSNative.InteropInvokeCallKind;
                public isStatic: number;
                public targetHandle: number;
                public argCount: number;
                public args: number;
            }

            class InteropInvokeResult {
                protected [__keep_incompatibility]: never;
                public returnValue: OneJS.QuickJSNative.InteropValue;
                public errorCode: number;
                public errorMsg: number;
            }

        }

        class QuickJSUIBridge implements System.IDisposable {
            protected [__keep_incompatibility]: never;
            public get Context(): OneJS.QuickJSContext;
            public get Root(): UnityEngine.UIElements.VisualElement;
            public get WorkingDir(): string;
            public get WebSocketContextId(): number;
            public TranslateError: System.Func$2<string, string>;
            public get LastStyleDiagnostics(): System.Collections.Generic.IReadOnlyList$1<OneJS.CustomStyleSheets.UssCompiler.UssDiagnostic>;
            constructor($root: UnityEngine.UIElements.VisualElement, $workingDir?: string, $bufferSize?: number);
            public LoadStyleSheet($path: string): boolean;
            public CompileStyleSheet($ussContent: string, $name?: string): boolean;
            public RemoveStyleSheet($name: string): boolean;
            public ClearStyleSheets(): number;
            public GetStyleSheetNames(): System.Collections.Generic.IEnumerable$1<string>;
            public Dispose(): void;
            public Eval($code: string, $filename?: string): string;
            public GetJSFunction<TDelegate extends Function>($globalName: string): TDelegate;
            public CacheTickCallback(): void;
            public CacheEventDispatchCallback(): void;
            public TickSystems(): void;
            public Tick(): void;
        }

        class RunnerUtils {
            protected [__keep_incompatibility]: never;
            public static EscapeJsString($s: string): string;
            public static ApplyStylesheets($root: UnityEngine.UIElements.VisualElement, $stylesheets: System.Collections.Generic.IReadOnlyList$1<UnityEngine.UIElements.StyleSheet>): void;
            public static InjectPlatformDefines($bridge: OneJS.QuickJSUIBridge): void;
        }

        class ScaffoldRecord {
            protected [__keep_incompatibility]: never;
            public static readonly StateFolder: string;
            public static readonly FileName: string;
            public get Changed(): boolean;
            public get Paths(): System.Collections.Generic.IEnumerable$1<string>;
            constructor();
            public static PathIn($workingDir: string): string;
            public static Read($workingDir: string): OneJS.ScaffoldRecord;
            public Has($path: string): boolean;
            public HashOf($path: string): string;
            public Add($path: string, $hash: string): void;
            public Set($path: string, $hash: string): void;
            public Write($workingDir: string): void;
            public static Hash($content: string): string;
        }

        class SourceMapParser {
            protected [__keep_incompatibility]: never;
            public static Load($mapFilePath: string): OneJS.SourceMapParser;
            public static Parse($json: string): OneJS.SourceMapParser;
            public GetOriginalPosition($generatedLine: number, $generatedColumn: number): OneJS.SourceMapParser.OriginalPosition;
            public TranslateStackTrace($stackTrace: string): string;
        }
        namespace SourceMapParser {
            class OriginalPosition {
                protected [__keep_incompatibility]: never;
                public Source: string;
                public Line: number;
                public Column: number;
                public Found: boolean;
            }

        }

        class StyleBridge {
            protected [__keep_incompatibility]: never;
            public static get ClearsNull(): boolean;
            public static get UpdatesClasses(): boolean;
            public static ApplyStyles($element: UnityEngine.UIElements.VisualElement, $stylesObj: any): void;
            public static AddClassesBatch($element: UnityEngine.UIElements.VisualElement, $classesObj: any): void;
            public static UpdateClasses($element: UnityEngine.UIElements.VisualElement, $removedObj: any, $addedObj: any): void;
        }

        class TreeViewBridge {
            protected [__keep_incompatibility]: never;
            public static SetRootItems($treeView: UnityEngine.UIElements.BaseTreeView, $ids: System.Array$1<number>, $parentIds: System.Array$1<number>): void;
            public static GetSelectedIds($treeView: UnityEngine.UIElements.BaseTreeView): System.Array$1<number>;
            public static GetSelectedIndices($view: UnityEngine.UIElements.BaseVerticalCollectionView): System.Array$1<number>;
        }

        /** @deprecated UICartridge is now Pack. Create, type and search for Pack (t:Pack). */
        class UICartridge extends UnityEngine.ScriptableObject {
            protected [__keep_incompatibility]: never;
        }

        class RenderTextureUtils {
            protected [__keep_incompatibility]: never;
            public static EnsureCreated($rt: UnityEngine.RenderTexture): void;
        }

        class SVGUtils {
            protected [__keep_incompatibility]: never;
            public static LoadFromString($svgContent: string): UnityEngine.UIElements.VectorImage;
        }

        class VirtualClock {
            protected [__keep_incompatibility]: never;
            public static get IsActive(): boolean;
            public static get RealtimeSeconds(): number;
            public static GetRealtimeSeconds(): number;
            public static Begin(): void;
            public static Advance($deltaSeconds: number): void;
            public static End(): void;
        }

        class WebSocketBridge {
            protected [__keep_incompatibility]: never;
            public static RegisterContext(): number;
            public static UnregisterContext($contextId: number): void;
            public static Connect($url: string, $protocols: string, $contextId: number): number;
            public static Send($socketId: number, $data: string): void;
            public static SendBinary($socketId: number, $base64Data: string): void;
            public static Close($socketId: number, $code: number, $reason: string): void;
            public static GetReadyState($socketId: number): number;
            public static ProcessEvents($ctx: OneJS.QuickJSContext, $contextId: number): number;
            public static CloseAll($contextId?: number): void;
        }

    }
    namespace OneJS {
        namespace Audio {
            class AudioBridge {
                protected [__keep_incompatibility]: never;
                public static get HasVoicePool(): boolean;
                public static LoadClip($url: string): $Task;
                public static UnloadClip($clip: number): void;
                public static GetClipCount(): number;
                public static GetClipLength($clip: number): number;
                public static Play($clip: number, $volume: number, $pitch: number): number;
                public static PlayLooping($clip: number, $volume: number, $pitch: number): number;
                public static Stop($voice: number): void;
                public static StopAll(): void;
                public static IsPlaying($voice: number): boolean;
                public static SetVoiceVolume($voice: number, $volume: number): void;
                public static SetVoicePitch($voice: number, $pitch: number): void;
                public static PauseVoice($voice: number, $paused: boolean): void;
                public static SetMasterVolume($volume: number): void;
                public static GetMasterVolume(): number;
                public static SetPaused($paused: boolean): void;
                public static GetVoiceCount(): number;
                public static GetActiveVoiceCount(): number;
                public static DisposeOwnedBy($contextId: number): void;
                public static Dispose(): void;
            }

        }
    }
    namespace OneJS {
        namespace CustomStyleSheets {
            class StyleSheetBuilderWrapper {
                protected [__keep_incompatibility]: never;
                constructor();
                public Reset(): void;
                public BuildTo($styleSheet: UnityEngine.UIElements.StyleSheet): void;
                public BeginRule($line: number): void;
                public EndRule(): void;
                public BeginComplexSelector($specificity: number): System.IDisposable;
                public AddSimpleSelector($parts: System.Array$1<OneJS.CustomStyleSheets.SelectorPart>, $relationship: OneJS.CustomStyleSheets.SelectorRelationship): void;
                public BeginProperty($name: string, $line: number): void;
                public EndProperty(): void;
                public AddCommaSeparator(): void;
                public AddValue($value: number): void;
                public AddValue($color: UnityEngine.Color): void;
                public AddValue($obj: UnityEngine.Object): void;
                public AddValue($value: number, $unit: OneJS.CustomStyleSheets.DimensionUnit): void;
                public AddValue($keyword: OneJS.CustomStyleSheets.StyleKeyword): void;
                public AddValue($value: string, $type: OneJS.CustomStyleSheets.StyleValueType): void;
                public AddValue($function: OneJS.CustomStyleSheets.StyleFunction): void;
                public AddResourcePath($path: string): void;
            }

            class SelectorPart {
                protected [__keep_incompatibility]: never;
                public Value: string;
                public Type: OneJS.CustomStyleSheets.SelectorType;
                public static Class($name: string): OneJS.CustomStyleSheets.SelectorPart;
                public static Id($name: string): OneJS.CustomStyleSheets.SelectorPart;
                public static TypeName($name: string): OneJS.CustomStyleSheets.SelectorPart;
                public static PseudoClass($name: string): OneJS.CustomStyleSheets.SelectorPart;
                public static Wildcard(): OneJS.CustomStyleSheets.SelectorPart;
            }

            enum SelectorType {
                Unknown = 0,
                Wildcard = 1,
                Type = 2,
                Class = 3,
                PseudoClass = 4,
                RecursivePseudoClass = 5,
                ID = 6,
                Predicate = 7
            }

            enum SelectorRelationship {
                None = 0,
                Child = 1,
                Descendent = 2
            }

            enum DimensionUnit {
                Unitless = 0,
                Pixel = 1,
                Percent = 2,
                Second = 3,
                Millisecond = 4,
                Degree = 5,
                Gradian = 6,
                Radian = 7,
                Turn = 8
            }

            enum StyleKeyword {
                Undefined = 0,
                Null = 1,
                Auto = 2,
                None = 3,
                Initial = 4
            }

            enum StyleValueType {
                Invalid = 0,
                Keyword = 1,
                Float = 2,
                Dimension = 3,
                Color = 4,
                ResourcePath = 5,
                AssetReference = 6,
                Enum = 7,
                Variable = 8,
                String = 9,
                Function = 10,
                CommaSeparator = 11,
                ScalableImage = 12,
                MissingAssetReference = 13
            }

            enum StyleFunction {
                Unknown = 0,
                Var = 1,
                Env = 2,
                LinearGradient = 3
            }

            class UssCompiler {
                protected [__keep_incompatibility]: never;
                public get Diagnostics(): System.Collections.Generic.List$1<OneJS.CustomStyleSheets.UssCompiler.UssDiagnostic>;
                constructor($workingDir?: string);
                public Compile($asset: UnityEngine.UIElements.StyleSheet, $ussContent: string): void;
            }
            namespace UssCompiler {
                class UssDiagnostic {
                    protected [__keep_incompatibility]: never;
                    public Line: number;
                    public Property: string;
                    public Message: string;
                    public ToString(): string;
                }

            }

            class UssFilter {
                protected [__keep_incompatibility]: never;
                public static TryParse($value: string, $result: $Out<UnityEngine.UIElements.StyleList$1<UnityEngine.UIElements.FilterFunction>>, $error: $Out<string>): boolean;
            }

        }
    }
    namespace OneJS {
        namespace Editor {
            class AISkillsInstaller {
                protected [__keep_incompatibility]: never;
                public static InstallSkillsMenu(): void;
                public static InstallSkillsBatch(): void;
                public static Install($interactive: boolean): OneJS.Editor.AISkillsInstaller.Result;
            }
            namespace AISkillsInstaller {
                class Result {
                    protected [__keep_incompatibility]: never;
                    public Installed: System.Collections.Generic.List$1<string>;
                    public AlreadyCurrent: System.Collections.Generic.List$1<string>;
                    public Kept: System.Collections.Generic.List$1<string>;
                    public Failed: System.Collections.Generic.List$1<string>;
                    public Destination: string;
                    public Found: boolean;
                }

            }

            class DefaultFileEntryDrawer extends UnityEditor.PropertyDrawer {
                protected [__keep_incompatibility]: never;
                constructor();
                public CreatePropertyGUI($property: UnityEditor.SerializedProperty): UnityEngine.UIElements.VisualElement;
            }

            class GlobalEntryDrawer extends UnityEditor.PropertyDrawer {
                protected [__keep_incompatibility]: never;
                constructor();
                public CreatePropertyGUI($property: UnityEditor.SerializedProperty): UnityEngine.UIElements.VisualElement;
            }

            class JSPadEditor extends UnityEditor.Editor {
                protected [__keep_incompatibility]: never;
                constructor();
                public CreateInspectorGUI(): UnityEngine.UIElements.VisualElement;
            }

            class JSRunnerAutoWatch {
                protected [__keep_incompatibility]: never;
            }

            class JSRunnerBuildProcessor implements UnityEditor.Build.IOrderedCallback, UnityEditor.Build.IPreprocessBuildWithReport, UnityEditor.Build.IPostprocessBuildWithReport {
                protected [__keep_incompatibility]: never;
                public get callbackOrder(): number;
                constructor();
                public OnPreprocessBuild($report: UnityEditor.Build.Reporting.BuildReport): void;
                public OnPostprocessBuild($report: UnityEditor.Build.Reporting.BuildReport): void;
            }
            namespace JSRunnerBuildProcessor {
                class PrefabAppBaker extends UnityEditor.Build.BuildPlayerProcessor {
                    protected [__keep_incompatibility]: never;
                    public get callbackOrder(): number;
                    constructor();
                    public PrepareForBuild($buildPlayerContext: UnityEditor.Build.BuildPlayerContext): void;
                }

            }

            class JSRunnerEditor extends UnityEditor.Editor {
                protected [__keep_incompatibility]: never;
                constructor();
                public CreateInspectorGUI(): UnityEngine.UIElements.VisualElement;
            }

            class ModelShaderStripper implements UnityEditor.Build.IOrderedCallback, UnityEditor.Build.IPreprocessShaders {
                protected [__keep_incompatibility]: never;
                public get callbackOrder(): number;
                constructor();
                public OnProcessShader($shader: UnityEngine.Shader, $snippet: UnityEditor.Rendering.ShaderSnippetData, $data: System.Collections.Generic.IList$1<UnityEditor.Rendering.ShaderCompilerData>): void;
                public static Strips($shader: UnityEngine.Shader, $subshader: number, $scriptableOnly: boolean): boolean;
            }

            class NodeWatcherManager {
                protected [__keep_incompatibility]: never;
                public static IsRunning($workingDir: string): boolean;
                public static IsStarting($workingDir: string): boolean;
                public static GetOutput($workingDir: string): string;
                public static TryReattach($workingDir: string): boolean;
                public static StartWatcher($workingDir: string): boolean;
                public static StopWatcher($workingDir: string): void;
                public static StopAll(): void;
                public static add_OnWatcherStarted(handler: System.Action$1<string>): void;
                public static remove_OnWatcherStarted(handler: System.Action$1<string>): void;
                public static add_OnWatcherStopped(handler: System.Action$1<string>): void;
                public static remove_OnWatcherStopped(handler: System.Action$1<string>): void;
                public static add_OnWatcherOutput(handler: System.Action$2<string, string>): void;
                public static remove_OnWatcherOutput(handler: System.Action$2<string, string>): void;
            }

            class OneJSEditorDesign {
                protected [__keep_incompatibility]: never;
            }
            namespace OneJSEditorDesign {
                class Colors {
                    protected [__keep_incompatibility]: never;
                    public static readonly ContentBg: UnityEngine.Color;
                    public static readonly BoxBg: UnityEngine.Color;
                    public static readonly InfoBoxBg: UnityEngine.Color;
                    public static readonly TabInactive: UnityEngine.Color;
                    public static readonly TabHover: UnityEngine.Color;
                    public static readonly RowBg: UnityEngine.Color;
                    public static readonly Border: UnityEngine.Color;
                    public static readonly TextMuted: UnityEngine.Color;
                    public static readonly TextDim: UnityEngine.Color;
                    public static readonly TextInfo: UnityEngine.Color;
                    public static readonly TextNeutral: UnityEngine.Color;
                    public static readonly StatusSuccess: UnityEngine.Color;
                    public static readonly StatusSuccessAlt: UnityEngine.Color;
                    public static readonly StatusWarning: UnityEngine.Color;
                    public static readonly StatusError: UnityEngine.Color;
                    public static readonly StatusStopped: UnityEngine.Color;
                    public static readonly StatusRunning: UnityEngine.Color;
                    public static readonly ButtonPrimaryBg: UnityEngine.Color;
                    public static readonly ButtonPrimaryHover: UnityEngine.Color;
                    public static readonly ButtonPrimaryText: UnityEngine.Color;
                    public static readonly ButtonDanger: UnityEngine.Color;
                    public static readonly PackHeaderBg: UnityEngine.Color;
                    public static readonly PackPathPreview: UnityEngine.Color;
                    public static readonly PackPathWarning: UnityEngine.Color;
                    public static readonly PackAddBtn: UnityEngine.Color;
                    public static readonly PackRemoveBtn: UnityEngine.Color;
                    public static readonly TextInputBg: UnityEngine.Color;
                    public static readonly Separator: UnityEngine.Color;
                    public static readonly ErrorText: UnityEngine.Color;
                }

                class Texts {
                    protected [__keep_incompatibility]: never;
                    public static readonly Status: string;
                    public static readonly Stopped: string;
                    public static readonly Running: string;
                    public static readonly Loading: string;
                    public static readonly NotInitialized: string;
                    public static readonly NotValid: string;
                    public static readonly Reload: string;
                    public static readonly Rebuild: string;
                    public static readonly Rebuilding: string;
                    public static readonly InitializeProject: string;
                    public static readonly RemoveSettings: string;
                    public static readonly TabProject: string;
                    public static readonly TabUI: string;
                    public static readonly TabPacks: string;
                    public static readonly TabBuild: string;
                    public static readonly BuildOutput: string;
                    public static readonly TypeGeneration: string;
                    public static readonly Scaffolding: string;
                    public static readonly PanelSettings: string;
                    public static readonly Stylesheets: string;
                    public static readonly Preloads: string;
                    public static readonly Globals: string;
                    public static readonly LiveReload: string;
                    public static readonly PackList: string;
                    public static readonly NoStylesheets: string;
                    public static readonly NoPreloads: string;
                    public static readonly NoGlobals: string;
                    public static readonly NoPacks: string;
                    public static readonly NoSettings: string;
                    public static readonly GenerateTypesNow: string;
                    public static readonly ResetToDefaults: string;
                    public static readonly Restore: string;
                    public static readonly RestoreAll: string;
                    public static readonly ExtractAll: string;
                    public static readonly DeleteAllExtracted: string;
                    public static readonly FileUpToDate: string;
                    public static readonly FileModified: string;
                    public static readonly FileMissing: string;
                    public static readonly FileTemplateUpdated: string;
                    public static readonly FileDiffers: string;
                    public static readonly Watcher: string;
                    public static readonly WatcherStarting: string;
                    public static readonly WatcherIdle: string;
                    public static readonly NonInitializedYet: string;
                    public static readonly ProjectFolder: string;
                    public static readonly LastReload: string;
                    public static readonly Output: string;
                    public static readonly Extracted: string;
                    public static readonly NotExtracted: string;
                    public static readonly Outdated: string;
                    public static readonly NoSlug: string;
                    public static readonly NotGenerated: string;
                    public static readonly Processing: string;
                    public static readonly Ready: string;
                    public static readonly NotBuilt: string;
                    public static readonly NoModules: string;
                }

            }

            class OneJSLinkXmlProcessor implements UnityEditor.Build.IOrderedCallback, UnityEditor.Build.IUnityLinkerProcessor {
                protected [__keep_incompatibility]: never;
                public get callbackOrder(): number;
                constructor();
                public GenerateAdditionalLinkXmlFile($report: UnityEditor.Build.Reporting.BuildReport, $data: UnityEditor.UnityLinker.UnityLinkerBuildPipelineData): string;
            }

            class OneJSPackage {
                protected [__keep_incompatibility]: never;
                public static Root(): string;
            }

            class OneJSProcessUtils {
                protected [__keep_incompatibility]: never;
                public static KillProcessTree($process: System.Diagnostics.Process): void;
            }

            class OneJSWslHelper {
                protected [__keep_incompatibility]: never;
                public static UseWsl: boolean;
                public static get IsWslInstalled(): boolean;
                public static ToWslPath($windowsPath: string): string;
                public static GetWslNpmArguments($workingDir: string, $npmArguments: string): string;
                public static CreateNpmProcessStartInfo($workingDir: string, $arguments: string, $npmPath: string): System.Diagnostics.ProcessStartInfo;
            }

            class PackEditor extends UnityEditor.Editor {
                protected [__keep_incompatibility]: never;
                constructor();
                public CreateInspectorGUI(): UnityEngine.UIElements.VisualElement;
            }

            class PackFileEntryDrawer extends UnityEditor.PropertyDrawer {
                protected [__keep_incompatibility]: never;
                constructor();
                public CreatePropertyGUI($property: UnityEditor.SerializedProperty): UnityEngine.UIElements.VisualElement;
            }

            class PackObjectEntryDrawer extends UnityEditor.PropertyDrawer {
                protected [__keep_incompatibility]: never;
                constructor();
                public CreatePropertyGUI($property: UnityEditor.SerializedProperty): UnityEngine.UIElements.VisualElement;
            }

            class ProjectSetup {
                protected [__keep_incompatibility]: never;
                public static readonly DefaultAppName: string;
                public static readonly DefaultScenePath: string;
                public static Initialize(): void;
                public static InitializeRunner($runner: OneJS.JSRunner): string;
            }

            class CursorOverlay {
                protected [__keep_incompatibility]: never;
                constructor($heightPx: number);
                public Composite($frame: System.Array$1<number>, $frameW: number, $frameH: number, $pos: UnityEngine.Vector2, $pressed: boolean, $timeSincePress: number): void;
            }

            class FfmpegLocator {
                protected [__keep_incompatibility]: never;
                public static Resolve($explicitPath?: string): string;
            }

            class InputTrack {
                protected [__keep_incompatibility]: never;
                public get Duration(): number;
                public get PointerPosition(): UnityEngine.Vector2;
                public get PointerIsDown(): boolean;
                public get TimeSincePress(): number;
                constructor();
                public StartAt($x: number, $y: number): OneJS.Editor.InputTrack;
                public Wait($seconds: number): OneJS.Editor.InputTrack;
                public MoveTo($x: number, $y: number, $duration?: number): OneJS.Editor.InputTrack;
                public Click($settle?: number): OneJS.Editor.InputTrack;
                public Press($settle?: number): OneJS.Editor.InputTrack;
                public Release($settle?: number): OneJS.Editor.InputTrack;
                public DragTo($x: number, $y: number, $duration?: number): OneJS.Editor.InputTrack;
                public Scroll($deltaX: number, $deltaY: number, $settle?: number): OneJS.Editor.InputTrack;
                public Type($text: string, $perChar?: number): OneJS.Editor.InputTrack;
                public NavigateNext($settle?: number): OneJS.Editor.InputTrack;
                public NavigatePrevious($settle?: number): OneJS.Editor.InputTrack;
                public Navigate($direction: UnityEngine.UIElements.NavigationMoveEvent.Direction, $settle?: number): OneJS.Editor.InputTrack;
                public Key($key: UnityEngine.KeyCode, $settle?: number): OneJS.Editor.InputTrack;
                public Step($root: UnityEngine.UIElements.VisualElement, $fromSeconds: number, $toSeconds: number): void;
                public PositionAt($seconds: number): UnityEngine.Vector2;
            }

            class OffscreenPanelRenderer implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get Texture(): UnityEngine.RenderTexture;
                constructor($panelSettings: UnityEngine.UIElements.PanelSettings, $width: number, $height: number);
                public Render(): void;
                public Dispose(): void;
            }

            class PanelRecordingOptions {
                protected [__keep_incompatibility]: never;
                public Width: number;
                public Height: number;
                public OutputWidth: number;
                public OutputHeight: number;
                public Fps: number;
                public DurationSeconds: number;
                public SettleSeconds: number;
                public Crf: number;
                public OutputPath: string;
                public FfmpegPath: string;
                public Input: OneJS.Editor.InputTrack;
                public ShowCursor: boolean;
                public CursorScale: number;
                constructor();
            }

            class PanelRecorder {
                protected [__keep_incompatibility]: never;
                public static Record($runner: OneJS.JSRunner, $options: OneJS.Editor.PanelRecordingOptions): string;
            }

            class SLShaderGenerator {
                protected [__keep_incompatibility]: never;
                public static readonly OutputDir: string;
                public static readonly RecordedManifest: string;
                public static readonly LegacyRecordedManifest: string;
                public static readonly RegistryAsset: string;
                public static readonly RootInclude: string;
                public static get HasPendingRecordings(): boolean;
                public static IncludeDir(): string;
                public static Includes(): System.Array$1<string>;
                public static Includes($includeDir: string): System.Array$1<string>;
                public static GenerateAll(): void;
                public static Record($hash: string, $hlsl: string): void;
                public static GenerateBeside($bundlePath: string): void;
                public static RecordManifest($manifestPath: string): number;
                public static FlushRecorded(): number;
                public static MigrateRecorded(): boolean;
                public static SchemeOf($hlsl: string): number;
                public static AppManifests($manifests: System.Array$1<string>): System.Array$1<string>;
                public static ProducedSchemes($appManifests: System.Collections.Generic.IEnumerable$1<string>): System.Collections.Generic.HashSet$1<number>;
                public static StaleRecorded($recordedFile: string, $appManifests: System.Collections.Generic.IEnumerable$1<string>): System.Collections.Generic.SortedDictionary$2<string, number>;
                public static MergeRecorded($recordedFile: string, $pending: System.Collections.Generic.Dictionary$2<string, string>, $appManifests: System.Array$1<string>): number;
                public static FindManifests(): System.Array$1<string>;
                public static Generate($manifestPaths: System.Array$1<string>): number;
                public static GenerateHashes($manifestPaths: System.Array$1<string>): System.Array$1<string>;
                public static WriteRegistry($hashes: System.Collections.Generic.IEnumerable$1<string>): number;
                public static DeleteRegistry(): void;
            }

            class SLShaderBuildStep implements UnityEditor.Build.IOrderedCallback, UnityEditor.Build.IPreprocessBuildWithReport {
                protected [__keep_incompatibility]: never;
                public get callbackOrder(): number;
                constructor();
                public OnPreprocessBuild($report: UnityEditor.Build.Reporting.BuildReport): void;
                public static Prepare($target: UnityEditor.BuildTarget): number;
                public static CheckRecorded($recordedFile: string, $appManifests: System.Array$1<string>): void;
            }

            class SLShaderPostprocessor extends UnityEditor.AssetPostprocessor {
                protected [__keep_incompatibility]: never;
                constructor();
            }

        }
    }
    namespace OneJS {
        namespace Editor {
            namespace TypeGenerator {
                class TypeAnalyzer {
                    protected [__keep_incompatibility]: never;
                    constructor($options?: OneJS.Editor.TypeGenerator.AnalyzerOptions);
                    public AnalyzeType($type: System.TypeLike): OneJS.Editor.TypeGenerator.TsTypeInfo;
                    public AnalyzeTypes($types: System.Collections.Generic.IEnumerable$1<System.Type>): System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsTypeInfo>;
                }

                class AnalyzerOptions {
                    protected [__keep_incompatibility]: never;
                    public IncludeNonPublic: boolean;
                    public IncludeObsolete: boolean;
                    public IncludeNestedTypes: boolean;
                    public ResolveExtensionMethods: boolean;
                    constructor();
                }

                class TypeMapper {
                    protected [__keep_incompatibility]: never;
                    public static MapType($type: System.TypeLike): OneJS.Editor.TypeGenerator.TsTypeRef;
                    public static TsTypeName($type: System.TypeLike): string;
                    public static SafeTypeName($type: System.TypeLike): string;
                    public static ShouldSkipType($type: System.TypeLike): boolean;
                    public static ShouldEmitAsAny($type: System.TypeLike): boolean;
                    public static SanitizeTypeName($name: string): string;
                    public static ShouldSkipMember($member: System.Reflection.MemberInfo): boolean;
                    public static GetTsFriendlyName($type: System.TypeLike): string;
                }

                class TypeScriptEmitter {
                    protected [__keep_incompatibility]: never;
                    constructor($options?: OneJS.Editor.TypeGenerator.EmitterOptions);
                    public Emit($types: System.Collections.Generic.IEnumerable$1<OneJS.Editor.TypeGenerator.TsTypeInfo>): string;
                }

                class EmitterOptions {
                    protected [__keep_incompatibility]: never;
                    public IncludeDocumentation: boolean;
                    public IncludeObsoleteWarnings: boolean;
                    public EmitModuleDeclaration: boolean;
                    public EmitNamespaceModules: boolean;
                    public EmitIncompatibilityMarker: boolean;
                    public UseAccessorSyntax: boolean;
                    public SkipHeader: boolean;
                    constructor();
                }

                class GlobalsTypings {
                    protected [__keep_incompatibility]: never;
                    public static readonly FileName: string;
                    public static readonly RootType: string;
                    public static Generate($entries: System.Collections.Generic.IEnumerable$1<OneJS.GlobalEntry>, $declared: System.Collections.Generic.ISet$1<string>): string;
                    public static TsTypeOf($type: System.TypeLike, $declared: System.Collections.Generic.ISet$1<string>): string;
                    public static WriteIfChanged($path: string, $content: string): boolean;
                    public static WriteFor($runner: OneJS.JSRunner): boolean;
                    public static DeclaredTypes($runner: OneJS.JSRunner): System.Collections.Generic.HashSet$1<string>;
                    public static ReadDeclared($dts: string, $into: System.Collections.Generic.ISet$1<string>): void;
                }

                class TsGenericConstraint {
                    protected [__keep_incompatibility]: never;
                    public ParameterName: string;
                    public HasValueTypeConstraint: boolean;
                    public HasReferenceTypeConstraint: boolean;
                    public HasDefaultConstructorConstraint: boolean;
                    public HasNotNullConstraint: boolean;
                    public TypeConstraints: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsTypeRef>;
                    public get HasConstraints(): boolean;
                    constructor();
                    public ToTypeScript($useFullTypeName?: boolean): string;
                    public ToString(): string;
                }

                class TsMethodInfo {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public ReturnType: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public Parameters: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsParameterInfo>;
                    public IsStatic: boolean;
                    public IsAbstract: boolean;
                    public IsVirtual: boolean;
                    public IsConstructor: boolean;
                    public Accessibility: OneJS.Editor.TypeGenerator.TsAccessibility;
                    public IsGenericMethod: boolean;
                    public GenericParameters: System.Collections.Generic.List$1<string>;
                    public GenericConstraints: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsGenericConstraint>;
                    public IsExtensionMethod: boolean;
                    public ExtendedType: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public Documentation: string;
                    public IsObsolete: boolean;
                    public ObsoleteMessage: string;
                    public OriginalMethod: System.Reflection.MethodBase;
                    constructor();
                    public ToTypeScript($isInterface?: boolean, $useFullTypeName?: boolean): string;
                    public ToFunctionType($useFullTypeName?: boolean): string;
                    public ToString(): string;
                }

                enum TsAccessibility {
                    Public = 0,
                    Protected = 1,
                    Private = 2,
                    Internal = 3
                }

                class TsParameterInfo {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public Type: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public IsOptional: boolean;
                    public IsParams: boolean;
                    public IsOut: boolean;
                    public IsRef: boolean;
                    public IsIn: boolean;
                    public DefaultValue: string;
                    public OriginalParameter: System.Reflection.ParameterInfo;
                    constructor();
                    public ToTypeScript($useFullTypeName?: boolean): string;
                    public ToString(): string;
                }

                class TsPropertyInfo {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public Type: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public IsStatic: boolean;
                    public HasGetter: boolean;
                    public HasSetter: boolean;
                    public Accessibility: OneJS.Editor.TypeGenerator.TsAccessibility;
                    public Documentation: string;
                    public IsObsolete: boolean;
                    public ObsoleteMessage: string;
                    public OriginalProperty: System.Reflection.PropertyInfo;
                    constructor();
                    public ToTypeScript($isInterface?: boolean, $useFullTypeName?: boolean, $useAccessors?: boolean): string;
                    public ToString(): string;
                }

                class TsFieldInfo {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public Type: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public IsStatic: boolean;
                    public IsReadOnly: boolean;
                    public IsConst: boolean;
                    public Accessibility: OneJS.Editor.TypeGenerator.TsAccessibility;
                    public ConstValue: string;
                    public Documentation: string;
                    public IsObsolete: boolean;
                    public ObsoleteMessage: string;
                    public OriginalField: System.Reflection.FieldInfo;
                    constructor();
                    public ToTypeScript($isInterface?: boolean, $useFullTypeName?: boolean): string;
                    public ToString(): string;
                }

                enum TsTypeKind {
                    Class = 0,
                    Interface = 1,
                    Enum = 2,
                    Delegate = 3,
                    Struct = 4,
                    TypeAlias = 5
                }

                class TsTypeInfo {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public Namespace: string;
                    public get FullName(): string;
                    public Kind: OneJS.Editor.TypeGenerator.TsTypeKind;
                    public IsAbstract: boolean;
                    public IsSealed: boolean;
                    public IsStatic: boolean;
                    public IsGenericTypeDefinition: boolean;
                    public GenericParameters: System.Collections.Generic.List$1<string>;
                    public GenericConstraints: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsGenericConstraint>;
                    public BaseType: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public Interfaces: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsTypeRef>;
                    public Fields: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsFieldInfo>;
                    public Properties: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsPropertyInfo>;
                    public Methods: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsMethodInfo>;
                    public Constructors: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsMethodInfo>;
                    public Events: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsEventInfo>;
                    public Indexers: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsIndexerInfo>;
                    public ExtensionMethods: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsMethodInfo>;
                    public NestedTypes: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsTypeInfo>;
                    public DelegateSignature: OneJS.Editor.TypeGenerator.TsMethodInfo;
                    public EnumMembers: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsEnumMember>;
                    public IsEnumFlags: boolean;
                    public AliasedType: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public Documentation: string;
                    public IsObsolete: boolean;
                    public ObsoleteMessage: string;
                    public OriginalType: System.Type;
                    constructor();
                    public GetDeclarationLine($useFullBaseTypeName?: boolean): string;
                    public ToString(): string;
                }

                class TsEventInfo {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public EventHandlerType: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public IsStatic: boolean;
                    public Documentation: string;
                    public IsObsolete: boolean;
                    constructor();
                    public ToTypeScript($isInterface?: boolean, $useFullTypeName?: boolean): string;
                }

                class TsIndexerInfo {
                    protected [__keep_incompatibility]: never;
                    public Parameters: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsParameterInfo>;
                    public ReturnType: OneJS.Editor.TypeGenerator.TsTypeRef;
                    public HasGetter: boolean;
                    public HasSetter: boolean;
                    public Documentation: string;
                    constructor();
                    public ToTypeScript($isInterface?: boolean, $useFullTypeName?: boolean): string;
                }

                class TsEnumMember {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public Value: any;
                    public Documentation: string;
                    constructor();
                    public ToTypeScript(): string;
                }

                class TsTypeRef {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public Namespace: string;
                    public get FullName(): string;
                    public IsGeneric: boolean;
                    public GenericArguments: System.Collections.Generic.List$1<OneJS.Editor.TypeGenerator.TsTypeRef>;
                    public IsNullable: boolean;
                    public IsByRef: boolean;
                    public IsOut: boolean;
                    public IsIn: boolean;
                    public IsArray: boolean;
                    public ArrayRank: number;
                    public IsPointer: boolean;
                    public IsPrimitive: boolean;
                    public PrimitiveTypeName: string;
                    public OriginalType: System.Type;
                    constructor();
                    constructor($name: string, $ns?: string);
                    public ToTypeScript($useFullName?: boolean): string;
                    public ToString(): string;
                }

                class TypeGenerator {
                    protected [__keep_incompatibility]: never;
                    public static readonly DefaultOutputPath: string;
                    public static Generate($outputPath: string, ...types: System.TypeLike[]): void;
                    public static GenerateFromAssembly($outputPath: string, $assemblyNamePattern: string): void;
                    public static GenerateFromAssemblies($outputPath: string, ...assemblyNamePatterns: string[]): void;
                    public static GenerateFromNamespace($outputPath: string, $namespaceName: string): void;
                    public static GenerateProjectTypes($outputPath?: string): void;
                    public static GenerateToResult(...types: System.TypeLike[]): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static Create(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public static CombinePresets(...results: OneJS.Editor.TypeGenerator.TypeGeneratorResult[]): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static GetAssemblies($namePattern: string): System.Collections.Generic.IEnumerable$1<System.Reflection.Assembly>;
                    public static GetTypesFromAssembly($assemblyPattern: string): System.Collections.Generic.IEnumerable$1<System.Type>;
                    public static GetTypesFromNamespace($namespaceName: string): System.Collections.Generic.IEnumerable$1<System.Type>;
                }
                namespace TypeGenerator {
                    class Presets {
                        protected [__keep_incompatibility]: never;
                        public static get UnityCore(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                        public static get UIToolkit(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                        public static get Physics(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                        public static get Animation(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                        public static get Audio(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                        public static get InputSystem(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                        public static get All(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    }

                }

                class TypeGeneratorBuilder {
                    protected [__keep_incompatibility]: never;
                    public get TypeCount(): number;
                    public get Types(): System.Collections.Generic.IReadOnlyCollection$1<System.Type>;
                    constructor();
                    public AddType<T>(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddType($type: System.TypeLike): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddTypeByName($fullTypeName: string): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddTypes(...types: System.TypeLike[]): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddTypes($types: System.Collections.Generic.IEnumerable$1<System.Type>): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddAssemblyByName($assemblyNamePattern: string): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddAssembly($assembly: System.Reflection.Assembly): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddAssembliesWhere($predicate: System.Func$2<System.Reflection.Assembly, boolean>): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddNamespace($namespaceName: string): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddTypesWhere($predicate: System.Func$2<System.Type, boolean>): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public IncludeNonPublic(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public IncludeObsolete(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public ExcludeObsolete(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public IncludeNestedTypes(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public ExcludeNestedTypes(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public IncludeDocumentation(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public ExcludeDocumentation(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public EmitModuleDeclaration(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public EmitNamespaceModules($emit?: boolean): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public EmitIncompatibilityMarker($emit?: boolean): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public UseAccessorSyntax($use?: boolean): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public SkipHeader(): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public Build(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                }

                class TypeGeneratorPresets {
                    protected [__keep_incompatibility]: never;
                    public static UnityCore(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static UIToolkit(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static Physics(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static Animation(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static Audio(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static InputSystem(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static All(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static CreateCustom($name: string, ...types: System.TypeLike[]): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static FromNamespace($namespaceName: string): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public static FromAssembly($assemblyPattern: string): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                }

                class TypeGeneratorResult {
                    protected [__keep_incompatibility]: never;
                    public get Content(): string;
                    public get SourceTypes(): System.Collections.Generic.IReadOnlyList$1<System.Type>;
                    public get TypeInfos(): System.Collections.Generic.IReadOnlyList$1<OneJS.Editor.TypeGenerator.TsTypeInfo>;
                    public get TypeCount(): number;
                    public get ContentSize(): number;
                    public get LineCount(): number;
                    public WriteTo($path: string, $refreshAssetDatabase?: boolean): void;
                    public WriteTo($writer: System.IO.TextWriter): void;
                    public ToString(): string;
                    public static Combine(...results: OneJS.Editor.TypeGenerator.TypeGeneratorResult[]): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public CombineWith($other: OneJS.Editor.TypeGenerator.TypeGeneratorResult): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public Filter($predicate: System.Func$2<System.Type, boolean>): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                    public Exclude($predicate: System.Func$2<System.Type, boolean>): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                }

                class TypeGeneratorService {
                    protected [__keep_incompatibility]: never;
                    public static GenerateTypingsFor($runner: OneJS.JSRunner, $silent?: boolean): boolean;
                    public static WriteGlobalsTypings($runner: OneJS.JSRunner): void;
                    public static RegenerateAllTypings(): void;
                }

                class TypeGeneratorWindow extends UnityEditor.EditorWindow {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static ShowWindow(): void;
                }

            }
        }
    }
    namespace OneJS {
        namespace Editor {
            namespace TypeGenerator {
                namespace Tests {
                    class GlobalsTypingsProbe extends UnityEngine.MonoBehaviour {
                        protected [__keep_incompatibility]: never;
                        constructor();
                    }

                    class GlobalsTypingsTests {
                        protected [__keep_incompatibility]: never;
                        constructor();
                        public TearDown(): void;
                        public An_entry_is_declared_as_its_objects_type(): void;
                        public A_type_the_typings_lack_falls_back_to_its_nearest_declared_base_and_says_so(): void;
                        public With_no_typings_at_all_it_ends_at_UnityEngine_Object_and_never_any(): void;
                        public A_removed_entry_is_dropped_and_an_empty_one_skipped(): void;
                        public A_later_entry_with_the_same_key_wins_as_it_does_at_runtime(): void;
                        public A_key_that_cannot_be_declared_says_how_to_read_it(): void;
                        public An_empty_list_declares_nothing_and_removes_only_the_file_it_wrote(): void;
                        public The_file_is_not_rewritten_when_its_content_is_the_same(): void;
                        public Reads_the_types_a_generated_dts_declares_under_CS_and_nothing_inside_their_bodies(): void;
                    }

                    class TypeGeneratorTests {
                        protected [__keep_incompatibility]: never;
                        constructor();
                        public GenerateToResult_WithSingleType_ReturnsValidContent(): void;
                        public GenerateToResult_WithMultipleTypes_ReturnsAllTypes(): void;
                        public GetTypesFromAssembly_WithValidPattern_ReturnsTypes(): void;
                        public GetTypesFromNamespace_WithValidNamespace_ReturnsTypes(): void;
                        public Builder_AddType_Generic_AddsType(): void;
                        public Builder_AddTypes_AddsMultipleTypes(): void;
                        public Builder_AddNamespace_AddsTypesFromNamespace(): void;
                        public Builder_AddAssemblyByName_AddsTypesFromAssembly(): void;
                        public Builder_ChainedMethods_ReturnsBuilder(): void;
                        public Builder_Build_ReturnsValidResult(): void;
                        public Builder_AddTypesWhere_FiltersTypes(): void;
                        public Result_ImplicitStringConversion_ReturnsContent(): void;
                        public Result_ToString_ReturnsContent(): void;
                        public Result_Filter_FiltersTypes(): void;
                        public Result_Exclude_ExcludesTypes(): void;
                        public Result_Combine_CombinesResults(): void;
                        public Result_CombineWith_CombinesResults(): void;
                        public Result_WriteTo_TextWriter_WritesContent(): void;
                        public Presets_UnityCore_ReturnsValidResult(): void;
                        public Presets_UIToolkit_ReturnsValidResult(): void;
                        public Presets_Physics_ReturnsValidResult(): void;
                        public Presets_Animation_ReturnsValidResult(): void;
                        public Presets_Audio_ReturnsValidResult(): void;
                        public Presets_All_CombinesAllPresets(): void;
                        public CombinePresets_CombinesMultiplePresets(): void;
                        public GeneratedContent_HasHeader(): void;
                        public GeneratedContent_HasHelperTypes(): void;
                        public GeneratedContent_HasNamespaceWrapper(): void;
                        public NamespaceModules_AreOffByDefault(): void;
                        public NamespaceModules_LetProjectCodeBeImported(): void;
                        public NamespaceModules_SeparateNestedNamespacesWithSlashes(): void;
                        public GeneratedContent_HasIncompatibilityMarker(): void;
                        public GeneratedContent_HasClassDeclaration(): void;
                        public GeneratedContent_HasStaticMembers(): void;
                        public GenerateToResult_WithNoTypes_ReturnsEmptyResult(): void;
                        public GenerateToResult_WithNullType_SkipsNull(): void;
                        public Builder_AddType_WithNull_DoesNotThrow(): void;
                        public Builder_DuplicateTypes_DeduplicatesAutomatically(): void;
                        public MapType_Array_IsAnArrayNotAny(): void;
                        public MapType_ArrayOfReferenceType_KeepsItsElementType(): void;
                        public MapType_ArrayOfPointer_KeepsTheArrayAndDegradesTheElement(): void;
                        public MapType_NestedArray_NestsBothLevels(): void;
                        public Generate_MethodTakingAnArray_TypesTheParameter(): void;
                        public Emit_TypeParameter_WidensToTypeLike(): void;
                        public Emit_ParamsArrayOfType_WidensItsElement(): void;
                        public Emit_TypeReturn_StaysType(): void;
                        public Emit_NonTypeParameter_IsUntouched(): void;
                        public Curate_TypeArgumentGetter_ReturnsTheTypeItWasGiven(): void;
                        public Curate_CollectionReturningGetter_IsLeftAlone(): void;
                        public Curate_GenericOverloads_ComeBeforeTheirNonGenericSiblings(): void;
                        public Generate_GenericClass_IsDeclaredUnderTheNameItsSubclassesExtend(): void;
                        public Generate_GenericFamily_DeclaresEachArityApart(): void;
                        public Generate_TypeNestedInAGenericOne_MatchesItsReferences(): void;
                    }

                    class GenericOuter$1<T> {
                        protected [__keep_incompatibility]: never;
                        constructor();
                    }
                    namespace GenericOuter$1 {
                        class Inner$1<T> {
                            protected [__keep_incompatibility]: never;
                            public value: T;
                            constructor();
                        }

                    }

                    class GenericOuterUser {
                        protected [__keep_incompatibility]: never;
                        public inner: OneJS.Editor.TypeGenerator.Tests.GenericOuter$1.Inner$1<string>;
                        constructor();
                    }

                }
            }
        }
    }
    namespace OneJS {
        namespace Fx {
            class FxBridge {
                protected [__keep_incompatibility]: never;
                public static readonly WireVersion: number;
                public static readonly MaxFusedOps: number;
                public static readonly MaxFilterTaps: number;
                public static readonly MaxGradientStops: number;
                public static get LiveHandleCount(): number;
                public static get PooledTargetCount(): number;
                public static GetTexture($handle: number): UnityEngine.Texture;
                public static LoadTexture($path: string): number;
                public static WrapTexture($texture: UnityEngine.Texture): number;
                public static Release($handle: number): void;
                public static CreateTarget($width: number, $height: number): number;
                public static ExecuteInto($dstHandle: number, $bufferObj: any): void;
                public static Execute($bufferObj: any): number;
                public static DisposeOwnedBy($contextId: number): void;
                public static DisposeAll(): void;
            }

        }
    }
    namespace OneJS {
        namespace GPU {
            class BackdropBlurManager extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                constructor();
                public static Register($element: OneJS.GPU.FrostedGlassElement): void;
                public static Unregister($element: OneJS.GPU.FrostedGlassElement): void;
            }

            class ComputeShaderProvider extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                public shaders: System.Array$1<OneJS.GPU.ComputeShaderProvider.ShaderEntry>;
                public registerOnAwake: boolean;
                constructor();
                public Register(): void;
                public Unregister(): void;
            }
            namespace ComputeShaderProvider {
                class ShaderEntry {
                    protected [__keep_incompatibility]: never;
                    public name: string;
                    public shader: UnityEngine.ComputeShader;
                    constructor();
                }

            }

            class FrostedGlassElement extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public BlurRadius: number;
                public TintColor: UnityEngine.Color;
                constructor();
            }
            namespace FrostedGlassElement {
                type UxmlSerializedData = any;

            }

            class GPUBridge {
                protected [__keep_incompatibility]: never;
                public static get SupportsCompute(): boolean;
                public static get SupportsAsyncReadback(): boolean;
                public static get MaxComputeWorkGroupSizeX(): number;
                public static get MaxComputeWorkGroupSizeY(): number;
                public static get MaxComputeWorkGroupSizeZ(): number;
                public static get HasBufferBits(): boolean;
                public static get LiveBufferCount(): number;
                public static get LiveRenderTextureCount(): number;
                public static GetSupportsCompute(): boolean;
                public static GetSupportsAsyncReadback(): boolean;
                public static GetMaxComputeWorkGroupSizeX(): number;
                public static GetMaxComputeWorkGroupSizeY(): number;
                public static GetMaxComputeWorkGroupSizeZ(): number;
                public static Register($name: string, $shader: UnityEngine.ComputeShader): void;
                public static Unregister($name: string): void;
                public static ClearRegistry(): void;
                public static LoadShader($name: string): number;
                public static RegisterShader($shader: UnityEngine.ComputeShader): number;
                public static DisposeShader($handle: number): void;
                public static FindKernel($shaderHandle: number, $kernelName: string): number;
                public static PropertyToID($name: string): number;
                public static SetFloat($shaderHandle: number, $name: string, $value: number): void;
                public static SetInt($shaderHandle: number, $name: string, $value: number): void;
                public static SetBool($shaderHandle: number, $name: string, $value: boolean): void;
                public static SetVector($shaderHandle: number, $name: string, $x: number, $y: number, $z: number, $w: number): void;
                public static SetFloatById($shaderHandle: number, $nameId: number, $value: number): void;
                public static SetIntById($shaderHandle: number, $nameId: number, $value: number): void;
                public static SetVectorById($shaderHandle: number, $nameId: number, $x: number, $y: number, $z: number, $w: number): void;
                public static SetMatrix($shaderHandle: number, $name: string, $matrixJson: string): void;
                public static CreateBuffer($count: number, $stride: number): number;
                public static DisposeBuffer($handle: number): void;
                public static SetBufferData($handle: number, $dataJson: string): void;
                public static SetBufferBits($handle: number, $bits: string): void;
                public static BindBuffer($shaderHandle: number, $kernelIndex: number, $name: string, $bufferHandle: number): void;
                public static Dispatch($shaderHandle: number, $kernelIndex: number, $groupsX: number, $groupsY: number, $groupsZ: number): void;
                public static CreateRenderTexture($width: number, $height: number, $enableRandomWrite?: boolean): number;
                public static ResizeRenderTexture($handle: number, $width: number, $height: number): boolean;
                public static DisposeRenderTexture($handle: number): void;
                public static GetRenderTextureObject($handle: number): UnityEngine.RenderTexture;
                public static GetRenderTextureAsBackground($handle: number): UnityEngine.UIElements.StyleBackground | null;
                public static SetElementBackgroundImage($element: UnityEngine.UIElements.VisualElement, $rtHandle: number): void;
                public static SetElementBackgroundFromObject($element: UnityEngine.UIElements.VisualElement, $obj: UnityEngine.Object): void;
                public static ClearElementBackgroundImage($element: UnityEngine.UIElements.VisualElement): void;
                public static GetRenderTextureWidth($handle: number): number;
                public static GetRenderTextureHeight($handle: number): number;
                public static SetTexture($shaderHandle: number, $kernelIndex: number, $name: string, $textureHandle: number): void;
                public static SetTextureById($shaderHandle: number, $kernelIndex: number, $nameId: number, $textureHandle: number): void;
                public static GetScreenWidth(): number;
                public static GetScreenHeight(): number;
                public static RequestReadback($bufferHandle: number): number;
                public static IsReadbackComplete($requestId: number): boolean;
                public static GetReadbackData($requestId: number): string;
                public static GetReadbackBits($requestId: number): string;
                public static DisposeOwnedBy($contextId: number): void;
                public static Cleanup(): void;
                public static InitializeZeroAllocBindings(): void;
                public static GetZeroAllocBindingIds(): OneJS.GPU.GPUBridge.ZeroAllocBindingIds;
            }
            namespace GPUBridge {
                class ZeroAllocBindingIds {
                    protected [__keep_incompatibility]: never;
                    public setFloat: number;
                    public setInt: number;
                    public setBool: number;
                    public setVector: number;
                    public setTexture: number;
                    public dispatch: number;
                    public getScreenWidth: number;
                    public getScreenHeight: number;
                    public propertyToId: number;
                    public setFloatById: number;
                    public setIntById: number;
                    public setVectorById: number;
                    public setTextureById: number;
                }

            }

        }
    }
    namespace OneJS {
        namespace Input {
            class PointerEvents {
                protected [__keep_incompatibility]: never;
                public static get MoveEventsEnabled(): boolean;
                public static SetMoveEventsEnabled($enabled: boolean): void;
            }

            class InputBridge {
                protected [__keep_incompatibility]: never;
                public static get PointerMoveEventsEnabled(): boolean;
                public static get LiveActionMapCount(): number;
                public static get LiveActionCount(): number;
                public static get WatchedActionCount(): number;
                public static SetPointerMoveEventsEnabled($enabled: boolean): void;
                public static GetKeyHeld($keyName: string): boolean;
                /** @deprecated GetKeyDown returns held state, not Unity's went-down-this-frame. Use GetKeyHeld for held, GetKeyPressed for the edge. */
                public static GetKeyDown($keyName: string): boolean;
                public static GetKeyPressed($keyName: string): boolean;
                public static GetKeyReleased($keyName: string): boolean;
                public static GetKeyId($keyName: string): number;
                public static GetKeyHeldById($keyId: number): boolean;
                /** @deprecated GetKeyDownById returns held state, not Unity's went-down-this-frame. Use GetKeyHeldById for held, GetKeyPressedById for the edge. */
                public static GetKeyDownById($keyId: number): boolean;
                public static GetKeyPressedById($keyId: number): boolean;
                public static GetKeyReleasedById($keyId: number): boolean;
                public static GetModifiers(): number;
                public static GetAnyKeyDown(): boolean;
                public static GetAnyKeyPressed(): boolean;
                public static GetMousePositionX(): number;
                public static GetMousePositionY(): number;
                public static GetMouseDeltaX(): number;
                public static GetMouseDeltaY(): number;
                public static GetScrollX(): number;
                public static GetScrollY(): number;
                public static GetMouseButtons(): number;
                public static GetMouseButtonsPressed(): number;
                public static GetMouseButtonsReleased(): number;
                public static GetGamepadCount(): number;
                public static IsGamepadConnected($index: number): boolean;
                public static GetLeftStickX($index: number): number;
                public static GetLeftStickY($index: number): number;
                public static GetRightStickX($index: number): number;
                public static GetRightStickY($index: number): number;
                public static GetLeftTrigger($index: number): number;
                public static GetRightTrigger($index: number): number;
                public static GetGamepadButtons($index: number): number;
                public static GetGamepadButtonsPressed($index: number): number;
                public static GetGamepadButtonsReleased($index: number): number;
                public static GetGamepadButtonDown($index: number, $buttonName: string): boolean;
                public static GetGamepadButtonId($buttonName: string): number;
                public static GetGamepadButtonDownById($index: number, $buttonId: number): boolean;
                public static SetRumble($index: number, $lowFreq: number, $highFreq: number, $duration: number): void;
                public static StopRumble($index: number): void;
                public static PauseHaptics(): void;
                public static ResumeHaptics(): void;
                public static GetTouchCount(): number;
                public static GetTouchFingerId($touchIndex: number): number;
                public static GetTouchPositionX($touchIndex: number): number;
                public static GetTouchPositionY($touchIndex: number): number;
                public static GetTouchDeltaX($touchIndex: number): number;
                public static GetTouchDeltaY($touchIndex: number): number;
                public static GetTouchPhase($touchIndex: number): number;
                public static RegisterActionAsset($asset: UnityEngine.InputSystem.InputActionAsset): number;
                public static DisposeActionAsset($handle: number): void;
                public static FindAction($assetHandle: number, $actionPath: string): number;
                public static GetActionTriggered($actionHandle: number): boolean;
                public static GetActionPressed($actionHandle: number): boolean;
                public static GetActionPhase($actionHandle: number): number;
                public static GetActionValueFloat($actionHandle: number): number;
                public static GetActionValueVector2X($actionHandle: number): number;
                public static GetActionValueVector2Y($actionHandle: number): number;
                public static EnableActionMap($assetHandle: number, $mapName: string): void;
                public static DisableActionMap($assetHandle: number, $mapName: string): void;
                public static WatchActionEvents($actionHandle: number): void;
                public static UnwatchActionEvents($actionHandle: number): void;
                public static DrainActionEvents(): string;
                public static CreateActionMap($name: string): number;
                public static AddButtonAction($mapHandle: number, $name: string): number;
                public static AddValueAction($mapHandle: number, $name: string): number;
                public static AddBinding($actionHandle: number, $path: string): void;
                public static EnableDynamicMap($mapHandle: number): void;
                public static DisableDynamicMap($mapHandle: number): void;
                public static DisposeDynamicMap($mapHandle: number): void;
                public static DisposeOwnedBy($contextId: number): void;
                public static DisposeAll(): void;
                public static GetZeroAllocBindingIds(): OneJS.Input.InputBridge.ZeroAllocInputBindings;
            }
            namespace InputBridge {
                class ZeroAllocInputBindings {
                    protected [__keep_incompatibility]: never;
                    public getKeyDown: number;
                    public getKeyPressed: number;
                    public getKeyReleased: number;
                    public getKeyId: number;
                    public getKeyDownById: number;
                    public getKeyPressedById: number;
                    public getKeyReleasedById: number;
                    public getMouseButtons: number;
                    public getMousePositionX: number;
                    public getMousePositionY: number;
                    public getMouseDeltaX: number;
                    public getMouseDeltaY: number;
                    public getScrollX: number;
                    public getScrollY: number;
                    public getGamepadButtonDown: number;
                    public getGamepadButtonId: number;
                    public getGamepadButtonDownById: number;
                    public getLeftStickX: number;
                    public getLeftStickY: number;
                    public getRightStickX: number;
                    public getRightStickY: number;
                    public getLeftTrigger: number;
                    public getRightTrigger: number;
                }

            }

        }
    }
    namespace OneJS {
        namespace Models {
            class ModelBridge {
                protected [__keep_incompatibility]: never;
                public static get SceneCamera(): UnityEngine.Camera;
                public static get ActorCount(): number;
                public static get LightCount(): number;
                public static get HasScene(): boolean;
                public static Load($url: string): $Task;
                public static Clips($model: number): string;
                public static Height($model: number): number;
                public static Spawn($model: number, $x: number, $y: number, $z: number, $yaw: number, $scale: number, $castShadows: boolean, $receiveShadows: boolean): number;
                public static Place($actor: number, $x: number, $y: number, $z: number, $yaw: number): void;
                public static Move($actor: number, $x: number, $y: number, $z: number): void;
                public static SetRotation($actor: number, $yaw: number, $pitch: number, $roll: number): void;
                public static SetScale($actor: number, $scale: number): void;
                public static SetSpeed($actor: number, $speed: number): void;
                public static SetShadows($actor: number, $castShadows: boolean, $receiveShadows: boolean): void;
                public static Play($actor: number, $clip: string, $loop: boolean, $fade: number): boolean;
                public static SetDissolve($actor: number, $amount: number): void;
                public static Destroy($actor: number): void;
                public static Step($dt: number): void;
                public static PanelPoint($element: UnityEngine.UIElements.VisualElement, $actor: number, $lift: number): UnityEngine.Vector2;
                public static Pick($element: UnityEngine.UIElements.VisualElement, $x: number, $y: number): number;
                public static BeginScene(): void;
                public static SetCamera($x: number, $y: number, $z: number, $lookX: number, $lookY: number, $lookZ: number, $fov: number): void;
                public static SetBackground($r: number, $g: number, $b: number): void;
                public static SetSun($enabled: boolean, $dx: number, $dy: number, $dz: number, $r: number, $g: number, $b: number, $intensity: number, $shadows: boolean): void;
                public static SetAmbient($skyR: number, $skyG: number, $skyB: number, $groundR: number, $groundG: number, $groundB: number, $intensity: number): void;
                public static SetFog($enabled: boolean, $r: number, $g: number, $b: number, $near: number, $far: number): void;
                public static AddPointLight($x: number, $y: number, $z: number, $r: number, $g: number, $b: number, $intensity: number, $range: number): number;
                public static PlaceLight($light: number, $x: number, $y: number, $z: number): void;
                public static SetLight($light: number, $r: number, $g: number, $b: number, $intensity: number, $range: number): void;
                public static DestroyLight($light: number): void;
                public static HemisphereProbe($sky: UnityEngine.Color, $ground: UnityEngine.Color, $intensity: number): UnityEngine.Rendering.SphericalHarmonicsL2;
                public static DisposeAll(): void;
                public static DisposeOwnedBy($contextId: number): void;
            }

            class ModelMaterialGenerator implements GLTFast.Materials.IMaterialGenerator {
                protected [__keep_incompatibility]: never;
                public static get ModelShader(): UnityEngine.Shader;
                constructor();
                public GetDefaultMaterial($pointsSupport?: boolean): UnityEngine.Material;
                public GenerateMaterial($gltfMaterial: GLTFast.Schema.MaterialBase, $gltf: GLTFast.IGltfReadable, $pointsSupport?: boolean): UnityEngine.Material;
                public SetLogger($logger: GLTFast.Logging.ICodeLogger): void;
            }

        }
    }
    namespace OneJS {
        namespace Proc {
            class MeshGenerator {
                protected [__keep_incompatibility]: never;
                public static CreateCube($sizeX: number, $sizeY: number, $sizeZ: number): UnityEngine.Mesh;
                public static CreateSphere($radius: number, $longitudeSegments: number, $latitudeSegments: number): UnityEngine.Mesh;
                public static CreateCylinder($radius: number, $height: number, $segments: number): UnityEngine.Mesh;
                public static CreateCone($radius: number, $height: number, $segments: number): UnityEngine.Mesh;
                public static CreatePlane($width: number, $height: number, $segmentsX: number, $segmentsZ: number): UnityEngine.Mesh;
                public static CreateTorus($radius: number, $tubeRadius: number, $radialSegments: number, $tubularSegments: number): UnityEngine.Mesh;
                public static CreateQuad($width: number, $height: number): UnityEngine.Mesh;
            }

        }
    }
    namespace OneJS {
        namespace Profiling {
            class QuickJSProfilerMinimal extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class QuickJSZeroAllocProfilerTest extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                constructor();
            }

        }
    }
    namespace OneJS {
        namespace ShaderFX {
            class ShaderEffectBridge {
                protected [__keep_incompatibility]: never;
                public static get LiveEffectCount(): number;
                public static TickAll(): void;
                public static DisposeOwnedBy($contextId: number): void;
                public static DisposeAll(): void;
                public static GetBuiltinTexture($name: string): UnityEngine.Texture2D;
                public static BuildRamp($rgba: System.Array$1<number>): UnityEngine.Texture2D;
            }

            class ShaderEffectElement extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public get AcceptsCompiledPrograms(): boolean;
                public get AcceptsSteppedPrograms(): boolean;
                public get WantsWebSource(): boolean;
                public get IsCompiled(): boolean;
                public get Frame(): number;
                public get IsReady(): boolean;
                public get RenderWidth(): number;
                public get RenderHeight(): number;
                constructor();
                public SetShader($shaderName: string): void;
                public SetProgram($dataObj: any, $instructionCount: number, $resultRegister: number, $hash: string, $uniformNamesObj?: any, $wire?: number): boolean;
                public RecordProgram($hash: string, $hlsl: string): void;
                public SetProgramWeb($wgsl: string, $glsl: string): void;
                public SetCompiled($allowed: boolean): void;
                public SetUniform($slot: number, $x: number, $y: number, $z: number, $w: number): void;
                public SetProgramTexture($slot: number, $tex: UnityEngine.Texture): void;
                public SetProgramBuiltinTexture($slot: number, $builtin: string): void;
                public SetFloat($name: string, $value: number): void;
                public SetVector($name: string, $x: number, $y: number, $z: number, $w: number): void;
                public SetColor($name: string, $r: number, $g: number, $b: number, $a: number): void;
                public SetTexture($name: string, $tex: UnityEngine.Texture): void;
                public SetVectorArray($name: string, $flatObj: any): void;
                public SetBuiltinTexture($name: string, $builtin: string): void;
                public SetRamp($name: string, $rgba: System.Array$1<number>): void;
                public SetResolution($w: number, $h: number): void;
                public Pause(): void;
                public Resume(): void;
                public ResetTime(): void;
                public SetTime($seconds: number): void;
                public Step($dt: number): void;
                public Dispose(): void;
            }
            namespace ShaderEffectElement {
                type UxmlSerializedData = any;

            }

        }
    }
    namespace OneJS {
        namespace SL {
            class SLProgramBridge {
                protected [__keep_incompatibility]: never;
                public static SourceRecorder: System.Action$2<string, string>;
                public static get CompiledOnly(): boolean;
                public static get LiveProgramCount(): number;
                public static GeneratedShaderName($hash: string): string;
                public static FindGenerated($hash: string): UnityEngine.Shader;
                public static ReloadRegistry(): void;
                public static IsNative($handle: number): boolean;
                public static WantsSource($hash: string): boolean;
                public static RecordSource($hash: string, $hlsl: string): void;
                public static AdoptGenerated(): number;
                public static CreateMaterial($hash: string, $native: $Out<boolean>, $handle: $Out<number>, $uniformNames?: System.Array$1<string>): UnityEngine.Material;
                public static Upload($hash: string, $uniformNames?: System.Array$1<string>): number;
                public static SetUniform($handle: number, $slot: number, $x: number, $y: number, $z: number, $w: number): void;
                public static SetTexture($handle: number, $slot: number, $tex: UnityEngine.Texture): void;
                public static SetWebSource($handle: number, $wgsl: string, $glsl: string): void;
                public static ReadsPrevious($handle: number): boolean;
                public static Exists($handle: number): boolean;
                public static IsCompiled($handle: number): boolean;
                public static Census($compiled: System.Collections.Generic.ICollection$1<string>, $nothing?: System.Collections.Generic.ICollection$1<string>): void;
                public static CurrentMaterial($handle: number): UnityEngine.Material;
                public static TryRenderCompiled($handle: number, $target: UnityEngine.RenderTexture, $seconds: number): boolean;
                public static TryRenderCompiled($handle: number, $target: UnityEngine.RenderTexture, $seconds: number, $frame: number, $step: number, $previous: UnityEngine.Texture): boolean;
                public static Render($handle: number, $target: UnityEngine.RenderTexture, $seconds: number): void;
                public static Release($handle: number): void;
                public static DisposeOwnedBy($contextId: number): void;
                public static DisposeAll(): void;
            }

            class SLShaderRegistry extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public static readonly ResourcePath: string;
                public get Count(): number;
                public get Entries(): System.Collections.Generic.IReadOnlyList$1<OneJS.SL.SLShaderRegistry.Entry>;
                constructor();
                public Find($hash: string): UnityEngine.Shader;
                public SetEntries($entries: System.Array$1<OneJS.SL.SLShaderRegistry.Entry>): void;
            }
            namespace SLShaderRegistry {
                class Entry {
                    protected [__keep_incompatibility]: never;
                    public hash: string;
                    public shader: UnityEngine.Shader;
                }

            }

            class SLWeb {
                protected [__keep_incompatibility]: never;
                public static readonly UniformFloats: number;
                public static get Available(): boolean;
                public static Describe(): string;
                public static SetRestoreGLState($on: boolean): void;
            }

        }
    }
    namespace OneJS {
        namespace Tests {
            class BufferTransportFixture {
                protected [__keep_incompatibility]: never;
                public static Source: System.Array$1<number>;
                public static TakeJson($json: string): number;
                public static GiveJson(): string;
                public static Length($s: string): number;
                public static TakeBits($bits: string): number;
                public static GiveBits(): string;
                public static StoreBits($bits: string): void;
                public static ParseUs($json: string, $times: number): number;
                public static FormatUs($times: number): number;
            }

            class BufferTransportBenchmark {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public JsonPhases(): void;
                public JsonAgainstBits(): void;
            }

            class CallbackErrorHost {
                protected [__keep_incompatibility]: never;
                public static Fire: System.Action;
            }

            class CallbackErrorPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public TearDown(): void;
                public ThrowingOnPlay_LogsItsJsErrorAsTheException(): void;
                public ThrowingDelegateHandler_LogsItsJsErrorAsTheException(): void;
            }

            class ControlAlignmentFixture {
                protected [__keep_incompatibility]: never;
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Slider_TrackAndThumb_AreCentred(): System.Collections.IEnumerator;
                public Toggle_Checkmark_IsCentred(): System.Collections.IEnumerator;
                public TextField_Input_IsCentred(): System.Collections.IEnumerator;
                public Button_Box_IsCentred(): System.Collections.IEnumerator;
                public Scroller_Dragger_StaysInItsTrack(): System.Collections.IEnumerator;
            }

            class OneJSThemeControlAlignmentTests extends OneJS.Tests.ControlAlignmentFixture {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class TestCustomProgressBar extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public progress: number;
                public trackColor: string;
                constructor();
            }

            class CustomElementPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Registration_CustomElement_CanBeCreated(): System.Collections.IEnumerator;
                public Registration_CustomProps_AreForwarded(): System.Collections.IEnumerator;
                public Registration_ClassName_AppliedToCustomElement(): System.Collections.IEnumerator;
                public PropUpdate_CustomProps_UpdateOnStateChange(): System.Collections.IEnumerator;
                public Events_ClickHandler_WorksOnCustomElement(): System.Collections.IEnumerator;
                public Ref_ForwardsToCustomElement(): System.Collections.IEnumerator;
                public Hierarchy_MultipleCustomElements_AllCreated(): System.Collections.IEnumerator;
                public Hierarchy_MixedBuiltInAndCustom_CorrectOrder(): System.Collections.IEnumerator;
            }

            class EventReentrancyPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public GetJSFunction($action: string): void;
                public Eval($action: string): void;
                public CSharpDelegate($action: string): void;
                public Tick($action: string): void;
                public TextSetFromCSharp_ReachesNoHandler(): void;
                public ValueSetOutsideJS_FiresChange(): void;
            }

            class EventReentrancyProbe {
                protected [__keep_incompatibility]: never;
                public Act: System.Func$2<string, string>;
                constructor();
                public static Click($element: UnityEngine.UIElements.VisualElement): void;
            }

            class FilterStylePlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Sheet_FilterFunctions_Resolve(): System.Collections.IEnumerator;
                public Inline_GivesWhatASheetGives($value: string): System.Collections.IEnumerator;
                public Inline_RefusesWhatASheetRefuses($value: string): void;
                public Sheet_FunctionThisUnityLacks_IsDiagnosed(): void;
                public Inline_FilterString_Resolves(): System.Collections.IEnumerator;
                public Inline_FilterRemoved_FallsBackToTheSheet(): System.Collections.IEnumerator;
                public Sheet_FunctionsToNone_ClearsIt(): System.Collections.IEnumerator;
                public Inline_FilterNone_ClearsIt($clear: string): System.Collections.IEnumerator;
            }

            class PanelHost {
                protected [__keep_incompatibility]: never;
                public rt: UnityEngine.RenderTexture;
                public ps: UnityEngine.UIElements.PanelSettings;
                public go: UnityEngine.GameObject;
                public root: UnityEngine.UIElements.VisualElement;
                constructor();
                public static Create($w: number, $h: number, $name?: string): OneJS.Tests.PanelHost;
                public AddRect($w: number, $h: number, $background?: UnityEngine.Color | null): UnityEngine.UIElements.VisualElement;
                public Add<T extends UnityEngine.UIElements.VisualElement>($ve: T, $w: number, $h: number): T;
                public ReadPixel($x: number, $yFromTop: number): UnityEngine.Color32;
                public Destroy(): void;
            }

            class FxWrapTextureTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public WrappingTheSameTexture_ReusesItsHandle(): void;
                public WrappingNull_SaysSo(): void;
            }

            class GPUBridgePlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Platform_SupportsCompute_ReturnsExpectedValue(): System.Collections.IEnumerator;
                public Platform_SupportsAsyncReadback_ReturnsExpectedValue(): System.Collections.IEnumerator;
                public Platform_MaxWorkGroupSize_ReturnsPositiveValues(): System.Collections.IEnumerator;
                public Register_ValidShader_CanBeLoaded(): System.Collections.IEnumerator;
                public LoadShader_NotRegistered_ReturnsNegative(): System.Collections.IEnumerator;
                public Unregister_RemovesShader(): System.Collections.IEnumerator;
                public FindKernel_ValidKernel_ReturnsPositiveIndex(): System.Collections.IEnumerator;
                public FindKernel_InvalidKernel_ReturnsNegative(): System.Collections.IEnumerator;
                public CreateBuffer_ValidParams_ReturnsPositiveHandle(): System.Collections.IEnumerator;
                public CreateBuffer_InvalidParams_ReturnsNegative(): System.Collections.IEnumerator;
                public SetBufferData_ValidJson_NoException(): System.Collections.IEnumerator;
                public BufferBits_FormatThenParse_KeepsEveryBit(): void;
                public SetBufferBits_ReadbackBits_ReturnsTheSameWords(): System.Collections.IEnumerator;
                public Dispatch_SimpleMultiply_ModifiesBuffer(): System.Collections.IEnumerator;
                public SetFloat_NoException(): System.Collections.IEnumerator;
                public SetInt_NoException(): System.Collections.IEnumerator;
                public SetVector_NoException(): System.Collections.IEnumerator;
                public Cleanup_ReleasesAllResources(): System.Collections.IEnumerator;
            }

            class GPUBridgeJSPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public JS_PlatformSupportsCompute_MatchesCSharp(): System.Collections.IEnumerator;
                public JS_LoadShader_ReturnsHandle(): System.Collections.IEnumerator;
                public JS_LoadShader_NotFound_ReturnsNegative(): System.Collections.IEnumerator;
                public JS_CreateBuffer_ReturnsHandle(): System.Collections.IEnumerator;
                public JS_SetBufferData_NoException(): System.Collections.IEnumerator;
                public JS_FullComputeWorkflow_Works(): System.Collections.IEnumerator;
            }

            class InputActionEventsTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public WatchedAction_QueuesEachPhaseOnce(): void;
                public UnwatchedAction_QueuesNothing(): void;
            }

            class JSPadPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public TempDir_CreatesUniqueInstanceId(): System.Collections.IEnumerator;
                public TempDir_GeneratesPackageJson(): System.Collections.IEnumerator;
                public TempDir_GeneratesTsConfig(): System.Collections.IEnumerator;
                public TempDir_GeneratesEsbuildConfig(): System.Collections.IEnumerator;
                public WriteSource_CreatesIndexTsx(): System.Collections.IEnumerator;
                public WriteSource_PreservesContent(): System.Collections.IEnumerator;
                public SourceCode_CanBeModified(): System.Collections.IEnumerator;
                public BuildState_StartsIdle(): System.Collections.IEnumerator;
                public BuildState_TransitionsCorrectly(): System.Collections.IEnumerator;
                public HasBuiltBundle_ReturnsFalse_WhenNoBundle(): System.Collections.IEnumerator;
                public HasBuiltBundle_ReturnsTrue_AfterSaveBundleToSerializedFields(): System.Collections.IEnumerator;
                public Reload_ExecutesBuiltBundle(): System.Collections.IEnumerator;
                public Reload_ExposesRootAndBridge(): System.Collections.IEnumerator;
                public Stop_ClearsUI(): System.Collections.IEnumerator;
                public Stop_DisposesBridge(): System.Collections.IEnumerator;
                public Init_RequireComponent_EnsuresUIDocument(): System.Collections.IEnumerator;
                public Init_EmbeddedPanelSettings_IsCreatedAndAssigned(): System.Collections.IEnumerator;
                public HasNodeModules_ReturnsFalse_WhenNotInstalled(): System.Collections.IEnumerator;
                public HasNodeModules_ReturnsTrue_WhenDirectoryExists(): System.Collections.IEnumerator;
                public Reload_InjectsPlatformDefines(): System.Collections.IEnumerator;
            }

            class JSRunnerEventSystemPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public EnsureEventSystem_AddsTheModuleForTheActiveInputBackend(): void;
            }

            class JSRunnerPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public Placeholder_JSRunnerTestsNeedUpdate(): void;
            }

            class LifecycleLog {
                protected [__keep_incompatibility]: never;
                public static readonly Entries: System.Collections.Generic.List$1<string>;
                public static Add($entry: string): void;
                public static Read(): string;
            }

            class JsHostPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public Recreate_StopsTheRunningAppBeforeStartingTheNextOne(): void;
                public Tick_RunsTheAppsFrameCallbacks(): void;
                public JSPad_Reenabled_CallsOnStopThenOnPlay(): System.Collections.IEnumerator;
            }

            class JsLogSeverityPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public ConsoleError_ArrivesAsAUnityError(): System.Collections.IEnumerator;
                public ConsoleWarn_ArrivesAsAUnityWarning_AndIsNotAnError(): System.Collections.IEnumerator;
                public ConsoleLog_StaysAtLogLevel(): System.Collections.IEnumerator;
                public MultipleArguments_ArriveAsOneLine(): System.Collections.IEnumerator;
                public AThrowingCallbackIsReportedAsAnError(): System.Collections.IEnumerator;
            }

            class PackUtilsPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityEditor(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityWebGL(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityStandalone(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityStandaloneOSX(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityStandaloneWin(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityStandaloneLinux(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityIOS(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsUnityAndroid(): System.Collections.IEnumerator;
                public InjectPlatformDefines_InjectsDEBUG(): System.Collections.IEnumerator;
                public InjectPlatformDefines_NullBridge_DoesNotThrow(): System.Collections.IEnumerator;
                public InjectPackGlobals_NullPacks_DoesNotThrow(): System.Collections.IEnumerator;
                public InjectPackGlobals_EmptyPacks_DoesNotThrow(): System.Collections.IEnumerator;
                public InjectPackGlobals_NullBridge_DoesNotThrow(): System.Collections.IEnumerator;
                public InjectPackGlobals_CartIsTheSameFunctionAndRegistry(): System.Collections.IEnumerator;
                public InjectPackGlobals_CreatesPackFunction(): System.Collections.IEnumerator;
                public InjectPackGlobals_ValidPack_AccessibleViaPack(): System.Collections.IEnumerator;
                public InjectPackGlobals_NamespacedPack_AccessibleViaFullPath(): System.Collections.IEnumerator;
                public InjectPackGlobals_MultiplePacks_AllAccessible(): System.Collections.IEnumerator;
                public InjectPackGlobals_SkipsNullPacks(): System.Collections.IEnumerator;
                public InjectPackGlobals_NotFoundPack_ThrowsError(): System.Collections.IEnumerator;
                public InjectPackGlobals_SlugWithSpecialChars_IsEscaped(): System.Collections.IEnumerator;
                public InjectPackGlobals_WithObjects_PropertiesAccessible(): System.Collections.IEnumerator;
                public InjectPackGlobals_WithoutObjects_ReturnsEmptyObject(): System.Collections.IEnumerator;
                public InjectPackGlobals_MultipleObjects_AllAccessible(): System.Collections.IEnumerator;
                public InjectPackGlobals_SkipsNullObjectEntries(): System.Collections.IEnumerator;
            }

            class ParticleTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public WireParse_MinimalDoc_AppliesDefaults(): void;
                public WireParse_V2Fields_DefaultToV1Behavior(): void;
                public WireParse_SortsCurveKeys(): void;
                public WireParse_ClampsAndOrdersRanges(): void;
                public WireParse_V3Sheet_ResolvesFrameCountFromGrid(): void;
                public WireParse_RejectsBadDocs(): void;
                public Sheet_FrameSelection_LifeModeSpreadsFramesOverLifetime(): void;
                public Sheet_FrameSelection_FpsModeLoopsAndStaysInRange(): void;
                public Sheet_FrameSelection_RandomStartOffsetsWithoutEscapingRange(): void;
                public Sheet_FrameSelection_NoSheetAlwaysFrameZero(): void;
                public Sim_EmitsAtConfiguredRate(): void;
                public Sim_ParticlesDieAtLifetime(): void;
                public Sim_SameSeed_IsDeterministic(): void;
                public Attract_ParticleArrivesAtTargetByEndOfLife(): void;
                public Attract_ZeroStrength_LeavesParticleOnFreePath(): void;
                public Attract_RetargetsAtRuntime(): void;
                public Textures_PerEmitterOverridesFormDrawGroups(): void;
                public Api_BurstClearPauseSemantics(): void;
                public Lifecycle_DisposeUnregisters(): void;
                public Edge_KillReapsParticlesLeavingTheRect(): System.Collections.IEnumerator;
                public Edge_BounceKeepsParticlesInsideTheRect(): System.Collections.IEnumerator;
                public Edge_StickFreezesParticlesOnContact(): System.Collections.IEnumerator;
                public Host_WarnsOnceWhenStyledWithBorderOrRadius(): System.Collections.IEnumerator;
                public Host_StaysQuietWhenUnstyled(): System.Collections.IEnumerator;
                public Render_AdditiveParticles_PreserveBackground(): System.Collections.IEnumerator;
                public Render_PremultipliedTexture_MixesAdditiveAndOccludingPerTexel(): System.Collections.IEnumerator;
                public Render_Sheet_AdvancesFrameOverLife(): System.Collections.IEnumerator;
                public Render_Pivot_BottomAnchorsTheQuadAboveTheSpawnPoint(): System.Collections.IEnumerator;
                public Render_Aspect_StretchesQuadsHorizontally(): System.Collections.IEnumerator;
            }

            class PerContextResourcePlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public DisposingOneContext_LeavesTheOthersResourcesLive(): System.Collections.IEnumerator;
            }

            class Physics2DBodyTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public EngineWarningsReachTheLog(): void;
                public StaticBody_BuildsWithoutWarnings(): void;
                public DynamicBody_BuildsWithoutWarnings(): void;
                public DynamicSensor_BuildsWithoutWarnings(): void;
                public MixedWorld_BuildsWithoutWarnings(): void;
                public MassFollowsDensity(): void;
            }

            class ProcNoisePlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public PerlinNoise_ReturnsNumberInValidRange(): System.Collections.IEnumerator;
                public PerlinNoise_IsDeterministicWithSameSeed(): System.Collections.IEnumerator;
                public PerlinNoise_DifferentSeedsProduceDifferentResults(): System.Collections.IEnumerator;
                public PerlinNoise_FrequencyAffectsDetail(): System.Collections.IEnumerator;
                public ValueNoise_ReturnsValuesInZeroToOneRange(): System.Collections.IEnumerator;
                public ValueNoise_IsDeterministicWithSameSeed(): System.Collections.IEnumerator;
                public FBM_CombinesOctavesCorrectly(): System.Collections.IEnumerator;
                public FBM_DifferentOctavesProduceDifferentResults(): System.Collections.IEnumerator;
                public PerlinNoise_IsContinuous(): System.Collections.IEnumerator;
                public PerlinNoise_HasSmoothGradients(): System.Collections.IEnumerator;
            }

            class ProcTexturePlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Grayscale_ReturnsCorrectValues(): System.Collections.IEnumerator;
                public Heat_ReturnsBlueAtLowAndRedAtHigh(): System.Collections.IEnumerator;
                public ColorMap_ClampsOutOfRangeValues(): System.Collections.IEnumerator;
                public Checkerboard_GeneratesCorrectDimensions(): System.Collections.IEnumerator;
                public Checkerboard_HasAlternatingPattern(): System.Collections.IEnumerator;
                public Checkerboard_RespectsCustomColors(): System.Collections.IEnumerator;
                public Gradient_Horizontal_LeftDarkRightLight(): System.Collections.IEnumerator;
                public Gradient_Vertical_TopDarkBottomLight(): System.Collections.IEnumerator;
                public Gradient_Radial_CenterDarkEdgesLight(): System.Collections.IEnumerator;
                public TextureData_HasValidRGBAFormat(): System.Collections.IEnumerator;
            }

            class QuickJSAbortTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Globals_Exist(): System.Collections.IEnumerator;
                public FreshSignal_IsNotAborted(): System.Collections.IEnumerator;
                public Abort_SetsAbortedAndAbortErrorReason(): System.Collections.IEnumerator;
                public Abort_CarriesCustomReason(): System.Collections.IEnumerator;
                public Listeners_FireOnceAndRespectRemoval(): System.Collections.IEnumerator;
                public ThrowIfAborted_ThrowsTheReason(): System.Collections.IEnumerator;
                public StaticAbort_ReturnsPreAbortedSignal(): System.Collections.IEnumerator;
                public StaticTimeout_AbortsThroughTheTimerQueue(): System.Collections.IEnumerator;
            }

            class QuickJSAssetLoaderTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public LoadResourceAsync_GlobalExists(): System.Collections.IEnumerator;
                public LoadResourceAsync_ReturnsNull_ForNonexistent(): System.Collections.IEnumerator;
                public LoadResourceAsync_LoadsBuiltinResource(): System.Collections.IEnumerator;
                public LoadResourceAsync_WithType_ReturnsTypedAsset(): System.Collections.IEnumerator;
                public LoadResourceAsync_EmptyPath_Throws(): System.Collections.IEnumerator;
            }

            class QuickJSBase64Tests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Btoa_GlobalExists(): System.Collections.IEnumerator;
                public Atob_GlobalExists(): System.Collections.IEnumerator;
                public Btoa_EmptyString_Works(): System.Collections.IEnumerator;
                public Btoa_SimpleString_Works(): System.Collections.IEnumerator;
                public Btoa_HelloWorld_Works(): System.Collections.IEnumerator;
                public Btoa_SingleChar_Works(): System.Collections.IEnumerator;
                public Btoa_TwoChars_Works(): System.Collections.IEnumerator;
                public Btoa_ThreeChars_Works(): System.Collections.IEnumerator;
                public Btoa_Numbers_Works(): System.Collections.IEnumerator;
                public Btoa_BinaryData_Works(): System.Collections.IEnumerator;
                public Btoa_ConvertsNumberToString(): System.Collections.IEnumerator;
                public Btoa_NullArgument_Throws(): System.Collections.IEnumerator;
                public Btoa_UndefinedArgument_Throws(): System.Collections.IEnumerator;
                public Atob_EmptyString_Works(): System.Collections.IEnumerator;
                public Atob_SimpleString_Works(): System.Collections.IEnumerator;
                public Atob_HelloWorld_Works(): System.Collections.IEnumerator;
                public Atob_NoPadding_Works(): System.Collections.IEnumerator;
                public Atob_SinglePadding_Works(): System.Collections.IEnumerator;
                public Atob_DoublePadding_Works(): System.Collections.IEnumerator;
                public Atob_WithoutPadding_Works(): System.Collections.IEnumerator;
                public Atob_InvalidLength_Throws(): System.Collections.IEnumerator;
                public Atob_InvalidCharacter_Throws(): System.Collections.IEnumerator;
                public Atob_NullArgument_Throws(): System.Collections.IEnumerator;
                public RoundTrip_SimpleString_Works(): System.Collections.IEnumerator;
                public RoundTrip_EmptyString_Works(): System.Collections.IEnumerator;
                public RoundTrip_AllPrintableAscii_Works(): System.Collections.IEnumerator;
                public RoundTrip_Latin1Range_Works(): System.Collections.IEnumerator;
                public Base64_JsonRoundTrip_Works(): System.Collections.IEnumerator;
                public Base64_JwtLikePayload_Works(): System.Collections.IEnumerator;
            }

            class QuickJSBootstrapScopeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public Bootstrap_CanBeReEvaluated_WithoutError(): void;
                public Polyfills_DoNotReplace_PreexistingGlobals(): void;
                public TopLevelDeclarations_DoNotLeak_ToGlobalObject(): void;
                public PublicSurface_IsExported(): void;
                public CsHelpers_ExposeInteropFunctions(): void;
            }

            class CallbackBindingFixture {
                protected [__keep_incompatibility]: never;
                public static OnPing: System.Action;
                public static OnScore: System.Action$1<number>;
                public static Doubler: System.Func$2<number, number>;
                public static GetLabel: System.Func$1<string>;
                public static Halver: System.Func$2<number, number>;
                public static IsGreater: System.Func$3<number, number, boolean>;
                public static Reset(): void;
            }

            class QuickJSCallbackBindingTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public FuncDelegate_IntReturn_MarshalsBack(): System.Collections.IEnumerator;
                public FuncDelegate_StringReturn_MarshalsBack(): System.Collections.IEnumerator;
                public FuncDelegate_FloatReturn_MarshalsBack(): System.Collections.IEnumerator;
                public FuncDelegate_BoolReturn_MarshalsBack(): System.Collections.IEnumerator;
                public InvokeCallback_ArrayReturn_MarshalsAsArray(): System.Collections.IEnumerator;
                public InvokeCallback_PlainObjectReturn_MarshalsAsDictionary(): System.Collections.IEnumerator;
                public InvokeCallback_PlainObjectReturn_KeepsIntegersPastInt32(): System.Collections.IEnumerator;
                public StaleHandle_FromDisposedContext_FailsLoudlyOnNewContext(): System.Collections.IEnumerator;
                public StaleDelegate_InvokedAfterContextDisposed_WarnsOnceAndNoOps(): System.Collections.IEnumerator;
                public GetJSFunction_FuncWithArgs_CallsAndReturns(): System.Collections.IEnumerator;
                public GetJSFunction_Action_CallsIntoJs(): System.Collections.IEnumerator;
                public GetJSFunction_DottedPath_Resolves(): System.Collections.IEnumerator;
                public GetJSFunction_IsLazy_MissingGlobalThrowsOnInvoke(): System.Collections.IEnumerator;
                public GetJSFunction_SameNameAndType_ReturnsCachedDelegate(): System.Collections.IEnumerator;
                public GetJSFunction_VectorReturn_Converts(): System.Collections.IEnumerator;
                public GetJSFunction_AfterDispose_ThrowsInvalidOperation(): System.Collections.IEnumerator;
            }

            class QuickJSExtensionDispatchTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Q_DispatchesWithOmittedOptionals(): System.Collections.IEnumerator;
                public Q_ReturnsNullForNoMatchInsteadOfThrowing(): System.Collections.IEnumerator;
            }

            class QuickJSFastPathPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public FastPath_Count_GreaterThanZero(): System.Collections.IEnumerator;
                public FastPath_TimeDeltaTime_ReturnsNonNegativeFloat(): System.Collections.IEnumerator;
                public FastPath_TimeFrameCount_ReturnsNonNegativeInt(): System.Collections.IEnumerator;
                public FastPath_TimeTimeScale_GetSetWorks(): System.Collections.IEnumerator;
                public FastPath_TransformPosition_SetWorks(): System.Collections.IEnumerator;
                public FastPath_TransformLocalScale_SetWorks(): System.Collections.IEnumerator;
                public FastPath_GameObjectName_GetWorks(): System.Collections.IEnumerator;
                public FastPath_GameObjectSetActive_Works(): System.Collections.IEnumerator;
                public FastCtor_Vector2_ReturnsComponents(): System.Collections.IEnumerator;
                public FastCtor_Vector3_TwoArg_ZeroFillsZ(): System.Collections.IEnumerator;
                public FastCtor_Color_FourArg_ReadsRGBA(): System.Collections.IEnumerator;
                public FastCtor_Color_ThreeArg_DefaultsAlphaToOne(): System.Collections.IEnumerator;
                public Color_StaticProperty_ReadsRGBA(): System.Collections.IEnumerator;
                public Color_StaticMethod_ReadsRGBA(): System.Collections.IEnumerator;
                public Color_CallbackArgument_ReadsRGBA(): System.Collections.IEnumerator;
                public Color_ZeroAllocBinding_ReadsRGBA(): System.Collections.IEnumerator;
                public ZeroAllocBinding_StringResult_ReadsWhole(): System.Collections.IEnumerator;
                public ZeroAllocBinding_HandleResult_KeepsItsType(): System.Collections.IEnumerator;
                public FastCtor_Quaternion_ReturnsComponents(): System.Collections.IEnumerator;
                public FastCtor_Element_ConstructsUsableElement(): System.Collections.IEnumerator;
                public FastCtor_Element_NonNumericArgFallsThrough(): System.Collections.IEnumerator;
                public NodeBridge_Add_AttachesChild(): System.Collections.IEnumerator;
                public NodeBridge_Insert_AttachesAtIndex(): System.Collections.IEnumerator;
                public NodeBridge_RemoveFromHierarchy_Detaches(): System.Collections.IEnumerator;
                public NodeBridge_Add_ReportsUnresolvableHandle(): System.Collections.IEnumerator;
                public NodeBridge_RemoveFromHierarchy_ToleratesMissingHandle(): System.Collections.IEnumerator;
                public StyleBridge_ApplyStyles_FastFloatEnumAndFallback(): System.Collections.IEnumerator;
                public StyleBridge_LetterSpacing_SwitchesToStandardGenerator(): System.Collections.IEnumerator;
                public StyleBridge_ApplyStyles_ColorAndLengthDoNotThrow(): System.Collections.IEnumerator;
                public FastPath_ScreenWidth_ReturnsPositiveInt(): System.Collections.IEnumerator;
                public FastPath_PropertyGet_LowAllocation(): System.Collections.IEnumerator;
                public FastPath_PropertySet_LowAllocation(): System.Collections.IEnumerator;
                public FastCtor_Construction_LowAllocation(): System.Collections.IEnumerator;
                public FastPath_Registry_ContainsExpectedEntries(): System.Collections.IEnumerator;
                public FastPath_RepeatedCalls_ConsistentLowOverhead(): System.Collections.IEnumerator;
                public Performance_TransformPropertyAccess_ReasonableTime(): System.Collections.IEnumerator;
                public Performance_PerFrameSimulation_Works(): System.Collections.IEnumerator;
                public Performance_FastPathVsReflection_Comparison(): System.Collections.IEnumerator;
            }

            class QuickJSFileSystemTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public DeleteDirectoryWithRetry_OutwaitsTransientReadHandle(): void;
                public DeleteDirectoryWithRetry_RemovesATreeOnEveryPlatform(): void;
                public DeleteDirectoryWithRetry_IsFineWithAPathThatDoesNotExist(): void;
                public PathGlobals_PersistentDataPath_Exists(): System.Collections.IEnumerator;
                public PathGlobals_StreamingAssetsPath_Exists(): System.Collections.IEnumerator;
                public PathGlobals_DataPath_Exists(): System.Collections.IEnumerator;
                public PathGlobals_TemporaryCachePath_Exists(): System.Collections.IEnumerator;
                public PathGlobals_PersistentDataPath_MatchesUnity(): System.Collections.IEnumerator;
                public PathGlobals_StreamingAssetsPath_MatchesUnity(): System.Collections.IEnumerator;
                public ReadTextFile_FunctionExists(): System.Collections.IEnumerator;
                public WriteTextFile_FunctionExists(): System.Collections.IEnumerator;
                public FileExists_FunctionExists(): System.Collections.IEnumerator;
                public DirectoryExists_FunctionExists(): System.Collections.IEnumerator;
                public DeleteFile_FunctionExists(): System.Collections.IEnumerator;
                public ListFiles_FunctionExists(): System.Collections.IEnumerator;
                public FileExists_ReturnsFalse_ForNonexistent(): System.Collections.IEnumerator;
                public FileExists_ReturnsTrue_ForExisting(): System.Collections.IEnumerator;
                public DirectoryExists_ReturnsFalse_ForNonexistent(): System.Collections.IEnumerator;
                public DirectoryExists_ReturnsTrue_ForExisting(): System.Collections.IEnumerator;
                public ReadTextFile_ReadsContent_Successfully(): System.Collections.IEnumerator;
                public ReadTextFile_ThrowsError_ForNonexistent(): System.Collections.IEnumerator;
                public WriteTextFile_WritesContent_Successfully(): System.Collections.IEnumerator;
                public WriteTextFile_CreatesDirectories_Automatically(): System.Collections.IEnumerator;
                public DeleteFile_ReturnsTrue_WhenDeleted(): System.Collections.IEnumerator;
                public DeleteFile_ReturnsFalse_ForNonexistent(): System.Collections.IEnumerator;
                public ListFiles_ReturnsEmptyArray_ForEmptyDir(): System.Collections.IEnumerator;
                public ListFiles_ReturnsFiles_WithPattern(): System.Collections.IEnumerator;
                public ListFiles_ReturnsAllFiles_WithStar(): System.Collections.IEnumerator;
                public ListFiles_ReturnsRecursive_WhenEnabled(): System.Collections.IEnumerator;
                public Integration_LoadUssFromFile_Works(): System.Collections.IEnumerator;
                public SystemIO_DeclaredOverloads_ResolveThroughTheBridge(): System.Collections.IEnumerator;
            }

            class NullStaticFixtureItem {
                protected [__keep_incompatibility]: never;
                public Value: number;
                constructor();
            }

            class NullStaticFixture {
                protected [__keep_incompatibility]: never;
                public static NullField: string;
                public static Missing: OneJS.Tests.NullStaticFixtureItem;
                public static Present: OneJS.Tests.NullStaticFixtureItem;
            }

            class CallbackListenerFixture {
                protected [__keep_incompatibility]: never;
                public get Count(): number;
                constructor();
                public AddListener($listener: System.Action): void;
                public RemoveListener($listener: System.Action): void;
                public Fire(): void;
            }

            class QuickJSGlobalsContractTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public NullStaticProperty_ReadsAsNull(): void;
                public ReleaseObject_ZeroesTheProxyHandleWithoutThrowing(): void;
                public AFunctionPassedToACSharpMethod_IsTheSameDelegateEachTime(): void;
                public TheOnejsNamespace_ReachesTheSameGlobalsAsTheOldNames(): void;
                public ARepeatedMethodCall_CrossesIntoCSharpOnce(): void;
                public TimeoutsDueInOnePass_RunInDueOrder(): void;
                public SetImmediate_RunsPromptly_ButARescheduleWaitsForTheNextTick(): void;
                public LocalStorage_IsScopedToOneJS_AndEnumerable(): void;
                public LocalStorage_ReadsAValueSavedBeforeTheScope_Once(): void;
                public Headers_AreIterable(): void;
                public URLSearchParams_AreIterable(): void;
                public Fetch_SendsPatchAsPatchWithItsBody(): void;
            }

            class InteropTestState {
                protected [__keep_incompatibility]: never;
                public Name: string;
                public Version: number;
                constructor();
            }

            class InteropTestItem {
                protected [__keep_incompatibility]: never;
                public Id: number;
                public Name: string;
                public Durability: number;
                public StackCount: number;
                public Version: number;
                constructor();
            }

            enum InteropTestEnum {
                Foo = 0,
                Bar = 1,
                Baz = 2
            }

            class InteropTestHelper {
                protected [__keep_incompatibility]: never;
                public static SetMode($mode: OneJS.Tests.InteropTestEnum): void;
                public static GetMode(): OneJS.Tests.InteropTestEnum;
                public static GetModeAsInt(): number;
                public static GetState(): OneJS.Tests.InteropTestState;
                public static GetItems(): System.Collections.Generic.List$1<string>;
                public static GetItemsAsArray(): System.Array$1<string>;
                public static GetInventory(): System.Collections.Generic.List$1<OneJS.Tests.InteropTestItem>;
                public static Init($name: string, $version: number): void;
                public static SetName($name: string): void;
                public static SetVersion($version: number): void;
                public static ClearItems(): void;
                public static AddItem($item: string): void;
                public static AddInventoryItem($id: number, $name: string, $durability: number, $stackCount: number): void;
                public static SetItemDurability($index: number, $durability: number): void;
                public static SetItemName($index: number, $name: string): void;
                public static SetItemStackCount($index: number, $count: number): void;
                public static RemoveInventoryItem($index: number): void;
                public static Reset(): void;
            }

            class QuickJSInteropPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public ProxyCache_SameMethodCall_ReturnsSameProxy(): System.Collections.IEnumerator;
                public ProxyCache_PropertyChangeVisibleThroughSameProxy(): System.Collections.IEnumerator;
                public ChangeDetection_ObjectIs_TrueForSameProxy(): System.Collections.IEnumerator;
                public ChangeDetection_ExtractedPrimitives_DetectChanges(): System.Collections.IEnumerator;
                public ChangeDetection_UnchangedPrimitives_StaySame(): System.Collections.IEnumerator;
                public Enum_Constant_ResolvesToNumber(): System.Collections.IEnumerator;
                public Enum_Constant_StrictEqualsItself(): System.Collections.IEnumerator;
                public Enum_FieldValue_StrictEqualsConstant(): System.Collections.IEnumerator;
                public Enum_Constant_PassesToCSharpMethod(): System.Collections.IEnumerator;
                public ChangeDetection_DepsArrayPattern_Works(): System.Collections.IEnumerator;
                public ChangeDetection_DepsArrayPattern_StableWhenUnchanged(): System.Collections.IEnumerator;
                public NullSafety_NullState_ReturnsNull(): System.Collections.IEnumerator;
                public NullSafety_OptionalChaining_Works(): System.Collections.IEnumerator;
                public NullSafety_StateTransitionFromNullToObject(): System.Collections.IEnumerator;
                public Collection_ListCount_Works(): System.Collections.IEnumerator;
                public Collection_ListIndexer_Works(): System.Collections.IEnumerator;
                public Collection_EmptyList_CountIsZero(): System.Collections.IEnumerator;
                public Collection_ToJSArrayLoop_Works(): System.Collections.IEnumerator;
                public Collection_JSArrayHasMapFilterEtc(): System.Collections.IEnumerator;
                public Collection_LiveUpdates_ReflectedInProxy(): System.Collections.IEnumerator;
                public Array_Length_Works(): System.Collections.IEnumerator;
                public Array_Indexer_Works(): System.Collections.IEnumerator;
                public Array_ToJSArrayLoop_Works(): System.Collections.IEnumerator;
                public Array_EmptyArray_LengthIsZero(): System.Collections.IEnumerator;
                public Combined_FullWorkflow_ProxyWithDepsAndCollection(): System.Collections.IEnumerator;
                public TypedCollection_ItemProxyCaching_SameReference(): System.Collections.IEnumerator;
                public TypedCollection_ItemPropertyRead_Works(): System.Collections.IEnumerator;
                public TypedCollection_ItemPropertyChange_VisibleThroughProxy(): System.Collections.IEnumerator;
                public TypedCollection_ItemDepsDetectChange_OnlyAffectedItem(): System.Collections.IEnumerator;
                public TypedCollection_VersionStamp_CatchesAnyChange(): System.Collections.IEnumerator;
                public TypedCollection_CountChange_DetectedByParentDeps(): System.Collections.IEnumerator;
                public TypedCollection_ItemMutation_DoesNotChangeCount(): System.Collections.IEnumerator;
                public TypedCollection_RemoveItem_ChangesCount(): System.Collections.IEnumerator;
                public TypedCollection_ToArrayLoop_ProducesJSArray(): System.Collections.IEnumerator;
                public TypedCollection_FullParentChildPattern_EndToEnd(): System.Collections.IEnumerator;
                public TypedCollection_MultiplePropertyChanges_AllDetected(): System.Collections.IEnumerator;
            }

            class QuickJSMultiContextTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public BothContextsAreLiveAndIndependent(): System.Collections.IEnumerator;
                public TheCompletionQueueIsSharedBetweenContexts(): System.Collections.IEnumerator;
                public ACompletionIsNotConsumedByAForeignContext(): System.Collections.IEnumerator;
                public TheOwningContextSettlesItWhenItTicksFirst(): System.Collections.IEnumerator;
                public AForeignOnlyQueueIsExaminedUnderABoundAndLosesNothing(): System.Collections.IEnumerator;
                public AQuietContextReachesItsCompletionBehindABusyOnesBacklog(): System.Collections.IEnumerator;
            }

            class QuickJSNetworkTests implements UnityEngine.TestTools.IPostBuildCleanup, UnityEngine.TestTools.IPrebuildSetup {
                protected [__keep_incompatibility]: never;
                constructor();
                public Setup(): void;
                public Cleanup(): void;
                public FixtureSetUp(): void;
                public FixtureTearDown(): void;
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Fetch_GlobalExists(): System.Collections.IEnumerator;
                public Fetch_ResponseClassExists(): System.Collections.IEnumerator;
                public Fetch_HeadersClassExists(): System.Collections.IEnumerator;
                public Headers_GetSet_Works(): System.Collections.IEnumerator;
                public Headers_Has_Works(): System.Collections.IEnumerator;
                public Headers_Append_Works(): System.Collections.IEnumerator;
                public Headers_Delete_Works(): System.Collections.IEnumerator;
                public Headers_Keys_Works(): System.Collections.IEnumerator;
                public Headers_PairArrayInit_Works(): System.Collections.IEnumerator;
                public Headers_HeadersInit_CopiesEntries(): System.Collections.IEnumerator;
                public Fetch_SimpleGet_ReturnsResponse(): System.Collections.IEnumerator;
                public Fetch_GetJson_ParsesCorrectly(): System.Collections.IEnumerator;
                public Fetch_PostJson_SendsBody(): System.Collections.IEnumerator;
                public Fetch_HeadersInstance_SendsHeaders(): System.Collections.IEnumerator;
                public Fetch_HeaderPairsArray_SendsHeaders(): System.Collections.IEnumerator;
                public Fetch_ObjectBody_KeepsExistingContentType(): System.Collections.IEnumerator;
                public Response_TextMethod_Works(): System.Collections.IEnumerator;
                public Response_Headers_Accessible(): System.Collections.IEnumerator;
                public Fetch_404_SetsOkFalse(): System.Collections.IEnumerator;
                public Fetch_TransportFailure_Rejects(): System.Collections.IEnumerator;
            }

            class AsyncTestHelper {
                protected [__keep_incompatibility]: never;
                public static GetValueAsync($value: number): $Task;
                public static DelayedMessageAsync($message: string, $delayMs: number): $Task;
                public static DoWorkAsync($delayMs: number): System.Threading.Tasks.Task;
                public static FailingAsync($errorMessage: string): $Task;
                public static AlreadyFaulted($errorMessage: string): $Task;
                public static AlreadyCanceled(): $Task;
                public static ThrowsBeforeAwait($errorMessage: string): $Task;
                public static CreateGameObjectAsync($name: string): $Task;
            }

            class TestCustomPoint {
                protected [__keep_incompatibility]: never;
                public x: number;
                public y: number;
                public label: string;
            }

            class TestCustomSerializerPoint {
                protected [__keep_incompatibility]: never;
                public x: number;
                public y: number;
                public label: string;
            }

            class TestNestedStruct {
                protected [__keep_incompatibility]: never;
                public position: UnityEngine.Vector3;
                public color: UnityEngine.Color;
                public id: number;
            }

            class TestPropertyStruct {
                protected [__keep_incompatibility]: never;
                public X: number;
                public Y: number;
            }

            class TestHistoryEntry {
                protected [__keep_incompatibility]: never;
                public day: number;
                public value: number;
            }

            class TestStructWithArrays {
                protected [__keep_incompatibility]: never;
                public name: string;
                public streak: System.Array$1<number>;
                public history: System.Array$1<OneJS.Tests.TestHistoryEntry>;
                public tags: System.Collections.Generic.List$1<string>;
            }

            class TestRefPayload {
                protected [__keep_incompatibility]: never;
                public name: string;
                constructor();
            }

            class TestStructWithClassField {
                protected [__keep_incompatibility]: never;
                public weight: number;
                public payload: OneJS.Tests.TestRefPayload;
            }

            class StructClassFieldHelper {
                protected [__keep_incompatibility]: never;
                public static Stored: OneJS.Tests.TestStructWithClassField;
                public static Make($name: string): OneJS.Tests.TestStructWithClassField;
            }

            class QuickJSPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Eval_SimpleArithmetic_ReturnsCorrectResult(): System.Collections.IEnumerator;
                public Eval_FunctionDefinitionAndCall_Works(): System.Collections.IEnumerator;
                public Eval_ConsoleLog_DoesNotThrow(): System.Collections.IEnumerator;
                public Static_DebugLogViaCallStatic_Works(): System.Collections.IEnumerator;
                public Static_DebugLogViaCSProxy_Works(): System.Collections.IEnumerator;
                public Static_TimeDeltaTime_ReturnsFloat(): System.Collections.IEnumerator;
                public Static_TimeFrameCount_ReturnsNonNegativeInt(): System.Collections.IEnumerator;
                public Interop_CreateGameObjectFromJS_Works(): System.Collections.IEnumerator;
                public Interop_CreateAndManipulateVector3_Works(): System.Collections.IEnumerator;
                public Interop_SetTransformPosition_UpdatesPosition(): System.Collections.IEnumerator;
                public Interop_AddComponentGetComponent_Works(): System.Collections.IEnumerator;
                public Callback_NumericCallback_ReturnsSum(): System.Collections.IEnumerator;
                public Callback_StringCallback_ReturnsConcatenation(): System.Collections.IEnumerator;
                public Callback_ObjectReturn_ReturnsJSON(): System.Collections.IEnumerator;
                public Struct_Vector3FromPlainObject_Works(): System.Collections.IEnumerator;
                public Struct_Vector2Constructor_Works(): System.Collections.IEnumerator;
                public Struct_ColorFromPlainObject_Works(): System.Collections.IEnumerator;
                public Struct_QuaternionFromPlainObject_Works(): System.Collections.IEnumerator;
                public Struct_RectConstructor_Works(): System.Collections.IEnumerator;
                public Struct_Vector3RoundTrip_Works(): System.Collections.IEnumerator;
                public Struct_CustomStructAutoRegistration_Works(): System.Collections.IEnumerator;
                public Struct_CustomStructDeserialization_Works(): System.Collections.IEnumerator;
                public Struct_NestedStructSerialization_Works(): System.Collections.IEnumerator;
                public Struct_PropertyOnlyStruct_Works(): System.Collections.IEnumerator;
                public Struct_PartialPlainObjectFillsDefaults_Works(): System.Collections.IEnumerator;
                public Struct_CustomSerializerRegistration_Works(): System.Collections.IEnumerator;
                public Struct_WithAClassField_KeepsTheReference(): System.Collections.IEnumerator;
                public Struct_FillGradient_AssignsToPainter2D(): System.Collections.IEnumerator;
                public Struct_ArrayFields_SerializeAsJsonArrays(): System.Collections.IEnumerator;
                public Struct_ArrayFields_RoundTripFromJson(): System.Collections.IEnumerator;
                public Struct_ArrayFields_RoundTripFromPlainDict(): System.Collections.IEnumerator;
                public Generics_ListInt_CreateAndAdd_Works(): System.Collections.IEnumerator;
                public Generics_ListString_CreateAndAdd_Works(): System.Collections.IEnumerator;
                public Generics_Dictionary_CreateAndAdd_Works(): System.Collections.IEnumerator;
                public Generics_ListVector3_Works(): System.Collections.IEnumerator;
                public Generics_BoundTypeIsCallable_Works(): System.Collections.IEnumerator;
                public Generics_HashSet_Works(): System.Collections.IEnumerator;
                public Indexer_ListInt_GetByIndex_Works(): System.Collections.IEnumerator;
                public Indexer_ListInt_SetByIndex_Works(): System.Collections.IEnumerator;
                public Indexer_ListString_GetSetByIndex_Works(): System.Collections.IEnumerator;
                public Indexer_ListGameObject_Works(): System.Collections.IEnumerator;
                public Indexer_ListVector3_Works(): System.Collections.IEnumerator;
                public Indexer_WithLoop_Works(): System.Collections.IEnumerator;
                public Indexer_CountAndLengthStillWork_Works(): System.Collections.IEnumerator;
                public Indexer_ModifyInPlace_Works(): System.Collections.IEnumerator;
                public Async_ImmediateTaskInt_ReturnsDirectly(): System.Collections.IEnumerator;
                public Async_DelayedTaskString_ResolvesAfterDelay(): System.Collections.IEnumerator;
                public Async_TaskVoid_ResolvesWithNull(): System.Collections.IEnumerator;
                public Async_FailingTask_Rejects(): System.Collections.IEnumerator;
                public Async_AlreadyFaultedTask_Rejects(): System.Collections.IEnumerator;
                public Async_AlreadyCanceledTask_Rejects(): System.Collections.IEnumerator;
                public Async_ThrowBeforeFirstAwait_Rejects(): System.Collections.IEnumerator;
                public Async_TaskReturnsGameObject_WrapsAsHandle(): System.Collections.IEnumerator;
                public Async_AwaitSyntax_Works(): System.Collections.IEnumerator;
                public Async_MultipleAwaits_Work(): System.Collections.IEnumerator;
                public Array_Float32Array_ToFloatArray_Works(): System.Collections.IEnumerator;
                public Array_Int32Array_ToIntArray_Works(): System.Collections.IEnumerator;
                public Array_JsArray_ToIntArray_Works(): System.Collections.IEnumerator;
                public Array_JsArray_ToFloatArray_Works(): System.Collections.IEnumerator;
                public Array_JsObjectArray_ToVector3Array_Works(): System.Collections.IEnumerator;
                public Array_JsTupleArray_ToVector3Array_Works(): System.Collections.IEnumerator;
                public Array_EmptyTypedArray_Works(): System.Collections.IEnumerator;
                public Array_JsColorArray_ToColorArray_Works(): System.Collections.IEnumerator;
                public Array_StringArray_Works(): System.Collections.IEnumerator;
                public Array_LargeArray_Works(): System.Collections.IEnumerator;
                public Long_ReturnZero_Works(): System.Collections.IEnumerator;
                public Long_ReturnSmallValue_Works(): System.Collections.IEnumerator;
                public Long_ReturnNegative_Works(): System.Collections.IEnumerator;
                public Long_ReturnMaxSafeInteger_Works(): System.Collections.IEnumerator;
                public Long_ReturnMinSafeInteger_Works(): System.Collections.IEnumerator;
                public ULong_ReturnZero_Works(): System.Collections.IEnumerator;
                public ULong_ReturnSmallValue_Works(): System.Collections.IEnumerator;
                public ULong_ReturnLargeValue_Works(): System.Collections.IEnumerator;
                public Long_RoundTrip_Works(): System.Collections.IEnumerator;
                public ULong_RoundTrip_Works(): System.Collections.IEnumerator;
                public ULong_IsNumeric_NotObjectHandle(): System.Collections.IEnumerator;
            }

            class ArrayTestHelper {
                protected [__keep_incompatibility]: never;
                public static SumFloatArray($arr: System.Array$1<number>): number;
                public static SumIntArray($arr: System.Array$1<number>): number;
                public static SumVector3Array($arr: System.Array$1<UnityEngine.Vector3>): UnityEngine.Vector3;
                public static AverageColors($arr: System.Array$1<UnityEngine.Color>): UnityEngine.Color;
                public static JoinStrings($arr: System.Array$1<string>): string;
            }

            class Int64TestHelper {
                protected [__keep_incompatibility]: never;
                public static GetLongZero(): bigint;
                public static GetLongSmall(): bigint;
                public static GetLongNegative(): bigint;
                public static GetLongMaxSafe(): bigint;
                public static GetLongMinSafe(): bigint;
                public static GetULongZero(): bigint;
                public static GetULongSmall(): bigint;
                public static GetULongLarge(): bigint;
                public static EchoLong($value: bigint): bigint;
                public static EchoULong($value: bigint): bigint;
            }

            class QuickJSSchedulerTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public TimerIds_StartAboveNativeIdRange(): void;
                public ZeroDelayReschedule_RunsOncePerPass(): void;
                public Timeout_ClearedDuringPass_DoesNotRun(): void;
                public Interval_StalledPass_FiresOnceAndRebases(): void;
                public TeardownTimers_OnlyDefined_WhenNativeRafExists(): void;
                public TeardownTimers_RestoresPlantedNatives(): void;
                public TeardownTimers_MigratesPendingTimers_AndMapsIds(): void;
                public WebGLClock_SeedsFromPerformanceNow(): void;
                public Teardown_AfterRestart_StillStopsTick(): void;
                public WebGLTick_MidPassTeardown_StopsAndMigrates(): void;
                public BootstrapReEval_RetiresPreviousGeneration(): void;
                public CleanTeardown_RestoresRawNatives(): void;
                public OverrideClears_FallThrough_ForForeignIds(): void;
            }

            class QuickJSStabilityTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public HandleMonitoring_GetHandleCount_ReturnsCorrectCount(): System.Collections.IEnumerator;
                public HandleLookup_ElementOrAncestor_ResolvesNearestRegistered(): System.Collections.IEnumerator;
                public HandleMonitoring_GetPeakHandleCount_TracksPeak(): System.Collections.IEnumerator;
                public HandleMonitoring_ClearAllHandles_ResetsState(): System.Collections.IEnumerator;
                public HandleMonitoring_DuplicateRegistration_ReturnsSameHandle(): System.Collections.IEnumerator;
                public HandleRefCount_UnregisterDecrementsBeforeRemoval(): System.Collections.IEnumerator;
                public HandleRefCount_SingleRegistrationRemovesImmediately(): System.Collections.IEnumerator;
                public HandleRefCount_ReregistrationAfterFullRelease(): System.Collections.IEnumerator;
                public ProxyCacheRefcount_RepeatedAccess_RefcountStaysAtOne(): System.Collections.IEnumerator;
                public ProxyCacheRefcount_CollectionItemAccess_RefcountStaysAtOne(): System.Collections.IEnumerator;
                public ProxyCacheRefcount_SingleUnregisterFreesHandle(): System.Collections.IEnumerator;
                public ProxyCacheRefcount_ProxyIdentityPreserved(): System.Collections.IEnumerator;
                public TaskQueueMonitoring_GetPendingTaskCount_ReturnsCorrectCount(): System.Collections.IEnumerator;
                public TaskQueueMonitoring_CompletedTasksAreQueued(): System.Collections.IEnumerator;
                public TaskQueueMonitoring_ProcessCompletedTasks_ClearsQueue(): System.Collections.IEnumerator;
                public TaskQueueMonitoring_GetPeakTaskQueueSize_TracksPeak(): System.Collections.IEnumerator;
                public TaskQueueMonitoring_ResetTaskQueueMonitoring_ResetsPeak(): System.Collections.IEnumerator;
                public BufferOverflow_SmallOutput_NoWarning(): System.Collections.IEnumerator;
                public BufferOverflow_LargeOutput_TriggersWarning(): System.Collections.IEnumerator;
                public ContextDispose_ClearsPendingTasks(): System.Collections.IEnumerator;
                public ExceptionContext_MethodNotFound_ThrowsWithContext(): System.Collections.IEnumerator;
                public ExceptionContext_TypeNotFound_ThrowsWithContext(): System.Collections.IEnumerator;
                public ExceptionContext_SyntaxError_ThrowsWithContext(): System.Collections.IEnumerator;
                public ExceptionContext_RuntimeError_ThrowsWithContext(): System.Collections.IEnumerator;
            }

            class TaskMonitoringTestHelper {
                protected [__keep_incompatibility]: never;
                public static DelayedResult($value: number, $delayMs: number): $Task;
                public static FailAfterDelay($delayMs: number, $message: string): System.Threading.Tasks.Task;
            }

            class QuickJSStorageTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public LocalStorage_GlobalExists(): System.Collections.IEnumerator;
                public LocalStorage_GetItemExists(): System.Collections.IEnumerator;
                public LocalStorage_SetItemExists(): System.Collections.IEnumerator;
                public LocalStorage_RemoveItemExists(): System.Collections.IEnumerator;
                public LocalStorage_ClearExists(): System.Collections.IEnumerator;
                public SessionStorage_GlobalExists(): System.Collections.IEnumerator;
                public LocalStorage_SetAndGetItem_Works(): System.Collections.IEnumerator;
                public LocalStorage_GetItem_ReturnsNullForMissing(): System.Collections.IEnumerator;
                public LocalStorage_SetItem_OverwritesExisting(): System.Collections.IEnumerator;
                public LocalStorage_RemoveItem_Works(): System.Collections.IEnumerator;
                public LocalStorage_RemoveItem_NonexistentKey_NoError(): System.Collections.IEnumerator;
                public LocalStorage_SetItem_ConvertsNumberToString(): System.Collections.IEnumerator;
                public LocalStorage_SetItem_ConvertsBoolToString(): System.Collections.IEnumerator;
                public LocalStorage_JSON_RoundTrip_Works(): System.Collections.IEnumerator;
                public LocalStorage_EmptyString_Works(): System.Collections.IEnumerator;
                public LocalStorage_MultipleKeys_Independent(): System.Collections.IEnumerator;
                public LocalStorage_Persists_ToPlayerPrefs_UnderItsPrefix(): System.Collections.IEnumerator;
                public LocalStorage_Reads_AValueSavedBeforeThePrefix(): System.Collections.IEnumerator;
                public LocalStorage_KeyAndLength_CountWhatItStored(): System.Collections.IEnumerator;
                public SessionStorage_SetAndGetItem_Works(): System.Collections.IEnumerator;
                public SessionStorage_SharesData_WithLocalStorage(): System.Collections.IEnumerator;
            }

            class QuickJSTypeResolutionTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public NestedEnum_ReadsByDottedPathAndByClrName(): System.Collections.IEnumerator;
                public NestedEnum_AssignsThroughProperty(): System.Collections.IEnumerator;
                public WrongPathAssignedToEnum_Warns(): System.Collections.IEnumerator;
                public WrongPathReadAsNumber_Warns(): System.Collections.IEnumerator;
                public StaticClassQ_SkipsGenericTwin(): System.Collections.IEnumerator;
            }

            class QuickJSUIBridgePlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Scheduling_RequestAnimationFrame_Exists(): System.Collections.IEnumerator;
                public Scheduling_SetTimeout_Exists(): System.Collections.IEnumerator;
                public Scheduling_SetInterval_Exists(): System.Collections.IEnumerator;
                public Scheduling_PerformanceNow_Exists(): System.Collections.IEnumerator;
                public Scheduling_QueueMicrotask_Exists(): System.Collections.IEnumerator;
                public Scheduling_RAFCallback_InvokedOnTick(): System.Collections.IEnumerator;
                public Scheduling_SetTimeout_FiresAfterTick(): System.Collections.IEnumerator;
                public Scheduling_ClearTimeout_PreventsExecution(): System.Collections.IEnumerator;
                public Scheduling_CancelAnimationFrame_PreventsExecution(): System.Collections.IEnumerator;
                public Event_EventAPI_Exists(): System.Collections.IEnumerator;
                public Event_AddEventListener_Available(): System.Collections.IEnumerator;
                public Event_DispatchEvent_Available(): System.Collections.IEnumerator;
                public Event_RegisterAndDispatchClick_Works(): System.Collections.IEnumerator;
                public Event_MultipleHandlers_BothCalled(): System.Collections.IEnumerator;
                public Event_RemoveEventListener_Works(): System.Collections.IEnumerator;
                public Event_RemoveAllEventListeners_ClearsAllHandlers(): System.Collections.IEnumerator;
                public PointerCapture_UseExtensions_CaptureAndRelease_Works(): System.Collections.IEnumerator;
                public Event_LocalXY_AreRelativeToCurrentTarget(): System.Collections.IEnumerator;
                public Event_EventData_PassedCorrectly(): System.Collections.IEnumerator;
                public PointerCapture_PointerMove_JSHandlerFiresDuringCapture(): System.Collections.IEnumerator;
                public Wheel_DispatchedToJsHandlerWithDelta(): System.Collections.IEnumerator;
                public GeometryChanged_RectsReachJsAsTheDoublesTheyWiden(): System.Collections.IEnumerator;
                public Suppression_FastPath_PreventDefaultInOnPointerDown_Suppresses(): System.Collections.IEnumerator;
                public Suppression_PerElement_PreventDefaultDuringCapture_Suppresses(): System.Collections.IEnumerator;
                public Suppression_PreventDefaultInOnWheel_StopsScrollViewScroll(): System.Collections.IEnumerator;
                public Suppression_PreventDefaultInOnNavigationMove_KeepsFocus($fastPath: boolean): System.Collections.IEnumerator;
                public Suppression_PreventDefaultInOnNavigationSubmitOrCancel_Suppresses($eventType: string, $fastPath: boolean): System.Collections.IEnumerator;
                public Suppression_PreventDefaultInOnPointerDown_KeepsFocus($fastPath: boolean): System.Collections.IEnumerator;
                public Suppression_PreventDefaultInOnKeyDownOrUp_Suppresses($eventType: string): System.Collections.IEnumerator;
                public Suppression_PreventDefaultInOnKeyDown_StopsTextFieldInput(): System.Collections.IEnumerator;
                public Focus_FocusOutBubblesToAncestor_SoAFocusScopeTrapHoldsFocus($fastPath: boolean): System.Collections.IEnumerator;
                public Wheel_FastPath_DispatchedToJsHandlerWithDelta(): System.Collections.IEnumerator;
                public Suppression_PerElementFastPath_PreventDefaultDuringCapture_Suppresses(): System.Collections.IEnumerator;
                public PointerMove_TwoInOneFrame_EachReachesJsOnce(): System.Collections.IEnumerator;
            }

            class QuickJSURLTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public URL_GlobalExists(): System.Collections.IEnumerator;
                public URLSearchParams_GlobalExists(): System.Collections.IEnumerator;
                public URLSearchParams_EmptyConstructor_Works(): System.Collections.IEnumerator;
                public URLSearchParams_StringConstructor_Works(): System.Collections.IEnumerator;
                public URLSearchParams_StringWithQuestionMark_Works(): System.Collections.IEnumerator;
                public URLSearchParams_ObjectConstructor_Works(): System.Collections.IEnumerator;
                public URLSearchParams_ArrayConstructor_Works(): System.Collections.IEnumerator;
                public URLSearchParams_Get_ReturnsValue(): System.Collections.IEnumerator;
                public URLSearchParams_Get_ReturnsNullForMissing(): System.Collections.IEnumerator;
                public URLSearchParams_GetAll_ReturnsAllValues(): System.Collections.IEnumerator;
                public URLSearchParams_Has_ReturnsTrue(): System.Collections.IEnumerator;
                public URLSearchParams_Has_ReturnsFalse(): System.Collections.IEnumerator;
                public URLSearchParams_Append_AddsValue(): System.Collections.IEnumerator;
                public URLSearchParams_Append_AllowsDuplicates(): System.Collections.IEnumerator;
                public URLSearchParams_Set_OverwritesValue(): System.Collections.IEnumerator;
                public URLSearchParams_Delete_RemovesKey(): System.Collections.IEnumerator;
                public URLSearchParams_Sort_SortsKeys(): System.Collections.IEnumerator;
                public URLSearchParams_Keys_ReturnsKeys(): System.Collections.IEnumerator;
                public URLSearchParams_Values_ReturnsValues(): System.Collections.IEnumerator;
                public URLSearchParams_Size_ReturnsCount(): System.Collections.IEnumerator;
                public URLSearchParams_ForEach_IteratesAll(): System.Collections.IEnumerator;
                public URLSearchParams_EncodesSpecialChars(): System.Collections.IEnumerator;
                public URLSearchParams_DecodesSpecialChars(): System.Collections.IEnumerator;
                public URLSearchParams_DecodesPlus(): System.Collections.IEnumerator;
                public URL_SimpleURL_Parses(): System.Collections.IEnumerator;
                public URL_WithPort_ParsesPort(): System.Collections.IEnumerator;
                public URL_WithPath_ParsesPath(): System.Collections.IEnumerator;
                public URL_WithQuery_ParsesQuery(): System.Collections.IEnumerator;
                public URL_WithHash_ParsesHash(): System.Collections.IEnumerator;
                public URL_FullURL_ParsesAllParts(): System.Collections.IEnumerator;
                public URL_InvalidURL_Throws(): System.Collections.IEnumerator;
                public URL_Host_IncludesPort(): System.Collections.IEnumerator;
                public URL_Host_ExcludesDefaultPort(): System.Collections.IEnumerator;
                public URL_Origin_Works(): System.Collections.IEnumerator;
                public URL_Origin_OmitsDefaultPort(): System.Collections.IEnumerator;
                public URL_Href_ReturnsFullURL(): System.Collections.IEnumerator;
                public URL_ToString_EqualsHref(): System.Collections.IEnumerator;
                public URL_ToJSON_EqualsHref(): System.Collections.IEnumerator;
                public URL_SearchParams_ReturnsURLSearchParams(): System.Collections.IEnumerator;
                public URL_SearchParams_ModificationReflectsInHref(): System.Collections.IEnumerator;
                public URL_SetHostname_Works(): System.Collections.IEnumerator;
                public URL_SetPathname_Works(): System.Collections.IEnumerator;
                public URL_SetSearch_Works(): System.Collections.IEnumerator;
                public URL_SetHash_Works(): System.Collections.IEnumerator;
                public URL_RelativeWithBase_ResolvesAbsolutePath(): System.Collections.IEnumerator;
                public URL_RelativeWithBase_ResolvesRelativePath(): System.Collections.IEnumerator;
                public URL_RelativeWithBase_ResolvesQueryOnly(): System.Collections.IEnumerator;
                public URL_RelativeWithBase_ResolvesHashOnly(): System.Collections.IEnumerator;
                public URL_AbsoluteIgnoresBase(): System.Collections.IEnumerator;
                public URL_HttpProtocol_Works(): System.Collections.IEnumerator;
                public URL_WsProtocol_Works(): System.Collections.IEnumerator;
                public URL_WssProtocol_Works(): System.Collections.IEnumerator;
            }

            class QuickJSWebSocketTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public WebSocket_GlobalExists(): System.Collections.IEnumerator;
                public WebSocket_Constants_AreCorrect(): System.Collections.IEnumerator;
                public WebSocket_Constructor_SetsUrl(): System.Collections.IEnumerator;
                public WebSocket_Constructor_StartsConnecting(): System.Collections.IEnumerator;
                public WebSocket_Send_ThrowsWhenNotOpen(): System.Collections.IEnumerator;
                public WebSocket_Connect_FiresOnOpen(): System.Collections.IEnumerator;
                public WebSocket_Close_FiresOnClose(): System.Collections.IEnumerator;
                public WebSocket_SendAndReceive_EchoWorks(): System.Collections.IEnumerator;
                public WebSocket_SendJson_EchoWorks(): System.Collections.IEnumerator;
                public WebSocket_AddEventListener_Works(): System.Collections.IEnumerator;
                public WebSocket_InvalidUrl_FiresErrorAndClose(): System.Collections.IEnumerator;
                public WebSocket_BinaryType_DefaultsToArrayBuffer(): System.Collections.IEnumerator;
                public WebSocket_Binary_Base64RoundTrip(): System.Collections.IEnumerator;
                public WebSocket_Binary_SendDetectsTypes(): System.Collections.IEnumerator;
                public WebSocket_MultipleConnections_WorkIndependently(): System.Collections.IEnumerator;
                public WebSocket_Protocol_SetAfterOpen(): System.Collections.IEnumerator;
                public WebSocket_InstanceConstants_Accessible(): System.Collections.IEnumerator;
                public WebSocket_EventTarget_HasTargetProperty(): System.Collections.IEnumerator;
                public WebSocket_DispatchEvent_Works(): System.Collections.IEnumerator;
                public WebSocket_TypedArraySubview_SlicesCorrectly(): System.Collections.IEnumerator;
                public WebSocket_PerContext_EventIsolation(): System.Collections.IEnumerator;
                public WebSocket_Dispose_ClosesAllConnections(): System.Collections.IEnumerator;
            }

            class QuickJSZeroAllocTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Bind_ZeroArg_ReturnsPositiveId(): System.Collections.IEnumerator;
                public Bind_WithReturnValue_Works(): System.Collections.IEnumerator;
                public Bind_MultiArg_Works(): System.Collections.IEnumerator;
                public Bind_SetFloatById_NoBoxing(): System.Collections.IEnumerator;
                public Bind_SetVectorById_SixArgs(): System.Collections.IEnumerator;
                public Bind_Dispatch_FiveArgs(): System.Collections.IEnumerator;
                public Bind_GetScreenWidth_ReturnsInt(): System.Collections.IEnumerator;
                public PropertyToID_CachingPattern(): System.Collections.IEnumerator;
                public GPUBridge_PropertyToID_Works(): System.Collections.IEnumerator;
                public GPUBridge_ZeroAllocBindings_Initialized(): System.Collections.IEnumerator;
                public GPUBridge_SetFloatById_Works(): System.Collections.IEnumerator;
                public Bind_MultipleSignatures_AllZeroAlloc(): System.Collections.IEnumerator;
                public ZeroAllocBindingCount_Increases(): System.Collections.IEnumerator;
                public JS_GetZeroAllocBindingIds_Works(): System.Collections.IEnumerator;
                public JS_PropertyToID_Works(): System.Collections.IEnumerator;
                public JS_ScreenDimensions_Works(): System.Collections.IEnumerator;
                public MethodBinding_GenericOnlyMethod_FailsAtBindTime(): System.Collections.IEnumerator;
                public MethodBinding_PrefersNonGenericTwin(): System.Collections.IEnumerator;
                public MethodBinding_UnknownType_FailsCleanly(): System.Collections.IEnumerator;
            }

            class QuickJSZeroAllocPerformanceTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Binding_RegistrationTime(): System.Collections.IEnumerator;
                public SimulatedPerFrameGpuUpdate_Pattern(): System.Collections.IEnumerator;
            }

            class ShaderFXTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public Layout_PaintsOnFirstRectWithoutWaitingForATick(): System.Collections.IEnumerator;
                public Layout_ResizeRebuildsTheTargetWithoutATick(): System.Collections.IEnumerator;
                public Resolution_ExplicitSizeIgnoresLayout(): System.Collections.IEnumerator;
                public Dispose_UnregistersFromTheBridge(): System.Collections.IEnumerator;
                public SetVectorArray_RejectsRaggedInput(): void;
                public SetVectorArray_AcceptsAFlatFloatArray(): void;
                public Ramp_IsCachedByContent(): void;
                public Ramp_RejectsFewerThanTwoStops(): void;
                public Ramp_RejectsRaggedStops(): void;
                public BuiltinTexture_UnknownNameWarnsAndReturnsNull(): void;
                public BuiltinTexture_NoiseIsCachedPerSeed(): void;
                public BuiltinTexture_MasksClampSoScrollingCannotWrapThem(): void;
            }

            class StyleBridgePlainDataTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public EveryLengthKey_TakesValueAndUnit(): void;
                public EveryKeywordKey_TakesAKeyword(): void;
                public EveryColorKey_TakesRGBA(): void;
                public EveryEnumKey_TakesTheMemberName(): void;
                public ManyKeysInOneBatch_AllApply(): void;
            }

            class SubsystemTeardownPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Audio_ClipsAndVoicesGoWithTheirContext(): System.Collections.IEnumerator;
                public GPU_BuffersAndTargetsGoWithTheirContext(): System.Collections.IEnumerator;
                public SL_ProgramsGoWithTheirContext(): System.Collections.IEnumerator;
                public Input_MapsActionsAndWatchesGoWithTheirContext(): System.Collections.IEnumerator;
            }

            class TransitionFirstLayoutPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public AClassAddedBeforeTheFirstLayoutLandsOnTheEndState(): System.Collections.IEnumerator;
                public AClassAddedFromTheFirstGeometryChangedAnimates(): System.Collections.IEnumerator;
            }

            class TreeViewBridgeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetRootItems_BuildsNestedStructure(): void;
                public SetRootItems_PreservesSiblingOrder(): void;
                public SetRootItems_FlatListIsAllRoots(): void;
                public SetRootItems_EmptyArraysClearTree(): void;
                public SetRootItems_RejectsDuplicateIds(): void;
                public SetRootItems_RejectsParentAppearingAfterChild(): void;
                public SetRootItems_RejectsMismatchedLengths(): void;
            }

            class UIToolkitJSPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public Creation_VisualElement_Works(): System.Collections.IEnumerator;
                public Creation_LabelWithText_Works(): System.Collections.IEnumerator;
                public Creation_Button_Works(): System.Collections.IEnumerator;
                public Creation_TextField_Works(): System.Collections.IEnumerator;
                public Property_Name_SetGet(): System.Collections.IEnumerator;
                public Property_Tooltip_SetGet(): System.Collections.IEnumerator;
                public Property_Visible_SetGet(): System.Collections.IEnumerator;
                public Property_PickingMode_Set(): System.Collections.IEnumerator;
                public Property_AddCSSClass_Works(): System.Collections.IEnumerator;
                public Property_ClassListContains_Works(): System.Collections.IEnumerator;
                public Style_GetStyleObject_Works(): System.Collections.IEnumerator;
                public Style_SetWidthViaLengthStruct_Works(): System.Collections.IEnumerator;
                public Style_SetWidthViaStyleLength_Works(): System.Collections.IEnumerator;
                public Style_SetHeightDirectly_Works(): System.Collections.IEnumerator;
                public Style_SetBackgroundColor_Works(): System.Collections.IEnumerator;
                public Style_SetFlexDirection_Works(): System.Collections.IEnumerator;
                public Style_SetMultipleStyles_Works(): System.Collections.IEnumerator;
                public Style_SetPadding_Works(): System.Collections.IEnumerator;
                public Style_SetMargin_Works(): System.Collections.IEnumerator;
                public Style_SetBorderRadius_Works(): System.Collections.IEnumerator;
                public Style_SetDisplay_Works(): System.Collections.IEnumerator;
                public Style_SetPositionType_Works(): System.Collections.IEnumerator;
                public Hierarchy_AddChild_Works(): System.Collections.IEnumerator;
                public Hierarchy_AddMultipleChildren_Works(): System.Collections.IEnumerator;
                public Hierarchy_GetChildCount_ReturnsCorrect(): System.Collections.IEnumerator;
                public Hierarchy_InsertAtIndex_Works(): System.Collections.IEnumerator;
                public Hierarchy_RemoveAt_Works(): System.Collections.IEnumerator;
                public Hierarchy_Clear_Works(): System.Collections.IEnumerator;
                public Hierarchy_BringToFront_Works(): System.Collections.IEnumerator;
            }

            class UnhandledRejectionTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): void;
                public TearDown(): void;
                public AnUnhandledRejection_IsLoggedAsAnError(): void;
                public ARejectionHandledBeforeTheQueueDrains_IsNotLogged(): void;
            }

            class UnityNullInteropPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public ADestroyedObjectReadFromCSharpIsNullInJs(): System.Collections.IEnumerator;
                public ADestroyedObjectPassedToAJsCallbackIsNull(): System.Collections.IEnumerator;
                public ALiveObjectStillArrivesAsAProxy(): System.Collections.IEnumerator;
                public ACSharpExceptionThatJsCatchesLogsNothing(): System.Collections.IEnumerator;
                public AnUncaughtCSharpExceptionSurfacesWithItsCSharpStack(): System.Collections.IEnumerator;
                public AnUncaughtCSharpExceptionInATimerIsStillLogged(): System.Collections.IEnumerator;
            }

            class UnityNullFixture {
                protected [__keep_incompatibility]: never;
                public static DeadField: UnityEngine.GameObject;
                public static get Dead(): UnityEngine.GameObject;
                public static get Live(): UnityEngine.GameObject;
                public static get Throws(): string;
                public static GetDead(): UnityEngine.GameObject;
                public static CallWithDead($callback: System.Action$1<UnityEngine.GameObject>): void;
                public static CallWithLive($callback: System.Action$1<UnityEngine.GameObject>): void;
                public static MakeDead(): void;
                public static MakeLive($name: string): void;
                public static Reset(): void;
            }

        }
    }
    namespace OneJS {
        namespace Tests {
            namespace BuildValidation {
                class BuildValidationRunner extends UnityEngine.MonoBehaviour {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }
        }
    }
    namespace OneJS {
        namespace Tests {
            namespace Editor {
                class AISkillContractTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SkillAssetVersion_MatchesPackageJson(): void;
                    public SkillMinimumUnity_MatchesPackageJson(): void;
                    public SkillLastVerified_IsAParseableDate(): void;
                }

                class BuildValidationSceneSetup {
                    protected [__keep_incompatibility]: never;
                    public static Configure(): void;
                }

                class BuildValidationTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public StandaloneBuild_ExecutesJS_AndPassesValidation(): void;
                    public BuildProcessor_CopiesAssetsToStreamingAssets(): void;
                }

                class EventIdContractTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public EventTypeIds_AgreeBetweenTheBridgeAndTheBootstrap(): void;
                    public EventTypeIds_AreUnique(): void;
                }

                class ExceptionLoggingGuardTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public CaughtExceptions_AreLoggedWithTheirStack(): void;
                    public KeptSites_SayWhyAndStillExist(): void;
                    public NativeLogLines_GoThroughTheLevelledPaths(): void;
                    public Finder_CatchesATextLoggedException(): void;
                }

                class FxFeedbackTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public AChainFedBackIntoItsTargetHoldsItsFirstFrame(): void;
                }

                class InputBridgeNamingTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public GetKeyDown_IsADeprecatedAliasOf_GetKeyHeld(): void;
                    public GetKeyDownById_IsADeprecatedAliasOf_GetKeyHeldById(): void;
                    public GetKeyPressed_And_GetKeyReleased_AreNotDeprecated(): void;
                }

                class JSExceptionTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public ResetTally(): void;
                    public FromText_KeepsTheMessageApartFromTheFrames(): void;
                    public StackTrace_IsTheJsFramesInUnitysLinkForm(): void;
                    public Translate_RunsTheFramesThroughTheSourceMap(): void;
                    public TextWithoutFrames_HasNone(): void;
                    public ErrorLine_NamesItsBridge(): void;
                    public ErrorLineWithFrames_LogsAsAnExceptionLinkedToTheSource(): void;
                    public ErrorLineWithoutFrames_StaysAPlainError(): void;
                }

                class JSRunnerBuildProcessorTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public CopyDirectoryRecursive_CopiesFilesRecursively(): void;
                    public CopyDirectoryRecursive_PreservesContent(): void;
                    public CopyDirectoryRecursive_CreatesDestinationDirectory(): void;
                    public CopyDirectoryRecursive_SkipsMetaFiles(): void;
                    public CommitAssets_TwoRunners_BothSurvive(): void;
                    public CommitAssets_SamePathFromTwoRunners_FailsNamingBoth(): void;
                    public CommitAssets_CaseOnlyCollision_Fails(): void;
                    public CommitAssets_RunnerRemovedSinceLastBuild_LeavesNoStaleFile(): void;
                    public CommitAssets_FailedBuild_LeavesThePreviousFolderIntact(): void;
                    public CommitAssets_SameSourceTwice_IsNotACollision(): void;
                    public CommitAssets_RunnerWithoutAssets_ErasesNothing(): void;
                    public CommitAssets_DestinationCannotBeReplaced_FailsTheBuild(): void;
                    public CommitAssets_ReadOnlySource_LeavesAWritableDestination(): void;
                    public CommitAssets_StaleStaging_IsClearedEvenWhenTheBuildCollides(): void;
                    public CommitAssets_SkipsMetaFiles(): void;
                    public CommitAssets_PackageNamespaces_ShipUnderTheirNamespace(): void;
                    public CommitAssets_AppWithOnlyPackageAssets_IsRecordedAndShips(): void;
                    public CommitAssets_AppsOwnNamespace_WinsOverThePackage(): void;
                    public CommitAssets_SamePackageInTwoApps_SharesOnlyWhenIdentical(): void;
                }

                class JSRunnerBuildProcessorWindowsTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public CommitAssets_ReadOnlyDestination_IsReplacedRatherThanRefused(): void;
                    public CommitAssets_UnreplaceableDestination_RaisesBuildFailedException(): void;
                }

                class JSRunnerBuildSceneListTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public RecordedSceneList_WinsOverBuildSettings(): void;
                    public RecordedSceneList_KeepsOrderAndEveryEntry(): void;
                    public RecordedSceneList_IsSpentAfterOneRead(): void;
                    public NeverRecorded_IsNotTheSameAsRecordedEmpty(): void;
                    public NoRecordedList_FallsBackToEnabledBuildSettingsScenes(): void;
                    public NoRecordedList_SkipsDisabledBuildSettingsScenes(): void;
                    public EmptyRecordedList_ResolvesEmptyBecauseUnityBuildsTheOpenScene(): void;
                    public NothingAnywhere_ResolvesEmptySoTheOpenSceneIsUsed(): void;
                }

                class JSRunnerBundleAssignmentTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public TwoRunnersSharingAnApp_BothGetTheBundle(): void;
                    public ThirdRunnerSharingAnApp_AlsoGetsTheBundle(): void;
                    public ASingleRunner_StillGetsTheBundleAndSourceMap(): void;
                    public ARunnerWithAPreassignedBundle_IsLeftAlone(): void;
                }

                class JSRunnerDefaultFilesTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public InitializingKeepsACustomizedList(): void;
                    public AMissingDefaultFileIsNamedWithHowToGetItBack(): void;
                    public AFileNobodyChangedReadsTemplateNewerWhenItsTemplateChanges(): void;
                    public TheScaffoldingListHasRestoreAndNoRemoveButton(): void;
                    public TheScaffoldedGitignoreKeepsTheStateFolder(): void;
                }

                class JSRunnerInitializeReportingTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public InitializeProject_WhenPanelSettingsFolderIsNotAProject_WarnsInsteadOfClaimingSuccess(): void;
                }

                class JSRunnerInspectorListTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public RemoveTakesOutOnlyTheRowClicked($list: string): void;
                    public AfterUndoTheRemovedRowIsBackAndRemoveStillTakesTheRowClicked($list: string): void;
                    public ARowDrawnBeforeTheListChangedRemovesItsOwnEntry($list: string): void;
                }

                class JSRunnerPrefabAppTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public APrefabOnlyRunner_GetsItsBundle(): void;
                    public APrefabOnlyRunner_GetsItsAssets(): void;
                    public TwoPrefabsSharingAnApp_BothGetTheBundle(): void;
                    public AnExcludedPrefabRunner_GetsNothingAndWarnsNothing(): void;
                    public AnExcludedRunnerCannotCollideWithOne_ThatShips(): void;
                    public ADisabledPrefabRunner_IsSkipped(): void;
                    public TwoPrefabAppsClaimingOnePath_WarnRatherThanFailTheBuild(): void;
                    public TwoSceneAppsClaimingOnePath_StillFailTheBuild(): void;
                    public ASceneAppAndAPrefabApp_WarnAndTheSceneAppKeepsThePath(): void;
                }

                class JSRunnerScaffoldOnceTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public ANewAppGetsEveryDefaultFileAndARecordOfEach(): void;
                    public ADeletedDefaultFileStaysDeleted(): void;
                    public AnAppWithARecordGetsOnlyTheDefaultFilesItHasNotHadOnce(): void;
                    public AnAppFromBeforeTheRecordIsSeededFromItsDiskAndItsList(): void;
                    public ADeletedPackageJsonDoesNotMakeAnAppWithARecordNew(): void;
                    public DeletingTheRecordBringsNoDeletedFileBack(): void;
                    public TwoRunnersOnOneFolderShareTheRecord(): void;
                    public EveryMissingFileTheWarningNamesHasARowRestoreWorksOn(): void;
                    public RestoreBringsBackADeletedFileAsItsTemplate(): void;
                    public RestoreRecordsWhatItWroteSoALaterTemplateChangeShows(): void;
                    public ARestoreInAnAppFromBeforeTheRecordBringsNothingElseBack(): void;
                    public ASeededFileThatIsTheTemplateShowsTemplateNewerWhenTheTemplateMovesOn(): void;
                    public ARecordedFileWithNoHashGainsOneOnceItIsSeenToBeTheTemplate(): void;
                    public ASeededFileOfUnknownOriginIsNotCalledModified(): void;
                    public TheTemplateWithOtherLineEndingsIsUpToDate(): void;
                    public ARestoreBeforeTheFirstPlayLeavesTheAppNew(): void;
                }

                class JSRunnerUIDocumentOwnershipTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public ClearingPanelSettings_KeepsAUIDocumentTheUserAdded(): void;
                    public InvalidPanelSettingsFolder_KeepsAUIDocumentTheUserAdded(): void;
                    public ClearingPanelSettings_StillRemovesAUIDocumentJSRunnerAdded(): void;
                }

                class JsLogSeverityTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public ResetTally(): void;
                    public PlainLine_IsLog_AndKeepsItsText(): void;
                    public MarkedLines_SplitIntoLevelAndBody(): void;
                    public UnknownOrAbsentMarker_FallsBackToLogWithTextIntact(): void;
                    public ErrorLine_LogsAsError_AndIsCounted(): void;
                    public WarnLine_LogsAsWarning_AndIsNotCountedAsAnError(): void;
                    public PlainLines_StayAtLogLevel_AndLeaveTheErrorTallyAtZero(): void;
                }

                class PackUtilsTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public EscapeJsString_NullInput_ReturnsNull(): void;
                    public EscapeJsString_EmptyString_ReturnsEmpty(): void;
                    public EscapeJsString_SimpleString_ReturnsUnchanged(): void;
                    public EscapeJsString_SingleQuotes_AreEscaped(): void;
                    public EscapeJsString_Backslashes_AreEscaped(): void;
                    public EscapeJsString_Newlines_AreEscaped(): void;
                    public EscapeJsString_CarriageReturns_AreEscaped(): void;
                    public EscapeJsString_MixedSpecialChars_AllEscaped(): void;
                    public RelativePath_WithoutNamespace_ReturnsSlug(): void;
                    public RelativePath_WithNamespace_ReturnsNamespacedPath(): void;
                    public RelativePath_EmptyNamespace_ReturnsSlug(): void;
                    public GetPackPath_NullBaseDir_ReturnsNull(): void;
                    public GetPackPath_EmptyBaseDir_ReturnsNull(): void;
                    public GetPackPath_NullPack_ReturnsNull(): void;
                    public GetPackPath_PackWithNullSlug_ReturnsNull(): void;
                    public GetPackPath_PackWithEmptySlug_ReturnsNull(): void;
                    public GetPackPath_ValidInputs_ReturnsCorrectPath(): void;
                    public GetPackPath_WithNamespace_ReturnsNamespacedPath(): void;
                    public GetPackPath_WithNamespace_UsesPlatformSeparators(): void;
                    public GetPackPath_EmptyNamespace_ReturnsNonNamespacedPath(): void;
                    public ExtractPacks_NullPacks_DoesNotThrow(): void;
                    public ExtractPacks_EmptyPacks_DoesNotThrow(): void;
                    public ExtractPacks_NullBaseDir_DoesNotThrow(): void;
                    public ExtractPacks_CreatesPackFolder(): void;
                    public ExtractPacks_GeneratesTypeDefinitions(): void;
                    public ExtractPacks_OverwriteFalse_SkipsExisting(): void;
                    public ExtractPacks_OverwriteTrue_ReplacesExisting(): void;
                    public ExtractPacks_NestedFilePath_UsesPlatformSeparators(): void;
                    public ExtractPacks_SkipsNullPacksInList(): void;
                    public ApplyStylesheets_NullStylesheets_DoesNotThrow(): void;
                    public ApplyStylesheets_EmptyStylesheets_DoesNotThrow(): void;
                    public ApplyStylesheets_NullRoot_DoesNotThrow(): void;
                    public ApplyStylesheets_ValidStylesheet_IsApplied(): void;
                    public ApplyStylesheets_SkipsNullStylesheetsInList(): void;
                    public ApplyStylesheets_MultipleStylesheets_AllApplied(): void;
                    public ExtractPacks_WithNamespace_CreatesNamespacedFolder(): void;
                    public ExtractPacks_MixedNamespaces_CreatesBothFolderStructures(): void;
                    public ExtractPacks_ReturnsCreatedFilePaths(): void;
                    public ExtractPacks_SkipsExisting_ReturnsEmptyList(): void;
                    public ExtractPacks_NullInputs_ReturnsEmptyList(): void;
                    public Generate_DeclaresPackAndTheDeprecatedCartridgeNames(): void;
                    public UICartridge_IsAnAbstractBaseOfPack(): void;
                    public CartridgeUtils_ForwardsToTheFolderItAlwaysUsed(): void;
                    public Generate_WithVersion_WritesVersionLineInHeader(): void;
                    public Generate_WithoutVersion_OmitsVersionLine(): void;
                    public ParseVersion_RoundTripsThroughGenerate(): void;
                    public ParseVersion_OnlyScansTheCommentHeader(): void;
                    public GetExtractedVersion_AfterExtract_MatchesAssetVersion(): void;
                    public GetExtractedVersion_UnversionedExtraction_ReturnsNull(): void;
                    public ExtractPacks_SkipExisting_WarnsWhenVersionDiffers(): void;
                    public ExtractPacks_SkipExisting_NoWarningWhenVersionMatches(): void;
                }

                class PlayerBundleTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public RunsTheBuildScriptWithNodeEnvProduction(): void;
                    public GivesTheEditorItsOwnBundleBackAfterThePlayerBuild(): void;
                    public KeepsABundleTheWatcherRebuiltAfterThePlayerBuild(): void;
                    public FailsThePlayerBuildWhenTheAppDoesNotBuild_SayingWhichAppAndWhy(): void;
                    public ShipsTheBundleOnDiskWhenDependenciesAreNotInstalled(): void;
                    public ShipsTheBundleOnDiskWhenThereIsNoBuildScript(): void;
                    public SaysWhenAPlayerBundleStillCarriesReactsDevelopmentBuild(): void;
                    public RecognizesReactsDevelopmentBuildsInABundle(): void;
                }

                class PremadePackTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public AtLeastOnePremadePackExists(): void;
                    public Metadata_IsComplete($path: string): void;
                    public Metadata_SlugAndNamespaceArePathSafe($path: string): void;
                    public Metadata_AssetFileNameMatchesThePackName($path: string): void;
                    public Identity_IsUniqueAcrossThePremades(): void;
                    public Files_AllResolveToNonEmptyContent($path: string): void;
                    public Files_PathsAreRelativeAndCannotEscape($path: string): void;
                    public Objects_AllHaveKeyAndValue($path: string): void;
                    public Extract_WritesEveryDeclaredFileVerbatim($path: string): void;
                    public Extract_LandsOnThePathTheImportStatementUses($path: string): void;
                    public Extract_WithoutOverwrite_LeavesUserEditsAlone($path: string): void;
                }

                class SLShaderGeneratorIncludeTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): void;
                    public TearDown(): void;
                    public Includes_AreReadFromThePackageGiven(): void;
                    public IncludeDir_IsThisPackagesResources(): void;
                }

                class StructSerializationTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public ComputedPropertyIsSerialized(): void;
                    public ComputedPropertySurvivesAFieldOfTheSameNameInAnotherCase(): void;
                    public AWritablePropertyStillRoundTrips(): void;
                    public AReadOnlyPropertyComesBackWithoutBeingWritten(): void;
                    public OneThrowingPropertyDoesNotTakeTheStructWithIt(): void;
                    public AStructThatIsNothingButComputedMembersStillSerializes(): void;
                    public AUnityValueTypeNestedInADataStructTerminates(): void;
                    public APropertyReturningItsOwnTypeIsLeftOut(): void;
                    public ACycleBetweenTwoStructsStops(): void;
                    public ATreeOfStructsStillNestsAllTheWayDown(): void;
                    public AComputedCollectionOfItsOwnTypeIsLeftOut(): void;
                    public AnIntegerPastInt32ArrivesWhole(): void;
                }

                class StyleBridgeTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public UnknownKey_WarnsOnce_ThenStaysQuiet(): void;
                    public TwoUnknownKeys_EachGetTheirOwnWarning(): void;
                    public KnownReflectiveKey_AppliesWithoutWarning(): void;
                    public NullValue_ClearsTheInlineValue(): void;
                    public UnreadableFilter_WarnsOncePerProperty_NotPerValue(): void;
                    public NullValue_ForAnUnknownKey_WarnsLikeAValue(): void;
                    public UpdateClasses_RemovesThenAdds(): void;
                }

                class TickClockTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public TakeTheClock(): void;
                    public GiveItBack(): void;
                    public ATickReportsTheTimeSinceThePreviousOne(): void;
                    public ASecondTickInTheSameFrameIsRefused(): void;
                    public AClockThatWentBackwardsTicksWithoutAdvancing(): void;
                }

                class UssCompilerDiagnosticsTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public CreateAsset(): void;
                    public DestroyAsset(): void;
                    public TypodProperty_YieldsOneDiagnosticNamingIt(): void;
                    public ValidSheet_UnityPrefixedPropertiesIncluded_YieldsNoDiagnostics(): void;
                    public CustomVariableDeclarations_AreNotFlagged(): void;
                    public DiagnosticsClear_BetweenCompiles(): void;
                    public DiagnosticCarriesTheRuleLine(): void;
                }

                class UssFilterTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public WithoutUnitysTable_NamesResolveAsUnitysTableResolvesThem(): void;
                    public WithoutUnitysTable_InlineFiltersStillParse_AndSayWhyOnce(): void;
                }

            }
        }
    }
    namespace OneJS {
        namespace Tests {
            namespace Models {
                class ModelBridgePlayModeTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public MakeScene(): void;
                    public Clean(): void;
                    public PlayMode_TakesTheSceneOverAndGivesItBack(): System.Collections.IEnumerator;
                    public PlayMode_LeavesRenderTextureCamerasRunning(): System.Collections.IEnumerator;
                }

                class ModelTeardownPlaymodeTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public SetUp(): System.Collections.IEnumerator;
                    public TearDown(): System.Collections.IEnumerator;
                    public TheSceneGoesWithTheContextThatMadeIt(): System.Collections.IEnumerator;
                }

                class ModelBridgeEditModeTests {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public NewScene(): void;
                    public Dispose(): void;
                    public GltfMaterials_KeepMetallicRoughnessEmissionAndAlpha(): System.Collections.IEnumerator;
                    public Clips_AreTheFilesOwnNames(): System.Collections.IEnumerator;
                    public Spawned_CastAndReceiveShadowsUnlessTold(): System.Collections.IEnumerator;
                    public Actors_MoveTurnAndScaleOneThingAtATime(): System.Collections.IEnumerator;
                    public Speed_ScalesAnActorsClipAndZeroFreezesIt(): System.Collections.IEnumerator;
                    public EditMode_LeavesTheScenesCameraLightAndLightingAlone(): System.Collections.IEnumerator;
                    public EditMode_WithNoSceneLight_MakesItsOwnSunThatCastsSoftShadows(): void;
                    public Dispose_RemovesEverythingTheBridgeMade(): void;
                    public Dispose_DuringALoad_LeavesNothingWhenTheLoadFinishes(): System.Collections.IEnumerator;
                    public SkinnedModels_UseTheStreamsUnitySkinsFrom(): System.Collections.IEnumerator;
                    public HemisphereProbe_IsTheSkyAboveAndTheGroundBelow(): void;
                    public Shader_CompilesOnlyWhereGltfastIs(): void;
                    public ScriptablePipelineBuilds_LeaveOutTheBuiltInSubShader(): void;
                }

            }
        }
    }
    namespace OneJS {
        namespace Utils {
            class FindCompat {
                protected [__keep_incompatibility]: never;
                public static FindObjectsByType<T extends UnityEngine.Object>(): System.Array$1<T>;
                public static FindObjectsByTypeIncludingInactive<T extends UnityEngine.Object>(): System.Array$1<T>;
            }

            class UIDebugger {
                protected [__keep_incompatibility]: never;
                public static Dump(): string;
                public static DumpDeep(): string;
                public static DumpAll($maxDepth: number, $includeStyles: boolean): string;
                public static FindAll($typeName: string): string;
                public static FindAllByClass($className: string): string;
                public static DumpTree($root: UnityEngine.UIElements.VisualElement, $maxDepth?: number, $includeStyles?: boolean): string;
                public static FindByClass($root: UnityEngine.UIElements.VisualElement, $className: string): string;
                public static FindByType($root: UnityEngine.UIElements.VisualElement, $typeName: string): string;
            }

        }
    }
    namespace OneJSContainer {
        class EventEncodingProbe {
            protected [__keep_incompatibility]: never;
            public static get InputPadTargets(): string;
            public static get RecorderJs(): string;
            public static FireAll($target: UnityEngine.UIElements.VisualElement, $root: UnityEngine.UIElements.VisualElement): string;
            public static BuildInputPad($root: UnityEngine.UIElements.VisualElement): UnityEngine.UIElements.VisualElement;
            public static InputPadChild($pad: UnityEngine.UIElements.VisualElement, $index: number): UnityEngine.UIElements.VisualElement;
            public static FocusInputPadChild($pad: UnityEngine.UIElements.VisualElement, $index: number, $focus: boolean): void;
            public static FocusedName($root: UnityEngine.UIElements.VisualElement): string;
            public static InputSeen($root: UnityEngine.UIElements.VisualElement): string;
            public static BuildScrollPad($root: UnityEngine.UIElements.VisualElement, $wheelStep: number): UnityEngine.UIElements.ScrollView;
            public static ScrollOffset($sv: UnityEngine.UIElements.ScrollView): string;
            public static ResetScroll($sv: UnityEngine.UIElements.ScrollView): void;
            public static TimePointerMoves($target: UnityEngine.UIElements.VisualElement, $n: number): string;
            public static TimeFormat($n: number): string;
        }

        class FilterStylesProbe extends UnityEngine.MonoBehaviour {
            protected [__keep_incompatibility]: never;
            constructor();
            public static Describe($filters: System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.FilterFunction>): string;
        }

        class FrameSyncTest extends UnityEngine.MonoBehaviour {
            protected [__keep_incompatibility]: never;
            public get FrameCount(): number;
            public get ElapsedTime(): number;
            public get SineValue(): number;
            public get Position(): UnityEngine.Vector3;
            public get ManualCounter(): number;
            public get Health(): number;
            constructor();
            public IncrementCounter(): void;
            public ResetCounter(): void;
            public TakeDamage($amount: number): void;
            public Heal($amount: number): void;
            public ResetHealth(): void;
        }

        class OffscreenCamera {
            protected [__keep_incompatibility]: never;
            public static Render($camera: UnityEngine.Camera, $destination: UnityEngine.RenderTexture): void;
        }

        class SLPlayerProbe extends UnityEngine.MonoBehaviour {
            protected [__keep_incompatibility]: never;
            constructor();
        }

        class UICartridgeFieldHolder extends UnityEngine.MonoBehaviour {
            protected [__keep_incompatibility]: never;
            public cartridge: OneJS.UICartridge;
            public cartridges: System.Collections.Generic.List$1<OneJS.UICartridge>;
            constructor();
        }

    }
    namespace OneJSContainer {
        namespace Editor {
            class AssetStoreUpload {
                protected [__keep_incompatibility]: never;
                public static AuthCheck(): void;
                public static Export(): void;
                public static Upload(): void;
            }

            class DocVideoRecorder {
                protected [__keep_incompatibility]: never;
                public static get KnownDemos(): System.Collections.Generic.IEnumerable$1<string>;
                public static RecordAll(): void;
                public static Record($demoKey: string): string;
            }

            class HeroVideoRecorder {
                protected [__keep_incompatibility]: never;
                public static Record(): string;
                public static WriteCues(): string;
                public static Still($t: number, $name?: string): string;
                public static Poster(): string;
                public static ContactSheet(): void;
            }

            class MarketingStills {
                protected [__keep_incompatibility]: never;
                public static CaptureThemeStills(): void;
                public static CaptureDemo($demoKey: string, $width: number, $height: number, $scaleMul: number, $name?: string): string;
                public static CaptureHero($name: string, $width: number, $height: number, $scaleMul: number, $t: number, $poster?: boolean): string;
                public static HeroBeat($key: string, $offset?: number): number;
            }

            class EditorUpdateBackgroundTest {
                protected [__keep_incompatibility]: never;
            }

            class FilterStylesApp {
                protected [__keep_incompatibility]: never;
                public static readonly Fixture: string;
                public static readonly Folder: string;
                public static FixturePath($file: string): string;
                public static Write(): UnityEngine.UIElements.PanelSettings;
                public static Configure($runner: OneJS.JSRunner, $panelSettings: UnityEngine.UIElements.PanelSettings): void;
                public static Delete(): void;
            }

            class FilterStylesPlayerBuild {
                protected [__keep_incompatibility]: never;
                public static BuildMac(): void;
                public static BuildWebGL(): void;
            }

            class StandaloneSmokeBuild {
                protected [__keep_incompatibility]: never;
                public static Build(): void;
            }

            class UnityTypesGenerator {
                protected [__keep_incompatibility]: never;
                public static GenerateAll(): void;
                public static GenerateForAssembly($assemblyName: string): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                public static GenerateForOneJS(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
            }

            class WebGLSmokeBuild {
                protected [__keep_incompatibility]: never;
                public static Build(): void;
                public static BuildHighStripping(): void;
            }

        }
    }
    namespace OneJSContainer {
        namespace Tests {
            class CartPlayerBuildTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public AUsedCartsArtShipsUnderItsKeyAndItsOwnLoaderFindsIt(): void;
            }

            class ContractSources {
                protected [__keep_incompatibility]: never;
                public static get Root(): string;
                public static Read($relativePath: string): string;
            }

            class PackMigrationTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public CleanUp(): void;
                public JSRunnerSavedWithCartridgesKeepsItsList(): void;
                public JSPadSavedWithCartridgesKeepsItsList(): void;
                public AnAssetCreatedAsUICartridgeLoadsAsAPack(): void;
                public AnAssetCreatedAsUICartridgeStillExtracts(): void;
                public ARunnerSavedBeforePacksExtractsToCartridges(): void;
                public APadSavedBeforePacksExtractsToCartridges(): void;
                public ARunnerSavedBeforePacksPutsANewPackInCartridges(): void;
                public ANewRunnerExtractsToPacks($how: OneJSContainer.Tests.PackMigrationTests.AddedBy): void;
                public ANewPadExtractsToPacks($how: OneJSContainer.Tests.PackMigrationTests.AddedBy): void;
                public AFieldTypedUICartridgeKeepsItsAssetThroughLoadAndSave(): void;
                public LoadingAnExistingAssetAsUICartridgeFindsIt(): void;
                public SearchingForUICartridgeFindsAnExistingAsset(): void;
            }
            namespace PackMigrationTests {
                enum AddedBy {
                    UndoAddComponent = 0,
                    ObjectFactory = 1,
                    GameObjectAddComponent = 2
                }

            }

            class PainterOpcodeContractTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public OpcodeNumbers_AgreeAcrossTheBoundary(): void;
                public OperandCounts_AgreeAcrossTheBoundary(): void;
            }

            class ParticleWireContractTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public EveryWireType_HasTheSameFieldsOnBothSides(): void;
                public WireVersion_AgreesAcrossTheBoundary(): void;
            }

            class Physics2DWireContractTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public BodyAndDocumentFields_AgreeAcrossTheBoundary(): void;
                public WireVersion_AgreesAcrossTheBoundary(): void;
            }

            class SLCodegenGoldenTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public GeneratedShadersRenderWhatArithmeticSaysTheyShould(): void;
            }

            class SLEditorWithoutVmTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public AProgramWithNoShaderDrawsNothing(): void;
                public AProgramSeenForTheFirstTimeIsCompiledOnTheNextEditorUpdate(): System.Collections.IEnumerator;
                public EveryLoadGeneratesFromTheManifestBesideTheBundleFirst(): void;
                public TheRecordedManifestIsASourceAProjectCommits(): void;
                public JSPadLoadsShaderLanguageFilesAndRecordsTheirPrograms(): void;
            }

            class SLEjectPathTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public AspectIsTheTargetsRatioAndNotTheWindows(): void;
                public WithAGeneratedShaderPresentTheRuntimePicksItAndDrawsTheAnswer(): void;
                public EveryShapeOfSetProgramFromJsBindsTheGeneratedShader(): void;
            }

            class SLLoopTimingTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public ALoopWithAnEarlyExitAgainstTheSameMathsUnrolled(): void;
            }

            class SLPlayerBuildTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public EveryProgramDrawsCompiledInANativePlayer(): void;
                public WithoutTheRegistryEveryProgramDrawsNothingAndSaysSoOnce(): void;
            }
            namespace SLPlayerBuildTests {
                class RemoveRegistryStep implements UnityEditor.Build.IOrderedCallback, UnityEditor.Build.IPreprocessBuildWithReport {
                    protected [__keep_incompatibility]: never;
                    public get callbackOrder(): number;
                    constructor();
                    public OnPreprocessBuild($report: UnityEditor.Build.Reporting.BuildReport): void;
                }

            }

            class SLRecordedProgramTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public AProgramWithNoShaderIsRecordedGeneratedAndAdopted(): void;
            }

            class SLShaderBuildStepTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public ANativeBuildRegistersEveryManifestProgramAndWebGLRegistersNone(): void;
                public ARecordedManifestInTheIgnoredFolderMovesWhereItCanBeCommitted(): void;
            }

            class SLSharedLibraryTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public TheCgincFilesAreTheLibrarySourceWithAGuardAround(): void;
                public TheSharedSubsetDrawsWhatTheCgincDraws(): void;
            }

            class SLStaleRecordedTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public Clean(): void;
                public AnOldRecordingWithANewAppFailsTheBuildSayingToRecordAgain(): void;
                public AfterOneEditorRunTheBuildPassesAndTheOldProgramsAreGone(): void;
                public TwoAppsOnTwoSchemesNeitherFailNorLoseAProgram(): void;
                public ACodeOnlyAppFailsTheBuildUntilItsProgramIsDrawnAgain(): void;
                public WithNoAppNamingASchemeThereIsNothingToJudgeBy(): void;
            }

            class SLSteppedProgramTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public WriteTheSteppedShaders(): void;
                public RemoveThem(): void;
                public EverySteppedFixtureDrawsItsGoldens(): void;
                public AStepAdvancesAndASeekOrAResetClears(): void;
                public TheHistoryIsNeverAnisotropic(): void;
                public ANewSizeOrANewProgramClearsAndTheSameProgramDoesNot(): void;
                public FrameAndDeltaTimeAreTheStepTaken(): void;
                public TheBridgesTickDrawsOneFramePerTickThatMovedTime(): void;
                public TheBridgesTickDrawsTheFirstFrameAfterPlayMode(): System.Collections.IEnumerator;
            }

            class BreakpointClassesPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public AtXlWidth_XlAppliesAnd2xlDoesNot(): System.Collections.IEnumerator;
                public At2xlWidth_2xlApplies(): System.Collections.IEnumerator;
            }

            class ControlledInputsPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public TextField_ShowsTheValueOnChangeKept(): System.Collections.IEnumerator;
                public TextField_FollowsAnEditOnChangeAccepts(): System.Collections.IEnumerator;
                public Toggle_StaysWhereReactHoldsIt(): System.Collections.IEnumerator;
                public Slider_ShowsTheClampedValue(): System.Collections.IEnumerator;
            }

            class EventEncodingPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public EveryEventArrivesAsFired($encoding: string): System.Collections.IEnumerator;
            }

            class FilterStylesPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public EverySource_ResolvesItsFilter(): System.Collections.IEnumerator;
                public ReactRemovingAndNoneing_ClearsTheInlineFilter(): System.Collections.IEnumerator;
                public Blur_SoftensTheEdgeItIsDrawnWith(): System.Collections.IEnumerator;
            }

            class OverlayDismissPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public PressOnItsOwnTrigger_Closes($overlay: string): System.Collections.IEnumerator;
                public PressOutside_Closes($overlay: string): System.Collections.IEnumerator;
                public EscapeInsideThePortal_Closes($overlay: string): System.Collections.IEnumerator;
                public EscapeInNestedSelect_ClosesOnlyTheSelect(): System.Collections.IEnumerator;
                public SubmitOnFocusedTrigger_Opens($overlay: string): System.Collections.IEnumerator;
            }

            class PlayThemeControlAlignmentTests extends OneJS.Tests.ControlAlignmentFixture {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class ShaderHistoryPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public AProgramCopyingItsPreviousFrameHoldsItTexelForTexel(): System.Collections.IEnumerator;
            }

            class TextStyleUpdatesPlaymodeTests {
                protected [__keep_incompatibility]: never;
                constructor();
                public SetUp(): System.Collections.IEnumerator;
                public TearDown(): System.Collections.IEnumerator;
                public EachUpdate_LandsAndCostsWhatItShould(): System.Collections.IEnumerator;
                public Mount_MakesOnlyTheTextElementsItDraws(): void;
                public MergedTextsMoved_ShowOnceEachInTheirNewOrder(): System.Collections.IEnumerator;
                public SuspendedTexts_HideAndShowAgain(): System.Collections.IEnumerator;
                public UpdatedEveryFrame_EveryFrameLandsAtItsCost(): System.Collections.IEnumerator;
                public SeveralCommitsInOneFrame_EachLandsAtItsCost(): System.Collections.IEnumerator;
                public SeveralUpdatesBeforeARender_TheLastLands(): System.Collections.IEnumerator;
            }

        }
    }
}
