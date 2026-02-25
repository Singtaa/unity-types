declare namespace CS {
    const __keep_incompatibility: symbol;

    class QuickJSNative {
        protected [__keep_incompatibility]: never;
        public static DebugFastPath: boolean;
        public static get ZeroAllocBindingCount(): number;
        public static RegisterObject($obj: any): number;
        public static GetHandleForObject($obj: any): number;
        public static GetHandleCount(): number;
        public static ClearAllHandles(): void;
        public static GetPeakHandleCount(): number;
        public static ResetHandleMonitoring(): void;
        public static RegisterStructType<T>(): void;
        public static RegisterStructType($type: System.TypeLike): void;
        public static RegisterStructType<T>($serializer: System.Func$2<T, string>, $deserializer: System.Func$2<System.Collections.Generic.Dictionary$2<string, any>, T>): void;
        public static IsSerializableStruct($type: System.TypeLike): boolean;
        public static SerializeStruct($value: any): string;
        public static DeserializeStruct($json: string, $targetType: System.TypeLike): any;
        public static DeserializeFromDict($dict: System.Collections.Generic.Dictionary$2<string, any>, $targetType: System.TypeLike): any;
        public static RegisterTask($task: System.Threading.Tasks.Task): number;
        public static IsTaskType($type: System.TypeLike): boolean;
        public static ProcessCompletedTasks($ctx: QuickJSContext): number;
        public static ClearPendingTasks(): void;
        public static GetPendingTaskCount(): number;
        public static GetPeakTaskQueueSize(): number;
        public static ResetTaskQueueMonitoring(): void;
        public static RegisterZeroAllocBinding($handler: QuickJSNative.ZeroAllocHandler): number;
        public static UnregisterZeroAllocBinding($bindingId: number): boolean;
        public static RegisterZeroAllocMethodBinding($typeName: string, $methodName: string, $argCount: number): number;
        public static Bind($action: System.Action): number;
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
    }
    namespace QuickJSNative {
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
            TaskHandle = 12
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
            MakeGenericType = 8
        }

        class InteropValue {
            protected [__keep_incompatibility]: never;
            public type: QuickJSNative.InteropType;
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
            public callKind: QuickJSNative.InteropInvokeCallKind;
            public isStatic: number;
            public targetHandle: number;
            public argCount: number;
            public args: number;
        }

        class InteropInvokeResult {
            protected [__keep_incompatibility]: never;
            public returnValue: QuickJSNative.InteropValue;
            public errorCode: number;
            public errorMsg: number;
        }

        interface StructPacker<T> {
            ($value: $Ref<T>, $result: any): void;
            Invoke?: ($value: $Ref<T>, $result: any) => void;
        }

        interface StructUnpacker<T> {
            ($source: any, $value: $Out<T>): void;
            Invoke?: ($source: any, $value: $Out<T>) => void;
        }

        interface DictConverter<T> {
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
            public static StaticMethodByTypeName<TArg0, TArg1, TResult>($typeName: string, $methodName: string, $method: System.Func$3<TArg0, TArg1, TResult>): void;
            public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TResult>($typeName: string, $methodName: string, $method: System.Func$4<TArg0, TArg1, TArg2, TResult>): void;
            public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TArg3, TResult>($typeName: string, $methodName: string, $method: System.Func$5<TArg0, TArg1, TArg2, TArg3, TResult>): void;
            public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TArg3, TArg4, TResult>($typeName: string, $methodName: string, $method: System.Func$6<TArg0, TArg1, TArg2, TArg3, TArg4, TResult>): void;
            public static StaticMethodByTypeName<TArg0, TArg1, TArg2, TArg3, TArg4, TArg5, TResult>($typeName: string, $methodName: string, $method: System.Func$7<TArg0, TArg1, TArg2, TArg3, TArg4, TArg5, TResult>): void;
            public static Struct<T>($pack: QuickJSNative.StructPacker$1<T>, $unpack?: QuickJSNative.StructUnpacker$1<T>, $fromDict?: QuickJSNative.DictConverter$1<T>): void;
            public static BlittableStruct<T>(): void;
            public static HasStructHandler<T>(): boolean;
            public static HasStructHandler($type: System.TypeLike): boolean;
            public static Clear(): void;
        }

        interface ZeroAllocHandler {
            ($args: any, $argCount: number, $result: any): void;
            Invoke?: ($args: any, $argCount: number, $result: any) => void;
        }
        var ZeroAllocHandler: { new (func: ($args: any, $argCount: number, $result: any) => void): ZeroAllocHandler; };

    }

    class QuickJSContext implements System.IDisposable {
        protected [__keep_incompatibility]: never;
        public get NativePtr(): number;
        constructor($bufferSize?: number);
        public Eval($code: string, $filename?: string, $evalFlags?: number): string;
        public RunGC(): void;
        public ExecutePendingJobs(): number;
        public MaybeRunGC($threshold?: number): void;
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
    }

    class QuickJSUIBridge implements System.IDisposable {
        protected [__keep_incompatibility]: never;
        public get Context(): QuickJSContext;
        public get Root(): UnityEngine.UIElements.VisualElement;
        public get WorkingDir(): string;
        constructor($root: UnityEngine.UIElements.VisualElement, $workingDir?: string, $bufferSize?: number);
        public LoadStyleSheet($path: string): boolean;
        public CompileStyleSheet($ussContent: string, $name?: string): boolean;
        public Dispose(): void;
        public Eval($code: string, $filename?: string): string;
        public CacheTickCallback(): void;
        public Tick(): void;
    }

    class JSRunner extends UnityEngine.MonoBehaviour {
        protected [__keep_incompatibility]: never;
        public WorkingDir: string;
        public EntryFile: string;
        public get Bridge(): QuickJSUIBridge;
        public get IsRunning(): boolean;
        public get IsLiveReloadEnabled(): boolean;
        public get ReloadCount(): number;
        public get LastModifiedTime(): System.DateTime;
        public get ProjectRoot(): string;
        public get WorkingDirFullPath(): string;
        public get EntryFileFullPath(): string;
        public get TypingAssemblies(): System.Collections.Generic.IReadOnlyList$1<string>;
        public get AutoGenerateTypings(): boolean;
        public get TypingsOutputPath(): string;
        public get TypingsFullPath(): string;
        public get Cartridges(): System.Collections.Generic.IReadOnlyList$1<UICartridge>;
        constructor();
        public GetCartridgePath($cartridge: UICartridge): string;
        public ForceReload(): void;
        public PopulateDefaultFiles(): void;
    }

    class UICartridge extends UnityEngine.ScriptableObject {
        protected [__keep_incompatibility]: never;
        public get Slug(): string;
        public get DisplayName(): string;
        public get Description(): string;
        public get Files(): System.Collections.Generic.IReadOnlyList$1<CartridgeFileEntry>;
        public get Objects(): System.Collections.Generic.IReadOnlyList$1<CartridgeObjectEntry>;
        constructor();
    }

    namespace OneJS {
        class CartridgeTypeGenerator {
            protected [__keep_incompatibility]: never;
            public static Generate($cartridge: UICartridge): string;
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
                constructor();
                public Highlight($text: string): System.Array$1<UnityEngine.Color32>;
            }

            type UxmlSerializedData = any;

        }

        class Network {
            protected [__keep_incompatibility]: never;
            public static FetchAsync($url: string, $method: string, $body: string, $headersJson: string): $Task;
        }

    }
    namespace OneJS {
        namespace CustomStyleSheets {
            class StyleSheetBuilderWrapper {
                protected [__keep_incompatibility]: never;
                constructor();
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
                constructor($workingDir?: string);
                public Compile($asset: UnityEngine.UIElements.StyleSheet, $ussContent: string): void;
            }

        }
    }
    namespace OneJS {
        namespace Editor {
            class CodeFieldTestWindow extends UnityEditor.EditorWindow {
                protected [__keep_incompatibility]: never;
                constructor();
                public static ShowWindow(): void;
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
                    public EmitIncompatibilityMarker: boolean;
                    public UseAccessorSyntax: boolean;
                    public SkipHeader: boolean;
                    constructor();
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
                    public static GenerateTypingsFor($runner: JSRunner, $silent?: boolean): boolean;
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
                        public GeneratedContent_HasIncompatibilityMarker(): void;
                        public GeneratedContent_HasClassDeclaration(): void;
                        public GeneratedContent_HasStaticMembers(): void;
                        public GenerateToResult_WithNoTypes_ReturnsEmptyResult(): void;
                        public GenerateToResult_WithNullType_SkipsNull(): void;
                        public Builder_AddType_WithNull_DoesNotThrow(): void;
                        public Builder_DuplicateTypes_DeduplicatesAutomatically(): void;
                    }

                }
            }
        }
    }
    namespace OneJS {
        namespace GPU {
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

            class GPUBridge {
                protected [__keep_incompatibility]: never;
                public static get SupportsCompute(): boolean;
                public static get SupportsAsyncReadback(): boolean;
                public static get MaxComputeWorkGroupSizeX(): number;
                public static get MaxComputeWorkGroupSizeY(): number;
                public static get MaxComputeWorkGroupSizeZ(): number;
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
                public static BindBuffer($shaderHandle: number, $kernelIndex: number, $name: string, $bufferHandle: number): void;
                public static Dispatch($shaderHandle: number, $kernelIndex: number, $groupsX: number, $groupsY: number, $groupsZ: number): void;
                public static CreateRenderTexture($width: number, $height: number, $enableRandomWrite?: boolean): number;
                public static ResizeRenderTexture($handle: number, $width: number, $height: number): boolean;
                public static DisposeRenderTexture($handle: number): void;
                public static GetRenderTextureObject($handle: number): UnityEngine.RenderTexture;
                public static GetRenderTextureAsBackground($handle: number): UnityEngine.UIElements.StyleBackground | null;
                public static SetElementBackgroundImage($element: UnityEngine.UIElements.VisualElement, $rtHandle: number): void;
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
            class InputBridge {
                protected [__keep_incompatibility]: never;
                public static GetKeyDown($keyName: string): boolean;
                public static GetKeyPressed($keyName: string): boolean;
                public static GetKeyReleased($keyName: string): boolean;
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
                public static CreateActionMap($name: string): number;
                public static AddButtonAction($mapHandle: number, $name: string): number;
                public static AddValueAction($mapHandle: number, $name: string): number;
                public static AddBinding($actionHandle: number, $path: string): void;
                public static EnableDynamicMap($mapHandle: number): void;
                public static DisableDynamicMap($mapHandle: number): void;
                public static DisposeDynamicMap($mapHandle: number): void;
            }

        }
    }
    namespace OneJSContainer {
        namespace Editor {
            class EditorUpdateBackgroundTest {
                protected [__keep_incompatibility]: never;
            }

            class UnityTypesGenerator {
                protected [__keep_incompatibility]: never;
                public static GenerateAll(): void;
                public static GenerateForAssembly($assemblyName: string): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
                public static GenerateForOneJS(): OneJS.Editor.TypeGenerator.TypeGeneratorResult;
            }

        }
    }
}
