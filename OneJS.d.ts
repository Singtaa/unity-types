declare namespace CS {
    const __keep_incompatibility: symbol;

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
            public get PollInterval(): number;
            public get ReloadCount(): number;
            public get LastModifiedTime(): System.DateTime;
            public get LastReloadTime(): System.DateTime;
            public get IncludeSourceMap(): boolean;
            public get ExcludeFromBuild(): boolean;
            public get PanelSettingsAsset(): UnityEngine.UIElements.PanelSettings;
            public get Cart(): string;
            public get IsCart(): boolean;
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
            public get CartFolder(): OneJS.RootCarts.Cart;
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
            public CreateCartPanelSettings(): UnityEngine.UIElements.PanelSettings;
            public CreateDefaultVisualTreeAsset(): void;
            public EnsureProjectSetup(): boolean;
            public IsPanelSettingsInValidProjectFolder(): boolean;
            public GetInvalidProjectFolderReason(): string;
            public ResolveCart(): OneJS.RootCarts.Resolution;
            public SetCart($name: string): void;
            public RestartEditModePreview(): void;
            public StartEditModePreviewIfReady(): void;
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

        class RootCarts {
            protected [__keep_incompatibility]: never;
            public static readonly EditorBuildRoot: string;
            public static readonly PlayerBuildRoot: string;
            public static readonly PlayerFilesRoot: string;
            public static readonly MinOjplayVersion: string;
            public static readonly SeenFile: string;
            public static get All(): System.Collections.Generic.IReadOnlyList$1<OneJS.RootCarts.Cart>;
            public static IsSkipped($folder: string): boolean;
            public static Invalidate(): void;
            public static Scan($root: string): System.Collections.Generic.List$1<OneJS.RootCarts.Cart>;
            public static ReadAt($dir: string, $shown: string): OneJS.RootCarts.Cart;
            public static SameName($a: string, $b: string): boolean;
            public static Resolve($name: string): OneJS.RootCarts.Resolution;
            public static Resolve($name: string, $carts: System.Collections.Generic.IReadOnlyList$1<OneJS.RootCarts.Cart>): OneJS.RootCarts.Resolution;
            public static EditorBuildDir($cart: OneJS.RootCarts.Cart): string;
            public static PlayerBuildAssetDir($cart: OneJS.RootCarts.Cart): string;
            public static InstalledOjplay($cart: OneJS.RootCarts.Cart): string;
            public static IsSetUp($cart: OneJS.RootCarts.Cart): boolean;
            public static CompareVersions($a: string, $b: string): number;
        }
        namespace RootCarts {
            class Cart {
                protected [__keep_incompatibility]: never;
                public Name: string;
                public Folder: string;
                public FullPath: string;
                public Version: string;
                public Entry: string;
                public Problem: string;
                public get Usable(): boolean;
                public get OjJson(): string;
                constructor();
            }

            enum Outcome {
                Found = 0,
                Missing = 1,
                Duplicate = 2
            }

            class Resolution {
                protected [__keep_incompatibility]: never;
                public readonly Outcome: OneJS.RootCarts.Outcome;
                public readonly Cart: OneJS.RootCarts.Cart;
                public readonly Matches: System.Collections.Generic.IReadOnlyList$1<OneJS.RootCarts.Cart>;
                public readonly RenamedTo: OneJS.RootCarts.Cart;
                public readonly Name: string;
                public get Problem(): string;
                constructor($name: string, $outcome: OneJS.RootCarts.Outcome, $cart: OneJS.RootCarts.Cart, $matches: System.Collections.Generic.IReadOnlyList$1<OneJS.RootCarts.Cart>, $renamedTo: OneJS.RootCarts.Cart);
            }

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

            class CartRunners {
                protected [__keep_incompatibility]: never;
                public static IsBusy($cart: OneJS.RootCarts.Cart): boolean;
                public static AwaitsCleanup($cart: OneJS.RootCarts.Cart): boolean;
                public static NeedsSetUp($cart: OneJS.RootCarts.Cart): boolean;
                public static BuildArguments($outDir: string, $watch: boolean, $production: boolean): string;
                public static EnsureWatcher($cart: OneJS.RootCarts.Cart): boolean;
                public static SetUp($cart: OneJS.RootCarts.Cart, $onDone?: System.Action$1<boolean>): void;
                public static SetUpMoved($cart: OneJS.RootCarts.Cart, $onDone?: System.Action$1<boolean>): void;
                public static SetUpProblem($cart: OneJS.RootCarts.Cart): string;
                public static BuildOnce($cart: OneJS.RootCarts.Cart, $onDone?: System.Action$1<boolean>): void;
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

            class MoveToProjectRoot {
                protected [__keep_incompatibility]: never;
                public static readonly Ojplay: string;
                public static PlanFor($runner: OneJS.JSRunner): OneJS.Editor.MoveToProjectRoot.Plan;
                public static Move($runner: OneJS.JSRunner, $onDone?: System.Action$1<boolean>): boolean;
            }
            namespace MoveToProjectRoot {
                class Plan {
                    protected [__keep_incompatibility]: never;
                    public Name: string;
                    public From: string;
                    public To: string;
                    public Folder: string;
                    public AssetFolder: string;
                    public Problem: string;
                    public get Shown(): string;
                    constructor();
                }

            }

            class NodeWatcherManager {
                protected [__keep_incompatibility]: never;
                public static IsRunning($workingDir: string): boolean;
                public static IsStarting($workingDir: string): boolean;
                public static GetOutput($workingDir: string): string;
                public static TryReattach($workingDir: string): boolean;
                public static StartWatcher($workingDir: string): boolean;
                public static StartWatcher($workingDir: string, $npmArguments: string): boolean;
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
                    public static readonly KeepUIDocument: string;
                    public static readonly TabCart: string;
                    public static readonly Cart: string;
                    public static readonly CartsAtRoot: string;
                    public static readonly NoCart: string;
                    public static readonly TwoCarts: string;
                    public static readonly NotSetUp: string;
                    public static readonly NoPanelSettings: string;
                    public static readonly SetUp: string;
                    public static readonly SettingUp: string;
                    public static readonly CreatePanelSettings: string;
                    public static readonly CartWatcherCommand: string;
                    public static readonly PickCartOrInitialize: string;
                    public static readonly CartPanelSettingsNote: string;
                    public static readonly CartBuildNote: string;
                    public static readonly CartBuildEditor: string;
                    public static readonly CartBuildPlayer: string;
                    public static readonly CartBuildFiles: string;
                    public static readonly MoveToProjectRoot: string;
                    public static readonly Moving: string;
                    public static readonly MoveOffer: string;
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
                public static readonly LegacyRecordedManifests: System.Array$1<string>;
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
                public static MigrateRecorded($to: string, $from: System.Array$1<string>): boolean;
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
                    public static IsTestAssembly($assembly: System.Reflection.Assembly): boolean;
                    public static GetAssemblies($namePattern: string, $includeTestAssemblies?: boolean): System.Collections.Generic.IEnumerable$1<System.Reflection.Assembly>;
                    public static GetTypesFromAssembly($assemblyPattern: string, $includeTestAssemblies?: boolean): System.Collections.Generic.IEnumerable$1<System.Type>;
                    public static GetTypesFromNamespace($namespaceName: string, $includeTestAssemblies?: boolean): System.Collections.Generic.IEnumerable$1<System.Type>;
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
                    public AddAssemblyByName($assemblyNamePattern: string, $includeTestAssemblies?: boolean): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddAssembly($assembly: System.Reflection.Assembly): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddAssembliesWhere($predicate: System.Func$2<System.Reflection.Assembly, boolean>): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
                    public AddNamespace($namespaceName: string, $includeTestAssemblies?: boolean): OneJS.Editor.TypeGenerator.TypeGeneratorBuilder;
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
                public static GetKeysPressed(): string;
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
                public static get LivePassCount(): number;
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
                public get AcceptsPasses(): boolean;
                public get WantsWebSource(): boolean;
                public get IsCompiled(): boolean;
                public Pixelated: boolean;
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
                public SetProgramPass($slot: number, $pass: OneJS.ShaderFX.ShaderPass): boolean;
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

            class ShaderPass implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get AcceptsCompiledPrograms(): boolean;
                public get AcceptsSteppedPrograms(): boolean;
                public get AcceptsPasses(): boolean;
                public get WantsWebSource(): boolean;
                public get IsCompiled(): boolean;
                public Scale: number;
                public get Frame(): number;
                public get IsReady(): boolean;
                public get RenderWidth(): number;
                public get RenderHeight(): number;
                public get Output(): UnityEngine.Texture;
                constructor();
                public SetShader($shaderName: string): void;
                public SetProgram($dataObj: any, $instructionCount: number, $resultRegister: number, $hash: string, $uniformNamesObj?: any, $wire?: number): boolean;
                public RecordProgram($hash: string, $hlsl: string): void;
                public SetProgramWeb($wgsl: string, $glsl: string): void;
                public SetCompiled($allowed: boolean): void;
                public SetUniform($slot: number, $x: number, $y: number, $z: number, $w: number): void;
                public SetProgramTexture($slot: number, $tex: UnityEngine.Texture): void;
                public SetProgramBuiltinTexture($slot: number, $builtin: string): void;
                public SetProgramPass($slot: number, $pass: OneJS.ShaderFX.ShaderPass): boolean;
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

        }
    }
    namespace OneJS {
        namespace SL {
            class SLProgramBridge {
                protected [__keep_incompatibility]: never;
                public static readonly MaxUniforms: number;
                public static readonly MaxTextures: number;
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
}
