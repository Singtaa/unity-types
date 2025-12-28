declare namespace CS {
    namespace UnityEngine {
        class AudioSettings {
            protected [__keep_incompatibility]: never;
            public static get driverCapabilities(): UnityEngine.AudioSpeakerMode;
            public static speakerMode: UnityEngine.AudioSpeakerMode;
            public static get dspTime(): number;
            public static outputSampleRate: number;
            public static audioSpatialExperience: UnityEngine.AudioSpatialExperience;
            constructor();
            public static GetDSPBufferSize($bufferLength: $Out<number>, $numBuffers: $Out<number>): void;
            public static SetDSPBufferSize($bufferLength: number, $numBuffers: number): void;
            public static GetSpatializerPluginNames(): System.Array$1<string>;
            public static GetSpatializerPluginName(): string;
            public static SetSpatializerPluginName($pluginName: string): void;
            public static GetConfiguration(): UnityEngine.AudioConfiguration;
            public static Reset($config: UnityEngine.AudioConfiguration): boolean;
            public static add_OnAudioConfigurationChanged(handler: UnityEngine.AudioSettings.AudioConfigurationChangeHandler): void;
            public static remove_OnAudioConfigurationChanged(handler: UnityEngine.AudioSettings.AudioConfigurationChangeHandler): void;

            interface AudioConfigurationChangeHandler {
                ($deviceWasChanged: boolean): void;
                Invoke?: ($deviceWasChanged: boolean) => void;
            }
            var AudioConfigurationChangeHandler: { new (func: ($deviceWasChanged: boolean) => void): AudioConfigurationChangeHandler; };

            class Mobile {
                protected [__keep_incompatibility]: never;
                public static get muteState(): boolean;
                public static stopAudioOutputOnMute: boolean;
                public static get audioOutputStarted(): boolean;
                public static StartAudioOutput(): void;
                public static StopAudioOutput(): void;
                public static add_OnMuteStateChanged(handler: System.Action$1<boolean>): void;
                public static remove_OnMuteStateChanged(handler: System.Action$1<boolean>): void;
            }
        }

        class AudioSource extends UnityEngine.AudioBehaviour {
            protected [__keep_incompatibility]: never;
            public volume: number;
            public pitch: number;
            public time: number;
            public timeSamples: number;
            public clip: UnityEngine.AudioClip;
            public resource: UnityEngine.Audio.AudioResource;
            public generator: UnityEngine.Audio.IAudioGenerator;
            public get generatorInstance(): UnityEngine.Audio.ProcessorInstance;
            public outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
            public gamepadSpeakerOutputType: UnityEngine.GamepadSpeakerOutputType;
            public get isPlaying(): boolean;
            public get isVirtual(): boolean;
            public loop: boolean;
            public ignoreListenerVolume: boolean;
            public playOnAwake: boolean;
            public ignoreListenerPause: boolean;
            public velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
            public panStereo: number;
            public spatialBlend: number;
            public spatialize: boolean;
            public spatializePostEffects: boolean;
            public reverbZoneMix: number;
            public bypassEffects: boolean;
            public bypassListenerEffects: boolean;
            public bypassReverbZones: boolean;
            public dopplerLevel: number;
            public spread: number;
            public priority: number;
            public mute: boolean;
            public minDistance: number;
            public maxDistance: number;
            public rolloffMode: UnityEngine.AudioRolloffMode;
            constructor();
            public PlayOnGamepad($slot: number): boolean;
            public DisableGamepadOutput(): boolean;
            public SetGamepadSpeakerMixLevel($slot: number, $mixLevel: number): boolean;
            public SetGamepadSpeakerMixLevelDefault($slot: number): boolean;
            public SetGamepadSpeakerRestrictedAudio($slot: number, $restricted: boolean): boolean;
            public static GamepadSpeakerSupportsOutputType($outputType: UnityEngine.GamepadSpeakerOutputType): boolean;
            public Play(): void;
            public Play($delay: bigint): void;
            public PlayDelayed($delay: number): void;
            public PlayScheduled($time: number): void;
            public PlayOneShot($clip: UnityEngine.AudioClip): void;
            public PlayOneShot($clip: UnityEngine.AudioClip, $volumeScale: number): void;
            public SetScheduledStartTime($time: number): void;
            public SetScheduledEndTime($time: number): void;
            public Stop(): void;
            public Pause(): void;
            public UnPause(): void;
            public static PlayClipAtPoint($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3): void;
            public static PlayClipAtPoint($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3, $volume: number): void;
            public SetCustomCurve($type: UnityEngine.AudioSourceCurveType, $curve: UnityEngine.AnimationCurve): void;
            public GetCustomCurve($type: UnityEngine.AudioSourceCurveType): UnityEngine.AnimationCurve;
            public GetOutputData($numSamples: number, $channel: number): System.Array$1<number>;
            public GetOutputData($samples: System.Array$1<number>, $channel: number): void;
            public GetSpectrumData($numSamples: number, $channel: number, $window: UnityEngine.FFTWindow): System.Array$1<number>;
            public GetSpectrumData($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow): void;
            public SetSpatializerFloat($index: number, $value: number): boolean;
            public GetSpatializerFloat($index: number, $value: $Out<number>): boolean;
            public GetAmbisonicDecoderFloat($index: number, $value: $Out<number>): boolean;
            public SetAmbisonicDecoderFloat($index: number, $value: number): boolean;
        }

        class AudioLowPassFilter extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public customCutoffCurve: UnityEngine.AnimationCurve;
            public cutoffFrequency: number;
            public lowpassResonanceQ: number;
            constructor();
        }

        class AudioHighPassFilter extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public cutoffFrequency: number;
            public highpassResonanceQ: number;
            constructor();
        }

        class AudioReverbFilter extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public reverbPreset: UnityEngine.AudioReverbPreset;
            public dryLevel: number;
            public room: number;
            public roomHF: number;
            public roomRolloffFactor: number;
            public decayTime: number;
            public decayHFRatio: number;
            public reflectionsLevel: number;
            public reflectionsDelay: number;
            public reverbLevel: number;
            public reverbDelay: number;
            public diffusion: number;
            public density: number;
            public hfReference: number;
            public roomLF: number;
            public lfReference: number;
            constructor();
        }

        enum AudioSpeakerMode {
            Raw = 0,
            Mono = 1,
            Stereo = 2,
            Quad = 3,
            Surround = 4,
            Mode5point1 = 5,
            Mode7point1 = 6,
            Prologic = 7
        }

        class AudioExtensions {
            protected [__keep_incompatibility]: never;
            public static ChannelCount(): number;
        }

        enum AudioDataLoadState {
            Unloaded = 0,
            Loading = 1,
            Loaded = 2,
            Failed = 3
        }

        class AudioConfiguration {
            protected [__keep_incompatibility]: never;
            public speakerMode: UnityEngine.AudioSpeakerMode;
            public dspBufferSize: number;
            public sampleRate: number;
            public numRealVoices: number;
            public numVirtualVoices: number;
        }

        enum AudioCompressionFormat {
            PCM = 0,
            Vorbis = 1,
            ADPCM = 2,
            MP3 = 3,
            VAG = 4,
            HEVAG = 5,
            XMA = 6,
            AAC = 7,
            GCADPCM = 8,
            ATRAC9 = 9
        }

        enum AudioClipLoadType {
            DecompressOnLoad = 0,
            CompressedInMemory = 1,
            Streaming = 2
        }

        enum AudioVelocityUpdateMode {
            Auto = 0,
            Fixed = 1,
            Dynamic = 2
        }

        enum FFTWindow {
            Rectangular = 0,
            Triangle = 1,
            Hamming = 2,
            Hanning = 3,
            Blackman = 4,
            BlackmanHarris = 5
        }

        enum AudioRolloffMode {
            Logarithmic = 0,
            Linear = 1,
            Custom = 2
        }

        enum AudioSourceCurveType {
            CustomRolloff = 0,
            SpatialBlend = 1,
            ReverbZoneMix = 2,
            Spread = 3
        }

        enum GamepadSpeakerOutputType {
            Speaker = 0,
            Vibration = 1,
            SecondaryVibration = 2
        }

        enum AudioReverbPreset {
            Off = 0,
            Generic = 1,
            PaddedCell = 2,
            Room = 3,
            Bathroom = 4,
            Livingroom = 5,
            Stoneroom = 6,
            Auditorium = 7,
            Concerthall = 8,
            Cave = 9,
            Arena = 10,
            Hangar = 11,
            CarpetedHallway = 12,
            Hallway = 13,
            StoneCorridor = 14,
            Alley = 15,
            Forest = 16,
            City = 17,
            Mountains = 18,
            Quarry = 19,
            Plain = 20,
            ParkingLot = 21,
            SewerPipe = 22,
            Underwater = 23,
            Drugged = 24,
            Dizzy = 25,
            Psychotic = 26,
            User = 27
        }

        enum AudioSpatialExperience {
            Bypassed = 0,
            HeadTracked = 1,
            Fixed = 2
        }

        class AudioClip extends UnityEngine.Audio.AudioResource implements UnityEngine.Audio.GeneratorInstance.ICapabilities, UnityEngine.Audio.IAudioGenerator {
            protected [__keep_incompatibility]: never;
            public get length(): number;
            public get samples(): number;
            public get channels(): number;
            public get frequency(): number;
            public get isReadyToPlay(): boolean;
            public get loadType(): UnityEngine.AudioClipLoadType;
            public get preloadAudioData(): boolean;
            public get ambisonic(): boolean;
            public get loadInBackground(): boolean;
            public get loadState(): UnityEngine.AudioDataLoadState;
            public LoadAudioData(): boolean;
            public UnloadAudioData(): boolean;
            public GetData($data: System.Span$1<number>, $offsetSamples: number): boolean;
            public GetData($data: System.Array$1<number>, $offsetSamples: number): boolean;
            public SetData($data: System.Array$1<number>, $offsetSamples: number): boolean;
            public SetData($data: System.ReadOnlySpan$1<number>, $offsetSamples: number): boolean;
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $_3D: boolean, $stream: boolean): UnityEngine.AudioClip;
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $_3D: boolean, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback): UnityEngine.AudioClip;
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $_3D: boolean, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, $pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback): UnityEngine.AudioClip;
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean): UnityEngine.AudioClip;
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback): UnityEngine.AudioClip;
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, $pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback): UnityEngine.AudioClip;

            interface PCMReaderCallback {
                ($data: System.Array$1<number>): void;
                Invoke?: ($data: System.Array$1<number>) => void;
            }
            var PCMReaderCallback: { new (func: ($data: System.Array$1<number>) => void): PCMReaderCallback; };

            interface PCMSetPositionCallback {
                ($position: number): void;
                Invoke?: ($position: number) => void;
            }
            var PCMSetPositionCallback: { new (func: ($position: number) => void): PCMSetPositionCallback; };
        }

        class AudioBehaviour extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            constructor();
        }

        class AudioListener extends UnityEngine.AudioBehaviour {
            protected [__keep_incompatibility]: never;
            public static volume: number;
            public static pause: boolean;
            public velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
            constructor();
            public static GetOutputData($numSamples: number, $channel: number): System.Array$1<number>;
            public static GetOutputData($samples: System.Array$1<number>, $channel: number): void;
            public static GetSpectrumData($numSamples: number, $channel: number, $window: UnityEngine.FFTWindow): System.Array$1<number>;
            public static GetSpectrumData($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow): void;
        }

        class AudioReverbZone extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public minDistance: number;
            public maxDistance: number;
            public reverbPreset: UnityEngine.AudioReverbPreset;
            public room: number;
            public roomHF: number;
            public roomLF: number;
            public decayTime: number;
            public decayHFRatio: number;
            public reflections: number;
            public reflectionsDelay: number;
            public reverb: number;
            public reverbDelay: number;
            public HFReference: number;
            public LFReference: number;
            public roomRolloffFactor: number;
            public diffusion: number;
            public density: number;
            constructor();
        }

        class AudioDistortionFilter extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public distortionLevel: number;
            constructor();
        }

        class AudioEchoFilter extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public delay: number;
            public decayRatio: number;
            public dryMix: number;
            public wetMix: number;
            constructor();
        }

        class AudioChorusFilter extends UnityEngine.Behaviour {
            protected [__keep_incompatibility]: never;
            public dryMix: number;
            public wetMix1: number;
            public wetMix2: number;
            public wetMix3: number;
            public delay: number;
            public rate: number;
            public depth: number;
            public feedback: number;
            constructor();
        }

        class Microphone {
            protected [__keep_incompatibility]: never;
            public static get devices(): System.Array$1<string>;
            constructor();
            public static Start($deviceName: string, $loop: boolean, $lengthSec: number, $frequency: number): UnityEngine.AudioClip;
            public static End($deviceName: string): void;
            public static IsRecording($deviceName: string): boolean;
            public static GetPosition($deviceName: string): number;
            public static GetDeviceCaps($deviceName: string, $minFreq: $Out<number>, $maxFreq: $Out<number>): void;
        }

        class AudioRenderer {
            protected [__keep_incompatibility]: never;
            constructor();
            public static Start(): boolean;
            public static Stop(): boolean;
            public static GetSampleCountForCaptureFrame(): number;
            public static Render($buffer: Unity.Collections.NativeArray$1<number>): boolean;
        }

        class MovieTexture extends UnityEngine.Texture {
            protected [__keep_incompatibility]: never;
        }

        enum WebCamFlags {
            FrontFacing = 1,
            AutoFocusPointSupported = 2
        }

        enum WebCamKind {
            Unknown = 0,
            WideAngle = 1,
            Telephoto = 2,
            ColorAndDepth = 3,
            UltraWideAngle = 4
        }

        class WebCamDevice {
            protected [__keep_incompatibility]: never;
            public get name(): string;
            public get isFrontFacing(): boolean;
            public get kind(): UnityEngine.WebCamKind;
            public get depthCameraName(): string;
            public get isAutoFocusPointSupported(): boolean;
            public get availableResolutions(): System.Array$1<UnityEngine.Resolution>;
        }

        class WebCamTexture extends UnityEngine.Texture {
            protected [__keep_incompatibility]: never;
            public static get devices(): System.Array$1<UnityEngine.WebCamDevice>;
            public get isPlaying(): boolean;
            public deviceName: string;
            public requestedFPS: number;
            public requestedWidth: number;
            public requestedHeight: number;
            public get videoRotationAngle(): number;
            public get videoVerticallyMirrored(): boolean;
            public get didUpdateThisFrame(): boolean;
            public autoFocusPoint: UnityEngine.Vector2 | null;
            public get isDepth(): boolean;
            constructor($deviceName: string, $requestedWidth: number, $requestedHeight: number, $requestedFPS: number);
            constructor($deviceName: string, $requestedWidth: number, $requestedHeight: number);
            constructor($deviceName: string);
            constructor($requestedWidth: number, $requestedHeight: number, $requestedFPS: number);
            constructor($requestedWidth: number, $requestedHeight: number);
            constructor();
            public Play(): void;
            public Pause(): void;
            public Stop(): void;
            public GetPixel($x: number, $y: number): UnityEngine.Color;
            public GetPixels(): System.Array$1<UnityEngine.Color>;
            public GetPixels($x: number, $y: number, $blockWidth: number, $blockHeight: number): System.Array$1<UnityEngine.Color>;
            public GetPixels32(): System.Array$1<UnityEngine.Color32>;
            public GetPixels32($colors: System.Array$1<UnityEngine.Color32>): System.Array$1<UnityEngine.Color32>;
        }

    }
    namespace UnityEngine {
        namespace Audio {
            class AudioFormat {
                protected [__keep_incompatibility]: never;
                public get channelCount(): number;
                public get bufferFrameCount(): number;
                public get sampleRate(): number;
                public get speakerMode(): UnityEngine.AudioSpeakerMode;
                constructor($config: UnityEngine.AudioConfiguration);
                constructor($speakerMode: UnityEngine.AudioSpeakerMode, $sampleRate: number, $bufferSize: number);
            }

            class MessageExtensions {
                protected [__keep_incompatibility]: never;
                public static Get<T extends object>(): T;
                public static SendMessage<T extends object>($processorInstance: UnityEngine.Audio.ProcessorInstance, $message: T): UnityEngine.Audio.ProcessorInstance.Response;
            }

            class ControlContext implements UnityEngine.Audio.ProcessorInstance.IContext {
                protected [__keep_incompatibility]: never;
                public static get builtIn(): UnityEngine.Audio.ControlContext;
                public AllocateGenerator<TRealtime extends UnityEngine.Audio.GeneratorInstance.IRealtime, TControl extends UnityEngine.Audio.GeneratorInstance.IControl$1<TRealtime>>($realtimeState: $Ref<TRealtime>, $controlState: $Ref<TControl>, $nestedFormat?: UnityEngine.Audio.AudioFormat | null, $creationParameters?: $Ref<UnityEngine.Audio.ProcessorInstance.CreationParameters>): UnityEngine.Audio.GeneratorInstance;
                public AllocateRootOutput<TRealtime extends UnityEngine.Audio.RootOutputInstance.IRealtime, TControl extends UnityEngine.Audio.RootOutputInstance.IControl$1<TRealtime>>($realtimeState: $Ref<TRealtime>, $controlState: $Ref<TControl>, $creationParameters?: $Ref<UnityEngine.Audio.ProcessorInstance.CreationParameters>): UnityEngine.Audio.RootOutputInstance;
                public IsGenerator<TRealtime extends UnityEngine.Audio.GeneratorInstance.IRealtime, TControl extends UnityEngine.Audio.GeneratorInstance.IControl$1<TRealtime>>($processorInstance: UnityEngine.Audio.ProcessorInstance): boolean;
                public IsRootOutput<TRealtime extends UnityEngine.Audio.RootOutputInstance.IRealtime, TControl extends UnityEngine.Audio.RootOutputInstance.IControl$1<TRealtime>>($processorInstance: UnityEngine.Audio.ProcessorInstance): boolean;
                public Exists($processorInstance: UnityEngine.Audio.ProcessorInstance): boolean;
                public SendMessage<T>($processorInstance: UnityEngine.Audio.ProcessorInstance, $message: $Ref<T>): UnityEngine.Audio.ProcessorInstance.Response;
                public Destroy($generatorInstance: UnityEngine.Audio.GeneratorInstance): void;
                public Destroy($rootOutputInstance: UnityEngine.Audio.RootOutputInstance): void;
                public GetConfiguration($generatorInstance: UnityEngine.Audio.GeneratorInstance): UnityEngine.Audio.GeneratorInstance.Configuration;
                public Configure($generatorInstance: UnityEngine.Audio.GeneratorInstance, $format: $Ref<UnityEngine.Audio.AudioFormat>): void;
                public Update($generatorInstance: UnityEngine.Audio.GeneratorInstance): void;
                public static WaitForBuiltInQueueFlush(): void;
                public static CreateManualControlContext($format: $Ref<UnityEngine.Audio.AudioFormat>): UnityEngine.Audio.ControlContext.Manual;

                class Manual implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get context(): UnityEngine.Audio.ControlContext;
                    public BeginMix($dspTick: bigint): UnityEngine.Audio.RealtimeContext | null;
                    public EndMix($result: UnityEngine.Audio.ChannelBuffer): void;
                    public Update(): void;
                    public Dispose(): void;
                }

                class ProcessorUpdateSetting {
                    protected [__keep_incompatibility]: never;
                }

                class ProcessorCreationParameters {
                    protected [__keep_incompatibility]: never;
                }
            }

            class DSPConfiguration {
                protected [__keep_incompatibility]: never;
            }

            interface IGeneratorDefinition {
            }

            class GeneratorInstance implements System.IEquatable$1<UnityEngine.Audio.GeneratorInstance> {
                protected [__keep_incompatibility]: never;
                public Equals($other: UnityEngine.Audio.GeneratorInstance): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;

                interface IProcessor {
                }

                interface ICapabilities {
                    get isFinite(): boolean;
                    get isRealtime(): boolean;
                    get length(): Unity.IntegerTime.DiscreteTime | null;
                }

                class Setup {
                    protected [__keep_incompatibility]: never;
                    public readonly speakerMode: UnityEngine.AudioSpeakerMode;
                    public readonly sampleRate: number;
                    constructor($speakerMode: UnityEngine.AudioSpeakerMode, $sampleRate: number);
                    constructor($fromFormat: $Ref<UnityEngine.Audio.AudioFormat>);
                }

                class Properties {
                    protected [__keep_incompatibility]: never;
                }

                class Configuration {
                    protected [__keep_incompatibility]: never;
                    public get setup(): UnityEngine.Audio.GeneratorInstance.Setup;
                    public get properties(): UnityEngine.Audio.GeneratorInstance.Properties;
                    public get isFinite(): boolean;
                    public get isRealtime(): boolean;
                    public get length(): Unity.IntegerTime.DiscreteTime | null;
                }

                interface IControl<TRealtime extends UnityEngine.Audio.ProcessorInstance.IRealtime> extends UnityEngine.Audio.ProcessorInstance.IControl$1<TRealtime> {
                    Configure($context: UnityEngine.Audio.ControlContext, $realtime: $Ref<TRealtime>, $format: $Ref<UnityEngine.Audio.AudioFormat>, $setup: $Out<UnityEngine.Audio.GeneratorInstance.Setup>, $properties: $Ref<UnityEngine.Audio.GeneratorInstance.Properties>): void;
                }

                interface IRealtime extends UnityEngine.Audio.ProcessorInstance.IRealtime, UnityEngine.Audio.GeneratorInstance.ICapabilities {
                    Process($context: $Ref<UnityEngine.Audio.RealtimeContext>, $pipe: UnityEngine.Audio.ProcessorInstance.Pipe, $buffer: UnityEngine.Audio.ChannelBuffer, $args: UnityEngine.Audio.GeneratorInstance.Arguments): UnityEngine.Audio.GeneratorInstance.Result;
                }
            }

            class Generator {
                protected [__keep_incompatibility]: never;
            }

            class ProcessorInstance implements System.IEquatable$1<UnityEngine.Audio.ProcessorInstance> {
                protected [__keep_incompatibility]: never;
                public Equals($other: UnityEngine.Audio.ProcessorInstance): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;

                class CreationParameters {
                    protected [__keep_incompatibility]: never;
                    public controlUpdateSetting: UnityEngine.Audio.ProcessorInstance.UpdateSetting;
                    public realtimeUpdateSetting: UnityEngine.Audio.ProcessorInstance.UpdateSetting;
                }

                interface IProcessor {
                }

                enum MessageStatus {
                }

                interface IContext {
                }

                enum UpdateSetting {
                    Default = 0,
                    NeverUpdate = 1,
                    UpdateIfDataIsAvailable = 2,
                    UpdateAlways = 3
                }

                class UpdatedDataContext implements UnityEngine.Audio.ProcessorInstance.IContext {
                    protected [__keep_incompatibility]: never;
                }

                interface IRealtime {
                    Update($context: UnityEngine.Audio.ProcessorInstance.UpdatedDataContext, $pipe: UnityEngine.Audio.ProcessorInstance.Pipe): void;
                }

                interface IControl<TRealtime extends UnityEngine.Audio.ProcessorInstance.IRealtime> {
                    Dispose($context: UnityEngine.Audio.ControlContext, $realtime: $Ref<TRealtime>): void;
                    Update($context: UnityEngine.Audio.ControlContext, $pipe: UnityEngine.Audio.ProcessorInstance.Pipe): void;
                    OnMessage($context: UnityEngine.Audio.ControlContext, $pipe: UnityEngine.Audio.ProcessorInstance.Pipe, $message: UnityEngine.Audio.ProcessorInstance.Message): UnityEngine.Audio.ProcessorInstance.Response;
                }

                enum Response {
                    Unhandled = 0,
                    Handled = 1
                }
            }

            class Processor {
                protected [__keep_incompatibility]: never;
            }

            class ProcessingContext {
                protected [__keep_incompatibility]: never;
            }

            interface IAudioScriptingContext {
            }

            class RootOutputInstance implements System.IEquatable$1<UnityEngine.Audio.RootOutputInstance> {
                protected [__keep_incompatibility]: never;
                public Equals($other: UnityEngine.Audio.RootOutputInstance): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;

                interface IProcessor {
                }

                interface IControl<TRealtime extends UnityEngine.Audio.ProcessorInstance.IRealtime> extends UnityEngine.Audio.ProcessorInstance.IControl$1<TRealtime> {
                    Configure($context: UnityEngine.Audio.ControlContext, $realtime: $Ref<TRealtime>, $format: $Ref<UnityEngine.Audio.AudioFormat>): Unity.Jobs.JobHandle;
                }

                interface IRealtime extends UnityEngine.Audio.ProcessorInstance.IRealtime {
                    EarlyProcessing($context: $Ref<UnityEngine.Audio.RealtimeContext>, $pipe: UnityEngine.Audio.ProcessorInstance.Pipe): Unity.Jobs.JobHandle;
                    Process($context: $Ref<UnityEngine.Audio.RealtimeContext>, $pipe: UnityEngine.Audio.ProcessorInstance.Pipe, $input: Unity.Jobs.JobHandle): void;
                    EndProcessing($context: $Ref<UnityEngine.Audio.RealtimeContext>, $pipe: UnityEngine.Audio.ProcessorInstance.Pipe, $output: UnityEngine.Audio.ChannelBuffer): void;
                    RemovedFromProcessing(): void;
                }
            }

            class RealtimeContext implements UnityEngine.Audio.ProcessorInstance.IContext {
                protected [__keep_incompatibility]: never;
                public get dspTime(): bigint;
                public get isCreated(): boolean;
                public Process($generatorInstance: UnityEngine.Audio.GeneratorInstance, $buffer: UnityEngine.Audio.ChannelBuffer, $args: UnityEngine.Audio.GeneratorInstance.Arguments): UnityEngine.Audio.GeneratorInstance.Result;
            }

            interface IAudioGenerator extends UnityEngine.Audio.GeneratorInstance.ICapabilities {
                CreateInstance($context: UnityEngine.Audio.ControlContext, $nestedFormat: UnityEngine.Audio.AudioFormat | null, $creationParameters: UnityEngine.Audio.ProcessorInstance.CreationParameters): UnityEngine.Audio.GeneratorInstance;

                class Serializable {
                    protected [__keep_incompatibility]: never;
                    public definition: UnityEngine.Audio.IAudioGenerator;
                    constructor($audioGenerator: UnityEngine.Audio.IAudioGenerator);
                    public Get<T extends UnityEngine.Object & UnityEngine.Audio.IAudioGenerator>(): T;
                    public Set<T extends UnityEngine.Object & UnityEngine.Audio.IAudioGenerator>($value: T): void;
                }
            }

            class AudioResource extends UnityEngine.Object {
                protected [__keep_incompatibility]: never;
            }

            class AudioClipPlayable implements System.IEquatable$1<UnityEngine.Audio.AudioClipPlayable>, UnityEngine.Playables.IPlayable {
                protected [__keep_incompatibility]: never;
                public static Create($graph: UnityEngine.Playables.PlayableGraph, $clip: UnityEngine.AudioClip, $looping: boolean): UnityEngine.Audio.AudioClipPlayable;
                public GetHandle(): UnityEngine.Playables.PlayableHandle;
                public Equals($other: UnityEngine.Audio.AudioClipPlayable): boolean;
                public GetClip(): UnityEngine.AudioClip;
                public SetClip($value: UnityEngine.AudioClip): void;
                public GetLooped(): boolean;
                public SetLooped($value: boolean): void;
                public IsChannelPlaying(): boolean;
                public GetStartDelay(): number;
                public GetPauseDelay(): number;
                public Seek($startTime: number, $startDelay: number): void;
                public Seek($startTime: number, $startDelay: number, $duration: number): void;
            }

            enum AudioMixerUpdateMode {
                Normal = 0,
                UnscaledTime = 1
            }

            class AudioMixer extends UnityEngine.Object {
                protected [__keep_incompatibility]: never;
                public outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
                public updateMode: UnityEngine.Audio.AudioMixerUpdateMode;
                public FindSnapshot($name: string): UnityEngine.Audio.AudioMixerSnapshot;
                public FindMatchingGroups($subPath: string): System.Array$1<UnityEngine.Audio.AudioMixerGroup>;
                public TransitionToSnapshots($snapshots: System.Array$1<UnityEngine.Audio.AudioMixerSnapshot>, $weights: System.Array$1<number>, $timeToReach: number): void;
                public SetFloat($name: string, $value: number): boolean;
                public ClearFloat($name: string): boolean;
                public GetFloat($name: string, $value: $Out<number>): boolean;
            }

            class AudioMixerGroup extends UnityEngine.Object implements UnityEngine.Internal.ISubAssetNotDuplicatable {
                protected [__keep_incompatibility]: never;
                public get audioMixer(): UnityEngine.Audio.AudioMixer;
            }

            class AudioMixerPlayable implements System.IEquatable$1<UnityEngine.Audio.AudioMixerPlayable>, UnityEngine.Playables.IPlayable {
                protected [__keep_incompatibility]: never;
                public static Create($graph: UnityEngine.Playables.PlayableGraph, $inputCount?: number, $normalizeInputVolumes?: boolean): UnityEngine.Audio.AudioMixerPlayable;
                public GetHandle(): UnityEngine.Playables.PlayableHandle;
                public Equals($other: UnityEngine.Audio.AudioMixerPlayable): boolean;
            }

            class AudioMixerSnapshot extends UnityEngine.Object implements UnityEngine.Internal.ISubAssetNotDuplicatable {
                protected [__keep_incompatibility]: never;
                public get audioMixer(): UnityEngine.Audio.AudioMixer;
                public TransitionTo($timeToReach: number): void;
            }

            class AudioPlayableBinding {
                protected [__keep_incompatibility]: never;
                public static Create($name: string, $key: UnityEngine.Object): UnityEngine.Playables.PlayableBinding;
            }

            class AudioPlayableOutput implements UnityEngine.Playables.IPlayableOutput {
                protected [__keep_incompatibility]: never;
                public static get Null(): UnityEngine.Audio.AudioPlayableOutput;
                public static Create($graph: UnityEngine.Playables.PlayableGraph, $name: string, $target: UnityEngine.AudioSource): UnityEngine.Audio.AudioPlayableOutput;
                public GetHandle(): UnityEngine.Playables.PlayableOutputHandle;
                public GetTarget(): UnityEngine.AudioSource;
                public SetTarget($value: UnityEngine.AudioSource): void;
                public GetEvaluateOnSeek(): boolean;
                public SetEvaluateOnSeek($value: boolean): void;
            }

        }
    }
    namespace UnityEngine {
        namespace Experimental {
            namespace Audio {
                class AudioSampleProvider implements System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get id(): number;
                    public get trackIndex(): number;
                    public get owner(): UnityEngine.Object;
                    public get valid(): boolean;
                    public get channelCount(): number;
                    public get sampleRate(): number;
                    public get maxSampleFrameCount(): number;
                    public get availableSampleFrameCount(): number;
                    public get freeSampleFrameCount(): number;
                    public freeSampleFrameCountLowThreshold: number;
                    public enableSampleFramesAvailableEvents: boolean;
                    public enableSilencePadding: boolean;
                    public static get consumeSampleFramesNativeFunction(): UnityEngine.Experimental.Audio.AudioSampleProvider.ConsumeSampleFramesNativeFunction;
                    public Dispose(): void;
                    public ConsumeSampleFrames($sampleFrames: Unity.Collections.NativeArray$1<number>): number;
                    public SetSampleFramesAvailableNativeHandler($handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesEventNativeFunction, $userData: number): void;
                    public ClearSampleFramesAvailableNativeHandler(): void;
                    public SetSampleFramesOverflowNativeHandler($handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesEventNativeFunction, $userData: number): void;
                    public ClearSampleFramesOverflowNativeHandler(): void;
                    public add_sampleFramesAvailable(handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler): void;
                    public remove_sampleFramesAvailable(handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler): void;
                    public add_sampleFramesOverflow(handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler): void;
                    public remove_sampleFramesOverflow(handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler): void;

                    interface ConsumeSampleFramesNativeFunction {
                        ($providerId: number, $interleavedSampleFrames: number, $sampleFrameCount: number): number;
                        Invoke?: ($providerId: number, $interleavedSampleFrames: number, $sampleFrameCount: number) => number;
                    }
                    var ConsumeSampleFramesNativeFunction: { new (func: ($providerId: number, $interleavedSampleFrames: number, $sampleFrameCount: number) => number): ConsumeSampleFramesNativeFunction; };

                    interface SampleFramesHandler {
                        ($provider: UnityEngine.Experimental.Audio.AudioSampleProvider, $sampleFrameCount: number): void;
                        Invoke?: ($provider: UnityEngine.Experimental.Audio.AudioSampleProvider, $sampleFrameCount: number) => void;
                    }
                    var SampleFramesHandler: { new (func: ($provider: UnityEngine.Experimental.Audio.AudioSampleProvider, $sampleFrameCount: number) => void): SampleFramesHandler; };

                    interface SampleFramesEventNativeFunction {
                        ($userData: number, $providerId: number, $sampleFrameCount: number): void;
                        Invoke?: ($userData: number, $providerId: number, $sampleFrameCount: number) => void;
                    }
                    var SampleFramesEventNativeFunction: { new (func: ($userData: number, $providerId: number, $sampleFrameCount: number) => void): SampleFramesEventNativeFunction; };
                }

            }
        }
    }
}
