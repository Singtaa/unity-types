// System namespace types for Unity/C# interop
// These are .NET Base Class Library types commonly used in Unity APIs

declare namespace CS {
    namespace System {
        // Base types
        class Object {
            public Equals($obj: any): boolean;
            public GetHashCode(): number;
            public GetType(): System.Type;
            public ToString(): string;
        }

        class Type {
            public get Name(): string;
            public get FullName(): string;
            public get Namespace(): string;
            public get Assembly(): System.Reflection.Assembly;
            public get BaseType(): System.Type;
            public get IsClass(): boolean;
            public get IsInterface(): boolean;
            public get IsValueType(): boolean;
            public get IsEnum(): boolean;
            public get IsArray(): boolean;
            public get IsGenericType(): boolean;
            public static GetType($typeName: string): System.Type;
        }

        class Attribute {}
        class Exception {
            public get Message(): string;
            public get StackTrace(): string;
            public get InnerException(): System.Exception;
        }
        class SystemException extends Exception {}

        // Value types
        class ValueType extends Object {}
        class Enum extends ValueType {}

        // Interfaces
        interface IDisposable {
            Dispose(): void;
        }
        interface ICloneable {
            Clone(): any;
        }
        interface IComparable {
            CompareTo($obj: any): number;
        }
        interface IComparable$1<T> {
            CompareTo($other: T): number;
        }
        interface IEquatable$1<T> {
            Equals($other: T): boolean;
        }
        interface IConvertible {}
        interface IFormattable {
            ToString($format: string, $formatProvider: System.IFormatProvider): string;
        }
        interface IFormatProvider {
            GetFormat($formatType: System.Type): any;
        }

        // Arrays
        class Array {
            public get Length(): number;
            public get Rank(): number;
            public GetLength($dimension: number): number;
            public GetValue($index: number): any;
            public SetValue($value: any, $index: number): void;
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: number): void;
            public static Clear($array: System.Array, $index: number, $length: number): void;
            public static IndexOf($array: System.Array, $value: any): number;
            public static Reverse($array: System.Array): void;
            public static Sort($array: System.Array): void;
        }

        // Generic array (T[])
        interface Array$1<T> {
            readonly length: number;
            [index: number]: T;
            get_Item($index: number): T;
            set_Item($index: number, $value: T): void;
        }

        // Spans (minimal, as they're not fully usable in JS)
        interface Span$1<T> {
            readonly Length: number;
        }
        interface ReadOnlySpan$1<T> {
            readonly Length: number;
        }

        // Delegates / Function types
        interface Action {
            (): void;
            Invoke(): void;
        }
        interface Action$1<T> {
            ($arg: T): void;
            Invoke($arg: T): void;
        }
        interface Action$2<T1, T2> {
            ($arg1: T1, $arg2: T2): void;
            Invoke($arg1: T1, $arg2: T2): void;
        }
        interface Action$3<T1, T2, T3> {
            ($arg1: T1, $arg2: T2, $arg3: T3): void;
            Invoke($arg1: T1, $arg2: T2, $arg3: T3): void;
        }
        interface Action$4<T1, T2, T3, T4> {
            ($arg1: T1, $arg2: T2, $arg3: T3, $arg4: T4): void;
            Invoke($arg1: T1, $arg2: T2, $arg3: T3, $arg4: T4): void;
        }

        interface Func$1<TResult> {
            (): TResult;
            Invoke(): TResult;
        }
        interface Func$2<T, TResult> {
            ($arg: T): TResult;
            Invoke($arg: T): TResult;
        }
        interface Func$3<T1, T2, TResult> {
            ($arg1: T1, $arg2: T2): TResult;
            Invoke($arg1: T1, $arg2: T2): TResult;
        }
        interface Func$4<T1, T2, T3, TResult> {
            ($arg1: T1, $arg2: T2, $arg3: T3): TResult;
            Invoke($arg1: T1, $arg2: T2, $arg3: T3): TResult;
        }

        interface Predicate$1<T> {
            ($obj: T): boolean;
            Invoke($obj: T): boolean;
        }

        interface Comparison$1<T> {
            ($x: T, $y: T): number;
            Invoke($x: T, $y: T): number;
        }

        // Tuples
        class ValueTuple$2<T1, T2> {
            public Item1: T1;
            public Item2: T2;
        }
        class ValueTuple$3<T1, T2, T3> {
            public Item1: T1;
            public Item2: T2;
            public Item3: T3;
        }
        class ValueTuple$4<T1, T2, T3, T4> {
            public Item1: T1;
            public Item2: T2;
            public Item3: T3;
            public Item4: T4;
        }

