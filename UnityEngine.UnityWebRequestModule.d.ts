declare namespace CS {
    namespace UnityEngine {
        class WWWForm {
            protected [__keep_incompatibility]: never;
            public get headers(): System.Collections.Generic.Dictionary$2<string, string>;
            public get data(): System.Array$1<number>;
            constructor();
            public AddField($fieldName: string, $value: string): void;
            public AddField($fieldName: string, $value: string, $e: System.Text.Encoding): void;
            public AddField($fieldName: string, $i: number): void;
            public AddBinaryData($fieldName: string, $contents: System.Array$1<number>): void;
            public AddBinaryData($fieldName: string, $contents: System.Array$1<number>, $fileName: string): void;
            public AddBinaryData($fieldName: string, $contents: System.Array$1<number>, $fileName: string, $mimeType: string): void;
        }

    }
    namespace UnityEngine {
        namespace Networking {
            class CertificateHandler implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public Dispose(): void;
            }

            class DownloadHandler implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get isDone(): boolean;
                public get error(): string;
                public get nativeData(): Unity.Collections.NativeArray$1.ReadOnly$1<number>;
                public get data(): System.Array$1<number>;
                public get text(): string;
                public Dispose(): void;
            }

            class DownloadHandlerBuffer extends UnityEngine.Networking.DownloadHandler {
                protected [__keep_incompatibility]: never;
                constructor();
                public Dispose(): void;
                public static GetContent($www: UnityEngine.Networking.UnityWebRequest): string;
            }

            class DownloadHandlerScript extends UnityEngine.Networking.DownloadHandler {
                protected [__keep_incompatibility]: never;
                constructor();
                constructor($preallocatedBuffer: System.Array$1<number>);
            }

            class DownloadHandlerFile extends UnityEngine.Networking.DownloadHandler {
                protected [__keep_incompatibility]: never;
                public removeFileOnAbort: boolean;
                constructor($path: string);
                constructor($path: string, $append: boolean);
            }

            interface IMultipartFormSection {
                get sectionName(): string;
                get sectionData(): System.Array$1<number>;
                get fileName(): string;
                get contentType(): string;
            }

            class MultipartFormDataSection implements UnityEngine.Networking.IMultipartFormSection {
                protected [__keep_incompatibility]: never;
                public get sectionName(): string;
                public get sectionData(): System.Array$1<number>;
                public get fileName(): string;
                public get contentType(): string;
                constructor($name: string, $data: System.Array$1<number>, $contentType: string);
                constructor($name: string, $data: System.Array$1<number>);
                constructor($data: System.Array$1<number>);
                constructor($name: string, $data: string, $encoding: System.Text.Encoding, $contentType: string);
                constructor($name: string, $data: string, $contentType: string);
                constructor($name: string, $data: string);
                constructor($data: string);
            }

            class MultipartFormFileSection implements UnityEngine.Networking.IMultipartFormSection {
                protected [__keep_incompatibility]: never;
                public get sectionName(): string;
                public get sectionData(): System.Array$1<number>;
                public get fileName(): string;
                public get contentType(): string;
                constructor($name: string, $data: System.Array$1<number>, $fileName: string, $contentType: string);
                constructor($data: System.Array$1<number>);
                constructor($fileName: string, $data: System.Array$1<number>);
                constructor($name: string, $data: string, $dataEncoding: System.Text.Encoding, $fileName: string);
                constructor($data: string, $dataEncoding: System.Text.Encoding, $fileName: string);
                constructor($data: string, $fileName: string);
            }

            class UnityWebRequestAsyncOperation extends UnityEngine.AsyncOperation {
                protected [__keep_incompatibility]: never;
                public get webRequest(): UnityEngine.Networking.UnityWebRequest;
                constructor();
            }

            class UnityWebRequest implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public static readonly kHttpVerbGET: string;
                public static readonly kHttpVerbHEAD: string;
                public static readonly kHttpVerbPOST: string;
                public static readonly kHttpVerbPUT: string;
                public static readonly kHttpVerbCREATE: string;
                public static readonly kHttpVerbDELETE: string;
                public disposeCertificateHandlerOnDispose: boolean;
                public disposeDownloadHandlerOnDispose: boolean;
                public disposeUploadHandlerOnDispose: boolean;
                public method: string;
                public get error(): string;
                public useHttpContinue: boolean;
                public url: string;
                public uri: System.Uri;
                public get responseCode(): bigint;
                public get uploadProgress(): number;
                public get isModifiable(): boolean;
                public get isDone(): boolean;
                public get isNetworkError(): boolean;
                public get isHttpError(): boolean;
                public get result(): UnityEngine.Networking.UnityWebRequest.Result;
                public get downloadProgress(): number;
                public get uploadedBytes(): bigint;
                public get downloadedBytes(): bigint;
                public redirectLimit: number;
                public chunkedTransfer: boolean;
                public uploadHandler: UnityEngine.Networking.UploadHandler;
                public downloadHandler: UnityEngine.Networking.DownloadHandler;
                public certificateHandler: UnityEngine.Networking.CertificateHandler;
                public timeout: number;
                public get isError(): boolean;
                constructor();
                constructor($url: string);
                constructor($uri: System.Uri);
                constructor($url: string, $method: string);
                constructor($uri: System.Uri, $method: string);
                constructor($url: string, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler);
                constructor($uri: System.Uri, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler);
                public static ClearCookieCache(): void;
                public static ClearCookieCache($uri: System.Uri): void;
                public Dispose(): void;
                public Send(): UnityEngine.AsyncOperation;
                public SendWebRequest(): UnityEngine.Networking.UnityWebRequestAsyncOperation;
                public Abort(): void;
                public GetRequestHeader($name: string): string;
                public SetRequestHeader($name: string, $value: string): void;
                public GetResponseHeader($name: string): string;
                public GetResponseHeaders(): System.Collections.Generic.Dictionary$2<string, string>;
                public static Get($uri: string): UnityEngine.Networking.UnityWebRequest;
                public static Get($uri: System.Uri): UnityEngine.Networking.UnityWebRequest;
                public static Delete($uri: string): UnityEngine.Networking.UnityWebRequest;
                public static Delete($uri: System.Uri): UnityEngine.Networking.UnityWebRequest;
                public static Head($uri: string): UnityEngine.Networking.UnityWebRequest;
                public static Head($uri: System.Uri): UnityEngine.Networking.UnityWebRequest;
                public static Put($uri: string, $bodyData: System.Array$1<number>): UnityEngine.Networking.UnityWebRequest;
                public static Put($uri: System.Uri, $bodyData: System.Array$1<number>): UnityEngine.Networking.UnityWebRequest;
                public static Put($uri: string, $bodyData: string): UnityEngine.Networking.UnityWebRequest;
                public static Put($uri: System.Uri, $bodyData: string): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: string, $postData: string): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: System.Uri, $postData: string): UnityEngine.Networking.UnityWebRequest;
                public static PostWwwForm($uri: string, $form: string): UnityEngine.Networking.UnityWebRequest;
                public static PostWwwForm($uri: System.Uri, $form: string): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: string, $postData: string, $contentType: string): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: System.Uri, $postData: string, $contentType: string): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: string, $formData: UnityEngine.WWWForm): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: System.Uri, $formData: UnityEngine.WWWForm): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: string, $formFields: System.Collections.Generic.Dictionary$2<string, string>): UnityEngine.Networking.UnityWebRequest;
                public static Post($uri: System.Uri, $formFields: System.Collections.Generic.Dictionary$2<string, string>): UnityEngine.Networking.UnityWebRequest;
                public static EscapeURL($s: string): string;
                public static EscapeURL($s: string, $e: System.Text.Encoding): string;
                public static UnEscapeURL($s: string): string;
                public static UnEscapeURL($s: string, $e: System.Text.Encoding): string;
                public static SerializeFormSections($multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>): System.Array$1<number>;
                public static GenerateBoundary(): System.Array$1<number>;
                public static SerializeSimpleForm($formFields: System.Collections.Generic.Dictionary$2<string, string>): System.Array$1<number>;
            }
            namespace UnityWebRequest {
                enum Result {
                    InProgress = 0,
                    Success = 1,
                    ConnectionError = 2,
                    ProtocolError = 3,
                    DataProcessingError = 4
                }

            }

            class UploadHandler implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get data(): System.Array$1<number>;
                public contentType: string;
                public get progress(): number;
                public Dispose(): void;
            }

            class UploadHandlerRaw extends UnityEngine.Networking.UploadHandler {
                protected [__keep_incompatibility]: never;
                constructor($data: System.Array$1<number>);
                constructor($data: Unity.Collections.NativeArray$1<number>, $transferOwnership: boolean);
                constructor($data: Unity.Collections.NativeArray$1.ReadOnly$1<number>);
                public Dispose(): void;
            }

            class UploadHandlerFile extends UnityEngine.Networking.UploadHandler {
                protected [__keep_incompatibility]: never;
                constructor($filePath: string);
            }

        }
    }
}