        // Date/Time
        class DateTime {
            public static get Now(): System.DateTime;
            public static get UtcNow(): System.DateTime;
            public static get Today(): System.DateTime;
            public get Year(): number;
            public get Month(): number;
            public get Day(): number;
            public get Hour(): number;
            public get Minute(): number;
            public get Second(): number;
            public get Millisecond(): number;
            public get Ticks(): bigint;
            public get DayOfWeek(): number;
            public get DayOfYear(): number;
            public AddDays($value: number): System.DateTime;
            public AddHours($value: number): System.DateTime;
            public AddMinutes($value: number): System.DateTime;
            public AddSeconds($value: number): System.DateTime;
            public AddMilliseconds($value: number): System.DateTime;
            public ToString(): string;
            public ToString($format: string): string;
        }

        class TimeSpan {
            public static get Zero(): System.TimeSpan;
            public get Days(): number;
            public get Hours(): number;
            public get Minutes(): number;
            public get Seconds(): number;
            public get Milliseconds(): number;
            public get Ticks(): bigint;
            public get TotalDays(): number;
            public get TotalHours(): number;
            public get TotalMinutes(): number;
            public get TotalSeconds(): number;
            public get TotalMilliseconds(): number;
            public static FromDays($value: number): System.TimeSpan;
            public static FromHours($value: number): System.TimeSpan;
            public static FromMinutes($value: number): System.TimeSpan;
            public static FromSeconds($value: number): System.TimeSpan;
            public static FromMilliseconds($value: number): System.TimeSpan;
        }

        class Guid {
            public static Empty: System.Guid;
            public static NewGuid(): System.Guid;
            public static Parse($input: string): System.Guid;
            public ToString(): string;
            public ToString($format: string): string;
        }

        // Nullable
        class Nullable$1<T> {
            public get HasValue(): boolean;
            public get Value(): T;
            public GetValueOrDefault(): T;
            public GetValueOrDefault($defaultValue: T): T;
        }

        // Collections
        namespace Collections {
            interface IEnumerable {
                GetEnumerator(): System.Collections.IEnumerator;
            }
            interface IEnumerator {
                get Current(): any;
                MoveNext(): boolean;
                Reset(): void;
            }
            interface ICollection extends IEnumerable {
                get Count(): number;
            }
            interface IList extends ICollection {
                get_Item($index: number): any;
                set_Item($index: number, $value: any): void;
                Add($value: any): number;
                Clear(): void;
                Contains($value: any): boolean;
                IndexOf($value: any): number;
                Insert($index: number, $value: any): void;
                Remove($value: any): void;
                RemoveAt($index: number): void;
            }

            namespace Generic {
                interface IEnumerable$1<T> {
                    GetEnumerator(): System.Collections.Generic.IEnumerator$1<T>;
                }
                interface IEnumerator$1<T> {
                    get Current(): T;
                    MoveNext(): boolean;
                }
                interface ICollection$1<T> extends IEnumerable$1<T> {
                    get Count(): number;
                    get IsReadOnly(): boolean;
                    Add($item: T): void;
                    Clear(): void;
                    Contains($item: T): boolean;
                    CopyTo($array: System.Array$1<T>, $arrayIndex: number): void;
                    Remove($item: T): boolean;
                }
                interface IList$1<T> extends ICollection$1<T> {
                    get_Item($index: number): T;
                    set_Item($index: number, $value: T): void;
                    IndexOf($item: T): number;
                    Insert($index: number, $item: T): void;
                    RemoveAt($index: number): void;
                }
                interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {
                    get Count(): number;
                }
                interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {
                    get_Item($index: number): T;
                }
                interface IDictionary$2<TKey, TValue> extends ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>> {
                    get Keys(): System.Collections.Generic.ICollection$1<TKey>;
                    get Values(): System.Collections.Generic.ICollection$1<TValue>;
                    get_Item($key: TKey): TValue;
                    set_Item($key: TKey, $value: TValue): void;
                    ContainsKey($key: TKey): boolean;
                    Add($key: TKey, $value: TValue): void;
                    Remove($key: TKey): boolean;
                    TryGetValue($key: TKey, $value: $Out<TValue>): boolean;
                }

                class KeyValuePair$2<TKey, TValue> {
                    public get Key(): TKey;
                    public get Value(): TValue;
                }

                class List$1<T> implements IList$1<T> {
                    public get Count(): number;
                    public get IsReadOnly(): boolean;
                    public get Capacity(): number;
                    constructor();
                    constructor($capacity: number);
                    constructor($collection: System.Collections.Generic.IEnumerable$1<T>);
                    public get_Item($index: number): T;
                    public set_Item($index: number, $value: T): void;
                    public Add($item: T): void;
                    public AddRange($collection: System.Collections.Generic.IEnumerable$1<T>): void;
                    public Clear(): void;
                    public Contains($item: T): boolean;
                    public CopyTo($array: System.Array$1<T>, $arrayIndex: number): void;
                    public Find($match: System.Predicate$1<T>): T;
                    public FindAll($match: System.Predicate$1<T>): System.Collections.Generic.List$1<T>;
                    public FindIndex($match: System.Predicate$1<T>): number;
                    public ForEach($action: System.Action$1<T>): void;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<T>;
                    public IndexOf($item: T): number;
                    public Insert($index: number, $item: T): void;
                    public Remove($item: T): boolean;
                    public RemoveAll($match: System.Predicate$1<T>): number;
                    public RemoveAt($index: number): void;
                    public Reverse(): void;
                    public Sort(): void;
                    public Sort($comparison: System.Comparison$1<T>): void;
                    public ToArray(): System.Array$1<T>;
                }

                class Dictionary$2<TKey, TValue> implements IDictionary$2<TKey, TValue> {
                    public get Count(): number;
                    public get IsReadOnly(): boolean;
                    public get Keys(): System.Collections.Generic.ICollection$1<TKey>;
                    public get Values(): System.Collections.Generic.ICollection$1<TValue>;
                    constructor();
                    constructor($capacity: number);
                    public get_Item($key: TKey): TValue;
                    public set_Item($key: TKey, $value: TValue): void;
                    public Add($key: TKey, $value: TValue): void;
                    public Clear(): void;
                    public ContainsKey($key: TKey): boolean;
                    public ContainsValue($value: TValue): boolean;
                    public Remove($key: TKey): boolean;
                    public TryGetValue($key: TKey, $value: $Out<TValue>): boolean;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>;
                }

                class HashSet$1<T> implements ICollection$1<T> {
                    public get Count(): number;
                    public get IsReadOnly(): boolean;
                    constructor();
                    public Add($item: T): boolean;
                    public Clear(): void;
                    public Contains($item: T): boolean;
                    public CopyTo($array: System.Array$1<T>, $arrayIndex: number): void;
                    public Remove($item: T): boolean;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<T>;
                    public UnionWith($other: System.Collections.Generic.IEnumerable$1<T>): void;
                    public IntersectWith($other: System.Collections.Generic.IEnumerable$1<T>): void;
                    public ExceptWith($other: System.Collections.Generic.IEnumerable$1<T>): void;
                }

                class Queue$1<T> implements IEnumerable$1<T> {
                    public get Count(): number;
                    constructor();
                    constructor($capacity: number);
                    public Enqueue($item: T): void;
                    public Dequeue(): T;
                    public Peek(): T;
                    public Clear(): void;
                    public Contains($item: T): boolean;
                    public ToArray(): System.Array$1<T>;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<T>;
                }

                class Stack$1<T> implements IEnumerable$1<T> {
                    public get Count(): number;
                    constructor();
                    constructor($capacity: number);
                    public Push($item: T): void;
                    public Pop(): T;
                    public Peek(): T;
                    public Clear(): void;
                    public Contains($item: T): boolean;
                    public ToArray(): System.Array$1<T>;
                    public GetEnumerator(): System.Collections.Generic.IEnumerator$1<T>;
                }
            }
        }

        // Reflection
        namespace Reflection {
            class Assembly {
                public get FullName(): string;
                public get Location(): string;
                public GetName(): System.Reflection.AssemblyName;
                public GetTypes(): System.Array$1<System.Type>;
                public GetType($name: string): System.Type;
                public static GetExecutingAssembly(): System.Reflection.Assembly;
            }
            class AssemblyName {
                public get Name(): string;
                public get Version(): System.Version;
            }
            class MemberInfo {
                public get Name(): string;
                public get DeclaringType(): System.Type;
                public get MemberType(): number;
            }
            class MethodInfo extends MemberInfo {
                public get ReturnType(): System.Type;
                public GetParameters(): System.Array$1<System.Reflection.ParameterInfo>;
            }
            class ParameterInfo {
                public get Name(): string;
                public get ParameterType(): System.Type;
            }
            class PropertyInfo extends MemberInfo {
                public get PropertyType(): System.Type;
                public get CanRead(): boolean;
                public get CanWrite(): boolean;
            }
            class FieldInfo extends MemberInfo {
                public get FieldType(): System.Type;
                public get IsStatic(): boolean;
            }
        }

        class Version {
            public get Major(): number;
            public get Minor(): number;
            public get Build(): number;
            public get Revision(): number;
            public ToString(): string;
        }

        // Threading
        namespace Threading {
            class CancellationToken {
                public static get None(): System.Threading.CancellationToken;
                public get IsCancellationRequested(): boolean;
                public get CanBeCanceled(): boolean;
                public ThrowIfCancellationRequested(): void;
            }
            class CancellationTokenSource implements IDisposable {
                public get Token(): System.Threading.CancellationToken;
                public get IsCancellationRequested(): boolean;
                constructor();
                constructor($millisecondsDelay: number);
                public Cancel(): void;
                public Cancel($throwOnFirstException: boolean): void;
                public CancelAfter($millisecondsDelay: number): void;
                public Dispose(): void;
            }
            namespace Tasks {
                class Task {
                    public get IsCompleted(): boolean;
                    public get IsCanceled(): boolean;
                    public get IsFaulted(): boolean;
                    public get Status(): number;
                    public static get CompletedTask(): System.Threading.Tasks.Task;
                    public static Delay($millisecondsDelay: number): System.Threading.Tasks.Task;
                    public static FromResult<T>($result: T): System.Threading.Tasks.Task$1<T>;
                }
                class Task$1<TResult> extends Task {
                    public get Result(): TResult;
                }
            }
        }

        // I/O
        namespace IO {
            class Stream implements IDisposable {
                public get CanRead(): boolean;
                public get CanWrite(): boolean;
                public get CanSeek(): boolean;
                public get Length(): bigint;
                public get Position(): bigint;
                public Read($buffer: System.Array$1<number>, $offset: number, $count: number): number;
                public Write($buffer: System.Array$1<number>, $offset: number, $count: number): void;
                public Flush(): void;
                public Close(): void;
                public Dispose(): void;
            }
            class MemoryStream extends Stream {
                constructor();
                constructor($buffer: System.Array$1<number>);
                public ToArray(): System.Array$1<number>;
            }
            class FileStream extends Stream {
                constructor($path: string, $mode: number);
            }
            class StreamReader implements IDisposable {
                constructor($stream: System.IO.Stream);
                constructor($path: string);
                public ReadLine(): string;
                public ReadToEnd(): string;
                public Close(): void;
                public Dispose(): void;
            }
            class StreamWriter implements IDisposable {
                constructor($stream: System.IO.Stream);
                constructor($path: string);
                public Write($value: string): void;
                public WriteLine($value: string): void;
                public Flush(): void;
                public Close(): void;
                public Dispose(): void;
            }
            class File {
                public static Exists($path: string): boolean;
                public static ReadAllText($path: string): string;
                public static ReadAllBytes($path: string): System.Array$1<number>;
                public static WriteAllText($path: string, $contents: string): void;
                public static WriteAllBytes($path: string, $bytes: System.Array$1<number>): void;
                public static Delete($path: string): void;
                public static Copy($sourceFileName: string, $destFileName: string): void;
                public static Move($sourceFileName: string, $destFileName: string): void;
            }
            class Directory {
                public static Exists($path: string): boolean;
                public static CreateDirectory($path: string): System.IO.DirectoryInfo;
                public static Delete($path: string): void;
                public static Delete($path: string, $recursive: boolean): void;
                public static GetFiles($path: string): System.Array$1<string>;
                public static GetDirectories($path: string): System.Array$1<string>;
            }
            class DirectoryInfo {
                public get Name(): string;
                public get FullName(): string;
                public get Exists(): boolean;
            }
            class Path {
                public static Combine($path1: string, $path2: string): string;
                public static GetFileName($path: string): string;
                public static GetDirectoryName($path: string): string;
                public static GetExtension($path: string): string;
                public static GetFileNameWithoutExtension($path: string): string;
                public static ChangeExtension($path: string, $extension: string): string;
            }
        }

        // Text
        namespace Text {
            class StringBuilder {
                public get Length(): number;
                constructor();
                constructor($value: string);
                constructor($capacity: number);
                public Append($value: string): System.Text.StringBuilder;
                public Append($value: number): System.Text.StringBuilder;
                public AppendLine(): System.Text.StringBuilder;
                public AppendLine($value: string): System.Text.StringBuilder;
                public Clear(): System.Text.StringBuilder;
                public Insert($index: number, $value: string): System.Text.StringBuilder;
                public Remove($startIndex: number, $length: number): System.Text.StringBuilder;
                public Replace($oldValue: string, $newValue: string): System.Text.StringBuilder;
                public ToString(): string;
            }
            class Encoding {
                public static get UTF8(): System.Text.Encoding;
                public static get ASCII(): System.Text.Encoding;
                public static get Unicode(): System.Text.Encoding;
                public GetBytes($s: string): System.Array$1<number>;
                public GetString($bytes: System.Array$1<number>): string;
            }
        }

        // Runtime.CompilerServices
        namespace Runtime {
            namespace CompilerServices {
                class ExtensionAttribute extends Attribute {}
            }
        }
    }
}
