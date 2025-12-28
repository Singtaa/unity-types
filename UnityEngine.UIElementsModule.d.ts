declare namespace CS {
    const __keep_incompatibility: symbol;

    namespace UnityEngine {
        namespace UIElements {
            class AlignmentUtils {
                protected [__keep_incompatibility]: never;
                public static RoundToPanelPixelSize($v: number): number;
                public static CeilToPanelPixelSize($v: number): number;
                public static FloorToPanelPixelSize($v: number): number;
            }

            enum DynamicAtlasFilters {
                None = 0,
                Readability = 1,
                Size = 2,
                Format = 4,
                ColorSpace = 8,
                FilterMode = 16
            }

            interface DynamicAtlasCustomFilter {
                ($texture: UnityEngine.Texture2D, $filtersToApply: $Ref<UnityEngine.UIElements.DynamicAtlasFilters>): boolean;
                Invoke?: ($texture: UnityEngine.Texture2D, $filtersToApply: $Ref<UnityEngine.UIElements.DynamicAtlasFilters>) => boolean;
            }
            var DynamicAtlasCustomFilter: { new (func: ($texture: UnityEngine.Texture2D, $filtersToApply: $Ref<UnityEngine.UIElements.DynamicAtlasFilters>) => boolean): DynamicAtlasCustomFilter; };

            class BackgroundPosition implements System.IEquatable$1<UnityEngine.UIElements.BackgroundPosition> {
                protected [__keep_incompatibility]: never;
                public keyword: UnityEngine.UIElements.BackgroundPositionKeyword;
                public offset: UnityEngine.UIElements.Length;
                constructor($keyword: UnityEngine.UIElements.BackgroundPositionKeyword);
                constructor($keyword: UnityEngine.UIElements.BackgroundPositionKeyword, $offset: UnityEngine.UIElements.Length);
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.BackgroundPosition): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class BackgroundPropertyHelper {
                protected [__keep_incompatibility]: never;
                public static ConvertScaleModeToBackgroundPosition($scaleMode?: UnityEngine.ScaleMode): UnityEngine.UIElements.BackgroundPosition;
                public static ConvertScaleModeToBackgroundRepeat($scaleMode?: UnityEngine.ScaleMode): UnityEngine.UIElements.BackgroundRepeat;
                public static ConvertScaleModeToBackgroundSize($scaleMode?: UnityEngine.ScaleMode): UnityEngine.UIElements.BackgroundSize;
                public static ResolveUnityBackgroundScaleMode($backgroundPositionX: UnityEngine.UIElements.BackgroundPosition, $backgroundPositionY: UnityEngine.UIElements.BackgroundPosition, $backgroundRepeat: UnityEngine.UIElements.BackgroundRepeat, $backgroundSize: UnityEngine.UIElements.BackgroundSize, $valid: $Out<boolean>): UnityEngine.ScaleMode;
            }

            class BackgroundRepeat implements System.IEquatable$1<UnityEngine.UIElements.BackgroundRepeat> {
                protected [__keep_incompatibility]: never;
                public x: UnityEngine.UIElements.Repeat;
                public y: UnityEngine.UIElements.Repeat;
                constructor($repeatX: UnityEngine.UIElements.Repeat, $repeatY: UnityEngine.UIElements.Repeat);
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.BackgroundRepeat): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class BackgroundSize implements System.IEquatable$1<UnityEngine.UIElements.BackgroundSize> {
                protected [__keep_incompatibility]: never;
                public sizeType: UnityEngine.UIElements.BackgroundSizeType;
                public x: UnityEngine.UIElements.Length;
                public y: UnityEngine.UIElements.Length;
                constructor($sizeX: UnityEngine.UIElements.Length, $sizeY: UnityEngine.UIElements.Length);
                constructor($sizeType: UnityEngine.UIElements.BackgroundSizeType);
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.BackgroundSize): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class BindableElement extends UnityEngine.UIElements.VisualElement implements UnityEngine.UIElements.IBindable {
                protected [__keep_incompatibility]: never;
                public binding: UnityEngine.UIElements.IBinding;
                public bindingPath: string;
                constructor();
            }
            namespace BindableElement {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.BindableElement, UnityEngine.UIElements.BindableElement.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum BindingUpdateTrigger {
                WhenDirty = 0,
                OnSourceChanged = 1,
                EveryUpdate = 2
            }

            class Binding {
                protected [__keep_incompatibility]: never;
                public get isDirty(): boolean;
                public updateTrigger: UnityEngine.UIElements.BindingUpdateTrigger;
                public static SetGlobalLogLevel($logLevel: UnityEngine.UIElements.BindingLogLevel): void;
                public static GetGlobalLogLevel(): UnityEngine.UIElements.BindingLogLevel;
                public static SetPanelLogLevel($panel: UnityEngine.UIElements.IPanel, $logLevel: UnityEngine.UIElements.BindingLogLevel): void;
                public static GetPanelLogLevel($panel: UnityEngine.UIElements.IPanel): UnityEngine.UIElements.BindingLogLevel;
                public static ResetPanelLogLevel($panel: UnityEngine.UIElements.IPanel): void;
                public MarkDirty(): void;
            }
            namespace Binding {
                class UxmlSerializedData extends UnityEngine.UIElements.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

            }

            class BindingActivationContext {
                protected [__keep_incompatibility]: never;
                public get targetElement(): UnityEngine.UIElements.VisualElement;
                public get bindingId(): UnityEngine.UIElements.BindingId;
            }

            class BindingContext {
                protected [__keep_incompatibility]: never;
                public get targetElement(): UnityEngine.UIElements.VisualElement;
                public get bindingId(): UnityEngine.UIElements.BindingId;
                public get dataSourcePath(): Unity.Properties.PropertyPath;
                public get dataSource(): any;
            }

            enum BindingStatus {
                Success = 0,
                Failure = 1,
                Pending = 2
            }

            class BindingResult {
                protected [__keep_incompatibility]: never;
                public get status(): UnityEngine.UIElements.BindingStatus;
                public get message(): string;
                constructor($status: UnityEngine.UIElements.BindingStatus, $message?: string);
            }

            class ConverterGroup {
                protected [__keep_incompatibility]: never;
                public get id(): string;
                public get displayName(): string;
                public get description(): string;
                constructor($id: string, $displayName?: string, $description?: string);
                public AddConverter<TSource, TDestination>($converter: Unity.Properties.TypeConverter$2<TSource, TDestination>): void;
                public TryConvert<TSource, TDestination>($source: $Ref<TSource>, $destination: $Out<TDestination>): boolean;
                public TrySetValue<TContainer, TValue>($container: $Ref<TContainer>, $path: $Ref<Unity.Properties.PropertyPath>, $value: TValue, $returnCode: $Out<Unity.Properties.VisitReturnCode>): boolean;
            }

            class ConverterGroups {
                protected [__keep_incompatibility]: never;
                public static RegisterGlobalConverter<TSource, TDestination>($converter: Unity.Properties.TypeConverter$2<TSource, TDestination>): void;
                public static RegisterConverterGroup($converterGroup: UnityEngine.UIElements.ConverterGroup): void;
                public static TryGetConverterGroup($groupId: string, $converterGroup: $Out<UnityEngine.UIElements.ConverterGroup>): boolean;
                public static TryConvert<TSource, TDestination>($source: $Ref<TSource>, $destination: $Out<TDestination>): boolean;
                public static TrySetValueGlobal<TContainer, TValue>($container: $Ref<TContainer>, $path: $Ref<Unity.Properties.PropertyPath>, $value: TValue, $returnCode: $Out<Unity.Properties.VisitReturnCode>): boolean;
            }

            class CustomBinding extends UnityEngine.UIElements.Binding {
                protected [__keep_incompatibility]: never;
            }
            namespace CustomBinding {
                class UxmlSerializedData extends UnityEngine.UIElements.Binding.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                }

            }

            enum BindingMode {
                TwoWay = 0,
                ToSource = 1,
                ToTarget = 2,
                ToTargetOnce = 3
            }

            class DataBinding extends UnityEngine.UIElements.Binding implements UnityEngine.UIElements.IDataSourceProvider {
                protected [__keep_incompatibility]: never;
                public dataSource: any;
                public dataSourceType: System.Type;
                public dataSourcePath: Unity.Properties.PropertyPath;
                public bindingMode: UnityEngine.UIElements.BindingMode;
                public get sourceToUiConverters(): UnityEngine.UIElements.ConverterGroup;
                public get uiToSourceConverters(): UnityEngine.UIElements.ConverterGroup;
                constructor();
                public ApplyConverterGroupToSource($group: UnityEngine.UIElements.ConverterGroup): void;
                public ApplyConverterGroupToUI($group: UnityEngine.UIElements.ConverterGroup): void;
            }
            namespace DataBinding {
                class UxmlSerializedData extends UnityEngine.UIElements.Binding.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

            }

            enum BindingLogLevel {
                None = 0,
                Once = 1,
                All = 2
            }

            class BindingInfo {
                protected [__keep_incompatibility]: never;
                public get targetElement(): UnityEngine.UIElements.VisualElement;
                public get bindingId(): UnityEngine.UIElements.BindingId;
                public get binding(): UnityEngine.UIElements.Binding;
            }

            class DataSourceContext {
                protected [__keep_incompatibility]: never;
                public get dataSource(): any;
                public get dataSourcePath(): Unity.Properties.PropertyPath;
                constructor($dataSource: any, $dataSourcePath: $Ref<Unity.Properties.PropertyPath>);
            }

            class DataSourceContextChanged {
                protected [__keep_incompatibility]: never;
                public get targetElement(): UnityEngine.UIElements.VisualElement;
                public get bindingId(): UnityEngine.UIElements.BindingId;
                public get previousContext(): UnityEngine.UIElements.DataSourceContext;
                public get newContext(): UnityEngine.UIElements.DataSourceContext;
            }

            interface IDataSourceProvider {
                get dataSource(): any;
                get dataSourcePath(): Unity.Properties.PropertyPath;
            }

            interface IDataSourceViewHashProvider {
                GetViewHashCode(): bigint;
            }

            class BindablePropertyChangedEventArgs {
                protected [__keep_incompatibility]: never;
                public get propertyName(): UnityEngine.UIElements.BindingId;
                constructor($propertyName: $Ref<UnityEngine.UIElements.BindingId>);
            }

            interface INotifyBindablePropertyChanged {
                add_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
                remove_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
            }

            class Clickable extends UnityEngine.UIElements.PointerManipulator {
                protected [__keep_incompatibility]: never;
                public get lastMousePosition(): UnityEngine.Vector2;
                constructor($handler: System.Action, $delay: bigint, $interval: bigint);
                constructor($handler: System.Action$1<UnityEngine.UIElements.EventBase>);
                constructor($handler: System.Action);
                public add_clickedWithEventInfo(handler: System.Action$1<UnityEngine.UIElements.EventBase>): void;
                public remove_clickedWithEventInfo(handler: System.Action$1<UnityEngine.UIElements.EventBase>): void;
                public add_clicked(handler: System.Action): void;
                public remove_clicked(handler: System.Action): void;
            }

            class BaseListViewController extends UnityEngine.UIElements.CollectionViewController {
                protected [__keep_incompatibility]: never;
                public NeedsDragHandle($index: number): boolean;
                public AddItems($itemCount: number): void;
                public Move($index: number, $newIndex: number): void;
                public RemoveItem($index: number): void;
                public RemoveItems($indices: System.Collections.Generic.List$1<number>): void;
                public ClearItems(): void;
                public add_itemsSourceSizeChanged(handler: System.Action): void;
                public remove_itemsSourceSizeChanged(handler: System.Action): void;
                public add_itemsAdded(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public remove_itemsAdded(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public add_itemsRemoved(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public remove_itemsRemoved(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
            }

            class BaseTreeViewController extends UnityEngine.UIElements.CollectionViewController {
                protected [__keep_incompatibility]: never;
                public itemsSource: System.Collections.IList;
                public RebuildTree(): void;
                public GetRootItemIds(): System.Collections.Generic.IEnumerable$1<number>;
                public GetAllItemIds($rootIds?: System.Collections.Generic.IEnumerable$1<number>): System.Collections.Generic.IEnumerable$1<number>;
                public GetParentId($id: number): number;
                public GetChildrenIds($id: number): System.Collections.Generic.IEnumerable$1<number>;
                public Move($id: number, $newParentId: number, $childIndex?: number, $rebuildTree?: boolean): void;
                public TryRemoveItem($id: number, $rebuildTree?: boolean): boolean;
                public GetTreeItemsCount(): number;
                public GetIndexForId($id: number): number;
                public GetIdForIndex($index: number): number;
                public HasChildren($id: number): boolean;
                public Exists($id: number): boolean;
                public HasChildrenByIndex($index: number): boolean;
                public GetChildrenIdsByIndex($index: number): System.Collections.Generic.IEnumerable$1<number>;
                public GetChildIndexForId($id: number): number;
                public GetIndentationDepth($id: number): number;
                public GetIndentationDepthByIndex($index: number): number;
                public CanChangeExpandedState($id: number): boolean;
                public IsExpanded($id: number): boolean;
                public IsExpandedByIndex($index: number): boolean;
                public ExpandItemByIndex($index: number, $expandAllChildren: boolean, $refresh?: boolean): void;
                public ExpandItem($id: number, $expandAllChildren: boolean, $refresh?: boolean): void;
                public CollapseItemByIndex($index: number, $collapseAllChildren: boolean, $refresh?: boolean): void;
                public CollapseItem($id: number, $collapseAllChildren: boolean, $refresh?: boolean): void;
                public ExpandAll(): void;
                public CollapseAll(): void;
            }

            class CollectionViewController implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public itemsSource: System.Collections.IList;
                public SetView($collectionView: UnityEngine.UIElements.BaseVerticalCollectionView): void;
                public Dispose(): void;
                public GetItemsCount(): number;
                public GetIndexForId($id: number): number;
                public GetIdForIndex($index: number): number;
                public GetItemForIndex($index: number): any;
                public GetItemForId($id: number): any;
                public add_itemsSourceChanged(handler: System.Action): void;
                public remove_itemsSourceChanged(handler: System.Action): void;
                public add_itemIndexChanged(handler: System.Action$2<number, number>): void;
                public remove_itemIndexChanged(handler: System.Action$2<number, number>): void;
            }

            class DefaultMultiColumnTreeViewController<T> extends UnityEngine.UIElements.MultiColumnTreeViewController implements UnityEngine.UIElements.IDefaultTreeViewController$1<T> {
                protected [__keep_incompatibility]: never;
                public itemsSource: System.Collections.IList;
                constructor($columns: UnityEngine.UIElements.Columns, $sortDescriptions: UnityEngine.UIElements.SortColumnDescriptions, $sortedColumns: System.Collections.Generic.List$1<UnityEngine.UIElements.SortColumnDescription>);
                public SetRootItems($items: System.Collections.Generic.IList$1<UnityEngine.UIElements.TreeViewItemData$1<T>>): void;
                public AddItem($item: $Ref<UnityEngine.UIElements.TreeViewItemData$1<T>>, $parentId: number, $childIndex: number, $rebuildTree?: boolean): void;
                public GetTreeViewItemDataForId($id: number): UnityEngine.UIElements.TreeViewItemData$1<T>;
                public GetTreeViewItemDataForIndex($index: number): UnityEngine.UIElements.TreeViewItemData$1<T>;
                public TryRemoveItem($id: number, $rebuildTree?: boolean): boolean;
                public GetItemForId($id: number): any;
                public GetDataForId($id: number): T;
                public GetDataForIndex($index: number): T;
                public GetItemForIndex($index: number): any;
            }

            class DefaultTreeViewController<T> extends UnityEngine.UIElements.TreeViewController implements UnityEngine.UIElements.IDefaultTreeViewController$1<T> {
                protected [__keep_incompatibility]: never;
                public itemsSource: System.Collections.IList;
                constructor();
                public SetRootItems($items: System.Collections.Generic.IList$1<UnityEngine.UIElements.TreeViewItemData$1<T>>): void;
                public AddItem($item: $Ref<UnityEngine.UIElements.TreeViewItemData$1<T>>, $parentId: number, $childIndex: number, $rebuildTree?: boolean): void;
                public GetTreeViewItemDataForId($id: number): UnityEngine.UIElements.TreeViewItemData$1<T>;
                public GetTreeViewItemDataForIndex($index: number): UnityEngine.UIElements.TreeViewItemData$1<T>;
                public TryRemoveItem($id: number, $rebuildTree?: boolean): boolean;
                public GetItemForId($id: number): any;
                public GetDataForId($id: number): T;
                public GetDataForIndex($index: number): T;
                public GetItemForIndex($index: number): any;
            }

            class ListViewController extends UnityEngine.UIElements.BaseListViewController {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class MultiColumnListViewController extends UnityEngine.UIElements.BaseListViewController {
                protected [__keep_incompatibility]: never;
                public get columnController(): UnityEngine.UIElements.MultiColumnController;
                constructor($columns: UnityEngine.UIElements.Columns, $sortDescriptions: UnityEngine.UIElements.SortColumnDescriptions, $sortedColumns: System.Collections.Generic.List$1<UnityEngine.UIElements.SortColumnDescription>);
                public GetItemForIndex($index: number): any;
                public GetIndexForId($id: number): number;
                public GetIdForIndex($index: number): number;
                public Dispose(): void;
            }

            class MultiColumnTreeViewController extends UnityEngine.UIElements.BaseTreeViewController {
                protected [__keep_incompatibility]: never;
                public get columnController(): UnityEngine.UIElements.MultiColumnController;
                public Dispose(): void;
            }

            class TreeViewController extends UnityEngine.UIElements.BaseTreeViewController {
                protected [__keep_incompatibility]: never;
            }

            class ContextualMenuManager {
                protected [__keep_incompatibility]: never;
                public DisplayMenuIfEventMatches($evt: UnityEngine.UIElements.EventBase, $eventHandler: UnityEngine.UIElements.IEventHandler): void;
                public DisplayMenu($triggerEvent: UnityEngine.UIElements.EventBase, $target: UnityEngine.UIElements.IEventHandler): void;
            }

            class ContextualMenuManipulator extends UnityEngine.UIElements.PointerManipulator {
                protected [__keep_incompatibility]: never;
                constructor($menuBuilder: System.Action$1<UnityEngine.UIElements.ContextualMenuPopulateEvent>);
            }

            class BaseBoolField extends UnityEngine.UIElements.BaseField$1<boolean> {
                protected [__keep_incompatibility]: never;
                public toggleOnLabelClick: boolean;
                public text: string;
                public SetValueWithoutNotify($newValue: boolean): void;
            }
            namespace BaseBoolField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<boolean> {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

            }

            class BaseCompositeField<TValueType, TField extends UnityEngine.UIElements.TextValueField$1<TFieldValue>, TFieldValue> extends UnityEngine.UIElements.BaseField$1<TValueType> implements UnityEngine.UIElements.IDelayedField {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly spacerUssClassName: string;
                public static readonly multilineVariantUssClassName: string;
                public static readonly fieldGroupUssClassName: string;
                public static readonly fieldUssClassName: string;
                public static readonly firstFieldVariantUssClassName: string;
                public static readonly twoLinesVariantUssClassName: string;
                public isDelayed: boolean;
                public SetValueWithoutNotify($newValue: TValueType): void;
            }
            namespace BaseCompositeField {
                class UxmlSerializedData<TValueType, TField extends UnityEngine.UIElements.TextValueField$1<TFieldValue>, TFieldValue> extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<TValueType> {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

            }

            enum ListViewReorderMode {
                Simple = 0,
                Animated = 1
            }

            class BaseListView extends UnityEngine.UIElements.BaseVerticalCollectionView {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly itemUssClassName: string;
                public static readonly emptyLabelUssClassName: string;
                public static readonly overMaxMultiEditLimitClassName: string;
                public static readonly reorderableUssClassName: string;
                public static readonly reorderableItemUssClassName: string;
                public static readonly reorderableItemContainerUssClassName: string;
                public static readonly reorderableItemHandleUssClassName: string;
                public static readonly reorderableItemHandleBarUssClassName: string;
                public static readonly footerUssClassName: string;
                public static readonly foldoutHeaderUssClassName: string;
                public static readonly arraySizeFieldUssClassName: string;
                public static readonly arraySizeFieldWithHeaderUssClassName: string;
                public static readonly arraySizeFieldWithFooterUssClassName: string;
                public static readonly listViewWithHeaderUssClassName: string;
                public static readonly listViewWithFooterUssClassName: string;
                public static readonly scrollViewWithFooterUssClassName: string;
                public static readonly footerAddButtonName: string;
                public static readonly footerRemoveButtonName: string;
                public showBoundCollectionSize: boolean;
                public showFoldoutHeader: boolean;
                public headerTitle: string;
                public makeHeader: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public makeFooter: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public showAddRemoveFooter: boolean;
                public bindingSourceSelectionMode: UnityEngine.UIElements.BindingSourceSelectionMode;
                public get viewController(): UnityEngine.UIElements.BaseListViewController;
                public reorderMode: UnityEngine.UIElements.ListViewReorderMode;
                public makeNoneElement: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public allowAdd: boolean;
                public overridingAddButtonBehavior: System.Action$2<UnityEngine.UIElements.BaseListView, UnityEngine.UIElements.Button>;
                public onAdd: System.Action$1<UnityEngine.UIElements.BaseListView>;
                public allowRemove: boolean;
                public onRemove: System.Action$1<UnityEngine.UIElements.BaseListView>;
                public SetViewController($controller: UnityEngine.UIElements.CollectionViewController): void;
                public add_itemsAdded(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public remove_itemsAdded(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public add_itemsRemoved(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public remove_itemsRemoved(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
            }
            namespace BaseListView {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseVerticalCollectionView.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseVerticalCollectionView.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class BasePopupField<TValueType, TValueChoice> extends UnityEngine.UIElements.BaseField$1<TValueType> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly textUssClassName: string;
                public static readonly arrowUssClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public choices: System.Collections.Generic.List$1<TValueChoice>;
                public get text(): string;
                public SetValueWithoutNotify($newValue: TValueType): void;
            }

            enum SliderDirection {
                Horizontal = 0,
                Vertical = 1
            }

            class BaseSlider<TValueType extends System.IComparable$1<TValueType>> extends UnityEngine.UIElements.BaseField$1<TValueType> implements UnityEngine.UIElements.IValueField$1<TValueType> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly horizontalVariantUssClassName: string;
                public static readonly verticalVariantUssClassName: string;
                public static readonly dragContainerUssClassName: string;
                public static readonly trackerUssClassName: string;
                public static readonly draggerUssClassName: string;
                public static readonly draggerBorderUssClassName: string;
                public static readonly textFieldClassName: string;
                public static readonly fillUssClassName: string;
                public static readonly movableUssClassName: string;
                public lowValue: TValueType;
                public highValue: TValueType;
                public get range(): TValueType;
                public pageSize: number;
                public showInputField: boolean;
                public fill: boolean;
                public value: TValueType;
                public direction: UnityEngine.UIElements.SliderDirection;
                public inverted: boolean;
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: TValueType): void;
                public SetValueWithoutNotify($newValue: TValueType): void;
                public AdjustDragElement($factor: number): void;
            }
            namespace BaseSlider {
                class UxmlSerializedData<TValueType extends System.IComparable$1<TValueType>> extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<TValueType> {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

                class UxmlTraits<TValueType extends System.IComparable$1<TValueType>> extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<TValueType> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits<TValueType extends System.IComparable$1<TValueType>, TValueUxmlAttributeType extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<TValueType>> extends UnityEngine.UIElements.BaseFieldTraits$2<TValueType, TValueUxmlAttributeType> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class TreeViewExpansionChangedArgs {
                protected [__keep_incompatibility]: never;
                public id: number;
                public isExpanded: boolean;
                public isAppliedToAllChildren: boolean;
                constructor();
            }

            class BaseTreeView extends UnityEngine.UIElements.BaseVerticalCollectionView {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly itemUssClassName: string;
                public static readonly itemToggleUssClassName: string;
                public static readonly itemIndentsContainerUssClassName: string;
                public static readonly itemIndentUssClassName: string;
                public static readonly itemContentContainerUssClassName: string;
                public get itemsSource(): System.Collections.IList;
                public get viewController(): UnityEngine.UIElements.BaseTreeViewController;
                public autoExpand: boolean;
                public SetRootItems<T>($rootItems: System.Collections.Generic.IList$1<UnityEngine.UIElements.TreeViewItemData$1<T>>): void;
                public GetRootIds(): System.Collections.Generic.IEnumerable$1<number>;
                public GetTreeCount(): number;
                public SetViewController($controller: UnityEngine.UIElements.CollectionViewController): void;
                public GetIdForIndex($index: number): number;
                public GetParentIdForIndex($index: number): number;
                public GetChildrenIdsForIndex($index: number): System.Collections.Generic.IEnumerable$1<number>;
                public GetSelectedItems<T>(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.TreeViewItemData$1<T>>;
                public GetItemDataForIndex<T>($index: number): T;
                public GetItemDataForId<T>($id: number): T;
                public AddItem<T>($item: UnityEngine.UIElements.TreeViewItemData$1<T>, $parentId?: number, $childIndex?: number, $rebuildTree?: boolean): void;
                public TryRemoveItem($id: number, $rebuildTree?: boolean): boolean;
                public SetSelectionById($id: number): void;
                public SetSelectionById($ids: System.Collections.Generic.IEnumerable$1<number>): void;
                public SetSelectionByIdWithoutNotify($ids: System.Collections.Generic.IEnumerable$1<number>): void;
                public AddToSelectionById($id: number): void;
                public RemoveFromSelectionById($id: number): void;
                public IsExpanded($id: number): boolean;
                public CollapseItem($id: number, $collapseAllChildren?: boolean, $refresh?: boolean): void;
                public ExpandItem($id: number, $expandAllChildren?: boolean, $refresh?: boolean): void;
                public ExpandRootItems(): void;
                public ExpandAll(): void;
                public CollapseAll(): void;
                public add_itemExpandedChanged(handler: System.Action$1<UnityEngine.UIElements.TreeViewExpansionChangedArgs>): void;
                public remove_itemExpandedChanged(handler: System.Action$1<UnityEngine.UIElements.TreeViewExpansionChangedArgs>): void;
            }
            namespace BaseTreeView {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseVerticalCollectionView.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseVerticalCollectionView.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum AlternatingRowBackground {
                None = 0,
                ContentOnly = 1,
                All = 2
            }

            enum CollectionVirtualizationMethod {
                FixedHeight = 0,
                DynamicHeight = 1
            }

            enum BindingSourceSelectionMode {
                Manual = 0,
                AutoAssign = 1
            }

            class BaseVerticalCollectionView extends UnityEngine.UIElements.BindableElement implements UnityEngine.ISerializationCallbackReceiver {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly borderUssClassName: string;
                public static readonly itemUssClassName: string;
                public static readonly dragHoverBarUssClassName: string;
                public static readonly dragHoverMarkerUssClassName: string;
                public static readonly itemDragHoverUssClassName: string;
                public static readonly itemSelectedVariantUssClassName: string;
                public static readonly itemAlternativeBackgroundUssClassName: string;
                public static readonly listScrollViewUssClassName: string;
                public itemsSource: System.Collections.IList;
                public makeItem: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public bindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public unbindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public destroyItem: System.Action$1<UnityEngine.UIElements.VisualElement>;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                public selectionType: UnityEngine.UIElements.SelectionType;
                public get selectedItem(): any;
                public get selectedItems(): System.Collections.Generic.IEnumerable$1<any>;
                public selectedIndex: number;
                public get selectedIndices(): System.Collections.Generic.IEnumerable$1<number>;
                public get selectedIds(): System.Collections.Generic.IEnumerable$1<number>;
                public get viewController(): UnityEngine.UIElements.CollectionViewController;
                public get resolvedItemHeight(): number;
                public showBorder: boolean;
                public reorderable: boolean;
                public horizontalScrollingEnabled: boolean;
                public showAlternatingRowBackgrounds: UnityEngine.UIElements.AlternatingRowBackground;
                public virtualizationMethod: UnityEngine.UIElements.CollectionVirtualizationMethod;
                public itemHeight: number;
                public fixedItemHeight: number;
                public SetViewController($controller: UnityEngine.UIElements.CollectionViewController): void;
                public GetRootElementForId($id: number): UnityEngine.UIElements.VisualElement;
                public GetRootElementForIndex($index: number): UnityEngine.UIElements.VisualElement;
                public RefreshItem($index: number): void;
                public RefreshItems(): void;
                public Refresh(): void;
                public Rebuild(): void;
                public ScrollTo($visualElement: UnityEngine.UIElements.VisualElement): void;
                public ScrollToItem($index: number): void;
                public ScrollToId($id: number): void;
                public ScrollToItemById($id: number): void;
                public AddToSelection($index: number): void;
                public RemoveFromSelection($index: number): void;
                public SetSelection($index: number): void;
                public SetSelection($indices: System.Collections.Generic.IEnumerable$1<number>): void;
                public SetSelectionWithoutNotify($indices: System.Collections.Generic.IEnumerable$1<number>): void;
                public ClearSelection(): void;
                public add_onItemsChosen(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public remove_onItemsChosen(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public add_itemsChosen(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public remove_itemsChosen(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public add_onSelectionChange(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public remove_onSelectionChange(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public add_selectionChanged(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public remove_selectionChanged(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<any>>): void;
                public add_onSelectedIndicesChange(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public remove_onSelectedIndicesChange(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public add_selectedIndicesChanged(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public remove_selectedIndicesChanged(handler: System.Action$1<System.Collections.Generic.IEnumerable$1<number>>): void;
                public add_itemIndexChanged(handler: System.Action$2<number, number>): void;
                public remove_itemIndexChanged(handler: System.Action$2<number, number>): void;
                public add_itemsSourceChanged(handler: System.Action): void;
                public remove_itemsSourceChanged(handler: System.Action): void;
                public add_canStartDrag(handler: System.Func$2<UnityEngine.UIElements.CanStartDragArgs, boolean>): void;
                public remove_canStartDrag(handler: System.Func$2<UnityEngine.UIElements.CanStartDragArgs, boolean>): void;
                public add_setupDragAndDrop(handler: System.Func$2<UnityEngine.UIElements.SetupDragAndDropArgs, UnityEngine.UIElements.StartDragArgs>): void;
                public remove_setupDragAndDrop(handler: System.Func$2<UnityEngine.UIElements.SetupDragAndDropArgs, UnityEngine.UIElements.StartDragArgs>): void;
                public add_dragAndDropUpdate(handler: System.Func$2<UnityEngine.UIElements.HandleDragAndDropArgs, UnityEngine.UIElements.DragVisualMode>): void;
                public remove_dragAndDropUpdate(handler: System.Func$2<UnityEngine.UIElements.HandleDragAndDropArgs, UnityEngine.UIElements.DragVisualMode>): void;
                public add_handleDrop(handler: System.Func$2<UnityEngine.UIElements.HandleDragAndDropArgs, UnityEngine.UIElements.DragVisualMode>): void;
                public remove_handleDrop(handler: System.Func$2<UnityEngine.UIElements.HandleDragAndDropArgs, UnityEngine.UIElements.DragVisualMode>): void;
            }
            namespace BaseVerticalCollectionView {
                class UxmlSerializedData extends UnityEngine.UIElements.BindableElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

                class UxmlTraits extends UnityEngine.UIElements.BindableElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            interface IBindable {
                binding: UnityEngine.UIElements.IBinding;
                bindingPath: string;
            }

            interface IBinding {
                PreUpdate(): void;
                Update(): void;
                Release(): void;
            }

            class IBindingExtensions {
                protected [__keep_incompatibility]: never;
                public static IsBound(): boolean;
            }

            class BoundsField extends UnityEngine.UIElements.BaseField$1<UnityEngine.Bounds> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly centerFieldUssClassName: string;
                public static readonly extentsFieldUssClassName: string;
                constructor();
                constructor($label: string);
                public SetValueWithoutNotify($newValue: UnityEngine.Bounds): void;
            }
            namespace BoundsField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<UnityEngine.Bounds> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.BoundsField, UnityEngine.UIElements.BoundsField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Bounds> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class BoundsIntField extends UnityEngine.UIElements.BaseField$1<UnityEngine.BoundsInt> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly positionUssClassName: string;
                public static readonly sizeUssClassName: string;
                constructor();
                constructor($label: string);
                public SetValueWithoutNotify($newValue: UnityEngine.BoundsInt): void;
            }
            namespace BoundsIntField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<UnityEngine.BoundsInt> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.BoundsIntField, UnityEngine.UIElements.BoundsIntField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.BoundsInt> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Box extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                constructor();
            }
            namespace Box {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$1<UnityEngine.UIElements.Box> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class Button extends UnityEngine.UIElements.TextElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly iconUssClassName: string;
                public static readonly iconOnlyUssClassName: string;
                public static readonly imageUSSClassName: string;
                public clickable: UnityEngine.UIElements.Clickable;
                public iconImage: UnityEngine.UIElements.Background;
                public text: string;
                constructor();
                constructor($iconImage: UnityEngine.UIElements.Background, $clickEvent?: System.Action);
                constructor($clickEvent: System.Action);
                public add_clicked(handler: System.Action): void;
                public remove_clicked(handler: System.Action): void;
            }
            namespace Button {
                class UxmlSerializedData extends UnityEngine.UIElements.TextElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Button, UnityEngine.UIElements.Button.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class RectField extends UnityEngine.UIElements.BaseCompositeField$3<UnityEngine.Rect, UnityEngine.UIElements.FloatField, number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace RectField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseCompositeField$3.UxmlSerializedData$3<UnityEngine.Rect, UnityEngine.UIElements.FloatField, number> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.RectField, UnityEngine.UIElements.RectField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Rect> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class RectIntField extends UnityEngine.UIElements.BaseCompositeField$3<UnityEngine.RectInt, UnityEngine.UIElements.IntegerField, number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace RectIntField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseCompositeField$3.UxmlSerializedData$3<UnityEngine.RectInt, UnityEngine.UIElements.IntegerField, number> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.RectIntField, UnityEngine.UIElements.RectIntField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.RectInt> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Vector2Field extends UnityEngine.UIElements.BaseCompositeField$3<UnityEngine.Vector2, UnityEngine.UIElements.FloatField, number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace Vector2Field {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseCompositeField$3.UxmlSerializedData$3<UnityEngine.Vector2, UnityEngine.UIElements.FloatField, number> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Vector2Field, UnityEngine.UIElements.Vector2Field.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Vector3Field extends UnityEngine.UIElements.BaseCompositeField$3<UnityEngine.Vector3, UnityEngine.UIElements.FloatField, number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace Vector3Field {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseCompositeField$3.UxmlSerializedData$3<UnityEngine.Vector3, UnityEngine.UIElements.FloatField, number> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Vector3Field, UnityEngine.UIElements.Vector3Field.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Vector3> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Vector4Field extends UnityEngine.UIElements.BaseCompositeField$3<UnityEngine.Vector4, UnityEngine.UIElements.FloatField, number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace Vector4Field {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseCompositeField$3.UxmlSerializedData$3<UnityEngine.Vector4, UnityEngine.UIElements.FloatField, number> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Vector4Field, UnityEngine.UIElements.Vector4Field.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Vector4> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Vector2IntField extends UnityEngine.UIElements.BaseCompositeField$3<UnityEngine.Vector2Int, UnityEngine.UIElements.IntegerField, number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace Vector2IntField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseCompositeField$3.UxmlSerializedData$3<UnityEngine.Vector2Int, UnityEngine.UIElements.IntegerField, number> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Vector2IntField, UnityEngine.UIElements.Vector2IntField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Vector2Int> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Vector3IntField extends UnityEngine.UIElements.BaseCompositeField$3<UnityEngine.Vector3Int, UnityEngine.UIElements.IntegerField, number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace Vector3IntField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseCompositeField$3.UxmlSerializedData$3<UnityEngine.Vector3Int, UnityEngine.UIElements.IntegerField, number> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Vector3IntField, UnityEngine.UIElements.Vector3IntField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Vector3Int> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class DoubleField extends UnityEngine.UIElements.TextValueField$1<number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($maxLength: number);
                constructor($label: string, $maxLength?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: number): void;
            }
            namespace DoubleField {
                class UxmlSerializedData extends UnityEngine.UIElements.TextValueField$1.UxmlSerializedData$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.DoubleField, UnityEngine.UIElements.DoubleField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextValueFieldTraits$2<number, UnityEngine.UIElements.UxmlDoubleAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class DropdownField extends UnityEngine.UIElements.PopupField$1<string> {
                protected [__keep_incompatibility]: never;
                constructor();
                constructor($label: string);
                constructor($choices: System.Collections.Generic.List$1<string>, $defaultValue: string, $formatSelectedValueCallback?: System.Func$2<string, string>, $formatListItemCallback?: System.Func$2<string, string>);
                constructor($label: string, $choices: System.Collections.Generic.List$1<string>, $defaultValue: string, $formatSelectedValueCallback?: System.Func$2<string, string>, $formatListItemCallback?: System.Func$2<string, string>);
                constructor($choices: System.Collections.Generic.List$1<string>, $defaultIndex: number, $formatSelectedValueCallback?: System.Func$2<string, string>, $formatListItemCallback?: System.Func$2<string, string>);
                constructor($label: string, $choices: System.Collections.Generic.List$1<string>, $defaultIndex: number, $formatSelectedValueCallback?: System.Func$2<string, string>, $formatListItemCallback?: System.Func$2<string, string>);
            }
            namespace DropdownField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<string> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.DropdownField, UnityEngine.UIElements.DropdownField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<string> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class EnumField extends UnityEngine.UIElements.BaseField$1<System.Enum> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly textUssClassName: string;
                public static readonly arrowUssClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public get text(): string;
                constructor();
                constructor($defaultValue: System.Enum);
                constructor($label: string, $defaultValue?: System.Enum);
                public Init($defaultValue: System.Enum): void;
                public Init($defaultValue: System.Enum, $includeObsoleteValues: boolean): void;
                public SetValueWithoutNotify($newValue: System.Enum): void;
            }
            namespace EnumField {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<System.Enum> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.EnumField, UnityEngine.UIElements.EnumField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<System.Enum> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class FloatField extends UnityEngine.UIElements.TextValueField$1<number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($maxLength: number);
                constructor($label: string, $maxLength?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: number): void;
            }
            namespace FloatField {
                class UxmlSerializedData extends UnityEngine.UIElements.TextValueField$1.UxmlSerializedData$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.FloatField, UnityEngine.UIElements.FloatField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextValueFieldTraits$2<number, UnityEngine.UIElements.UxmlFloatAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class Foldout extends UnityEngine.UIElements.BindableElement implements UnityEngine.UIElements.INotifyValueChanged$1<boolean> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly toggleUssClassName: string;
                public static readonly contentUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly checkmarkUssClassName: string;
                public static readonly textUssClassName: string;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                public focusable: boolean;
                public toggleOnLabelClick: boolean;
                public text: string;
                public value: boolean;
                constructor();
                public SetValueWithoutNotify($newValue: boolean): void;
            }
            namespace Foldout {
                class UxmlSerializedData extends UnityEngine.UIElements.BindableElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Foldout, UnityEngine.UIElements.Foldout.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BindableElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum DropdownMenuSizeMode {
                Auto = 0,
                Fixed = 1,
                Content = 2
            }

            class AbstractGenericMenu {
                protected [__keep_incompatibility]: never;
                public AddItem($itemName: string, $isChecked: boolean, $action: System.Action): void;
                public AddItem($itemName: string, $isChecked: boolean, $action: System.Action$1<any>, $data: any): void;
                public AddDisabledItem($itemName: string, $isChecked: boolean): void;
                public AddSeparator($path: string): void;
                public DropDown($position: UnityEngine.Rect, $targetElement: UnityEngine.UIElements.VisualElement, $dropdownMenuSizeMode?: UnityEngine.UIElements.DropdownMenuSizeMode): void;
            }

            class GenericDropdownMenu extends UnityEngine.UIElements.AbstractGenericMenu {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly itemUssClassName: string;
                public static readonly itemContentUssClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly containerInnerUssClassName: string;
                public static readonly containerOuterUssClassName: string;
                public static readonly checkmarkUssClassName: string;
                public static readonly separatorUssClassName: string;
                public static readonly contentWidthUssClassName: string;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                public get targetElement(): UnityEngine.UIElements.VisualElement;
                constructor();
                public AddItem($itemName: string, $isChecked: boolean, $action: System.Action): void;
                public AddItem($itemName: string, $isChecked: boolean, $action: System.Action$1<any>, $data: any): void;
                public AddDisabledItem($itemName: string, $isChecked: boolean): void;
                public AddSeparator($path: string): void;
                public DropDown($position: UnityEngine.Rect): void;
                public DropDown($position: UnityEngine.Rect, $targetElement: UnityEngine.UIElements.VisualElement, $anchored?: boolean): void;
                public DropDown($position: UnityEngine.Rect, $targetElement: UnityEngine.UIElements.VisualElement, $anchored?: boolean, $fitContentWidthIfAnchored?: boolean): void;
                public DropDown($position: UnityEngine.Rect, $targetElement: UnityEngine.UIElements.VisualElement, $dropdownMenuSizeMode?: UnityEngine.UIElements.DropdownMenuSizeMode): void;
                public add_onOpen(handler: System.Action): void;
                public remove_onOpen(handler: System.Action): void;
                public add_onClose(handler: System.Action): void;
                public remove_onClose(handler: System.Action): void;
            }

            class GroupBox extends UnityEngine.UIElements.BindableElement implements UnityEngine.UIElements.IGroupBox {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public text: string;
                constructor();
                constructor($text: string);
            }
            namespace GroupBox {
                class UxmlSerializedData extends UnityEngine.UIElements.BindableElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.GroupBox, UnityEngine.UIElements.GroupBox.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BindableElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Hash128Field extends UnityEngine.UIElements.TextInputBaseField$1<UnityEngine.Hash128> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public value: UnityEngine.Hash128;
                constructor();
                constructor($maxLength: number);
                constructor($label: string, $maxLength?: number);
                public SetValueWithoutNotify($newValue: UnityEngine.Hash128): void;
            }
            namespace Hash128Field {
                class UxmlSerializedData extends UnityEngine.UIElements.TextInputBaseField$1.UxmlSerializedData$1<UnityEngine.Hash128> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Hash128Field, UnityEngine.UIElements.Hash128Field.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextValueFieldTraits$2<UnityEngine.Hash128, UnityEngine.UIElements.UxmlHash128AttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            enum HelpBoxMessageType {
                None = 0,
                Info = 1,
                Warning = 2,
                Error = 3
            }

            class HelpBox extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly iconUssClassName: string;
                public static readonly iconInfoUssClassName: string;
                public static readonly iconwarningUssClassName: string;
                public static readonly iconErrorUssClassName: string;
                public text: string;
                public messageType: UnityEngine.UIElements.HelpBoxMessageType;
                constructor();
                constructor($text: string, $messageType: UnityEngine.UIElements.HelpBoxMessageType);
            }
            namespace HelpBox {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.HelpBox, UnityEngine.UIElements.HelpBox.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Image extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public image: UnityEngine.Texture;
                public sprite: UnityEngine.Sprite;
                public vectorImage: UnityEngine.UIElements.VectorImage;
                public sourceRect: UnityEngine.Rect;
                public uv: UnityEngine.Rect;
                public scaleMode: UnityEngine.ScaleMode;
                public tintColor: UnityEngine.Color;
                constructor();
            }
            namespace Image {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Image, UnityEngine.UIElements.Image.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                }

            }

            interface IMixedValueSupport {
                showMixedValue: boolean;
            }

            interface INotifyValueChanged<T> {
                value: T;
                SetValueWithoutNotify($newValue: T): void;
            }

            class INotifyValueChangedExtensions {
                protected [__keep_incompatibility]: never;
                public static RegisterValueChangedCallback<T>($callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.ChangeEvent$1<T>>): boolean;
                public static UnregisterValueChangedCallback<T>($callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.ChangeEvent$1<T>>): boolean;
            }

            class BaseField<TValueType> extends UnityEngine.UIElements.BindableElement implements UnityEngine.UIElements.IPrefixLabel, UnityEngine.UIElements.IEditableElement, UnityEngine.UIElements.IMixedValueSupport, UnityEngine.UIElements.INotifyValueChanged$1<TValueType> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly noLabelVariantUssClassName: string;
                public static readonly labelDraggerVariantUssClassName: string;
                public static readonly mixedValueLabelUssClassName: string;
                public static readonly alignedFieldUssClassName: string;
                public value: TValueType;
                public get labelElement(): UnityEngine.UIElements.Label;
                public label: string;
                public showMixedValue: boolean;
                public SetValueWithoutNotify($newValue: TValueType): void;
            }
            namespace BaseField {
                class UxmlSerializedData<TValueType> extends UnityEngine.UIElements.BindableElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

                class UxmlTraits<TValueType> extends UnityEngine.UIElements.BindableElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class BaseFieldTraits<TValueType, TValueUxmlAttributeType extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<TValueType>> extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<TValueType> {
                protected [__keep_incompatibility]: never;
                constructor();
                public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
            }

            class TextField extends UnityEngine.UIElements.TextInputBaseField$1<string> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public multiline: boolean;
                public value: string;
                constructor();
                constructor($maxLength: number, $multiline: boolean, $isPasswordField: boolean, $maskChar: number);
                constructor($label: string);
                constructor($label: string, $maxLength: number, $multiline: boolean, $isPasswordField: boolean, $maskChar: number);
                public SetValueWithoutNotify($newValue: string): void;
            }
            namespace TextField {
                class UxmlSerializedData extends UnityEngine.UIElements.TextInputBaseField$1.UxmlSerializedData$1<string> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.TextField, UnityEngine.UIElements.TextField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextInputBaseField$1.UxmlTraits$1<string> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class TextInputBaseField<TValueType> extends UnityEngine.UIElements.BaseField$1<TValueType> implements UnityEngine.UIElements.IDelayedField {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly singleLineInputUssClassName: string;
                public static readonly multilineInputUssClassName: string;
                public static readonly placeholderUssClassName: string;
                public static readonly textInputUssName: string;
                public get textSelection(): UnityEngine.UIElements.ITextSelection;
                public get textEdition(): UnityEngine.UIElements.ITextEdition;
                public isReadOnly: boolean;
                public isPasswordField: boolean;
                public autoCorrection: boolean;
                public hideMobileInput: boolean;
                public keyboardType: UnityEngine.TouchScreenKeyboardType;
                public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
                public maxLength: number;
                public isDelayed: boolean;
                public maskChar: number;
                public get selectionColor(): UnityEngine.Color;
                public get cursorColor(): UnityEngine.Color;
                public cursorIndex: number;
                public get cursorPosition(): UnityEngine.Vector2;
                public selectIndex: number;
                public selectAllOnFocus: boolean;
                public selectAllOnMouseUp: boolean;
                public doubleClickSelectsWord: boolean;
                public tripleClickSelectsLine: boolean;
                public get text(): string;
                public emojiFallbackSupport: boolean;
                public verticalScrollerVisibility: UnityEngine.UIElements.ScrollerVisibility;
                public SelectAll(): void;
                public SelectNone(): void;
                public SelectRange($cursorIndex: number, $selectionIndex: number): void;
                public SetVerticalScrollerVisibility($sv: UnityEngine.UIElements.ScrollerVisibility): boolean;
                public MeasureTextSize($textToMeasure: string, $width: number, $widthMode: UnityEngine.UIElements.VisualElement.MeasureMode, $height: number, $heightMode: UnityEngine.UIElements.VisualElement.MeasureMode): UnityEngine.Vector2;
            }
            namespace TextInputBaseField {
                class UxmlSerializedData<TValueType> extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<TValueType> {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlTraits<TValueType> extends UnityEngine.UIElements.BaseFieldTraits$2<string, UnityEngine.UIElements.UxmlStringAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class IntegerField extends UnityEngine.UIElements.TextValueField$1<number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($maxLength: number);
                constructor($label: string, $maxLength?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: number): void;
            }
            namespace IntegerField {
                class UxmlSerializedData extends UnityEngine.UIElements.TextValueField$1.UxmlSerializedData$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.IntegerField, UnityEngine.UIElements.IntegerField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextValueFieldTraits$2<number, UnityEngine.UIElements.UxmlIntAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class Label extends UnityEngine.UIElements.TextElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                constructor();
                constructor($text: string);
            }
            namespace Label {
                class UxmlSerializedData extends UnityEngine.UIElements.TextElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Label, UnityEngine.UIElements.Label.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class ListView extends UnityEngine.UIElements.BaseListView {
                protected [__keep_incompatibility]: never;
                public makeItem: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public itemTemplate: UnityEngine.UIElements.VisualTreeAsset;
                public bindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public unbindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public destroyItem: System.Action$1<UnityEngine.UIElements.VisualElement>;
                constructor();
                constructor($itemsSource: System.Collections.IList, $itemHeight?: number, $makeItem?: System.Func$1<UnityEngine.UIElements.VisualElement>, $bindItem?: System.Action$2<UnityEngine.UIElements.VisualElement, number>);
            }
            namespace ListView {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseListView.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.ListView, UnityEngine.UIElements.ListView.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseListView.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class LongField extends UnityEngine.UIElements.TextValueField$1<bigint> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($maxLength: number);
                constructor($label: string, $maxLength?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: bigint): void;
            }
            namespace LongField {
                class UxmlSerializedData extends UnityEngine.UIElements.TextValueField$1.UxmlSerializedData$1<bigint> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.LongField, UnityEngine.UIElements.LongField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextValueFieldTraits$2<bigint, UnityEngine.UIElements.UxmlLongAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class MinMaxSlider extends UnityEngine.UIElements.BaseField$1<UnityEngine.Vector2> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly trackerUssClassName: string;
                public static readonly draggerUssClassName: string;
                public static readonly minThumbUssClassName: string;
                public static readonly maxThumbUssClassName: string;
                public static readonly movableUssClassName: string;
                public minValue: number;
                public maxValue: number;
                public value: UnityEngine.Vector2;
                public get range(): number;
                public lowLimit: number;
                public highLimit: number;
                constructor();
                constructor($minValue: number, $maxValue: number, $minLimit: number, $maxLimit: number);
                constructor($label: string, $minValue?: number, $maxValue?: number, $minLimit?: number, $maxLimit?: number);
                public SetValueWithoutNotify($newValue: UnityEngine.Vector2): void;
            }
            namespace MinMaxSlider {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<UnityEngine.Vector2> implements UnityEngine.UIElements.IUxmlSerializedDataCustomAttributeHandler {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.MinMaxSlider, UnityEngine.UIElements.MinMaxSlider.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.Vector2> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Column implements UnityEngine.UIElements.INotifyBindablePropertyChanged {
                protected [__keep_incompatibility]: never;
                public name: string;
                public title: string;
                public icon: UnityEngine.UIElements.Background;
                public comparison: System.Comparison$1<number>;
                public visible: boolean;
                public width: UnityEngine.UIElements.Length;
                public minWidth: UnityEngine.UIElements.Length;
                public maxWidth: UnityEngine.UIElements.Length;
                public sortable: boolean;
                public stretchable: boolean;
                public optional: boolean;
                public resizable: boolean;
                public bindingPath: string;
                public headerTemplate: UnityEngine.UIElements.VisualTreeAsset;
                public cellTemplate: UnityEngine.UIElements.VisualTreeAsset;
                public makeHeader: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public bindHeader: System.Action$1<UnityEngine.UIElements.VisualElement>;
                public unbindHeader: System.Action$1<UnityEngine.UIElements.VisualElement>;
                public destroyHeader: System.Action$1<UnityEngine.UIElements.VisualElement>;
                public makeCell: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public bindCell: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public unbindCell: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public destroyCell: System.Action$1<UnityEngine.UIElements.VisualElement>;
                public get collection(): UnityEngine.UIElements.Columns;
                constructor();
                public add_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
                public remove_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
            }
            namespace Column {
                class UxmlSerializedData extends UnityEngine.UIElements.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

            }

            class Columns implements System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.Column>, System.Collections.IEnumerable, UnityEngine.UIElements.INotifyBindablePropertyChanged, System.Collections.Generic.ICollection$1<UnityEngine.UIElements.Column> {
                protected [__keep_incompatibility]: never;
                public primaryColumnName: string;
                public reorderable: boolean;
                public resizable: boolean;
                public resizePreview: boolean;
                public stretchMode: UnityEngine.UIElements.Columns.StretchMode;
                public get Count(): number;
                public get IsReadOnly(): boolean;
                constructor();
                public IsPrimary($column: UnityEngine.UIElements.Column): boolean;
                public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.UIElements.Column>;
                public Add($item: UnityEngine.UIElements.Column): void;
                public Clear(): void;
                public Contains($item: UnityEngine.UIElements.Column): boolean;
                public Contains($name: string): boolean;
                public CopyTo($array: System.Array$1<UnityEngine.UIElements.Column>, $arrayIndex: number): void;
                public Remove($column: UnityEngine.UIElements.Column): boolean;
                public IndexOf($column: UnityEngine.UIElements.Column): number;
                public Insert($index: number, $column: UnityEngine.UIElements.Column): void;
                public RemoveAt($index: number): void;
                public ReorderDisplay($from: number, $to: number): void;
                public add_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
                public remove_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
                public get_Item($index: number): UnityEngine.UIElements.Column;
                public get_Item($name: string): UnityEngine.UIElements.Column;
            }
            namespace Columns {
                enum StretchMode {
                    Grow = 0,
                    GrowAndFill = 1
                }

                class UxmlSerializedData extends UnityEngine.UIElements.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

            }

            enum ColumnSortingMode {
                None = 0,
                Default = 1,
                Custom = 2
            }

            class MultiColumnController implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public static readonly headerContainerUssClassName: string;
                public static readonly rowContainerUssClassName: string;
                public static readonly cellUssClassName: string;
                public static readonly cellLabelUssClassName: string;
                constructor($columns: UnityEngine.UIElements.Columns, $sortDescriptions: UnityEngine.UIElements.SortColumnDescriptions, $sortedColumns: System.Collections.Generic.List$1<UnityEngine.UIElements.SortColumnDescription>);
                public MakeItem(): UnityEngine.UIElements.VisualElement;
                public BindItem<T>($element: UnityEngine.UIElements.VisualElement, $index: number, $item: T): void;
                public UnbindItem($element: UnityEngine.UIElements.VisualElement, $index: number): void;
                public DestroyItem($element: UnityEngine.UIElements.VisualElement): void;
                public PrepareView($collectionView: UnityEngine.UIElements.BaseVerticalCollectionView): void;
                public Dispose(): void;
                public add_columnSortingChanged(handler: System.Action): void;
                public remove_columnSortingChanged(handler: System.Action): void;
                public add_headerContextMenuPopulateEvent(handler: System.Action$2<UnityEngine.UIElements.ContextualMenuPopulateEvent, UnityEngine.UIElements.Column>): void;
                public remove_headerContextMenuPopulateEvent(handler: System.Action$2<UnityEngine.UIElements.ContextualMenuPopulateEvent, UnityEngine.UIElements.Column>): void;
            }

            class MultiColumnListView extends UnityEngine.UIElements.BaseListView {
                protected [__keep_incompatibility]: never;
                public get viewController(): UnityEngine.UIElements.MultiColumnListViewController;
                public get sortedColumns(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.SortColumnDescription>;
                public get columns(): UnityEngine.UIElements.Columns;
                public get sortColumnDescriptions(): UnityEngine.UIElements.SortColumnDescriptions;
                public sortingEnabled: boolean;
                public sortingMode: UnityEngine.UIElements.ColumnSortingMode;
                constructor();
                constructor($columns: UnityEngine.UIElements.Columns);
                public SetViewController($controller: UnityEngine.UIElements.CollectionViewController): void;
                public add_columnSortingChanged(handler: System.Action): void;
                public remove_columnSortingChanged(handler: System.Action): void;
                public add_headerContextMenuPopulateEvent(handler: System.Action$2<UnityEngine.UIElements.ContextualMenuPopulateEvent, UnityEngine.UIElements.Column>): void;
                public remove_headerContextMenuPopulateEvent(handler: System.Action$2<UnityEngine.UIElements.ContextualMenuPopulateEvent, UnityEngine.UIElements.Column>): void;
            }
            namespace MultiColumnListView {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseListView.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.MultiColumnListView, UnityEngine.UIElements.MultiColumnListView.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseListView.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class MultiColumnTreeView extends UnityEngine.UIElements.BaseTreeView {
                protected [__keep_incompatibility]: never;
                public get viewController(): UnityEngine.UIElements.MultiColumnTreeViewController;
                public get sortedColumns(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.SortColumnDescription>;
                public get columns(): UnityEngine.UIElements.Columns;
                public get sortColumnDescriptions(): UnityEngine.UIElements.SortColumnDescriptions;
                public sortingEnabled: boolean;
                public sortingMode: UnityEngine.UIElements.ColumnSortingMode;
                constructor();
                constructor($columns: UnityEngine.UIElements.Columns);
                public SetViewController($controller: UnityEngine.UIElements.CollectionViewController): void;
                public add_columnSortingChanged(handler: System.Action): void;
                public remove_columnSortingChanged(handler: System.Action): void;
                public add_headerContextMenuPopulateEvent(handler: System.Action$2<UnityEngine.UIElements.ContextualMenuPopulateEvent, UnityEngine.UIElements.Column>): void;
                public remove_headerContextMenuPopulateEvent(handler: System.Action$2<UnityEngine.UIElements.ContextualMenuPopulateEvent, UnityEngine.UIElements.Column>): void;
            }
            namespace MultiColumnTreeView {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseTreeView.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.MultiColumnTreeView, UnityEngine.UIElements.MultiColumnTreeView.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseTreeView.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum SortDirection {
                Ascending = 0,
                Descending = 1
            }

            class SortColumnDescription implements UnityEngine.UIElements.INotifyBindablePropertyChanged {
                protected [__keep_incompatibility]: never;
                public columnName: string;
                public columnIndex: number;
                public get column(): UnityEngine.UIElements.Column;
                public direction: UnityEngine.UIElements.SortDirection;
                constructor();
                constructor($columnIndex: number, $direction: UnityEngine.UIElements.SortDirection);
                constructor($columnName: string, $direction: UnityEngine.UIElements.SortDirection);
                public add_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
                public remove_propertyChanged(handler: System.EventHandler$1<UnityEngine.UIElements.BindablePropertyChangedEventArgs>): void;
            }
            namespace SortColumnDescription {
                class UxmlSerializedData extends UnityEngine.UIElements.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

            }

            class SortColumnDescriptions implements System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.SortColumnDescription>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<UnityEngine.UIElements.SortColumnDescription> {
                protected [__keep_incompatibility]: never;
                public get Count(): number;
                public get IsReadOnly(): boolean;
                constructor();
                public GetEnumerator(): System.Collections.Generic.IEnumerator$1<UnityEngine.UIElements.SortColumnDescription>;
                public Add($item: UnityEngine.UIElements.SortColumnDescription): void;
                public Clear(): void;
                public Contains($item: UnityEngine.UIElements.SortColumnDescription): boolean;
                public CopyTo($array: System.Array$1<UnityEngine.UIElements.SortColumnDescription>, $arrayIndex: number): void;
                public Remove($desc: UnityEngine.UIElements.SortColumnDescription): boolean;
                public IndexOf($desc: UnityEngine.UIElements.SortColumnDescription): number;
                public Insert($index: number, $desc: UnityEngine.UIElements.SortColumnDescription): void;
                public RemoveAt($index: number): void;
                public get_Item($index: number): UnityEngine.UIElements.SortColumnDescription;
            }
            namespace SortColumnDescriptions {
                class UxmlSerializedData extends UnityEngine.UIElements.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

            }

            class PopupField<T> extends UnityEngine.UIElements.BasePopupField$2<T, T> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public formatSelectedValueCallback: System.Func$2<T, string>;
                public formatListItemCallback: System.Func$2<T, string>;
                public value: T;
                public index: number;
                constructor();
                constructor($label?: string);
                constructor($choices: System.Collections.Generic.List$1<T>, $defaultValue: T, $formatSelectedValueCallback?: System.Func$2<T, string>, $formatListItemCallback?: System.Func$2<T, string>);
                constructor($label: string, $choices: System.Collections.Generic.List$1<T>, $defaultValue: T, $formatSelectedValueCallback?: System.Func$2<T, string>, $formatListItemCallback?: System.Func$2<T, string>);
                constructor($choices: System.Collections.Generic.List$1<T>, $defaultIndex: number, $formatSelectedValueCallback?: System.Func$2<T, string>, $formatListItemCallback?: System.Func$2<T, string>);
                constructor($label: string, $choices: System.Collections.Generic.List$1<T>, $defaultIndex: number, $formatSelectedValueCallback?: System.Func$2<T, string>, $formatListItemCallback?: System.Func$2<T, string>);
                public SetValueWithoutNotify($newValue: T): void;
            }

            class PopupWindow extends UnityEngine.UIElements.TextElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly contentUssClassName: string;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                constructor();
            }
            namespace PopupWindow {
                class UxmlSerializedData extends UnityEngine.UIElements.TextElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.PopupWindow, UnityEngine.UIElements.PopupWindow.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                }

            }

            class AbstractProgressBar extends UnityEngine.UIElements.BindableElement implements UnityEngine.UIElements.INotifyValueChanged$1<number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly containerUssClassName: string;
                public static readonly titleUssClassName: string;
                public static readonly titleContainerUssClassName: string;
                public static readonly progressUssClassName: string;
                public static readonly backgroundUssClassName: string;
                public title: string;
                public lowValue: number;
                public highValue: number;
                public value: number;
                public SetValueWithoutNotify($newValue: number): void;
            }
            namespace AbstractProgressBar {
                class UxmlSerializedData extends UnityEngine.UIElements.BindableElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

                class UxmlTraits extends UnityEngine.UIElements.BindableElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class ProgressBar extends UnityEngine.UIElements.AbstractProgressBar {
                protected [__keep_incompatibility]: never;
                constructor();
            }
            namespace ProgressBar {
                class UxmlSerializedData extends UnityEngine.UIElements.AbstractProgressBar.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.ProgressBar, UnityEngine.UIElements.AbstractProgressBar.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class RadioButton extends UnityEngine.UIElements.BaseBoolField implements UnityEngine.UIElements.IGroupBoxOption {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly checkmarkBackgroundUssClassName: string;
                public static readonly checkmarkUssClassName: string;
                public static readonly textUssClassName: string;
                public value: boolean;
                constructor();
                constructor($label: string);
                public SetSelected($selected: boolean): void;
                public SetValueWithoutNotify($newValue: boolean): void;
            }
            namespace RadioButton {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseBoolField.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.RadioButton, UnityEngine.UIElements.RadioButton.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseFieldTraits$2<boolean, UnityEngine.UIElements.UxmlBoolAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class RadioButtonGroup extends UnityEngine.UIElements.BaseField$1<number> implements UnityEngine.UIElements.IGroupBox {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly containerUssClassName: string;
                public choices: System.Collections.Generic.IEnumerable$1<string>;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                constructor();
                constructor($label: string, $radioButtonChoices?: System.Collections.Generic.List$1<string>);
                public SetValueWithoutNotify($newValue: number): void;
            }
            namespace RadioButtonGroup {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.RadioButtonGroup, UnityEngine.UIElements.RadioButtonGroup.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseFieldTraits$2<number, UnityEngine.UIElements.UxmlIntAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class RepeatButton extends UnityEngine.UIElements.TextElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                constructor();
                constructor($clickEvent: System.Action, $delay: bigint, $interval: bigint);
                public SetAction($clickEvent: System.Action, $delay: bigint, $interval: bigint): void;
            }
            namespace RepeatButton {
                class UxmlSerializedData extends UnityEngine.UIElements.TextElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.RepeatButton, UnityEngine.UIElements.RepeatButton.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Scroller extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly horizontalVariantUssClassName: string;
                public static readonly verticalVariantUssClassName: string;
                public static readonly sliderUssClassName: string;
                public static readonly lowButtonUssClassName: string;
                public static readonly highButtonUssClassName: string;
                public get slider(): UnityEngine.UIElements.Slider;
                public get lowButton(): UnityEngine.UIElements.RepeatButton;
                public get highButton(): UnityEngine.UIElements.RepeatButton;
                public value: number;
                public lowValue: number;
                public highValue: number;
                public direction: UnityEngine.UIElements.SliderDirection;
                constructor();
                constructor($lowValue: number, $highValue: number, $valueChanged: System.Action$1<number>, $direction?: UnityEngine.UIElements.SliderDirection);
                public Adjust($factor: number): void;
                public ScrollPageUp(): void;
                public ScrollPageDown(): void;
                public ScrollPageUp($factor: number): void;
                public ScrollPageDown($factor: number): void;
                public add_valueChanged(handler: System.Action$1<number>): void;
                public remove_valueChanged(handler: System.Action$1<number>): void;
            }
            namespace Scroller {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Scroller, UnityEngine.UIElements.Scroller.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum ScrollViewMode {
                Vertical = 0,
                Horizontal = 1,
                VerticalAndHorizontal = 2
            }

            enum ScrollerVisibility {
                Auto = 0,
                AlwaysVisible = 1,
                Hidden = 2
            }

            class ScrollView extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly viewportUssClassName: string;
                public static readonly horizontalVariantViewportUssClassName: string;
                public static readonly verticalVariantViewportUssClassName: string;
                public static readonly verticalHorizontalVariantViewportUssClassName: string;
                public static readonly contentAndVerticalScrollUssClassName: string;
                public static readonly contentUssClassName: string;
                public static readonly horizontalVariantContentUssClassName: string;
                public static readonly verticalVariantContentUssClassName: string;
                public static readonly verticalHorizontalVariantContentUssClassName: string;
                public static readonly hScrollerUssClassName: string;
                public static readonly vScrollerUssClassName: string;
                public static readonly horizontalVariantUssClassName: string;
                public static readonly verticalVariantUssClassName: string;
                public static readonly verticalHorizontalVariantUssClassName: string;
                public static readonly scrollVariantUssClassName: string;
                public horizontalScrollerVisibility: UnityEngine.UIElements.ScrollerVisibility;
                public verticalScrollerVisibility: UnityEngine.UIElements.ScrollerVisibility;
                public elasticAnimationIntervalMs: bigint;
                public showHorizontal: boolean;
                public showVertical: boolean;
                public scrollOffset: UnityEngine.Vector2;
                public horizontalPageSize: number;
                public verticalPageSize: number;
                public mouseWheelScrollSize: number;
                public scrollDecelerationRate: number;
                public elasticity: number;
                public touchScrollBehavior: UnityEngine.UIElements.ScrollView.TouchScrollBehavior;
                public nestedInteractionKind: UnityEngine.UIElements.ScrollView.NestedInteractionKind;
                public get contentViewport(): UnityEngine.UIElements.VisualElement;
                public get horizontalScroller(): UnityEngine.UIElements.Scroller;
                public get verticalScroller(): UnityEngine.UIElements.Scroller;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                public mode: UnityEngine.UIElements.ScrollViewMode;
                constructor();
                constructor($scrollViewMode: UnityEngine.UIElements.ScrollViewMode);
                public ScrollTo($child: UnityEngine.UIElements.VisualElement): void;
            }
            namespace ScrollView {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.ScrollView, UnityEngine.UIElements.ScrollView.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

                enum TouchScrollBehavior {
                    Unrestricted = 0,
                    Elastic = 1,
                    Clamped = 2
                }

                enum NestedInteractionKind {
                    Default = 0,
                    StopScrolling = 1,
                    ForwardScrolling = 2
                }

            }

            class Slider extends UnityEngine.UIElements.BaseSlider$1<number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($start: number, $end: number, $direction?: UnityEngine.UIElements.SliderDirection, $pageSize?: number);
                constructor($label: string, $start?: number, $end?: number, $direction?: UnityEngine.UIElements.SliderDirection, $pageSize?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: number): void;
            }
            namespace Slider {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseSlider$1.UxmlSerializedData$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Slider, UnityEngine.UIElements.Slider.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseSlider$1.UxmlTraits$2<number, UnityEngine.UIElements.UxmlFloatAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class SliderInt extends UnityEngine.UIElements.BaseSlider$1<number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public pageSize: number;
                constructor();
                constructor($start: number, $end: number, $direction?: UnityEngine.UIElements.SliderDirection, $pageSize?: number);
                constructor($label: string, $start?: number, $end?: number, $direction?: UnityEngine.UIElements.SliderDirection, $pageSize?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: number): void;
            }
            namespace SliderInt {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseSlider$1.UxmlSerializedData$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.SliderInt, UnityEngine.UIElements.SliderInt.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseSlider$1.UxmlTraits$2<number, UnityEngine.UIElements.UxmlIntAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class Tab extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly tabHeaderUssClassName: string;
                public static readonly tabHeaderImageUssClassName: string;
                public static readonly tabHeaderEmptyImageUssClassName: string;
                public static readonly tabHeaderStandaloneImageUssClassName: string;
                public static readonly tabHeaderLabelUssClassName: string;
                public static readonly tabHeaderEmptyLabeUssClassName: string;
                public static readonly tabHeaderUnderlineUssClassName: string;
                public static readonly contentUssClassName: string;
                public static readonly draggingUssClassName: string;
                public static readonly reorderableUssClassName: string;
                public static readonly reorderableItemHandleUssClassName: string;
                public static readonly reorderableItemHandleBarUssClassName: string;
                public static readonly closeableUssClassName: string;
                public static readonly closeButtonUssClassName: string;
                public get tabHeader(): UnityEngine.UIElements.VisualElement;
                public label: string;
                public iconImage: UnityEngine.UIElements.Background;
                public closeable: boolean;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                constructor();
                constructor($label: string);
                constructor($iconImage: UnityEngine.UIElements.Background);
                constructor($label: string, $iconImage: UnityEngine.UIElements.Background);
                public add_selected(handler: System.Action$1<UnityEngine.UIElements.Tab>): void;
                public remove_selected(handler: System.Action$1<UnityEngine.UIElements.Tab>): void;
                public add_closing(handler: System.Func$1<boolean>): void;
                public remove_closing(handler: System.Func$1<boolean>): void;
                public add_closed(handler: System.Action$1<UnityEngine.UIElements.Tab>): void;
                public remove_closed(handler: System.Action$1<UnityEngine.UIElements.Tab>): void;
            }
            namespace Tab {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Tab, UnityEngine.UIElements.Tab.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class TabView extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly headerContainerClassName: string;
                public static readonly contentContainerUssClassName: string;
                public static readonly reorderableUssClassName: string;
                public static readonly verticalUssClassName: string;
                public static readonly viewportUssClassName: string;
                public static readonly nextButtonUssClassName: string;
                public static readonly previousButtonUssClassName: string;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                public get contentViewport(): UnityEngine.UIElements.VisualElement;
                public activeTab: UnityEngine.UIElements.Tab;
                public selectedTabIndex: number;
                public reorderable: boolean;
                constructor();
                public ReorderTab($from: number, $to: number): void;
                public GetTab($index: number): UnityEngine.UIElements.Tab;
                public GetTabHeader($index: number): UnityEngine.UIElements.VisualElement;
                public add_activeTabChanged(handler: System.Action$2<UnityEngine.UIElements.Tab, UnityEngine.UIElements.Tab>): void;
                public remove_activeTabChanged(handler: System.Action$2<UnityEngine.UIElements.Tab, UnityEngine.UIElements.Tab>): void;
                public add_tabReordered(handler: System.Action$2<number, number>): void;
                public remove_tabReordered(handler: System.Action$2<number, number>): void;
                public add_tabClosed(handler: System.Action$2<UnityEngine.UIElements.Tab, number>): void;
                public remove_tabClosed(handler: System.Action$2<UnityEngine.UIElements.Tab, number>): void;
            }
            namespace TabView {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.TabView, UnityEngine.UIElements.TabView.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum DeltaSpeed {
                Fast = 0,
                Normal = 1,
                Slow = 2
            }

            interface IValueField<T> {
                value: T;
                ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: T): void;
                StartDragging(): void;
                StopDragging(): void;
            }

            class TextValueField<TValueType> extends UnityEngine.UIElements.TextInputBaseField$1<TValueType> implements UnityEngine.UIElements.IValueField$1<TValueType> {
                protected [__keep_incompatibility]: never;
                public supportExpressions: boolean;
                public formatString: string;
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: TValueType): void;
                public StartDragging(): void;
                public StopDragging(): void;
                public SetValueWithoutNotify($newValue: TValueType): void;
                public ClearValue(): void;
            }
            namespace TextValueField {
                class UxmlSerializedData<TValueType> extends UnityEngine.UIElements.TextInputBaseField$1.UxmlSerializedData$1<TValueType> {
                    protected [__keep_incompatibility]: never;
                    public static Register(): void;
                    public Deserialize($obj: any): void;
                }

            }

            class TextValueFieldTraits<TValueType, TValueUxmlAttributeType extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<TValueType>> extends UnityEngine.UIElements.BaseFieldTraits$2<TValueType, TValueUxmlAttributeType> {
                protected [__keep_incompatibility]: never;
                constructor();
                public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
            }

            class Toggle extends UnityEngine.UIElements.BaseBoolField {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                public static readonly noTextVariantUssClassName: string;
                public static readonly checkmarkUssClassName: string;
                public static readonly textUssClassName: string;
                public static readonly mixedValuesUssClassName: string;
                constructor();
                constructor($label: string);
            }
            namespace Toggle {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseBoolField.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.Toggle, UnityEngine.UIElements.Toggle.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseFieldTraits$2<boolean, UnityEngine.UIElements.UxmlBoolAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class ToggleButtonGroup extends UnityEngine.UIElements.BaseField$1<UnityEngine.UIElements.ToggleButtonGroupState> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly containerUssClassName: string;
                public static readonly buttonGroupClassName: string;
                public static readonly buttonClassName: string;
                public static readonly buttonLeftClassName: string;
                public static readonly buttonMidClassName: string;
                public static readonly buttonRightClassName: string;
                public static readonly buttonStandaloneClassName: string;
                public static readonly emptyStateLabelClassName: string;
                public isMultipleSelection: boolean;
                public allowEmptySelection: boolean;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                constructor();
                constructor($label: string);
                constructor($toggleButtonGroupState: UnityEngine.UIElements.ToggleButtonGroupState);
                constructor($label: string, $toggleButtonGroupState: UnityEngine.UIElements.ToggleButtonGroupState);
                public SetValueWithoutNotify($newValue: UnityEngine.UIElements.ToggleButtonGroupState): void;
                public GetButton($index: number): UnityEngine.UIElements.Button;
            }
            namespace ToggleButtonGroup {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseField$1.UxmlSerializedData$1<UnityEngine.UIElements.ToggleButtonGroupState> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.ToggleButtonGroup, UnityEngine.UIElements.ToggleButtonGroup.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseField$1.UxmlTraits$1<UnityEngine.UIElements.ToggleButtonGroupState> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class ToggleButtonGroupState implements System.IEquatable$1<UnityEngine.UIElements.ToggleButtonGroupState>, System.IComparable$1<UnityEngine.UIElements.ToggleButtonGroupState> {
                protected [__keep_incompatibility]: never;
                public get length(): number;
                constructor($optionsBitMask: bigint, $length: number);
                public GetActiveOptions($activeOptionsIndices: System.Span$1<number>): System.Span$1<number>;
                public GetInactiveOptions($inactiveOptionsIndices: System.Span$1<number>): System.Span$1<number>;
                public SetAllOptions(): void;
                public ResetAllOptions(): void;
                public ToggleAllOptions(): void;
                public static CreateFromOptions($options: System.Collections.Generic.IList$1<boolean>): UnityEngine.UIElements.ToggleButtonGroupState;
                public static FromEnumFlags<T extends System.Enum>($options: T, $length?: number): UnityEngine.UIElements.ToggleButtonGroupState;
                public static ToEnumFlags<T extends System.Enum>($options: UnityEngine.UIElements.ToggleButtonGroupState, $acceptsLengthMismatch?: boolean): T;
                public CompareTo($other: UnityEngine.UIElements.ToggleButtonGroupState): number;
                public static Compare<T extends System.Enum>($options: UnityEngine.UIElements.ToggleButtonGroupState, $value: T): boolean;
                public Equals($other: UnityEngine.UIElements.ToggleButtonGroupState): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
                public get_Item($index: number): boolean;
                public set_Item($index: number, value: boolean): void;
            }

            class ToggleButtonGroupStatePropertiesAttribute extends UnityEngine.PropertyAttribute {
                protected [__keep_incompatibility]: never;
                public get allowMultipleSelection(): boolean;
                public get allowEmptySelection(): boolean;
                public get length(): number;
                constructor($allowMultipleSelection?: boolean, $allowEmptySelection?: boolean, $length?: number);
            }

            class TreeView extends UnityEngine.UIElements.BaseTreeView {
                protected [__keep_incompatibility]: never;
                public makeItem: System.Func$1<UnityEngine.UIElements.VisualElement>;
                public itemTemplate: UnityEngine.UIElements.VisualTreeAsset;
                public bindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public unbindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>;
                public destroyItem: System.Action$1<UnityEngine.UIElements.VisualElement>;
                public get viewController(): UnityEngine.UIElements.TreeViewController;
                constructor();
                constructor($makeItem: System.Func$1<UnityEngine.UIElements.VisualElement>, $bindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>);
                constructor($itemHeight: number, $makeItem: System.Func$1<UnityEngine.UIElements.VisualElement>, $bindItem: System.Action$2<UnityEngine.UIElements.VisualElement, number>);
            }
            namespace TreeView {
                class UxmlSerializedData extends UnityEngine.UIElements.BaseTreeView.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.TreeView, UnityEngine.UIElements.TreeView.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BaseTreeView.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class TreeViewItemData<T> {
                protected [__keep_incompatibility]: never;
                public get id(): number;
                public get data(): T;
                public get children(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.TreeViewItemData$1<T>>;
                public get hasChildren(): boolean;
                constructor($id: number, $data: T, $children?: System.Collections.Generic.List$1<UnityEngine.UIElements.TreeViewItemData$1<T>>);
            }

            class TwoPaneSplitView extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public get fixedPane(): UnityEngine.UIElements.VisualElement;
                public get flexedPane(): UnityEngine.UIElements.VisualElement;
                public fixedPaneIndex: number;
                public fixedPaneInitialDimension: number;
                public orientation: UnityEngine.UIElements.TwoPaneSplitViewOrientation;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                constructor();
                constructor($fixedPaneIndex: number, $fixedPaneStartDimension: number, $orientation: UnityEngine.UIElements.TwoPaneSplitViewOrientation);
                public CollapseChild($index: number): void;
                public UnCollapse(): void;
            }
            namespace TwoPaneSplitView {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.TwoPaneSplitView, UnityEngine.UIElements.TwoPaneSplitView.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum TwoPaneSplitViewOrientation {
                Horizontal = 0,
                Vertical = 1
            }

            class UnsignedIntegerField extends UnityEngine.UIElements.TextValueField$1<number> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($maxLength: number);
                constructor($label: string, $maxLength?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: number): void;
            }
            namespace UnsignedIntegerField {
                class UxmlSerializedData extends UnityEngine.UIElements.TextValueField$1.UxmlSerializedData$1<number> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.UnsignedIntegerField, UnityEngine.UIElements.UnsignedIntegerField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextValueFieldTraits$2<number, UnityEngine.UIElements.UxmlUnsignedIntAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class UnsignedLongField extends UnityEngine.UIElements.TextValueField$1<bigint> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly labelUssClassName: string;
                public static readonly inputUssClassName: string;
                constructor();
                constructor($maxLength: number);
                constructor($label: string, $maxLength?: number);
                public ApplyInputDeviceDelta($delta: UnityEngine.Vector3, $speed: UnityEngine.UIElements.DeltaSpeed, $startValue: bigint): void;
            }
            namespace UnsignedLongField {
                class UxmlSerializedData extends UnityEngine.UIElements.TextValueField$1.UxmlSerializedData$1<bigint> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.UnsignedLongField, UnityEngine.UIElements.UnsignedLongField.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.TextValueFieldTraits$2<bigint, UnityEngine.UIElements.UxmlUnsignedLongAttributeDescription> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            class Cursor implements System.IEquatable$1<UnityEngine.UIElements.Cursor> {
                protected [__keep_incompatibility]: never;
                public texture: UnityEngine.Texture2D;
                public hotspot: UnityEngine.Vector2;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.Cursor): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class DragAndDropData implements UnityEngine.UIElements.IDragAndDropData {
                protected [__keep_incompatibility]: never;
                public get source(): any;
                public get visualMode(): UnityEngine.UIElements.DragVisualMode;
                public get unityObjectReferences(): System.Collections.Generic.IEnumerable$1<UnityEngine.Object>;
                public get entityIds(): System.Collections.Generic.IReadOnlyList$1<UnityEngine.EntityId>;
                public paths: System.Array$1<string>;
                public GetGenericData($key: string): any;
                public SetGenericData($key: string, $data: any): void;
            }

            enum DragAndDropPosition {
                OverItem = 0,
                BetweenItems = 1,
                OutsideItems = 2
            }

            enum DragVisualMode {
                None = 0,
                Copy = 1,
                Move = 2,
                Rejected = 3
            }

            class CanStartDragArgs {
                protected [__keep_incompatibility]: never;
                public readonly draggedElement: UnityEngine.UIElements.VisualElement;
                public readonly id: number;
                public readonly selectedIds: System.Collections.Generic.IEnumerable$1<number>;
            }

            class SetupDragAndDropArgs {
                protected [__keep_incompatibility]: never;
                public readonly draggedElement: UnityEngine.UIElements.VisualElement;
                public readonly selectedIds: System.Collections.Generic.IEnumerable$1<number>;
                public readonly startDragArgs: UnityEngine.UIElements.StartDragArgs;
            }

            class HandleDragAndDropArgs {
                protected [__keep_incompatibility]: never;
                public get position(): UnityEngine.Vector2;
                public get target(): any;
                public get insertAtIndex(): number;
                public get parentId(): number;
                public get childIndex(): number;
                public get dropPosition(): UnityEngine.UIElements.DragAndDropPosition;
                public get dragAndDropData(): UnityEngine.UIElements.DragAndDropData;
            }

            class StartDragArgs {
                protected [__keep_incompatibility]: never;
                public get title(): string;
                public get visualMode(): UnityEngine.UIElements.DragVisualMode;
                constructor($title: string, $visualMode: UnityEngine.UIElements.DragVisualMode);
                public SetGenericData($key: string, $data: any): void;
                public SetUnityObjectReferences($references: System.Collections.Generic.IEnumerable$1<UnityEngine.Object>): void;
                public SetEntityIds($ids: System.Collections.Generic.IReadOnlyList$1<UnityEngine.EntityId>): void;
                public SetPaths($paths: System.Array$1<string>): void;
            }

            class DropdownMenuEventInfo {
                protected [__keep_incompatibility]: never;
                public get modifiers(): UnityEngine.EventModifiers;
                public get mousePosition(): UnityEngine.Vector2;
                public get localMousePosition(): UnityEngine.Vector2;
                constructor($e: UnityEngine.UIElements.EventBase);
            }

            class DropdownMenuItem {
                protected [__keep_incompatibility]: never;
            }

            class DropdownMenuSeparator extends UnityEngine.UIElements.DropdownMenuItem {
                protected [__keep_incompatibility]: never;
                public get subMenuPath(): string;
                constructor($subMenuPath: string);
            }

            class DropdownMenuAction extends UnityEngine.UIElements.DropdownMenuItem {
                protected [__keep_incompatibility]: never;
                public get name(): string;
                public get status(): UnityEngine.UIElements.DropdownMenuAction.Status;
                public get eventInfo(): UnityEngine.UIElements.DropdownMenuEventInfo;
                public get userData(): any;
                constructor($actionName: string, $actionCallback: System.Action$1<UnityEngine.UIElements.DropdownMenuAction>, $actionStatusCallback: System.Func$2<UnityEngine.UIElements.DropdownMenuAction, UnityEngine.UIElements.DropdownMenuAction.Status>, $userData?: any);
                public static AlwaysEnabled($a: UnityEngine.UIElements.DropdownMenuAction): UnityEngine.UIElements.DropdownMenuAction.Status;
                public static AlwaysDisabled($a: UnityEngine.UIElements.DropdownMenuAction): UnityEngine.UIElements.DropdownMenuAction.Status;
                public UpdateActionStatus($eventInfo: UnityEngine.UIElements.DropdownMenuEventInfo): void;
                public Execute(): void;
            }
            namespace DropdownMenuAction {
                enum Status {
                    None = 0,
                    Normal = 1,
                    Disabled = 2,
                    Checked = 4,
                    Hidden = 8
                }

            }

            class DropdownMenu {
                protected [__keep_incompatibility]: never;
                public allowDuplicateNames: boolean;
                constructor();
                public MenuItems(): System.Collections.Generic.List$1<UnityEngine.UIElements.DropdownMenuItem>;
                public AppendAction($actionName: string, $action: System.Action$1<UnityEngine.UIElements.DropdownMenuAction>, $actionStatusCallback: System.Func$2<UnityEngine.UIElements.DropdownMenuAction, UnityEngine.UIElements.DropdownMenuAction.Status>, $userData?: any): void;
                public AppendAction($actionName: string, $action: System.Action$1<UnityEngine.UIElements.DropdownMenuAction>, $status?: UnityEngine.UIElements.DropdownMenuAction.Status): void;
                public InsertAction($atIndex: number, $actionName: string, $action: System.Action$1<UnityEngine.UIElements.DropdownMenuAction>, $actionStatusCallback: System.Func$2<UnityEngine.UIElements.DropdownMenuAction, UnityEngine.UIElements.DropdownMenuAction.Status>, $userData?: any): void;
                public InsertAction($atIndex: number, $actionName: string, $action: System.Action$1<UnityEngine.UIElements.DropdownMenuAction>, $status?: UnityEngine.UIElements.DropdownMenuAction.Status): void;
                public AppendSeparator($subMenuPath?: string): void;
                public InsertSeparator($subMenuPath: string, $atIndex: number): void;
                public RemoveItemAt($index: number): void;
                public ClearItems(): void;
                public PrepareForDisplay($e: UnityEngine.UIElements.EventBase): void;
            }

            class EventDispatcherGate implements System.IEquatable$1<UnityEngine.UIElements.EventDispatcherGate>, System.IDisposable {
                protected [__keep_incompatibility]: never;
                constructor($d: UnityEngine.UIElements.EventDispatcher);
                public Dispose(): void;
                public Equals($other: UnityEngine.UIElements.EventDispatcherGate): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }

            class EventDispatcher {
                protected [__keep_incompatibility]: never;
            }

            interface IPointerCaptureEvent {
            }

            class PointerCaptureEventBase<T extends UnityEngine.UIElements.PointerCaptureEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.IPointerCaptureEventInternal, UnityEngine.UIElements.IPointerCaptureEvent {
                protected [__keep_incompatibility]: never;
                public get relatedTarget(): UnityEngine.UIElements.IEventHandler;
                public get pointerId(): number;
                public static GetPooled($target: UnityEngine.UIElements.IEventHandler, $relatedTarget: UnityEngine.UIElements.IEventHandler, $pointerId: number): T;
            }

            class PointerCaptureOutEvent extends UnityEngine.UIElements.PointerCaptureEventBase$1<UnityEngine.UIElements.PointerCaptureOutEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerCaptureEvent extends UnityEngine.UIElements.PointerCaptureEventBase$1<UnityEngine.UIElements.PointerCaptureEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            interface IMouseCaptureEvent {
            }

            class MouseCaptureEventBase<T extends UnityEngine.UIElements.MouseCaptureEventBase$1<T>> extends UnityEngine.UIElements.PointerCaptureEventBase$1<T> implements UnityEngine.UIElements.IMouseCaptureEvent {
                protected [__keep_incompatibility]: never;
                public get relatedTarget(): UnityEngine.UIElements.IEventHandler;
                public static GetPooled($target: UnityEngine.UIElements.IEventHandler, $relatedTarget: UnityEngine.UIElements.IEventHandler): T;
            }

            class MouseCaptureOutEvent extends UnityEngine.UIElements.MouseCaptureEventBase$1<UnityEngine.UIElements.MouseCaptureOutEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class MouseCaptureEvent extends UnityEngine.UIElements.MouseCaptureEventBase$1<UnityEngine.UIElements.MouseCaptureEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            interface IChangeEvent {
            }

            class ChangeEvent<T> extends UnityEngine.UIElements.EventBase$1<UnityEngine.UIElements.ChangeEvent$1<T>> implements UnityEngine.UIElements.IChangeEvent {
                protected [__keep_incompatibility]: never;
                public get previousValue(): T;
                public get newValue(): T;
                constructor();
                public static GetPooled($previousValue: T, $newValue: T): UnityEngine.UIElements.ChangeEvent$1<T>;
            }

            interface ICommandEvent {
                get commandName(): string;
            }

            class CommandEventBase<T extends UnityEngine.UIElements.CommandEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.ICommandEvent {
                protected [__keep_incompatibility]: never;
                public get commandName(): string;
                public static GetPooled($systemEvent: UnityEngine.Event): T;
                public static GetPooled($commandName: string): T;
            }

            class ValidateCommandEvent extends UnityEngine.UIElements.CommandEventBase$1<UnityEngine.UIElements.ValidateCommandEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class ExecuteCommandEvent extends UnityEngine.UIElements.CommandEventBase$1<UnityEngine.UIElements.ExecuteCommandEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            interface IDragAndDropEvent {
            }

            class DragAndDropEventBase<T extends UnityEngine.UIElements.DragAndDropEventBase$1<T>> extends UnityEngine.UIElements.MouseEventBase$1<T> implements UnityEngine.UIElements.IDragAndDropEvent {
                protected [__keep_incompatibility]: never;
            }

            class DragExitedEvent extends UnityEngine.UIElements.DragAndDropEventBase$1<UnityEngine.UIElements.DragExitedEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.DragExitedEvent;
            }

            class DragEnterEvent extends UnityEngine.UIElements.DragAndDropEventBase$1<UnityEngine.UIElements.DragEnterEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class DragLeaveEvent extends UnityEngine.UIElements.DragAndDropEventBase$1<UnityEngine.UIElements.DragLeaveEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class DragUpdatedEvent extends UnityEngine.UIElements.DragAndDropEventBase$1<UnityEngine.UIElements.DragUpdatedEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.DragUpdatedEvent;
            }

            class DragPerformEvent extends UnityEngine.UIElements.DragAndDropEventBase$1<UnityEngine.UIElements.DragPerformEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class EventBase implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public get eventTypeId(): bigint;
                public get timestamp(): bigint;
                public get bubbles(): boolean;
                public get tricklesDown(): boolean;
                public target: UnityEngine.UIElements.IEventHandler;
                public get isPropagationStopped(): boolean;
                public get isImmediatePropagationStopped(): boolean;
                public get isDefaultPrevented(): boolean;
                public get propagationPhase(): UnityEngine.UIElements.PropagationPhase;
                public get currentTarget(): UnityEngine.UIElements.IEventHandler;
                public get dispatch(): boolean;
                public get imguiEvent(): UnityEngine.Event;
                public get originalMousePosition(): UnityEngine.Vector2;
                public StopPropagation(): void;
                public StopImmediatePropagation(): void;
                public PreventDefault(): void;
                public Dispose(): void;
            }

            class EventBase<T extends UnityEngine.UIElements.EventBase$1<T>> extends UnityEngine.UIElements.EventBase {
                protected [__keep_incompatibility]: never;
                public get eventTypeId(): bigint;
                public static TypeId(): bigint;
                public static GetPooled(): T;
                public Dispose(): void;
            }

            interface EventCallback<TEventType> {
                ($evt: TEventType): void;
                Invoke?: ($evt: TEventType) => void;
            }

            interface EventCallback<TEventType, TCallbackArgs> {
                ($evt: TEventType, $userArgs: TCallbackArgs): void;
                Invoke?: ($evt: TEventType, $userArgs: TCallbackArgs) => void;
            }

            enum TrickleDown {
                NoTrickleDown = 0,
                TrickleDown = 1
            }

            enum PropagationPhase {
                None = 0,
                TrickleDown = 1,
                AtTarget = 2,
                BubbleUp = 3,
                DefaultAction = 4,
                DefaultActionAtTarget = 5
            }

            interface IEventHandler {
                SendEvent($e: UnityEngine.UIElements.EventBase): void;
                HandleEvent($evt: UnityEngine.UIElements.EventBase): void;
                HasTrickleDownHandlers(): boolean;
                HasBubbleUpHandlers(): boolean;
            }

            class CallbackEventHandler implements UnityEngine.UIElements.IEventHandler {
                protected [__keep_incompatibility]: never;
                public RegisterCallback<TEventType extends UnityEngine.UIElements.EventBase$1<TEventType>>($callback: UnityEngine.UIElements.EventCallback$1<TEventType>, $useTrickleDown?: UnityEngine.UIElements.TrickleDown): void;
                public RegisterCallbackOnce<TEventType extends UnityEngine.UIElements.EventBase$1<TEventType>>($callback: UnityEngine.UIElements.EventCallback$1<TEventType>, $useTrickleDown?: UnityEngine.UIElements.TrickleDown): void;
                public RegisterCallback<TEventType extends UnityEngine.UIElements.EventBase$1<TEventType>, TUserArgsType>($callback: UnityEngine.UIElements.EventCallback$2<TEventType, TUserArgsType>, $userArgs: TUserArgsType, $useTrickleDown?: UnityEngine.UIElements.TrickleDown): void;
                public RegisterCallbackOnce<TEventType extends UnityEngine.UIElements.EventBase$1<TEventType>, TUserArgsType>($callback: UnityEngine.UIElements.EventCallback$2<TEventType, TUserArgsType>, $userArgs: TUserArgsType, $useTrickleDown?: UnityEngine.UIElements.TrickleDown): void;
                public UnregisterCallback<TEventType extends UnityEngine.UIElements.EventBase$1<TEventType>>($callback: UnityEngine.UIElements.EventCallback$1<TEventType>, $useTrickleDown?: UnityEngine.UIElements.TrickleDown): void;
                public UnregisterCallback<TEventType extends UnityEngine.UIElements.EventBase$1<TEventType>, TUserArgsType>($callback: UnityEngine.UIElements.EventCallback$2<TEventType, TUserArgsType>, $useTrickleDown?: UnityEngine.UIElements.TrickleDown): void;
                public SendEvent($e: UnityEngine.UIElements.EventBase): void;
                public HasTrickleDownHandlers(): boolean;
                public HasBubbleUpHandlers(): boolean;
            }

            interface IFocusEvent {
                get relatedTarget(): UnityEngine.UIElements.Focusable;
                get direction(): UnityEngine.UIElements.FocusChangeDirection;
            }

            class FocusEventBase<T extends UnityEngine.UIElements.FocusEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.IFocusEvent {
                protected [__keep_incompatibility]: never;
                public get relatedTarget(): UnityEngine.UIElements.Focusable;
                public get direction(): UnityEngine.UIElements.FocusChangeDirection;
                public static GetPooled($target: UnityEngine.UIElements.IEventHandler, $relatedTarget: UnityEngine.UIElements.Focusable, $direction: UnityEngine.UIElements.FocusChangeDirection, $focusController: UnityEngine.UIElements.FocusController, $bIsFocusDelegated?: boolean): T;
            }

            class FocusOutEvent extends UnityEngine.UIElements.FocusEventBase$1<UnityEngine.UIElements.FocusOutEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class BlurEvent extends UnityEngine.UIElements.FocusEventBase$1<UnityEngine.UIElements.BlurEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class FocusInEvent extends UnityEngine.UIElements.FocusEventBase$1<UnityEngine.UIElements.FocusInEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class FocusEvent extends UnityEngine.UIElements.FocusEventBase$1<UnityEngine.UIElements.FocusEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class InputEvent extends UnityEngine.UIElements.EventBase$1<UnityEngine.UIElements.InputEvent> {
                protected [__keep_incompatibility]: never;
                public get previousData(): string;
                public get newData(): string;
                constructor();
                public static GetPooled($previousData: string, $newData: string): UnityEngine.UIElements.InputEvent;
            }

            interface IKeyboardEvent {
                get modifiers(): UnityEngine.EventModifiers;
                get character(): number;
                get keyCode(): UnityEngine.KeyCode;
                get shiftKey(): boolean;
                get ctrlKey(): boolean;
                get commandKey(): boolean;
                get altKey(): boolean;
                get actionKey(): boolean;
            }

            class KeyboardEventBase<T extends UnityEngine.UIElements.KeyboardEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.IKeyboardEvent {
                protected [__keep_incompatibility]: never;
                public get modifiers(): UnityEngine.EventModifiers;
                public get character(): number;
                public get keyCode(): UnityEngine.KeyCode;
                public get shiftKey(): boolean;
                public get ctrlKey(): boolean;
                public get commandKey(): boolean;
                public get altKey(): boolean;
                public get actionKey(): boolean;
                public static GetPooled($c: number, $keyCode: UnityEngine.KeyCode, $modifiers: UnityEngine.EventModifiers): T;
                public static GetPooled($systemEvent: UnityEngine.Event): T;
            }

            class KeyDownEvent extends UnityEngine.UIElements.KeyboardEventBase$1<UnityEngine.UIElements.KeyDownEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class KeyUpEvent extends UnityEngine.UIElements.KeyboardEventBase$1<UnityEngine.UIElements.KeyUpEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class GeometryChangedEvent extends UnityEngine.UIElements.EventBase$1<UnityEngine.UIElements.GeometryChangedEvent> {
                protected [__keep_incompatibility]: never;
                public get oldRect(): UnityEngine.Rect;
                public get newRect(): UnityEngine.Rect;
                constructor();
                public static GetPooled($oldRect: UnityEngine.Rect, $newRect: UnityEngine.Rect): UnityEngine.UIElements.GeometryChangedEvent;
            }

            interface IMouseEvent {
                get modifiers(): UnityEngine.EventModifiers;
                get mousePosition(): UnityEngine.Vector2;
                get localMousePosition(): UnityEngine.Vector2;
                get mouseDelta(): UnityEngine.Vector2;
                get clickCount(): number;
                get button(): number;
                get pressedButtons(): number;
                get shiftKey(): boolean;
                get ctrlKey(): boolean;
                get commandKey(): boolean;
                get altKey(): boolean;
                get actionKey(): boolean;
            }

            class MouseEventBase<T extends UnityEngine.UIElements.MouseEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.IMouseEvent, UnityEngine.UIElements.IPointerOrMouseEvent, UnityEngine.UIElements.IMouseEventInternal {
                protected [__keep_incompatibility]: never;
                public get modifiers(): UnityEngine.EventModifiers;
                public get mousePosition(): UnityEngine.Vector2;
                public get localMousePosition(): UnityEngine.Vector2;
                public get mouseDelta(): UnityEngine.Vector2;
                public get clickCount(): number;
                public get button(): number;
                public get pressedButtons(): number;
                public get shiftKey(): boolean;
                public get ctrlKey(): boolean;
                public get commandKey(): boolean;
                public get altKey(): boolean;
                public get actionKey(): boolean;
                public get currentTarget(): UnityEngine.UIElements.IEventHandler;
                public static GetPooled($systemEvent: UnityEngine.Event): T;
                public static GetPooled($position: UnityEngine.Vector2, $button: number, $clickCount: number, $delta: UnityEngine.Vector2, $modifiers?: UnityEngine.EventModifiers): T;
                public static GetPooled($triggerEvent: UnityEngine.UIElements.IMouseEvent): T;
            }

            class MouseDownEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseDownEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.MouseDownEvent;
            }

            class MouseUpEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseUpEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.MouseUpEvent;
            }

            class MouseMoveEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseMoveEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.MouseMoveEvent;
            }

            class ContextClickEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.ContextClickEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class WheelEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.WheelEvent> {
                protected [__keep_incompatibility]: never;
                public static readonly scrollDeltaPerTick: number;
                public get delta(): UnityEngine.Vector3;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.WheelEvent;
            }

            class MouseEnterEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseEnterEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class MouseLeaveEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseLeaveEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class MouseOverEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseOverEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class MouseOutEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseOutEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class MouseEnterWindowEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseEnterWindowEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class MouseLeaveWindowEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.MouseLeaveWindowEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.MouseLeaveWindowEvent;
            }

            class ContextualMenuPopulateEvent extends UnityEngine.UIElements.MouseEventBase$1<UnityEngine.UIElements.ContextualMenuPopulateEvent> {
                protected [__keep_incompatibility]: never;
                public get menu(): UnityEngine.UIElements.DropdownMenu;
                public get triggerEvent(): UnityEngine.UIElements.EventBase;
                constructor();
                public static GetPooled($triggerEvent: UnityEngine.UIElements.EventBase, $menu: UnityEngine.UIElements.DropdownMenu, $target: UnityEngine.UIElements.IEventHandler, $menuManager: UnityEngine.UIElements.ContextualMenuManager): UnityEngine.UIElements.ContextualMenuPopulateEvent;
            }

            interface INavigationEvent {
                get modifiers(): UnityEngine.EventModifiers;
                get shiftKey(): boolean;
                get ctrlKey(): boolean;
                get commandKey(): boolean;
                get altKey(): boolean;
                get actionKey(): boolean;
            }

            class NavigationEventBase<T extends UnityEngine.UIElements.NavigationEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.INavigationEvent {
                protected [__keep_incompatibility]: never;
                public get modifiers(): UnityEngine.EventModifiers;
                public get shiftKey(): boolean;
                public get ctrlKey(): boolean;
                public get commandKey(): boolean;
                public get altKey(): boolean;
                public get actionKey(): boolean;
                public static GetPooled($modifiers?: UnityEngine.EventModifiers): T;
            }

            class NavigationMoveEvent extends UnityEngine.UIElements.NavigationEventBase$1<UnityEngine.UIElements.NavigationMoveEvent> {
                protected [__keep_incompatibility]: never;
                public get direction(): UnityEngine.UIElements.NavigationMoveEvent.Direction;
                public get move(): UnityEngine.Vector2;
                constructor();
                public static GetPooled($moveVector: UnityEngine.Vector2, $modifiers?: UnityEngine.EventModifiers): UnityEngine.UIElements.NavigationMoveEvent;
                public static GetPooled($direction: UnityEngine.UIElements.NavigationMoveEvent.Direction, $modifiers?: UnityEngine.EventModifiers): UnityEngine.UIElements.NavigationMoveEvent;
            }
            namespace NavigationMoveEvent {
                enum Direction {
                    None = 0,
                    Left = 1,
                    Up = 2,
                    Right = 3,
                    Down = 4,
                    Next = 5,
                    Previous = 6
                }

            }

            class NavigationCancelEvent extends UnityEngine.UIElements.NavigationEventBase$1<UnityEngine.UIElements.NavigationCancelEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class NavigationSubmitEvent extends UnityEngine.UIElements.NavigationEventBase$1<UnityEngine.UIElements.NavigationSubmitEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            interface IPanelChangedEvent {
            }

            class PanelChangedEventBase<T extends UnityEngine.UIElements.PanelChangedEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.IPanelChangedEvent {
                protected [__keep_incompatibility]: never;
                public get originPanel(): UnityEngine.UIElements.IPanel;
                public get destinationPanel(): UnityEngine.UIElements.IPanel;
                public static GetPooled($originPanel: UnityEngine.UIElements.IPanel, $destinationPanel: UnityEngine.UIElements.IPanel): T;
            }

            class AttachToPanelEvent extends UnityEngine.UIElements.PanelChangedEventBase$1<UnityEngine.UIElements.AttachToPanelEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class DetachFromPanelEvent extends UnityEngine.UIElements.PanelChangedEventBase$1<UnityEngine.UIElements.DetachFromPanelEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerType {
                protected [__keep_incompatibility]: never;
                public static readonly mouse: string;
                public static readonly touch: string;
                public static readonly pen: string;
                public static readonly tracked: string;
                public static readonly unknown: string;
            }

            class PointerId {
                protected [__keep_incompatibility]: never;
                public static readonly maxPointers: number;
                public static readonly invalidPointerId: number;
                public static readonly mousePointerId: number;
                public static readonly touchPointerIdBase: number;
                public static readonly touchPointerCount: number;
                public static readonly penPointerIdBase: number;
                public static readonly penPointerCount: number;
                public static readonly trackedPointerIdBase: number;
                public static readonly trackedPointerCount: number;
            }

            interface IPointerEvent {
                get pointerId(): number;
                get pointerType(): string;
                get isPrimary(): boolean;
                get button(): number;
                get pressedButtons(): number;
                get position(): UnityEngine.Vector3;
                get localPosition(): UnityEngine.Vector3;
                get deltaPosition(): UnityEngine.Vector3;
                get deltaTime(): number;
                get clickCount(): number;
                get pressure(): number;
                get tangentialPressure(): number;
                get altitudeAngle(): number;
                get azimuthAngle(): number;
                get twist(): number;
                get tilt(): UnityEngine.Vector2;
                get penStatus(): UnityEngine.PenStatus;
                get radius(): UnityEngine.Vector2;
                get radiusVariance(): UnityEngine.Vector2;
                get modifiers(): UnityEngine.EventModifiers;
                get shiftKey(): boolean;
                get ctrlKey(): boolean;
                get commandKey(): boolean;
                get altKey(): boolean;
                get actionKey(): boolean;
            }

            class PointerEventBase<T extends UnityEngine.UIElements.PointerEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.IPointerEvent, UnityEngine.UIElements.IPointerEventInternal, UnityEngine.UIElements.IPointerOrMouseEvent {
                protected [__keep_incompatibility]: never;
                public get pointerId(): number;
                public get pointerType(): string;
                public get isPrimary(): boolean;
                public get button(): number;
                public get pressedButtons(): number;
                public get position(): UnityEngine.Vector3;
                public get localPosition(): UnityEngine.Vector3;
                public get deltaPosition(): UnityEngine.Vector3;
                public get deltaTime(): number;
                public get clickCount(): number;
                public get pressure(): number;
                public get tangentialPressure(): number;
                public get altitudeAngle(): number;
                public get azimuthAngle(): number;
                public get twist(): number;
                public get tilt(): UnityEngine.Vector2;
                public get penStatus(): UnityEngine.PenStatus;
                public get radius(): UnityEngine.Vector2;
                public get radiusVariance(): UnityEngine.Vector2;
                public get modifiers(): UnityEngine.EventModifiers;
                public get shiftKey(): boolean;
                public get ctrlKey(): boolean;
                public get commandKey(): boolean;
                public get altKey(): boolean;
                public get actionKey(): boolean;
                public get currentTarget(): UnityEngine.UIElements.IEventHandler;
                public static GetPooled($systemEvent: UnityEngine.Event): T;
                public static GetPooled($touch: UnityEngine.Touch, $modifiers?: UnityEngine.EventModifiers): T;
                public static GetPooled($pen: UnityEngine.PenData, $modifiers?: UnityEngine.EventModifiers): T;
                public static GetPooled($triggerEvent: UnityEngine.UIElements.IPointerEvent): T;
            }

            class PointerDownEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerDownEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerMoveEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerMoveEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerStationaryEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerStationaryEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerUpEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerUpEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerCancelEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerCancelEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class ClickEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.ClickEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerEnterEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerEnterEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerLeaveEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerLeaveEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerOverEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerOverEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class PointerOutEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.PointerOutEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class CustomStyleResolvedEvent extends UnityEngine.UIElements.EventBase$1<UnityEngine.UIElements.CustomStyleResolvedEvent> {
                protected [__keep_incompatibility]: never;
                public get customStyle(): UnityEngine.UIElements.ICustomStyle;
                constructor();
            }

            class TooltipEvent extends UnityEngine.UIElements.EventBase$1<UnityEngine.UIElements.TooltipEvent> {
                protected [__keep_incompatibility]: never;
                public tooltip: string;
                public rect: UnityEngine.Rect;
                constructor();
            }

            interface ITransitionEvent {
                get stylePropertyNames(): UnityEngine.UIElements.StylePropertyNameCollection;
                get elapsedTime(): number;
            }

            class StylePropertyNameCollection implements System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.StylePropertyName>, System.Collections.IEnumerable {
                protected [__keep_incompatibility]: never;
                public GetEnumerator(): UnityEngine.UIElements.StylePropertyNameCollection.Enumerator;
                public Contains($stylePropertyName: UnityEngine.UIElements.StylePropertyName): boolean;
            }
            namespace StylePropertyNameCollection {
                class Enumerator implements System.Collections.Generic.IEnumerator$1<UnityEngine.UIElements.StylePropertyName>, System.Collections.IEnumerator, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get Current(): UnityEngine.UIElements.StylePropertyName;
                    public MoveNext(): boolean;
                    public Reset(): void;
                    public Dispose(): void;
                }

            }

            class TransitionEventBase<T extends UnityEngine.UIElements.TransitionEventBase$1<T>> extends UnityEngine.UIElements.EventBase$1<T> implements UnityEngine.UIElements.ITransitionEvent {
                protected [__keep_incompatibility]: never;
                public get stylePropertyNames(): UnityEngine.UIElements.StylePropertyNameCollection;
                public get elapsedTime(): number;
                public static GetPooled($stylePropertyName: UnityEngine.UIElements.StylePropertyName, $elapsedTime: number): T;
                public AffectsProperty($stylePropertyName: UnityEngine.UIElements.StylePropertyName): boolean;
            }

            class TransitionRunEvent extends UnityEngine.UIElements.TransitionEventBase$1<UnityEngine.UIElements.TransitionRunEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class TransitionStartEvent extends UnityEngine.UIElements.TransitionEventBase$1<UnityEngine.UIElements.TransitionStartEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class TransitionEndEvent extends UnityEngine.UIElements.TransitionEventBase$1<UnityEngine.UIElements.TransitionEndEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class TransitionCancelEvent extends UnityEngine.UIElements.TransitionEventBase$1<UnityEngine.UIElements.TransitionCancelEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class IMGUIEvent extends UnityEngine.UIElements.EventBase$1<UnityEngine.UIElements.IMGUIEvent> {
                protected [__keep_incompatibility]: never;
                constructor();
                public static GetPooled($systemEvent: UnityEngine.Event): UnityEngine.UIElements.IMGUIEvent;
            }

            class BaseFieldMouseDragger {
                protected [__keep_incompatibility]: never;
                public SetDragZone($dragElement: UnityEngine.UIElements.VisualElement): void;
                public SetDragZone($dragElement: UnityEngine.UIElements.VisualElement, $hotZone: UnityEngine.Rect): void;
            }

            class FieldMouseDragger<T> extends UnityEngine.UIElements.BaseFieldMouseDragger {
                protected [__keep_incompatibility]: never;
                public dragging: boolean;
                public startValue: T;
                constructor($drivenField: UnityEngine.UIElements.IValueField$1<T>);
                public SetDragZone($dragElement: UnityEngine.UIElements.VisualElement, $hotZone: UnityEngine.Rect): void;
            }

            class FilterParameterDeclaration {
                protected [__keep_incompatibility]: never;
                public name: string;
                public interpolationDefaultValue: UnityEngine.UIElements.FilterParameter;
            }

            class FilterFunctionDefinition extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public filterName: string;
                public parameters: System.Array$1<UnityEngine.UIElements.FilterParameterDeclaration>;
                public passes: System.Array$1<UnityEngine.UIElements.PostProcessingPass>;
                constructor();
            }

            class ParameterBinding {
                protected [__keep_incompatibility]: never;
                public index: number;
                public name: string;
            }

            class PostProcessingPass {
                protected [__keep_incompatibility]: never;
                public material: UnityEngine.Material;
                public passIndex: number;
                public parameterBindings: System.Array$1<UnityEngine.UIElements.ParameterBinding>;
                public writeMargins: UnityEngine.UIElements.PostProcessingMargins;
                public prepareMaterialPropertyBlockCallback: UnityEngine.UIElements.PostProcessingPass.PrepareMaterialPropertyBlockDelegate;
                public computeRequiredReadMarginsCallback: UnityEngine.UIElements.PostProcessingPass.ComputeRequiredMarginsDelegate;
                public computeRequiredWriteMarginsCallback: UnityEngine.UIElements.PostProcessingPass.ComputeRequiredMarginsDelegate;
            }
            namespace PostProcessingPass {
                interface PrepareMaterialPropertyBlockDelegate {
                    ($mpb: UnityEngine.MaterialPropertyBlock, $func: UnityEngine.UIElements.FilterFunction): void;
                    Invoke?: ($mpb: UnityEngine.MaterialPropertyBlock, $func: UnityEngine.UIElements.FilterFunction) => void;
                }
                var PrepareMaterialPropertyBlockDelegate: { new (func: ($mpb: UnityEngine.MaterialPropertyBlock, $func: UnityEngine.UIElements.FilterFunction) => void): PrepareMaterialPropertyBlockDelegate; };

                interface ComputeRequiredMarginsDelegate {
                    ($func: UnityEngine.UIElements.FilterFunction): UnityEngine.UIElements.PostProcessingMargins;
                    Invoke?: ($func: UnityEngine.UIElements.FilterFunction) => UnityEngine.UIElements.PostProcessingMargins;
                }
                var ComputeRequiredMarginsDelegate: { new (func: ($func: UnityEngine.UIElements.FilterFunction) => UnityEngine.UIElements.PostProcessingMargins): ComputeRequiredMarginsDelegate; };

            }

            class PostProcessingMargins {
                protected [__keep_incompatibility]: never;
                public left: number;
                public top: number;
                public right: number;
                public bottom: number;
            }

            class Focusable extends UnityEngine.UIElements.CallbackEventHandler {
                protected [__keep_incompatibility]: never;
                public get focusController(): UnityEngine.UIElements.FocusController;
                public focusable: boolean;
                public tabIndex: number;
                public delegatesFocus: boolean;
                public get canGrabFocus(): boolean;
                public Focus(): void;
                public Blur(): void;
            }

            class FocusChangeDirection implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public static get unspecified(): UnityEngine.UIElements.FocusChangeDirection;
                public static get none(): UnityEngine.UIElements.FocusChangeDirection;
            }

            interface IFocusRing {
                GetFocusChangeDirection($currentFocusable: UnityEngine.UIElements.Focusable, $e: UnityEngine.UIElements.EventBase): UnityEngine.UIElements.FocusChangeDirection;
                GetNextFocusable($currentFocusable: UnityEngine.UIElements.Focusable, $direction: UnityEngine.UIElements.FocusChangeDirection): UnityEngine.UIElements.Focusable;
            }

            class FocusController {
                protected [__keep_incompatibility]: never;
                public get focusedElement(): UnityEngine.UIElements.Focusable;
                constructor($focusRing: UnityEngine.UIElements.IFocusRing);
                public IgnoreEvent($evt: UnityEngine.UIElements.EventBase): void;
            }

            class DynamicAtlasSettings {
                protected [__keep_incompatibility]: never;
                public minAtlasSize: number;
                public maxAtlasSize: number;
                public maxSubTextureSize: number;
                public activeFilters: UnityEngine.UIElements.DynamicAtlasFilters;
                public static get defaultFilters(): UnityEngine.UIElements.DynamicAtlasFilters;
                public customFilter: UnityEngine.UIElements.DynamicAtlasCustomFilter;
                public static get defaults(): UnityEngine.UIElements.DynamicAtlasSettings;
                constructor();
            }

            class PanelInputConfiguration extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                public processWorldSpaceInput: boolean;
                public interactionLayers: UnityEngine.LayerMask;
                public maxInteractionDistance: number;
                public defaultEventCameraIsMainCamera: boolean;
                public eventCameras: System.Array$1<UnityEngine.Camera>;
                public panelInputRedirection: UnityEngine.UIElements.PanelInputConfiguration.PanelInputRedirection;
                public autoCreatePanelComponents: boolean;
                constructor();
            }
            namespace PanelInputConfiguration {
                enum PanelInputRedirection {
                    AutoSwitch = 0,
                    Never = 1,
                    Always = 2
                }

            }

            enum PanelScaleMode {
                ConstantPixelSize = 0,
                ConstantPhysicalSize = 1,
                ScaleWithScreenSize = 2
            }

            enum PanelScreenMatchMode {
                MatchWidthOrHeight = 0,
                Shrink = 1,
                Expand = 2
            }

            class PanelSettings extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public forceGammaRendering: boolean;
                public textSettings: UnityEngine.UIElements.PanelTextSettings;
                public themeStyleSheet: UnityEngine.UIElements.ThemeStyleSheet;
                public targetTexture: UnityEngine.RenderTexture;
                public scaleMode: UnityEngine.UIElements.PanelScaleMode;
                public referenceSpritePixelsPerUnit: number;
                public scale: number;
                public referenceDpi: number;
                public fallbackDpi: number;
                public referenceResolution: UnityEngine.Vector2Int;
                public screenMatchMode: UnityEngine.UIElements.PanelScreenMatchMode;
                public match: number;
                public sortingOrder: number;
                public targetDisplay: number;
                public bindingLogLevel: UnityEngine.UIElements.BindingLogLevel;
                public clearDepthStencil: boolean;
                public get depthClearValue(): number;
                public clearColor: boolean;
                public colorClearValue: UnityEngine.Color;
                public vertexBudget: number;
                public textureSlotCount: UnityEngine.UIElements.TextureSlotCount;
                public dynamicAtlasSettings: UnityEngine.UIElements.DynamicAtlasSettings;
                public SetPanelChangeReceiver($value: UnityEngine.UIElements.IDebugPanelChangeReceiver): void;
                public SetScreenToPanelSpaceFunction3D($screenToPanelSpaceFunction: System.Func$2<UnityEngine.Vector2, UnityEngine.Vector3>): void;
                public SetScreenToPanelSpaceFunction($screenToPanelSpaceFunction: System.Func$2<UnityEngine.Vector2, UnityEngine.Vector2>): void;
            }

            interface IRuntimePanel extends UnityEngine.UIElements.IPanel, System.IDisposable {
                get panelSettings(): UnityEngine.UIElements.PanelSettings;
                selectableGameObject: UnityEngine.GameObject;
            }

            class RuntimePanelUtils {
                protected [__keep_incompatibility]: never;
                public static ScreenToPanel($panel: UnityEngine.UIElements.IPanel, $screenPosition: UnityEngine.Vector2): UnityEngine.Vector2;
                public static CameraTransformWorldToPanel($panel: UnityEngine.UIElements.IPanel, $worldPosition: UnityEngine.Vector3, $camera: UnityEngine.Camera): UnityEngine.Vector2;
                public static CameraTransformWorldToPanelRect($panel: UnityEngine.UIElements.IPanel, $worldPosition: UnityEngine.Vector3, $worldSize: UnityEngine.Vector2, $camera: UnityEngine.Camera): UnityEngine.Rect;
                public static ResetDynamicAtlas(): void;
                public static ResetRenderer(): void;
                public static SetTextureDirty($texture: UnityEngine.Texture2D): void;
            }

            enum PivotReferenceSize {
                BoundingBox = 0,
                Layout = 1
            }

            enum Pivot {
                Center = 0,
                TopLeft = 1,
                TopCenter = 2,
                TopRight = 3,
                LeftCenter = 4,
                RightCenter = 5,
                BottomLeft = 6,
                BottomCenter = 7,
                BottomRight = 8
            }

            class UIDocument extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                public panelSettings: UnityEngine.UIElements.PanelSettings;
                public get parentUI(): UnityEngine.UIElements.UIDocument;
                public visualTreeAsset: UnityEngine.UIElements.VisualTreeAsset;
                public get rootVisualElement(): UnityEngine.UIElements.VisualElement;
                public position: UnityEngine.UIElements.Position;
                public worldSpaceSizeMode: UnityEngine.UIElements.UIDocument.WorldSpaceSizeMode;
                public worldSpaceSize: UnityEngine.Vector2;
                public pivotReferenceSize: UnityEngine.UIElements.PivotReferenceSize;
                public pivot: UnityEngine.UIElements.Pivot;
                public sortingOrder: number;
                public get runtimePanel(): UnityEngine.UIElements.IRuntimePanel;
            }
            namespace UIDocument {
                enum WorldSpaceSizeMode {
                    Dynamic = 0,
                    Fixed = 1
                }

            }

            class IMGUIContainer extends UnityEngine.UIElements.VisualElement implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public onGUIHandler: System.Action;
                public cullingEnabled: boolean;
                public contextType: UnityEngine.UIElements.ContextType;
                public get canGrabFocus(): boolean;
                constructor();
                constructor($onGUIHandler: System.Action);
                public MarkDirtyLayout(): void;
                public Dispose(): void;
            }
            namespace IMGUIContainer {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public CreateInstance(): any;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.IMGUIContainer, UnityEngine.UIElements.IMGUIContainer.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.VisualElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                }

            }

            class ImmediateModeElement extends UnityEngine.UIElements.VisualElement {
                protected [__keep_incompatibility]: never;
                public cullingEnabled: boolean;
            }
            namespace ImmediateModeElement {
                class UxmlSerializedData extends UnityEngine.UIElements.VisualElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

            }

            enum SelectionType {
                None = 0,
                Single = 1,
                Multiple = 2
            }

            interface ITransform {
                position: UnityEngine.Vector3;
                rotation: UnityEngine.Quaternion;
                scale: UnityEngine.Vector3;
                get matrix(): UnityEngine.Matrix4x4;
            }

            enum KeyboardNavigationOperation {
                None = 0,
                SelectAll = 1,
                Cancel = 2,
                Submit = 3,
                Previous = 4,
                Next = 5,
                MoveRight = 6,
                MoveLeft = 7,
                PageUp = 8,
                PageDown = 9,
                Begin = 10,
                End = 11
            }

            class KeyboardNavigationManipulator extends UnityEngine.UIElements.Manipulator {
                protected [__keep_incompatibility]: never;
                constructor($action: System.Action$2<UnityEngine.UIElements.KeyboardNavigationOperation, UnityEngine.UIElements.EventBase>);
            }

            class ManipulatorActivationFilter implements System.IEquatable$1<UnityEngine.UIElements.ManipulatorActivationFilter> {
                protected [__keep_incompatibility]: never;
                public button: UnityEngine.UIElements.MouseButton;
                public modifiers: UnityEngine.EventModifiers;
                public clickCount: number;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.ManipulatorActivationFilter): boolean;
                public GetHashCode(): number;
                public Matches($e: UnityEngine.UIElements.IMouseEvent): boolean;
                public Matches($e: UnityEngine.UIElements.IPointerEvent): boolean;
            }

            interface IManipulator {
                target: UnityEngine.UIElements.VisualElement;
            }

            class Manipulator implements UnityEngine.UIElements.IManipulator {
                protected [__keep_incompatibility]: never;
                public target: UnityEngine.UIElements.VisualElement;
            }

            enum MouseButton {
                LeftMouse = 0,
                RightMouse = 1,
                MiddleMouse = 2
            }

            class MouseCaptureController {
                protected [__keep_incompatibility]: never;
                public static IsMouseCaptured(): boolean;
                public static HasMouseCapture(): boolean;
                public static CaptureMouse(): void;
                public static ReleaseMouse(): void;
                public static ReleaseMouse(): void;
            }

            class MouseManipulator extends UnityEngine.UIElements.Manipulator {
                protected [__keep_incompatibility]: never;
                public get activators(): System.Collections.Generic.List$1<UnityEngine.UIElements.ManipulatorActivationFilter>;
            }

            enum FillRule {
                NonZero = 0,
                OddEven = 1
            }

            enum LineJoin {
                Miter = 0,
                Bevel = 1,
                Round = 2
            }

            enum LineCap {
                Butt = 0,
                Round = 1
            }

            enum ArcDirection {
                Clockwise = 0,
                CounterClockwise = 1
            }

            class FillGradient {
                protected [__keep_incompatibility]: never;
                public gradient: UnityEngine.Gradient;
                public gradientType: UnityEngine.UIElements.GradientType;
                public addressMode: UnityEngine.UIElements.AddressMode;
                public start: UnityEngine.Vector2;
                public end: UnityEngine.Vector2;
                public center: UnityEngine.Vector2;
                public focus: UnityEngine.Vector2;
                public radius: number;
                public static MakeLinearGradient($startColor: UnityEngine.Color, $endColor: UnityEngine.Color, $start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $addressMode?: UnityEngine.UIElements.AddressMode): UnityEngine.UIElements.FillGradient;
                public static MakeLinearGradient($gradient: UnityEngine.Gradient, $start: UnityEngine.Vector2, $end: UnityEngine.Vector2, $addressMode?: UnityEngine.UIElements.AddressMode): UnityEngine.UIElements.FillGradient;
                public static MakeRadialGradient($startColor: UnityEngine.Color, $endColor: UnityEngine.Color, $center: UnityEngine.Vector2, $radius: number, $focus: UnityEngine.Vector2, $addressMode?: UnityEngine.UIElements.AddressMode): UnityEngine.UIElements.FillGradient;
                public static MakeRadialGradient($gradient: UnityEngine.Gradient, $center: UnityEngine.Vector2, $radius: number, $focus: UnityEngine.Vector2, $addressMode?: UnityEngine.UIElements.AddressMode): UnityEngine.UIElements.FillGradient;
            }

            class UIRenderer extends UnityEngine.Renderer {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            enum ContextType {
                Player = 0,
                Editor = 1
            }

            enum VersionChangeType {
                Bindings = 1,
                ViewData = 2,
                Hierarchy = 4,
                Layout = 8,
                StyleSheet = 16,
                Styles = 32,
                Overflow = 64,
                BorderRadius = 128,
                BorderWidth = 256,
                Transform = 512,
                Size = 1024,
                Repaint = 2048,
                Opacity = 4096,
                Color = 8192,
                RenderHints = 16384,
                TransitionProperty = 32768,
                EventCallbackCategories = 65536,
                DisableRendering = 131072,
                BindingRegistration = 262144,
                DataSource = 524288,
                Picking = 1048576
            }

            enum UsageHints {
                None = 0,
                DynamicTransform = 1,
                GroupTransform = 2,
                MaskContainer = 4,
                DynamicColor = 8,
                DynamicPostProcessing = 16,
                LargePixelCoverage = 32
            }

            interface IPanel extends System.IDisposable {
                get visualTree(): UnityEngine.UIElements.VisualElement;
                get dispatcher(): UnityEngine.UIElements.EventDispatcher;
                get contextType(): UnityEngine.UIElements.ContextType;
                get focusController(): UnityEngine.UIElements.FocusController;
                get contextualMenuManager(): UnityEngine.UIElements.ContextualMenuManager;
                get isDirty(): boolean;
                get scaledPixelsPerPoint(): number;
                Pick($point: UnityEngine.Vector2): UnityEngine.UIElements.VisualElement;
                PickAll($point: UnityEngine.Vector2, $picked: System.Collections.Generic.List$1<UnityEngine.UIElements.VisualElement>): UnityEngine.UIElements.VisualElement;
            }

            class PanelExtensions {
                protected [__keep_incompatibility]: never;
                public static CreateMenu(): UnityEngine.UIElements.AbstractGenericMenu;
            }

            interface IDebugPanelChangeReceiver {
                OnVisualElementChange($element: UnityEngine.UIElements.VisualElement, $changeType: UnityEngine.UIElements.VersionChangeType): void;
            }

            enum PenButton {
                PenContact = 0,
                PenBarrel = 1,
                PenEraser = 5
            }

            class PointerCaptureHelper {
                protected [__keep_incompatibility]: never;
                public static HasPointerCapture($pointerId: number): boolean;
                public static CapturePointer($pointerId: number): void;
                public static ReleasePointer($pointerId: number): void;
                public static GetCapturingElement($pointerId: number): UnityEngine.UIElements.IEventHandler;
                public static ReleasePointer($pointerId: number): void;
            }

            class PointerManipulator extends UnityEngine.UIElements.MouseManipulator {
                protected [__keep_incompatibility]: never;
            }

            class Vertex {
                protected [__keep_incompatibility]: never;
                public static readonly nearZ: number;
                public position: UnityEngine.Vector3;
                public tint: UnityEngine.Color32;
                public uv: UnityEngine.Vector2;
            }

            class MeshWriteData {
                protected [__keep_incompatibility]: never;
                public get vertexCount(): number;
                public get indexCount(): number;
                public get uvRegion(): UnityEngine.Rect;
                public SetNextVertex($vertex: UnityEngine.UIElements.Vertex): void;
                public SetNextIndex($index: number): void;
                public SetAllVertices($vertices: System.Array$1<UnityEngine.UIElements.Vertex>): void;
                public SetAllVertices($vertices: Unity.Collections.NativeSlice$1<UnityEngine.UIElements.Vertex>): void;
                public SetAllIndices($indices: System.Array$1<number>): void;
                public SetAllIndices($indices: Unity.Collections.NativeSlice$1<number>): void;
            }

            class MeshGenerationContext {
                protected [__keep_incompatibility]: never;
                public get visualElement(): UnityEngine.UIElements.VisualElement;
                public get painter2D(): UnityEngine.UIElements.Painter2D;
                public AllocateTempMesh($vertexCount: number, $indexCount: number, $vertices: $Out<Unity.Collections.NativeSlice$1<UnityEngine.UIElements.Vertex>>, $indices: $Out<Unity.Collections.NativeSlice$1<number>>): void;
                public Allocate($vertexCount: number, $indexCount: number, $texture?: UnityEngine.Texture): UnityEngine.UIElements.MeshWriteData;
                public DrawMesh($vertices: Unity.Collections.NativeSlice$1<UnityEngine.UIElements.Vertex>, $indices: Unity.Collections.NativeSlice$1<number>, $texture?: UnityEngine.Texture): void;
                public DrawVectorImage($vectorImage: UnityEngine.UIElements.VectorImage, $offset: UnityEngine.Vector2, $rotationAngle: UnityEngine.UIElements.Angle, $scale: UnityEngine.Vector2): void;
                public DrawText($text: string, $pos: UnityEngine.Vector2, $fontSize: number, $color: UnityEngine.Color, $font?: UnityEngine.TextCore.Text.FontAsset): void;
                public GetTempMeshAllocator($allocator: $Out<UnityEngine.UIElements.TempMeshAllocator>): void;
                public InsertMeshGenerationNode($node: $Out<UnityEngine.UIElements.MeshGenerationNode>): void;
                public AddMeshGenerationJob($jobHandle: Unity.Jobs.JobHandle): void;
            }

            class MeshGenerationNode {
                protected [__keep_incompatibility]: never;
                public DrawMesh($vertices: Unity.Collections.NativeSlice$1<UnityEngine.UIElements.Vertex>, $indices: Unity.Collections.NativeSlice$1<number>, $texture?: UnityEngine.Texture): void;
            }

            class Painter2D implements System.IDisposable {
                protected [__keep_incompatibility]: never;
                public lineWidth: number;
                public strokeColor: UnityEngine.Color;
                public strokeGradient: UnityEngine.Gradient;
                public set fillGradient(value: UnityEngine.UIElements.FillGradient);
                public set strokeFillGradient(value: UnityEngine.UIElements.FillGradient);
                public set fillTexture(value: UnityEngine.Texture2D);
                public fillColor: UnityEngine.Color;
                public lineJoin: UnityEngine.UIElements.LineJoin;
                public lineCap: UnityEngine.UIElements.LineCap;
                public miterLimit: number;
                public set dashPattern(value: System.ReadOnlySpan$1<number>);
                public dashOffset: number;
                constructor();
                public Clear(): void;
                public Dispose(): void;
                public SetDashPattern($dash: number, $gap: number): void;
                public BeginPath(): void;
                public ClosePath(): void;
                public MoveTo($pos: UnityEngine.Vector2): void;
                public LineTo($pos: UnityEngine.Vector2): void;
                public ArcTo($p1: UnityEngine.Vector2, $p2: UnityEngine.Vector2, $radius: number): void;
                public Arc($center: UnityEngine.Vector2, $radius: number, $startAngle: UnityEngine.UIElements.Angle, $endAngle: UnityEngine.UIElements.Angle, $direction?: UnityEngine.UIElements.ArcDirection): void;
                public BezierCurveTo($p1: UnityEngine.Vector2, $p2: UnityEngine.Vector2, $p3: UnityEngine.Vector2): void;
                public QuadraticCurveTo($p1: UnityEngine.Vector2, $p2: UnityEngine.Vector2): void;
                public Stroke(): void;
                public Fill($fillRule?: UnityEngine.UIElements.FillRule): void;
                public SaveToVectorImage($vectorImage: UnityEngine.UIElements.VectorImage): boolean;
            }

            class TempMeshAllocator {
                protected [__keep_incompatibility]: never;
                public AllocateTempMesh($vertexCount: number, $indexCount: number, $vertices: $Out<Unity.Collections.NativeSlice$1<UnityEngine.UIElements.Vertex>>, $indices: $Out<Unity.Collections.NativeSlice$1<number>>): void;
            }

            class TimerState implements System.IEquatable$1<UnityEngine.UIElements.TimerState> {
                protected [__keep_incompatibility]: never;
                public start: bigint;
                public now: bigint;
                public get deltaTime(): bigint;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.TimerState): boolean;
                public GetHashCode(): number;
            }

            enum AngleUnit {
                Degree = 0,
                Gradian = 1,
                Radian = 2,
                Turn = 3
            }

            class Angle implements System.IEquatable$1<UnityEngine.UIElements.Angle> {
                protected [__keep_incompatibility]: never;
                public value: number;
                public unit: UnityEngine.UIElements.AngleUnit;
                constructor($value: number);
                constructor($value: number, $unit: UnityEngine.UIElements.AngleUnit);
                public static Degrees($value: number): UnityEngine.UIElements.Angle;
                public static Gradians($value: number): UnityEngine.UIElements.Angle;
                public static Radians($value: number): UnityEngine.UIElements.Angle;
                public static Turns($value: number): UnityEngine.UIElements.Angle;
                public ToDegrees(): number;
                public ToGradians(): number;
                public ToRadians(): number;
                public ToTurns(): number;
                public Equals($other: UnityEngine.UIElements.Angle): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class Background implements System.IEquatable$1<UnityEngine.UIElements.Background> {
                protected [__keep_incompatibility]: never;
                public texture: UnityEngine.Texture2D;
                public sprite: UnityEngine.Sprite;
                public renderTexture: UnityEngine.RenderTexture;
                public vectorImage: UnityEngine.UIElements.VectorImage;
                constructor($t: UnityEngine.Texture2D);
                public static FromTexture2D($t: UnityEngine.Texture2D): UnityEngine.UIElements.Background;
                public static FromRenderTexture($rt: UnityEngine.RenderTexture): UnityEngine.UIElements.Background;
                public static FromSprite($s: UnityEngine.Sprite): UnityEngine.UIElements.Background;
                public static FromVectorImage($vi: UnityEngine.UIElements.VectorImage): UnityEngine.UIElements.Background;
                public GetSelectedImage(): UnityEngine.Object;
                public IsEmpty(): boolean;
                public Equals($other: UnityEngine.UIElements.Background): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class CustomStyleProperty<T> implements System.IEquatable$1<UnityEngine.UIElements.CustomStyleProperty$1<T>> {
                protected [__keep_incompatibility]: never;
                public get name(): string;
                constructor($propertyName: string);
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.CustomStyleProperty$1<T>): boolean;
                public GetHashCode(): number;
            }

            interface ICustomStyle {
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<number>, $value: $Out<number>): boolean;
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<number>, $value: $Out<number>): boolean;
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<boolean>, $value: $Out<boolean>): boolean;
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<UnityEngine.Color>, $value: $Out<UnityEngine.Color>): boolean;
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<UnityEngine.Texture2D>, $value: $Out<UnityEngine.Texture2D>): boolean;
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<UnityEngine.Sprite>, $value: $Out<UnityEngine.Sprite>): boolean;
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<UnityEngine.UIElements.VectorImage>, $value: $Out<UnityEngine.UIElements.VectorImage>): boolean;
                TryGetValue<T extends UnityEngine.Object>($property: UnityEngine.UIElements.CustomStyleProperty$1<T>, $value: $Out<T>): boolean;
                TryGetValue($property: UnityEngine.UIElements.CustomStyleProperty$1<string>, $value: $Out<string>): boolean;
            }

            enum EasingMode {
                Ease = 0,
                EaseIn = 1,
                EaseOut = 2,
                EaseInOut = 3,
                Linear = 4,
                EaseInSine = 5,
                EaseOutSine = 6,
                EaseInOutSine = 7,
                EaseInCubic = 8,
                EaseOutCubic = 9,
                EaseInOutCubic = 10,
                EaseInCirc = 11,
                EaseOutCirc = 12,
                EaseInOutCirc = 13,
                EaseInElastic = 14,
                EaseOutElastic = 15,
                EaseInOutElastic = 16,
                EaseInBack = 17,
                EaseOutBack = 18,
                EaseInOutBack = 19,
                EaseInBounce = 20,
                EaseOutBounce = 21,
                EaseInOutBounce = 22
            }

            class EasingFunction implements System.IEquatable$1<UnityEngine.UIElements.EasingFunction> {
                protected [__keep_incompatibility]: never;
                public mode: UnityEngine.UIElements.EasingMode;
                constructor($mode: UnityEngine.UIElements.EasingMode);
                public Equals($other: UnityEngine.UIElements.EasingFunction): boolean;
                public Equals($obj: any): boolean;
                public ToString(): string;
                public GetHashCode(): number;
            }

            enum FilterFunctionType {
                None = 0,
                Custom = 1,
                Tint = 2,
                Opacity = 3,
                Invert = 4,
                Grayscale = 5,
                Sepia = 6,
                Blur = 7,
                Contrast = 8,
                HueRotate = 9,
                Count = 10
            }

            enum FilterParameterType {
                Float = 0,
                Color = 1
            }

            class FilterParameter implements System.IEquatable$1<UnityEngine.UIElements.FilterParameter> {
                protected [__keep_incompatibility]: never;
                public type: UnityEngine.UIElements.FilterParameterType;
                public floatValue: number;
                public colorValue: UnityEngine.Color;
                constructor($value: number);
                constructor($value: UnityEngine.Color);
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.FilterParameter): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class FilterFunction implements System.IEquatable$1<UnityEngine.UIElements.FilterFunction> {
                protected [__keep_incompatibility]: never;
                public type: UnityEngine.UIElements.FilterFunctionType;
                public get parameterCount(): number;
                public customDefinition: UnityEngine.UIElements.FilterFunctionDefinition;
                constructor($type: UnityEngine.UIElements.FilterFunctionType);
                constructor($filterDef: UnityEngine.UIElements.FilterFunctionDefinition);
                public AddParameter($p: UnityEngine.UIElements.FilterParameter): void;
                public SetParameter($index: number, $p: UnityEngine.UIElements.FilterParameter): void;
                public GetParameter($index: number): UnityEngine.UIElements.FilterParameter;
                public ClearParameters(): void;
                public Equals($other: UnityEngine.UIElements.FilterFunction): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class FontDefinition implements System.IEquatable$1<UnityEngine.UIElements.FontDefinition> {
                protected [__keep_incompatibility]: never;
                public font: UnityEngine.Font;
                public fontAsset: UnityEngine.TextCore.Text.FontAsset;
                public static FromFont($f: UnityEngine.Font): UnityEngine.UIElements.FontDefinition;
                public static FromSDFFont($f: UnityEngine.TextCore.Text.FontAsset): UnityEngine.UIElements.FontDefinition;
                public ToString(): string;
                public Equals($other: UnityEngine.UIElements.FontDefinition): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }

            interface IResolvedStyle {
                get alignContent(): UnityEngine.UIElements.Align;
                get alignItems(): UnityEngine.UIElements.Align;
                get alignSelf(): UnityEngine.UIElements.Align;
                get aspectRatio(): UnityEngine.UIElements.Ratio;
                get backgroundColor(): UnityEngine.Color;
                get backgroundImage(): UnityEngine.UIElements.Background;
                get backgroundPositionX(): UnityEngine.UIElements.BackgroundPosition;
                get backgroundPositionY(): UnityEngine.UIElements.BackgroundPosition;
                get backgroundRepeat(): UnityEngine.UIElements.BackgroundRepeat;
                get backgroundSize(): UnityEngine.UIElements.BackgroundSize;
                get borderBottomColor(): UnityEngine.Color;
                get borderBottomLeftRadius(): number;
                get borderBottomRightRadius(): number;
                get borderBottomWidth(): number;
                get borderLeftColor(): UnityEngine.Color;
                get borderLeftWidth(): number;
                get borderRightColor(): UnityEngine.Color;
                get borderRightWidth(): number;
                get borderTopColor(): UnityEngine.Color;
                get borderTopLeftRadius(): number;
                get borderTopRightRadius(): number;
                get borderTopWidth(): number;
                get bottom(): number;
                get color(): UnityEngine.Color;
                get display(): UnityEngine.UIElements.DisplayStyle;
                get filter(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.FilterFunction>;
                get flexBasis(): UnityEngine.UIElements.StyleFloat;
                get flexDirection(): UnityEngine.UIElements.FlexDirection;
                get flexGrow(): number;
                get flexShrink(): number;
                get flexWrap(): UnityEngine.UIElements.Wrap;
                get fontSize(): number;
                get height(): number;
                get justifyContent(): UnityEngine.UIElements.Justify;
                get left(): number;
                get letterSpacing(): number;
                get marginBottom(): number;
                get marginLeft(): number;
                get marginRight(): number;
                get marginTop(): number;
                get maxHeight(): UnityEngine.UIElements.StyleFloat;
                get maxWidth(): UnityEngine.UIElements.StyleFloat;
                get minHeight(): UnityEngine.UIElements.StyleFloat;
                get minWidth(): UnityEngine.UIElements.StyleFloat;
                get opacity(): number;
                get paddingBottom(): number;
                get paddingLeft(): number;
                get paddingRight(): number;
                get paddingTop(): number;
                get position(): UnityEngine.UIElements.Position;
                get right(): number;
                get rotate(): UnityEngine.UIElements.Rotate;
                get scale(): UnityEngine.UIElements.Scale;
                get textOverflow(): UnityEngine.UIElements.TextOverflow;
                get top(): number;
                get transformOrigin(): UnityEngine.Vector3;
                get transitionDelay(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.TimeValue>;
                get transitionDuration(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.TimeValue>;
                get transitionProperty(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.StylePropertyName>;
                get transitionTimingFunction(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.EasingFunction>;
                get translate(): UnityEngine.Vector3;
                get unityBackgroundImageTintColor(): UnityEngine.Color;
                get unityEditorTextRenderingMode(): UnityEngine.UIElements.EditorTextRenderingMode;
                get unityFont(): UnityEngine.Font;
                get unityFontDefinition(): UnityEngine.UIElements.FontDefinition;
                get unityFontStyleAndWeight(): UnityEngine.FontStyle;
                get unityMaterial(): UnityEngine.UIElements.MaterialDefinition;
                get unityParagraphSpacing(): number;
                get unitySliceBottom(): number;
                get unitySliceLeft(): number;
                get unitySliceRight(): number;
                get unitySliceScale(): number;
                get unitySliceTop(): number;
                get unitySliceType(): UnityEngine.UIElements.SliceType;
                get unityTextAlign(): UnityEngine.TextAnchor;
                get unityTextGenerator(): UnityEngine.TextGeneratorType;
                get unityTextOutlineColor(): UnityEngine.Color;
                get unityTextOutlineWidth(): number;
                get unityTextOverflowPosition(): UnityEngine.UIElements.TextOverflowPosition;
                get visibility(): UnityEngine.UIElements.Visibility;
                get whiteSpace(): UnityEngine.UIElements.WhiteSpace;
                get width(): number;
                get wordSpacing(): number;
                get unityBackgroundScaleMode(): UnityEngine.UIElements.StyleEnum$1<UnityEngine.ScaleMode>;
            }

            interface IStyle {
                alignContent: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Align>;
                alignItems: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Align>;
                alignSelf: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Align>;
                aspectRatio: UnityEngine.UIElements.StyleRatio;
                backgroundColor: UnityEngine.UIElements.StyleColor;
                backgroundImage: UnityEngine.UIElements.StyleBackground;
                backgroundPositionX: UnityEngine.UIElements.StyleBackgroundPosition;
                backgroundPositionY: UnityEngine.UIElements.StyleBackgroundPosition;
                backgroundRepeat: UnityEngine.UIElements.StyleBackgroundRepeat;
                backgroundSize: UnityEngine.UIElements.StyleBackgroundSize;
                borderBottomColor: UnityEngine.UIElements.StyleColor;
                borderBottomLeftRadius: UnityEngine.UIElements.StyleLength;
                borderBottomRightRadius: UnityEngine.UIElements.StyleLength;
                borderBottomWidth: UnityEngine.UIElements.StyleFloat;
                borderLeftColor: UnityEngine.UIElements.StyleColor;
                borderLeftWidth: UnityEngine.UIElements.StyleFloat;
                borderRightColor: UnityEngine.UIElements.StyleColor;
                borderRightWidth: UnityEngine.UIElements.StyleFloat;
                borderTopColor: UnityEngine.UIElements.StyleColor;
                borderTopLeftRadius: UnityEngine.UIElements.StyleLength;
                borderTopRightRadius: UnityEngine.UIElements.StyleLength;
                borderTopWidth: UnityEngine.UIElements.StyleFloat;
                bottom: UnityEngine.UIElements.StyleLength;
                color: UnityEngine.UIElements.StyleColor;
                cursor: UnityEngine.UIElements.StyleCursor;
                display: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.DisplayStyle>;
                filter: UnityEngine.UIElements.StyleList$1<UnityEngine.UIElements.FilterFunction>;
                flexBasis: UnityEngine.UIElements.StyleLength;
                flexDirection: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.FlexDirection>;
                flexGrow: UnityEngine.UIElements.StyleFloat;
                flexShrink: UnityEngine.UIElements.StyleFloat;
                flexWrap: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Wrap>;
                fontSize: UnityEngine.UIElements.StyleLength;
                height: UnityEngine.UIElements.StyleLength;
                justifyContent: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Justify>;
                left: UnityEngine.UIElements.StyleLength;
                letterSpacing: UnityEngine.UIElements.StyleLength;
                marginBottom: UnityEngine.UIElements.StyleLength;
                marginLeft: UnityEngine.UIElements.StyleLength;
                marginRight: UnityEngine.UIElements.StyleLength;
                marginTop: UnityEngine.UIElements.StyleLength;
                maxHeight: UnityEngine.UIElements.StyleLength;
                maxWidth: UnityEngine.UIElements.StyleLength;
                minHeight: UnityEngine.UIElements.StyleLength;
                minWidth: UnityEngine.UIElements.StyleLength;
                opacity: UnityEngine.UIElements.StyleFloat;
                overflow: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Overflow>;
                paddingBottom: UnityEngine.UIElements.StyleLength;
                paddingLeft: UnityEngine.UIElements.StyleLength;
                paddingRight: UnityEngine.UIElements.StyleLength;
                paddingTop: UnityEngine.UIElements.StyleLength;
                position: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Position>;
                right: UnityEngine.UIElements.StyleLength;
                rotate: UnityEngine.UIElements.StyleRotate;
                scale: UnityEngine.UIElements.StyleScale;
                textOverflow: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.TextOverflow>;
                textShadow: UnityEngine.UIElements.StyleTextShadow;
                top: UnityEngine.UIElements.StyleLength;
                transformOrigin: UnityEngine.UIElements.StyleTransformOrigin;
                transitionDelay: UnityEngine.UIElements.StyleList$1<UnityEngine.UIElements.TimeValue>;
                transitionDuration: UnityEngine.UIElements.StyleList$1<UnityEngine.UIElements.TimeValue>;
                transitionProperty: UnityEngine.UIElements.StyleList$1<UnityEngine.UIElements.StylePropertyName>;
                transitionTimingFunction: UnityEngine.UIElements.StyleList$1<UnityEngine.UIElements.EasingFunction>;
                translate: UnityEngine.UIElements.StyleTranslate;
                unityBackgroundImageTintColor: UnityEngine.UIElements.StyleColor;
                unityEditorTextRenderingMode: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.EditorTextRenderingMode>;
                unityFont: UnityEngine.UIElements.StyleFont;
                unityFontDefinition: UnityEngine.UIElements.StyleFontDefinition;
                unityFontStyleAndWeight: UnityEngine.UIElements.StyleEnum$1<UnityEngine.FontStyle>;
                unityMaterial: UnityEngine.UIElements.StyleMaterialDefinition;
                unityOverflowClipBox: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.OverflowClipBox>;
                unityParagraphSpacing: UnityEngine.UIElements.StyleLength;
                unitySliceBottom: UnityEngine.UIElements.StyleInt;
                unitySliceLeft: UnityEngine.UIElements.StyleInt;
                unitySliceRight: UnityEngine.UIElements.StyleInt;
                unitySliceScale: UnityEngine.UIElements.StyleFloat;
                unitySliceTop: UnityEngine.UIElements.StyleInt;
                unitySliceType: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.SliceType>;
                unityTextAlign: UnityEngine.UIElements.StyleEnum$1<UnityEngine.TextAnchor>;
                unityTextAutoSize: UnityEngine.UIElements.StyleTextAutoSize;
                unityTextGenerator: UnityEngine.UIElements.StyleEnum$1<UnityEngine.TextGeneratorType>;
                unityTextOutlineColor: UnityEngine.UIElements.StyleColor;
                unityTextOutlineWidth: UnityEngine.UIElements.StyleFloat;
                unityTextOverflowPosition: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.TextOverflowPosition>;
                visibility: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.Visibility>;
                whiteSpace: UnityEngine.UIElements.StyleEnum$1<UnityEngine.UIElements.WhiteSpace>;
                width: UnityEngine.UIElements.StyleLength;
                wordSpacing: UnityEngine.UIElements.StyleLength;
                unityBackgroundScaleMode: UnityEngine.UIElements.StyleEnum$1<UnityEngine.ScaleMode>;
            }

            class VisualElement extends UnityEngine.UIElements.Focusable implements UnityEngine.UIElements.ITransform, UnityEngine.UIElements.IStylePropertyAnimations, UnityEngine.UIElements.IVisualElementScheduler, UnityEngine.UIElements.IExperimentalFeatures, UnityEngine.UIElements.IResolvedStyle, UnityEngine.UIElements.Experimental.ITransitionAnimations {
                protected [__keep_incompatibility]: never;
                public static readonly disabledUssClassName: string;
                public viewDataKey: string;
                public userData: any;
                public get canGrabFocus(): boolean;
                public get focusController(): UnityEngine.UIElements.FocusController;
                public disablePlayModeTint: boolean;
                public usageHints: UnityEngine.UIElements.UsageHints;
                public get transform(): UnityEngine.UIElements.ITransform;
                public get scaledPixelsPerPoint(): number;
                public get layout(): UnityEngine.Rect;
                public get contentRect(): UnityEngine.Rect;
                public get worldBound(): UnityEngine.Rect;
                public get localBound(): UnityEngine.Rect;
                public get worldTransform(): UnityEngine.Matrix4x4;
                public get hasActivePseudoState(): boolean;
                public get hasInactivePseudoState(): boolean;
                public get hasHoverPseudoState(): boolean;
                public get hasCheckedPseudoState(): boolean;
                public get hasEnabledPseudoState(): boolean;
                public get hasDisabledPseudoState(): boolean;
                public get hasFocusPseudoState(): boolean;
                public get hasRootPseudoState(): boolean;
                public pickingMode: UnityEngine.UIElements.PickingMode;
                public name: string;
                public get enabledInHierarchy(): boolean;
                public enabledSelf: boolean;
                public languageDirection: UnityEngine.UIElements.LanguageDirection;
                public visible: boolean;
                public generateVisualContent: System.Action$1<UnityEngine.UIElements.MeshGenerationContext>;
                public dataSource: any;
                public dataSourcePath: Unity.Properties.PropertyPath;
                public dataSourceType: System.Type;
                public get experimental(): UnityEngine.UIElements.IExperimentalFeatures;
                public get hierarchy(): UnityEngine.UIElements.VisualElement.Hierarchy;
                public cacheAsBitmap: boolean;
                public get parent(): UnityEngine.UIElements.VisualElement;
                public get panel(): UnityEngine.UIElements.IPanel;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                public get visualTreeAssetSource(): UnityEngine.UIElements.VisualTreeAsset;
                public get childCount(): number;
                public get schedule(): UnityEngine.UIElements.IVisualElementScheduler;
                public get style(): UnityEngine.UIElements.IStyle;
                public get resolvedStyle(): UnityEngine.UIElements.IResolvedStyle;
                public get customStyle(): UnityEngine.UIElements.ICustomStyle;
                public get styleSheets(): UnityEngine.UIElements.VisualElementStyleSheetSet;
                public tooltip: string;
                constructor();
                public SetActivePseudoState($value: boolean): void;
                public SetCheckedPseudoState($value: boolean): void;
                public Focus(): void;
                public SendEvent($e: UnityEngine.UIElements.EventBase): void;
                public SetEnabled($value: boolean): void;
                public MarkDirtyRepaint(): void;
                public IsMarkedForRepaint(): boolean;
                public ContainsPoint($localPoint: UnityEngine.Vector2): boolean;
                public Overlaps($rectangle: UnityEngine.Rect): boolean;
                public ToString(): string;
                public GetClasses(): System.Collections.Generic.IEnumerable$1<string>;
                public ClearClassList(): void;
                public AddToClassList($className: string): void;
                public RemoveFromClassList($className: string): void;
                public ToggleInClassList($className: string): void;
                public EnableInClassList($className: string, $enable: boolean): void;
                public ClassListContains($cls: string): boolean;
                public FindAncestorUserData(): any;
                public SetBinding($bindingId: UnityEngine.UIElements.BindingId, $binding: UnityEngine.UIElements.Binding): void;
                public GetBinding($bindingId: UnityEngine.UIElements.BindingId): UnityEngine.UIElements.Binding;
                public TryGetBinding($bindingId: UnityEngine.UIElements.BindingId, $binding: $Out<UnityEngine.UIElements.Binding>): boolean;
                public GetBindingInfos(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.BindingInfo>;
                public GetBindingInfos($bindingInfos: System.Collections.Generic.List$1<UnityEngine.UIElements.BindingInfo>): void;
                public HasBinding($bindingId: UnityEngine.UIElements.BindingId): boolean;
                public ClearBinding($bindingId: UnityEngine.UIElements.BindingId): void;
                public ClearBindings(): void;
                public GetHierarchicalDataSourceContext(): UnityEngine.UIElements.DataSourceContext;
                public GetDataSourceContext($bindingId: UnityEngine.UIElements.BindingId): UnityEngine.UIElements.DataSourceContext;
                public TryGetDataSourceContext($bindingId: UnityEngine.UIElements.BindingId, $context: $Out<UnityEngine.UIElements.DataSourceContext>): boolean;
                public TryGetLastBindingToUIResult($bindingId: $Ref<UnityEngine.UIElements.BindingId>, $result: $Out<UnityEngine.UIElements.BindingResult>): boolean;
                public TryGetLastBindingToSourceResult($bindingId: $Ref<UnityEngine.UIElements.BindingId>, $result: $Out<UnityEngine.UIElements.BindingResult>): boolean;
                public Add($child: UnityEngine.UIElements.VisualElement): void;
                public Insert($index: number, $element: UnityEngine.UIElements.VisualElement): void;
                public Remove($element: UnityEngine.UIElements.VisualElement): void;
                public RemoveAt($index: number): void;
                public Clear(): void;
                public ElementAt($index: number): UnityEngine.UIElements.VisualElement;
                public IndexOf($element: UnityEngine.UIElements.VisualElement): number;
                public Children(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.VisualElement>;
                public Sort($comp: System.Comparison$1<UnityEngine.UIElements.VisualElement>): void;
                public BringToFront(): void;
                public SendToBack(): void;
                public PlaceBehind($sibling: UnityEngine.UIElements.VisualElement): void;
                public PlaceInFront($sibling: UnityEngine.UIElements.VisualElement): void;
                public RemoveFromHierarchy(): void;
                public GetFirstOfType<T extends object>(): T;
                public GetFirstAncestorOfType<T extends object>(): T;
                public Contains($child: UnityEngine.UIElements.VisualElement): boolean;
                public FindCommonAncestor($other: UnityEngine.UIElements.VisualElement): UnityEngine.UIElements.VisualElement;
                public get_Item($key: number): UnityEngine.UIElements.VisualElement;
            }
            namespace VisualElement {
                class UxmlSerializedData extends UnityEngine.UIElements.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.VisualElement, UnityEngine.UIElements.VisualElement.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

                enum MeasureMode {
                    Undefined = 0,
                    Exactly = 1,
                    AtMost = 2
                }

                class Hierarchy {
                    protected [__keep_incompatibility]: never;
                    public get parent(): UnityEngine.UIElements.VisualElement;
                    public get childCount(): number;
                    public Add($child: UnityEngine.UIElements.VisualElement): void;
                    public Insert($index: number, $child: UnityEngine.UIElements.VisualElement): void;
                    public Remove($child: UnityEngine.UIElements.VisualElement): void;
                    public RemoveAt($index: number): void;
                    public Clear(): void;
                    public IndexOf($element: UnityEngine.UIElements.VisualElement): number;
                    public ElementAt($index: number): UnityEngine.UIElements.VisualElement;
                    public Children(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.VisualElement>;
                    public Sort($comp: System.Comparison$1<UnityEngine.UIElements.VisualElement>): void;
                    public Equals($other: UnityEngine.UIElements.VisualElement.Hierarchy): boolean;
                    public Equals($obj: any): boolean;
                    public GetHashCode(): number;
                    public get_Item($key: number): UnityEngine.UIElements.VisualElement;
                }

            }

            enum LengthUnit {
                Pixel = 0,
                Percent = 1
            }

            class Length implements System.IEquatable$1<UnityEngine.UIElements.Length> {
                protected [__keep_incompatibility]: never;
                public value: number;
                public unit: UnityEngine.UIElements.LengthUnit;
                constructor($value: number);
                constructor($value: number, $unit: UnityEngine.UIElements.LengthUnit);
                public static Pixels($value: number): UnityEngine.UIElements.Length;
                public static Percent($value: number): UnityEngine.UIElements.Length;
                public static Auto(): UnityEngine.UIElements.Length;
                public static None(): UnityEngine.UIElements.Length;
                public IsAuto(): boolean;
                public IsNone(): boolean;
                public Equals($other: UnityEngine.UIElements.Length): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class MaterialDefinition implements System.IEquatable$1<UnityEngine.UIElements.MaterialDefinition> {
                protected [__keep_incompatibility]: never;
                public material: UnityEngine.Material;
                constructor($m: UnityEngine.Material);
                public GetFloat($name: string): number;
                public GetVector($name: string): UnityEngine.Vector4;
                public GetColor($name: string): UnityEngine.Color;
                public GetTexture($name: string): UnityEngine.Texture;
                public SetFloat($name: string, $value: number): void;
                public SetVector($name: string, $value: UnityEngine.Vector4): void;
                public SetColor($name: string, $value: UnityEngine.Color): void;
                public SetTexture($name: string, $value: UnityEngine.Texture): void;
                public static FromMaterial($m: UnityEngine.Material): UnityEngine.UIElements.MaterialDefinition;
                public IsEmpty(): boolean;
                public Equals($other: UnityEngine.UIElements.MaterialDefinition): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class Ratio implements System.IEquatable$1<UnityEngine.UIElements.Ratio> {
                protected [__keep_incompatibility]: never;
                public get value(): number;
                constructor($value: number);
                public static Auto(): UnityEngine.UIElements.Ratio;
                public IsAuto(): boolean;
                public Equals($other: UnityEngine.UIElements.Ratio): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class Rotate implements System.IEquatable$1<UnityEngine.UIElements.Rotate> {
                protected [__keep_incompatibility]: never;
                public angle: UnityEngine.UIElements.Angle;
                constructor($angle: UnityEngine.UIElements.Angle, $axis: UnityEngine.Vector3);
                constructor($angle: UnityEngine.UIElements.Angle);
                constructor($quaternion: UnityEngine.Quaternion);
                public static None(): UnityEngine.UIElements.Rotate;
                public Equals($other: UnityEngine.UIElements.Rotate): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class Scale implements System.IEquatable$1<UnityEngine.UIElements.Scale> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.Vector3;
                constructor($scale: UnityEngine.Vector2);
                constructor($scale: UnityEngine.Vector3);
                public static None(): UnityEngine.UIElements.Scale;
                public Equals($other: UnityEngine.UIElements.Scale): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleBackground implements System.IEquatable$1<UnityEngine.UIElements.StyleBackground>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.Background> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.Background;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.Background);
                constructor($v: UnityEngine.Texture2D);
                constructor($v: UnityEngine.Sprite);
                constructor($v: UnityEngine.UIElements.VectorImage);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleBackground): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleBackgroundPosition implements System.IEquatable$1<UnityEngine.UIElements.StyleBackgroundPosition>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.BackgroundPosition> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.BackgroundPosition;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.BackgroundPosition);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleBackgroundPosition): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleBackgroundRepeat implements System.IEquatable$1<UnityEngine.UIElements.StyleBackgroundRepeat>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.BackgroundRepeat> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.BackgroundRepeat;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.BackgroundRepeat);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleBackgroundRepeat): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleBackgroundSize implements System.IEquatable$1<UnityEngine.UIElements.StyleBackgroundSize>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.BackgroundSize> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.BackgroundSize;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.BackgroundSize);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleBackgroundSize): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleColor implements System.IEquatable$1<UnityEngine.UIElements.StyleColor>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.Color> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.Color;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.Color);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleColor): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleCursor implements System.IEquatable$1<UnityEngine.UIElements.StyleCursor>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.Cursor> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.Cursor;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.Cursor);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleCursor): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleEnum<T extends System.IConvertible> implements System.IEquatable$1<UnityEngine.UIElements.StyleEnum$1<T>>, UnityEngine.UIElements.IStyleValue$1<T> {
                protected [__keep_incompatibility]: never;
                public value: T;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: T);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleEnum$1<T>): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleFloat implements System.IEquatable$1<UnityEngine.UIElements.StyleFloat>, UnityEngine.UIElements.IStyleValue$1<number> {
                protected [__keep_incompatibility]: never;
                public value: number;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: number);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleFloat): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleFont implements System.IEquatable$1<UnityEngine.UIElements.StyleFont>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.Font> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.Font;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.Font);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleFont): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleFontDefinition implements System.IEquatable$1<UnityEngine.UIElements.StyleFontDefinition>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.FontDefinition> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.FontDefinition;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($f: UnityEngine.UIElements.FontDefinition);
                constructor($f: UnityEngine.TextCore.Text.FontAsset);
                constructor($f: UnityEngine.Font);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleFontDefinition): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }

            class StyleInt implements System.IEquatable$1<UnityEngine.UIElements.StyleInt>, UnityEngine.UIElements.IStyleValue$1<number> {
                protected [__keep_incompatibility]: never;
                public value: number;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: number);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleInt): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleLength implements System.IEquatable$1<UnityEngine.UIElements.StyleLength>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.Length> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.Length;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: number);
                constructor($v: UnityEngine.UIElements.Length);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleLength): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleList<T> implements System.IEquatable$1<UnityEngine.UIElements.StyleList$1<T>>, UnityEngine.UIElements.IStyleValue$1<System.Collections.Generic.List$1<T>> {
                protected [__keep_incompatibility]: never;
                public value: System.Collections.Generic.List$1<T>;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: System.Collections.Generic.List$1<T>);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleList$1<T>): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleMaterialDefinition implements System.IEquatable$1<UnityEngine.UIElements.StyleMaterialDefinition>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.MaterialDefinition> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.MaterialDefinition;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($m: UnityEngine.UIElements.MaterialDefinition);
                constructor($m: UnityEngine.Material);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleMaterialDefinition): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleRatio implements System.IEquatable$1<UnityEngine.UIElements.StyleRatio>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.Ratio> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.Ratio;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($value: UnityEngine.UIElements.Ratio);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public static Auto(): UnityEngine.UIElements.StyleRatio;
                public Equals($other: UnityEngine.UIElements.StyleRatio): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleRotate implements System.IEquatable$1<UnityEngine.UIElements.StyleRotate>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.Rotate> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.Rotate;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.Rotate);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                constructor($quaternion: UnityEngine.Quaternion);
                public Equals($other: UnityEngine.UIElements.StyleRotate): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleScale implements System.IEquatable$1<UnityEngine.UIElements.StyleScale>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.Scale> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.Scale;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.Scale);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                constructor($scale: UnityEngine.Vector2);
                public Equals($other: UnityEngine.UIElements.StyleScale): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleTextShadow implements System.IEquatable$1<UnityEngine.UIElements.StyleTextShadow>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.TextShadow> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.TextShadow;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.TextShadow);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleTextShadow): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleTransformOrigin implements System.IEquatable$1<UnityEngine.UIElements.StyleTransformOrigin>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.TransformOrigin> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.TransformOrigin;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.TransformOrigin);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleTransformOrigin): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class StyleTranslate implements System.IEquatable$1<UnityEngine.UIElements.StyleTranslate>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.Translate> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.Translate;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.Translate);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleTranslate): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            interface IStyleValue<T> {
                value: T;
                keyword: UnityEngine.UIElements.StyleKeyword;
            }

            enum StyleKeyword {
                Undefined = 0,
                Null = 1,
                Auto = 2,
                None = 3,
                Initial = 4
            }

            enum TimeUnit {
                Second = 0,
                Millisecond = 1
            }

            class TimeValue implements System.IEquatable$1<UnityEngine.UIElements.TimeValue> {
                protected [__keep_incompatibility]: never;
                public value: number;
                public unit: UnityEngine.UIElements.TimeUnit;
                constructor($value: number);
                constructor($value: number, $unit: UnityEngine.UIElements.TimeUnit);
                public static Seconds($value: number): UnityEngine.UIElements.TimeValue;
                public static Milliseconds($value: number): UnityEngine.UIElements.TimeValue;
                public Equals($other: UnityEngine.UIElements.TimeValue): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class TransformOrigin implements System.IEquatable$1<UnityEngine.UIElements.TransformOrigin> {
                protected [__keep_incompatibility]: never;
                public x: UnityEngine.UIElements.Length;
                public y: UnityEngine.UIElements.Length;
                public z: number;
                constructor($x: UnityEngine.UIElements.Length, $y: UnityEngine.UIElements.Length, $z: number);
                constructor($x: UnityEngine.UIElements.Length, $y: UnityEngine.UIElements.Length);
                public static Initial(): UnityEngine.UIElements.TransformOrigin;
                public Equals($other: UnityEngine.UIElements.TransformOrigin): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class Translate implements System.IEquatable$1<UnityEngine.UIElements.Translate> {
                protected [__keep_incompatibility]: never;
                public x: UnityEngine.UIElements.Length;
                public y: UnityEngine.UIElements.Length;
                public z: number;
                constructor($x: UnityEngine.UIElements.Length, $y: UnityEngine.UIElements.Length, $z: number);
                constructor($x: UnityEngine.UIElements.Length, $y: UnityEngine.UIElements.Length);
                public static None(): UnityEngine.UIElements.Translate;
                public Equals($other: UnityEngine.UIElements.Translate): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            enum Position {
                Relative = 0,
                Absolute = 1
            }

            enum Overflow {
                Visible = 0,
                Hidden = 1
            }

            enum OverflowClipBox {
                PaddingBox = 0,
                ContentBox = 1
            }

            enum FlexDirection {
                Column = 0,
                ColumnReverse = 1,
                Row = 2,
                RowReverse = 3
            }

            enum Wrap {
                NoWrap = 0,
                Wrap = 1,
                WrapReverse = 2
            }

            enum Align {
                Auto = 0,
                FlexStart = 1,
                Center = 2,
                FlexEnd = 3,
                Stretch = 4
            }

            enum Justify {
                FlexStart = 0,
                Center = 1,
                FlexEnd = 2,
                SpaceBetween = 3,
                SpaceAround = 4,
                SpaceEvenly = 5
            }

            enum TextOverflowPosition {
                End = 0,
                Start = 1,
                Middle = 2
            }

            enum TextOverflow {
                Clip = 0,
                Ellipsis = 1
            }

            enum TransformOriginOffset {
                Left = 1,
                Right = 2,
                Top = 3,
                Bottom = 4,
                Center = 5
            }

            enum Visibility {
                Visible = 0,
                Hidden = 1
            }

            enum WhiteSpace {
                Normal = 0,
                NoWrap = 1,
                Pre = 2,
                PreWrap = 3
            }

            enum DisplayStyle {
                Flex = 0,
                None = 1
            }

            enum BackgroundPositionKeyword {
                Center = 0,
                Top = 1,
                Bottom = 2,
                Left = 3,
                Right = 4
            }

            enum Repeat {
                NoRepeat = 0,
                Space = 1,
                Round = 2,
                Repeat = 3
            }

            enum BackgroundSizeType {
                Length = 0,
                Cover = 1,
                Contain = 2
            }

            enum EditorTextRenderingMode {
                SDF = 0,
                Bitmap = 1
            }

            enum SliceType {
                Sliced = 0,
                Tiled = 1
            }

            class StylePropertyName implements System.IEquatable$1<UnityEngine.UIElements.StylePropertyName> {
                protected [__keep_incompatibility]: never;
                constructor($name: string);
                public static IsNullOrEmpty($propertyName: UnityEngine.UIElements.StylePropertyName): boolean;
                public GetHashCode(): number;
                public Equals($other: any): boolean;
                public Equals($other: UnityEngine.UIElements.StylePropertyName): boolean;
                public ToString(): string;
            }

            class StyleSheet extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public get importedWithErrors(): boolean;
                public get importedWithWarnings(): boolean;
                public contentHash: number;
                constructor();
            }

            class ThemeStyleSheet extends UnityEngine.UIElements.StyleSheet {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class StyleTextAutoSize implements System.IEquatable$1<UnityEngine.UIElements.StyleTextAutoSize>, UnityEngine.UIElements.IStyleValue$1<UnityEngine.UIElements.TextAutoSize> {
                protected [__keep_incompatibility]: never;
                public value: UnityEngine.UIElements.TextAutoSize;
                public keyword: UnityEngine.UIElements.StyleKeyword;
                constructor($v: UnityEngine.UIElements.TextAutoSize);
                constructor($keyword: UnityEngine.UIElements.StyleKeyword);
                public Equals($other: UnityEngine.UIElements.StyleTextAutoSize): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            class TemplateContainer extends UnityEngine.UIElements.BindableElement {
                protected [__keep_incompatibility]: never;
                public get templateId(): string;
                public get templateSource(): UnityEngine.UIElements.VisualTreeAsset;
                public get contentContainer(): UnityEngine.UIElements.VisualElement;
                constructor();
                constructor($templateId: string);
            }
            namespace TemplateContainer {
                class UxmlSerializedData extends UnityEngine.UIElements.BindableElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.TemplateContainer, UnityEngine.UIElements.TemplateContainer.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    public get uxmlName(): string;
                    public get uxmlQualifiedName(): string;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BindableElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            class PanelTextSettings extends UnityEngine.TextCore.Text.TextSettings {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class TextElement extends UnityEngine.UIElements.BindableElement implements UnityEngine.UIElements.ITextElement, UnityEngine.UIElements.ITextEdition, UnityEngine.UIElements.ITextElementExperimentalFeatures, UnityEngine.UIElements.ITextSelection, UnityEngine.UIElements.INotifyValueChanged$1<string> {
                protected [__keep_incompatibility]: never;
                public static readonly ussClassName: string;
                public static readonly selectableUssClassName: string;
                public PostProcessTextVertices: System.Action$1<UnityEngine.UIElements.TextElement.GlyphsEnumerable>;
                public text: string;
                public enableRichText: boolean;
                public emojiFallbackSupport: boolean;
                public parseEscapeSequences: boolean;
                public displayTooltipWhenElided: boolean;
                public get isElided(): boolean;
                public get experimental(): UnityEngine.UIElements.ITextElementExperimentalFeatures;
                public get selection(): UnityEngine.UIElements.ITextSelection;
                constructor();
                public MeasureTextSize($textToMeasure: string, $width: number, $widthMode: UnityEngine.UIElements.VisualElement.MeasureMode, $height: number, $heightMode: UnityEngine.UIElements.VisualElement.MeasureMode): UnityEngine.Vector2;
                public MeasureTextSize($textToMeasure: string, $width: number, $widthMode: UnityEngine.UIElements.VisualElement.MeasureMode, $height: number, $heightMode: UnityEngine.UIElements.VisualElement.MeasureMode, $fontsize?: number | null): UnityEngine.Vector2;
                public MarkDirtyText(): void;
            }
            namespace TextElement {
                class Glyph {
                    protected [__keep_incompatibility]: never;
                    public readonly vertices: Unity.Collections.NativeSlice$1<UnityEngine.UIElements.Vertex>;
                }

                class GlyphsEnumerable {
                    protected [__keep_incompatibility]: never;
                    public readonly Count: number;
                    public GetEnumerator(): UnityEngine.UIElements.TextElement.GlyphsEnumerator;
                }

                class GlyphsEnumerator {
                    protected [__keep_incompatibility]: never;
                    public get Current(): UnityEngine.UIElements.TextElement.Glyph;
                    public MoveNext(): boolean;
                    public Reset(): void;
                }

                class UxmlSerializedData extends UnityEngine.UIElements.BindableElement.UxmlSerializedData {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static Register(): void;
                    public CreateInstance(): any;
                    public Deserialize($obj: any): void;
                }

                class UxmlFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.TextElement, UnityEngine.UIElements.TextElement.UxmlTraits> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                }

                class UxmlTraits extends UnityEngine.UIElements.BindableElement.UxmlTraits {
                    protected [__keep_incompatibility]: never;
                    public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                    constructor();
                    public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
                }

            }

            enum TextAutoSizeMode {
                None = 0,
                BestFit = 1
            }

            class TextAutoSize implements System.IEquatable$1<UnityEngine.UIElements.TextAutoSize> {
                protected [__keep_incompatibility]: never;
                public mode: UnityEngine.UIElements.TextAutoSizeMode;
                public minSize: UnityEngine.UIElements.Length;
                public maxSize: UnityEngine.UIElements.Length;
                constructor($mode: UnityEngine.UIElements.TextAutoSizeMode, $minSize: UnityEngine.UIElements.Length, $maxSize: UnityEngine.UIElements.Length);
                public static None(): UnityEngine.UIElements.TextAutoSize;
                public Equals($other: UnityEngine.UIElements.TextAutoSize): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }

            interface ITextEdition {
                isReadOnly: boolean;
                maxLength: number;
                placeholder: string;
                isDelayed: boolean;
                maskChar: number;
                isPassword: boolean;
                hidePlaceholderOnFocus: boolean;
                autoCorrection: boolean;
                hideMobileInput: boolean;
                get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
                keyboardType: UnityEngine.TouchScreenKeyboardType;
            }

            interface ITextElementExperimentalFeatures extends UnityEngine.UIElements.IExperimentalFeatures {
                SetRenderedText($renderedText: string): void;
            }

            interface ITextSelection {
                isSelectable: boolean;
                cursorColor: UnityEngine.Color;
                selectionColor: UnityEngine.Color;
                cursorIndex: number;
                doubleClickSelectsWord: boolean;
                selectIndex: number;
                tripleClickSelectsLine: boolean;
                selectAllOnFocus: boolean;
                selectAllOnMouseUp: boolean;
                get cursorPosition(): UnityEngine.Vector2;
                HasSelection(): boolean;
                SelectAll(): void;
                SelectNone(): void;
                SelectRange($cursorIndex: number, $selectionIndex: number): void;
                GetCursorPositionFromStringIndex($stringIndex: number): UnityEngine.Vector2;
                MoveForward(): void;
                MoveBackward(): void;
                MoveToParagraphEnd(): void;
                MoveToParagraphStart(): void;
                MoveToEndOfPreviousWord(): void;
                MoveToStartOfNextWord(): void;
                MoveWordBackward(): void;
                MoveWordForward(): void;
                add_OnCursorIndexChange(handler: System.Action): void;
                remove_OnCursorIndexChange(handler: System.Action): void;
                add_OnSelectIndexChange(handler: System.Action): void;
                remove_OnSelectIndexChange(handler: System.Action): void;
            }

            class TextShadow implements System.IEquatable$1<UnityEngine.UIElements.TextShadow> {
                protected [__keep_incompatibility]: never;
                public offset: UnityEngine.Vector2;
                public blurRadius: number;
                public color: UnityEngine.Color;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.TextShadow): boolean;
                public GetHashCode(): number;
                public ToString(): string;
            }

            enum TextureSlotCount {
                One = 1,
                Two = 2,
                Four = 4,
                Eight = 8
            }

            class UIToolkitInputConfiguration {
                protected [__keep_incompatibility]: never;
                public static SetRuntimeInputBackend($backend: UnityEngine.UIElements.UIToolkitInputBackendOption): void;
            }

            enum UIToolkitInputBackendOption {
                Default = 0,
                InputSystemCompatibleBackend = 0,
                LegacyBackend = 1
            }

            class UQuery {
                protected [__keep_incompatibility]: never;
            }

            class UQueryState<T extends UnityEngine.UIElements.VisualElement> implements System.IEquatable$1<UnityEngine.UIElements.UQueryState$1<T>>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable {
                protected [__keep_incompatibility]: never;
                public RebuildOn($element: UnityEngine.UIElements.VisualElement): UnityEngine.UIElements.UQueryState$1<T>;
                public First(): T;
                public Last(): T;
                public ToList($results: System.Collections.Generic.List$1<T>): void;
                public ToList(): System.Collections.Generic.List$1<T>;
                public AtIndex($index: number): T;
                public ForEach($funcCall: System.Action$1<T>): void;
                public ForEach<T2>($result: System.Collections.Generic.List$1<T2>, $funcCall: System.Func$2<T, T2>): void;
                public ForEach<T2>($funcCall: System.Func$2<T, T2>): System.Collections.Generic.List$1<T2>;
                public GetEnumerator(): UnityEngine.UIElements.UQueryState$1.Enumerator$1<T>;
                public Equals($other: UnityEngine.UIElements.UQueryState$1<T>): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }
            namespace UQueryState {
                class Enumerator<T extends UnityEngine.UIElements.VisualElement> implements System.Collections.Generic.IEnumerator$1<T>, System.Collections.IEnumerator, System.IDisposable {
                    protected [__keep_incompatibility]: never;
                    public get Current(): T;
                    public MoveNext(): boolean;
                    public Reset(): void;
                    public Dispose(): void;
                }

            }

            class UQueryBuilder<T extends UnityEngine.UIElements.VisualElement> implements System.IEquatable$1<UnityEngine.UIElements.UQueryBuilder$1<T>> {
                protected [__keep_incompatibility]: never;
                constructor($visualElement: UnityEngine.UIElements.VisualElement);
                public Class($classname: string): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Name($id: string): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Descendents<T2 extends UnityEngine.UIElements.VisualElement>($name?: string, ...classNames: string[]): UnityEngine.UIElements.UQueryBuilder$1<T2>;
                public Descendents<T2 extends UnityEngine.UIElements.VisualElement>($name?: string, $classname?: string): UnityEngine.UIElements.UQueryBuilder$1<T2>;
                public Children<T2 extends UnityEngine.UIElements.VisualElement>($name?: string, ...classes: string[]): UnityEngine.UIElements.UQueryBuilder$1<T2>;
                public Children<T2 extends UnityEngine.UIElements.VisualElement>($name?: string, $className?: string): UnityEngine.UIElements.UQueryBuilder$1<T2>;
                public OfType<T2 extends UnityEngine.UIElements.VisualElement>($name?: string, ...classes: string[]): UnityEngine.UIElements.UQueryBuilder$1<T2>;
                public OfType<T2 extends UnityEngine.UIElements.VisualElement>($name?: string, $className?: string): UnityEngine.UIElements.UQueryBuilder$1<T2>;
                public Where($selectorPredicate: System.Func$2<T, boolean>): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Active(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public NotActive(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Visible(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public NotVisible(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Hovered(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public NotHovered(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Checked(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public NotChecked(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Selected(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public NotSelected(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Enabled(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public NotEnabled(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Focused(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public NotFocused(): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public Build(): UnityEngine.UIElements.UQueryState$1<T>;
                public First(): T;
                public Last(): T;
                public ToList(): System.Collections.Generic.List$1<T>;
                public ToList($results: System.Collections.Generic.List$1<T>): void;
                public AtIndex($index: number): T;
                public ForEach<T2>($result: System.Collections.Generic.List$1<T2>, $funcCall: System.Func$2<T, T2>): void;
                public ForEach<T2>($funcCall: System.Func$2<T, T2>): System.Collections.Generic.List$1<T2>;
                public ForEach($funcCall: System.Action$1<T>): void;
                public Equals($other: UnityEngine.UIElements.UQueryBuilder$1<T>): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }

            class UQueryExtensions {
                protected [__keep_incompatibility]: never;
                public static Q<T extends UnityEngine.UIElements.VisualElement>($name?: string, ...classes: string[]): T;
                public static Q($name?: string, ...classes: string[]): UnityEngine.UIElements.VisualElement;
                public static Q<T extends UnityEngine.UIElements.VisualElement>($name?: string, $className?: string): T;
                public static Q($name?: string, $className?: string): UnityEngine.UIElements.VisualElement;
                public static Query($name?: string, ...classes: string[]): UnityEngine.UIElements.UQueryBuilder$1<UnityEngine.UIElements.VisualElement>;
                public static Query($name?: string, $className?: string): UnityEngine.UIElements.UQueryBuilder$1<UnityEngine.UIElements.VisualElement>;
                public static Query<T extends UnityEngine.UIElements.VisualElement>($name?: string, ...classes: string[]): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public static Query<T extends UnityEngine.UIElements.VisualElement>($name?: string, $className?: string): UnityEngine.UIElements.UQueryBuilder$1<T>;
                public static Query(): UnityEngine.UIElements.UQueryBuilder$1<UnityEngine.UIElements.VisualElement>;
            }

            interface IUxmlAttributes {
                TryGetAttributeValue($attributeName: string, $value: $Out<string>): boolean;
            }

            class UxmlRootElementFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.VisualElement, UnityEngine.UIElements.UxmlRootElementTraits> {
                protected [__keep_incompatibility]: never;
                public get uxmlName(): string;
                public get uxmlQualifiedName(): string;
                public get substituteForTypeName(): string;
                public get substituteForTypeNamespace(): string;
                public get substituteForTypeQualifiedName(): string;
                constructor();
                public Create($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.UIElements.VisualElement;
            }

            class UxmlRootElementTraits extends UnityEngine.UIElements.UxmlTraits {
                protected [__keep_incompatibility]: never;
                public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                constructor();
            }

            class UxmlStyleFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.VisualElement, UnityEngine.UIElements.UxmlStyleTraits> {
                protected [__keep_incompatibility]: never;
                public get uxmlName(): string;
                public get uxmlQualifiedName(): string;
                public get substituteForTypeName(): string;
                public get substituteForTypeNamespace(): string;
                public get substituteForTypeQualifiedName(): string;
                constructor();
                public Create($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.UIElements.VisualElement;
            }

            class UxmlStyleTraits extends UnityEngine.UIElements.UxmlTraits {
                protected [__keep_incompatibility]: never;
                public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                constructor();
            }

            class UxmlTemplateFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.VisualElement, UnityEngine.UIElements.UxmlTemplateTraits> {
                protected [__keep_incompatibility]: never;
                public get uxmlName(): string;
                public get uxmlQualifiedName(): string;
                public get substituteForTypeName(): string;
                public get substituteForTypeNamespace(): string;
                public get substituteForTypeQualifiedName(): string;
                constructor();
                public Create($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.UIElements.VisualElement;
            }

            class UxmlTemplateTraits extends UnityEngine.UIElements.UxmlTraits {
                protected [__keep_incompatibility]: never;
                public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                constructor();
            }

            class UxmlAttributeOverridesFactory extends UnityEngine.UIElements.UxmlFactory$2<UnityEngine.UIElements.VisualElement, UnityEngine.UIElements.UxmlAttributeOverridesTraits> {
                protected [__keep_incompatibility]: never;
                public get uxmlName(): string;
                public get uxmlQualifiedName(): string;
                public get substituteForTypeName(): string;
                public get substituteForTypeNamespace(): string;
                public get substituteForTypeQualifiedName(): string;
                constructor();
                public Create($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.UIElements.VisualElement;
            }

            class UxmlAttributeOverridesTraits extends UnityEngine.UIElements.UxmlTraits {
                protected [__keep_incompatibility]: never;
                public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                constructor();
            }

            class UxmlAssetAttributeDescription<T extends UnityEngine.Object> extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<T> implements UnityEngine.UIElements.IUxmlAssetAttributeDescription {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): T;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Out<T>): boolean;
            }

            class UxmlAttributeDescription {
                protected [__keep_incompatibility]: never;
                public name: string;
                public obsoleteNames: System.Collections.Generic.IEnumerable$1<string>;
                public get type(): string;
                public get typeNamespace(): string;
                public get defaultValueAsString(): string;
                public use: UnityEngine.UIElements.UxmlAttributeDescription.Use;
                public restriction: UnityEngine.UIElements.UxmlTypeRestriction;
            }
            namespace UxmlAttributeDescription {
                enum Use {
                    None = 0,
                    Optional = 1,
                    Prohibited = 2,
                    Required = 3
                }

            }

            class TypedUxmlAttributeDescription<T> extends UnityEngine.UIElements.UxmlAttributeDescription {
                protected [__keep_incompatibility]: never;
                public defaultValue: T;
                public get defaultValueAsString(): string;
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): T;
            }

            class UxmlStringAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<string> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): string;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<string>): boolean;
            }

            class UxmlFloatAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<number> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): number;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<number>): boolean;
            }

            class UxmlDoubleAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<number> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): number;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<number>): boolean;
            }

            class UxmlIntAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<number> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): number;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<number>): boolean;
            }

            class UxmlUnsignedIntAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<number> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): number;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<number>): boolean;
            }

            class UxmlUnsignedLongAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<bigint> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): bigint;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<bigint>): boolean;
            }

            class UxmlLongAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<bigint> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): bigint;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<bigint>): boolean;
            }

            class UxmlBoolAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<boolean> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): boolean;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<boolean>): boolean;
            }

            class UxmlColorAttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<UnityEngine.Color> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.Color;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<UnityEngine.Color>): boolean;
            }

            class UxmlTypeAttributeDescription<TBase> extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<System.Type> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): System.Type;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<System.Type>): boolean;
            }

            class UxmlEnumAttributeDescription<T extends System.IConvertible> extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<T> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): T;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<T>): boolean;
            }

            class UxmlHash128AttributeDescription extends UnityEngine.UIElements.TypedUxmlAttributeDescription$1<UnityEngine.Hash128> {
                protected [__keep_incompatibility]: never;
                public get defaultValueAsString(): string;
                constructor();
                public GetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.Hash128;
                public TryGetValueFromBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext, $value: $Ref<UnityEngine.Hash128>): boolean;
            }

            enum LibraryVisibility {
                Default = 0,
                Visible = 1,
                Hidden = 2
            }

            class UxmlElementAttribute extends System.Attribute {
                protected [__keep_incompatibility]: never;
                public readonly name: string;
                public visibility: UnityEngine.UIElements.LibraryVisibility;
                public libraryPath: string;
                constructor();
                constructor($uxmlName: string);
                constructor($uxmlName: string, ...supportedTypes: System.Type[]);
            }

            class UxmlAttributeAttribute extends System.Attribute {
                protected [__keep_incompatibility]: never;
                public name: string;
                public obsoleteNames: System.Array$1<string>;
                constructor();
                constructor($name: string);
                constructor($name: string, ...obsoleteNames: string[]);
            }

            class UxmlTypeReferenceAttribute extends UnityEngine.PropertyAttribute {
                protected [__keep_incompatibility]: never;
                public baseType: System.Type;
                constructor();
                constructor($baseType: System.Type);
            }

            class UxmlIgnoreAttribute extends System.Attribute {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class UxmlObjectAttribute extends System.Attribute {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class UxmlObjectReferenceAttribute extends System.Attribute {
                protected [__keep_incompatibility]: never;
                public name: string;
                public types: System.Array$1<System.Type>;
                constructor();
                constructor($uxmlName: string);
                constructor($uxmlName: string, ...acceptedTypes: System.Type[]);
            }

            class UxmlChildElementDescription {
                protected [__keep_incompatibility]: never;
                public get elementName(): string;
                public get elementNamespace(): string;
                constructor($t: System.Type);
            }

            class UxmlAttributeNames {
                protected [__keep_incompatibility]: never;
                public readonly fieldName: string;
                public readonly uxmlName: string;
                public readonly typeReference: System.Type;
                public readonly obsoleteNames: System.Array$1<string>;
                constructor($fieldName: string, $uxmlName: string, $typeReference?: System.Type, ...obsoleteNames: string[]);
            }

            class RegisterUxmlCacheAttribute extends System.Attribute {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class UxmlDescriptionCache {
                protected [__keep_incompatibility]: never;
                public static RegisterType($type: System.Type, $attributeNames: System.Array$1<UnityEngine.UIElements.UxmlAttributeNames>, $isEditorOnly?: boolean): void;
            }

            class BaseUxmlTraits {
                protected [__keep_incompatibility]: never;
                public get canHaveAnyAttribute(): boolean;
                public get uxmlAttributesDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlAttributeDescription>;
                public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
            }

            class UxmlTraits extends UnityEngine.UIElements.BaseUxmlTraits {
                protected [__keep_incompatibility]: never;
                public Init($ve: UnityEngine.UIElements.VisualElement, $bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): void;
            }

            interface IBaseUxmlFactory {
                get uxmlName(): string;
                get uxmlNamespace(): string;
                get uxmlQualifiedName(): string;
                get uxmlType(): System.Type;
                get canHaveAnyAttribute(): boolean;
                get uxmlAttributesDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlAttributeDescription>;
                get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                get substituteForTypeName(): string;
                get substituteForTypeNamespace(): string;
                get substituteForTypeQualifiedName(): string;
                AcceptsAttributeBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): boolean;
            }

            interface IUxmlFactory extends UnityEngine.UIElements.IBaseUxmlFactory {
                Create($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.UIElements.VisualElement;
            }

            class BaseUxmlFactory<TCreatedType, TTraits extends UnityEngine.UIElements.BaseUxmlTraits> {
                protected [__keep_incompatibility]: never;
                public get uxmlName(): string;
                public get uxmlNamespace(): string;
                public get uxmlQualifiedName(): string;
                public get uxmlType(): System.Type;
                public get canHaveAnyAttribute(): boolean;
                public get uxmlAttributesDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlAttributeDescription>;
                public get uxmlChildElementsDescription(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.UxmlChildElementDescription>;
                public get substituteForTypeName(): string;
                public get substituteForTypeNamespace(): string;
                public get substituteForTypeQualifiedName(): string;
                public AcceptsAttributeBag($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): boolean;
            }

            class UxmlFactory<TCreatedType extends UnityEngine.UIElements.VisualElement, TTraits extends UnityEngine.UIElements.UxmlTraits> extends UnityEngine.UIElements.BaseUxmlFactory$2<TCreatedType, TTraits> implements UnityEngine.UIElements.IBaseUxmlFactory, UnityEngine.UIElements.IUxmlFactory {
                protected [__keep_incompatibility]: never;
                constructor();
                public Create($bag: UnityEngine.UIElements.IUxmlAttributes, $cc: UnityEngine.UIElements.CreationContext): UnityEngine.UIElements.VisualElement;
            }

            class UxmlFactory<TCreatedType extends UnityEngine.UIElements.VisualElement> extends UnityEngine.UIElements.UxmlFactory$2<TCreatedType, UnityEngine.UIElements.VisualElement.UxmlTraits> {
                protected [__keep_incompatibility]: never;
                constructor();
            }

            class UxmlSerializedData {
                protected [__keep_incompatibility]: never;
                public static Register(): void;
                public static ShouldWriteAttributeValue($attributeFlags: UnityEngine.UIElements.UxmlSerializedData.UxmlAttributeFlags): boolean;
                public CreateInstance(): any;
                public Deserialize($obj: any): void;
            }
            namespace UxmlSerializedData {
                enum UxmlAttributeFlags {
                    Ignore = 0,
                    OverriddenInUxml = 1,
                    DefaultValue = 2
                }

            }

            class UxmlSerializedDataUtility {
                protected [__keep_incompatibility]: never;
                public static CopySerialized($value: any): any;
                public static CopySerialized<T>($value: any): T;
            }

            class UxmlTypeRestriction implements System.IEquatable$1<UnityEngine.UIElements.UxmlTypeRestriction> {
                protected [__keep_incompatibility]: never;
                public Equals($other: UnityEngine.UIElements.UxmlTypeRestriction): boolean;
            }

            class UxmlValueMatches extends UnityEngine.UIElements.UxmlTypeRestriction {
                protected [__keep_incompatibility]: never;
                public regex: string;
                constructor();
                public Equals($other: UnityEngine.UIElements.UxmlTypeRestriction): boolean;
            }

            class UxmlValueBounds extends UnityEngine.UIElements.UxmlTypeRestriction {
                protected [__keep_incompatibility]: never;
                public min: string;
                public max: string;
                public excludeMin: boolean;
                public excludeMax: boolean;
                constructor();
                public Equals($other: UnityEngine.UIElements.UxmlTypeRestriction): boolean;
            }

            class UxmlEnumeration extends UnityEngine.UIElements.UxmlTypeRestriction {
                protected [__keep_incompatibility]: never;
                public values: System.Collections.Generic.IEnumerable$1<string>;
                constructor();
                public Equals($other: UnityEngine.UIElements.UxmlTypeRestriction): boolean;
            }

            class VisualTreeAsset extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public get importedWithErrors(): boolean;
                public get importedWithWarnings(): boolean;
                public get templateDependencies(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.VisualTreeAsset>;
                public get stylesheets(): System.Collections.Generic.IEnumerable$1<UnityEngine.UIElements.StyleSheet>;
                public contentHash: number;
                constructor();
                public Instantiate(): UnityEngine.UIElements.TemplateContainer;
                public Instantiate($bindingPath: string): UnityEngine.UIElements.TemplateContainer;
                public CloneTree(): UnityEngine.UIElements.TemplateContainer;
                public CloneTree($bindingPath: string): UnityEngine.UIElements.TemplateContainer;
                public CloneTree($target: UnityEngine.UIElements.VisualElement): void;
                public CloneTree($target: UnityEngine.UIElements.VisualElement, $firstElementIndex: $Out<number>, $elementAddedCount: $Out<number>): void;
            }

            class CreationContext implements System.IEquatable$1<UnityEngine.UIElements.CreationContext> {
                protected [__keep_incompatibility]: never;
                public static readonly Default: UnityEngine.UIElements.CreationContext;
                public get target(): UnityEngine.UIElements.VisualElement;
                public get visualTreeAsset(): UnityEngine.UIElements.VisualTreeAsset;
                public get slotInsertionPoints(): System.Collections.Generic.Dictionary$2<string, UnityEngine.UIElements.VisualElement>;
                public Equals($obj: any): boolean;
                public Equals($other: UnityEngine.UIElements.CreationContext): boolean;
                public GetHashCode(): number;
            }

            enum GradientType {
                Linear = 0,
                Radial = 1
            }

            enum AddressMode {
                Wrap = 0,
                Clamp = 1,
                Mirror = 2
            }

            class VectorImage extends UnityEngine.ScriptableObject {
                protected [__keep_incompatibility]: never;
                public get width(): number;
                public get height(): number;
                constructor();
            }

            enum PickingMode {
                Position = 0,
                Ignore = 1
            }

            enum LanguageDirection {
                Inherit = 0,
                LTR = 1,
                RTL = 2
            }

            class VisualElementExtensions {
                protected [__keep_incompatibility]: never;
                public static StretchToParentSize(): void;
                public static StretchToParentWidth(): void;
                public static AddManipulator($manipulator: UnityEngine.UIElements.IManipulator): void;
                public static RemoveManipulator($manipulator: UnityEngine.UIElements.IManipulator): void;
                public static WorldToLocal($p: UnityEngine.Vector2): UnityEngine.Vector2;
                public static LocalToWorld($p: UnityEngine.Vector2): UnityEngine.Vector2;
                public static WorldToLocal($r: UnityEngine.Rect): UnityEngine.Rect;
                public static LocalToWorld($r: UnityEngine.Rect): UnityEngine.Rect;
                public static ChangeCoordinatesTo($dest: UnityEngine.UIElements.VisualElement, $point: UnityEngine.Vector2): UnityEngine.Vector2;
                public static ChangeCoordinatesTo($dest: UnityEngine.UIElements.VisualElement, $rect: UnityEngine.Rect): UnityEngine.Rect;
            }

            class VisualElementDebugExtensions {
                protected [__keep_incompatibility]: never;
                public static DebugIncrementVersionChange($ve: UnityEngine.UIElements.VisualElement, $changeType: UnityEngine.UIElements.VersionChangeType): void;
            }

            class BindingId implements System.IEquatable$1<UnityEngine.UIElements.BindingId> {
                protected [__keep_incompatibility]: never;
                public static readonly Invalid: UnityEngine.UIElements.BindingId;
                constructor($path: string);
                constructor($path: $Ref<Unity.Properties.PropertyPath>);
                public ToString(): string;
                public Equals($other: UnityEngine.UIElements.BindingId): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
            }

            enum EventInterestOptions {
                Inherit = 0,
                AllEventTypes = -1
            }

            class EventInterestAttribute extends System.Attribute {
                protected [__keep_incompatibility]: never;
                constructor(...eventTypes: System.Type[]);
                constructor($interests: UnityEngine.UIElements.EventInterestOptions);
            }

            interface IExperimentalFeatures {
                get animation(): UnityEngine.UIElements.Experimental.ITransitionAnimations;
            }

            class VisualElementFocusChangeDirection extends UnityEngine.UIElements.FocusChangeDirection {
                protected [__keep_incompatibility]: never;
                public static get left(): UnityEngine.UIElements.FocusChangeDirection;
                public static get right(): UnityEngine.UIElements.FocusChangeDirection;
            }

            class VisualElementFocusRing implements UnityEngine.UIElements.IFocusRing {
                protected [__keep_incompatibility]: never;
                public defaultFocusOrder: UnityEngine.UIElements.VisualElementFocusRing.DefaultFocusOrder;
                constructor($root: UnityEngine.UIElements.VisualElement, $dfo?: UnityEngine.UIElements.VisualElementFocusRing.DefaultFocusOrder);
                public GetFocusChangeDirection($currentFocusable: UnityEngine.UIElements.Focusable, $e: UnityEngine.UIElements.EventBase): UnityEngine.UIElements.FocusChangeDirection;
                public GetNextFocusable($currentFocusable: UnityEngine.UIElements.Focusable, $direction: UnityEngine.UIElements.FocusChangeDirection): UnityEngine.UIElements.Focusable;
            }
            namespace VisualElementFocusRing {
                enum DefaultFocusOrder {
                    ChildOrder = 0,
                    PositionXY = 1,
                    PositionYX = 2
                }

            }

            interface IVisualElementScheduledItem {
                get element(): UnityEngine.UIElements.VisualElement;
                get isActive(): boolean;
                Resume(): void;
                Pause(): void;
                ExecuteLater($delayMs: bigint): void;
                StartingIn($delayMs: bigint): UnityEngine.UIElements.IVisualElementScheduledItem;
                Every($intervalMs: bigint): UnityEngine.UIElements.IVisualElementScheduledItem;
                Until($stopCondition: System.Func$1<boolean>): UnityEngine.UIElements.IVisualElementScheduledItem;
                ForDuration($durationMs: bigint): UnityEngine.UIElements.IVisualElementScheduledItem;
            }

            interface IVisualElementScheduler {
                Execute($timerUpdateEvent: System.Action$1<UnityEngine.UIElements.TimerState>): UnityEngine.UIElements.IVisualElementScheduledItem;
                Execute($updateEvent: System.Action): UnityEngine.UIElements.IVisualElementScheduledItem;
            }

            class VisualElementStyleSheetSet implements System.IEquatable$1<UnityEngine.UIElements.VisualElementStyleSheetSet> {
                protected [__keep_incompatibility]: never;
                public get count(): number;
                public Add($styleSheet: UnityEngine.UIElements.StyleSheet): void;
                public Insert($index: number, $styleSheet: UnityEngine.UIElements.StyleSheet): void;
                public Clear(): void;
                public Remove($styleSheet: UnityEngine.UIElements.StyleSheet): boolean;
                public Contains($styleSheet: UnityEngine.UIElements.StyleSheet): boolean;
                public Equals($other: UnityEngine.UIElements.VisualElementStyleSheetSet): boolean;
                public Equals($obj: any): boolean;
                public GetHashCode(): number;
                public get_Item($index: number): UnityEngine.UIElements.StyleSheet;
            }

            class InputWrapper extends UnityEngine.MonoBehaviour {
                protected [__keep_incompatibility]: never;
                public get compositionString(): string;
                public imeCompositionMode: UnityEngine.IMECompositionMode;
                public compositionCursorPos: UnityEngine.Vector2;
                public get mousePresent(): boolean;
                public get mousePosition(): UnityEngine.Vector2;
                public get mouseScrollDelta(): UnityEngine.Vector2;
                public get touchSupported(): boolean;
                public get touchCount(): number;
                constructor();
                public GetMouseButtonDown($button: number): boolean;
                public GetMouseButtonUp($button: number): boolean;
                public GetMouseButton($button: number): boolean;
                public GetTouch($index: number): UnityEngine.Touch;
                public GetAxisRaw($axisName: string): number;
                public GetButtonDown($buttonName: string): boolean;
            }

        }
    }
    namespace UnityEngine {
        namespace UIElements {
            namespace Experimental {
                class Easing {
                    protected [__keep_incompatibility]: never;
                    public static Step($t: number): number;
                    public static Linear($t: number): number;
                    public static InSine($t: number): number;
                    public static OutSine($t: number): number;
                    public static InOutSine($t: number): number;
                    public static InQuad($t: number): number;
                    public static OutQuad($t: number): number;
                    public static InOutQuad($t: number): number;
                    public static InCubic($t: number): number;
                    public static OutCubic($t: number): number;
                    public static InOutCubic($t: number): number;
                    public static InPower($t: number, $power: number): number;
                    public static OutPower($t: number, $power: number): number;
                    public static InOutPower($t: number, $power: number): number;
                    public static InBounce($t: number): number;
                    public static OutBounce($t: number): number;
                    public static InOutBounce($t: number): number;
                    public static InElastic($t: number): number;
                    public static OutElastic($t: number): number;
                    public static InOutElastic($t: number): number;
                    public static InBack($t: number): number;
                    public static OutBack($t: number): number;
                    public static InOutBack($t: number): number;
                    public static InBack($t: number, $s: number): number;
                    public static OutBack($t: number, $s: number): number;
                    public static InOutBack($t: number, $s: number): number;
                    public static InCirc($t: number): number;
                    public static OutCirc($t: number): number;
                    public static InOutCirc($t: number): number;
                }

                class PointerOverLinkTagEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.Experimental.PointerOverLinkTagEvent> {
                    protected [__keep_incompatibility]: never;
                    public get linkID(): string;
                    public get linkText(): string;
                    constructor();
                    public static GetPooled($evt: UnityEngine.UIElements.IPointerEvent, $linkID: string, $linkText: string): UnityEngine.UIElements.Experimental.PointerOverLinkTagEvent;
                }

                class PointerMoveLinkTagEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.Experimental.PointerMoveLinkTagEvent> {
                    protected [__keep_incompatibility]: never;
                    public get linkID(): string;
                    public get linkText(): string;
                    constructor();
                    public static GetPooled($evt: UnityEngine.UIElements.IPointerEvent, $linkID: string, $linkText: string): UnityEngine.UIElements.Experimental.PointerMoveLinkTagEvent;
                }

                class PointerOutLinkTagEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.Experimental.PointerOutLinkTagEvent> {
                    protected [__keep_incompatibility]: never;
                    constructor();
                    public static GetPooled($evt: UnityEngine.UIElements.IPointerEvent, $linkID: string): UnityEngine.UIElements.Experimental.PointerOutLinkTagEvent;
                }

                class PointerDownLinkTagEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.Experimental.PointerDownLinkTagEvent> {
                    protected [__keep_incompatibility]: never;
                    public get linkID(): string;
                    public get linkText(): string;
                    constructor();
                    public static GetPooled($evt: UnityEngine.UIElements.IPointerEvent, $linkID: string, $linkText: string): UnityEngine.UIElements.Experimental.PointerDownLinkTagEvent;
                }

                class PointerUpLinkTagEvent extends UnityEngine.UIElements.PointerEventBase$1<UnityEngine.UIElements.Experimental.PointerUpLinkTagEvent> {
                    protected [__keep_incompatibility]: never;
                    public get linkID(): string;
                    public get linkText(): string;
                    constructor();
                    public static GetPooled($evt: UnityEngine.UIElements.IPointerEvent, $linkID: string, $linkText: string): UnityEngine.UIElements.Experimental.PointerUpLinkTagEvent;
                }

                class StyleValues {
                    protected [__keep_incompatibility]: never;
                    public top: number;
                    public left: number;
                    public width: number;
                    public height: number;
                    public right: number;
                    public bottom: number;
                    public color: UnityEngine.Color;
                    public backgroundColor: UnityEngine.Color;
                    public unityBackgroundImageTintColor: UnityEngine.Color;
                    public borderColor: UnityEngine.Color;
                    public marginLeft: number;
                    public marginTop: number;
                    public marginRight: number;
                    public marginBottom: number;
                    public paddingLeft: number;
                    public paddingTop: number;
                    public paddingRight: number;
                    public paddingBottom: number;
                    public borderLeftWidth: number;
                    public borderRightWidth: number;
                    public borderTopWidth: number;
                    public borderBottomWidth: number;
                    public borderTopLeftRadius: number;
                    public borderTopRightRadius: number;
                    public borderBottomLeftRadius: number;
                    public borderBottomRightRadius: number;
                    public opacity: number;
                    public flexGrow: number;
                    public flexShrink: number;
                }

                interface ITransitionAnimations {
                    Start($from: number, $to: number, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, number>): UnityEngine.UIElements.Experimental.ValueAnimation$1<number>;
                    Start($from: UnityEngine.Rect, $to: UnityEngine.Rect, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Rect>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Rect>;
                    Start($from: UnityEngine.Color, $to: UnityEngine.Color, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Color>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Color>;
                    Start($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Vector3>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Vector3>;
                    Start($from: UnityEngine.Vector2, $to: UnityEngine.Vector2, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Vector2>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Vector2>;
                    Start($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Quaternion>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Quaternion>;
                    Start($from: UnityEngine.UIElements.Experimental.StyleValues, $to: UnityEngine.UIElements.Experimental.StyleValues, $durationMs: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.UIElements.Experimental.StyleValues>;
                    Start($to: UnityEngine.UIElements.Experimental.StyleValues, $durationMs: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.UIElements.Experimental.StyleValues>;
                    Start($fromValueGetter: System.Func$2<UnityEngine.UIElements.VisualElement, number>, $to: number, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, number>): UnityEngine.UIElements.Experimental.ValueAnimation$1<number>;
                    Start($fromValueGetter: System.Func$2<UnityEngine.UIElements.VisualElement, UnityEngine.Rect>, $to: UnityEngine.Rect, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Rect>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Rect>;
                    Start($fromValueGetter: System.Func$2<UnityEngine.UIElements.VisualElement, UnityEngine.Color>, $to: UnityEngine.Color, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Color>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Color>;
                    Start($fromValueGetter: System.Func$2<UnityEngine.UIElements.VisualElement, UnityEngine.Vector3>, $to: UnityEngine.Vector3, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Vector3>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Vector3>;
                    Start($fromValueGetter: System.Func$2<UnityEngine.UIElements.VisualElement, UnityEngine.Vector2>, $to: UnityEngine.Vector2, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Vector2>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Vector2>;
                    Start($fromValueGetter: System.Func$2<UnityEngine.UIElements.VisualElement, UnityEngine.Quaternion>, $to: UnityEngine.Quaternion, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine.UIElements.VisualElement, UnityEngine.Quaternion>): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Quaternion>;
                    Layout($to: UnityEngine.Rect, $durationMs: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Rect>;
                    TopLeft($to: UnityEngine.Vector2, $durationMs: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Vector2>;
                    Size($to: UnityEngine.Vector2, $durationMs: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Vector2>;
                    Scale($to: number, $duration: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<number>;
                    Position($to: UnityEngine.Vector3, $duration: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Vector3>;
                    Rotation($to: UnityEngine.Quaternion, $duration: number): UnityEngine.UIElements.Experimental.ValueAnimation$1<UnityEngine.Quaternion>;
                }

                interface IValueAnimation {
                    get isRunning(): boolean;
                    durationMs: number;
                    Start(): void;
                    Stop(): void;
                    Recycle(): void;
                }

                class ValueAnimation<T> implements UnityEngine.UIElements.Experimental.IValueAnimation, UnityEngine.UIElements.Experimental.IValueAnimationUpdate {
                    protected [__keep_incompatibility]: never;
                    public durationMs: number;
                    public easingCurve: System.Func$2<number, number>;
                    public get isRunning(): boolean;
                    public onAnimationCompleted: System.Action;
                    public autoRecycle: boolean;
                    public valueUpdated: System.Action$2<UnityEngine.UIElements.VisualElement, T>;
                    public initialValue: System.Func$2<UnityEngine.UIElements.VisualElement, T>;
                    public interpolator: System.Func$4<T, T, number, T>;
                    public from: T;
                    public to: T;
                    constructor();
                    public Start(): void;
                    public Stop(): void;
                    public Recycle(): void;
                    public static Create($e: UnityEngine.UIElements.VisualElement, $interpolator: System.Func$4<T, T, number, T>): UnityEngine.UIElements.Experimental.ValueAnimation$1<T>;
                    public Ease($easing: System.Func$2<number, number>): UnityEngine.UIElements.Experimental.ValueAnimation$1<T>;
                    public OnCompleted($callback: System.Action): UnityEngine.UIElements.Experimental.ValueAnimation$1<T>;
                    public KeepAlive(): UnityEngine.UIElements.Experimental.ValueAnimation$1<T>;
                }

            }
        }
    }
    namespace UnityEngine {
        namespace UIElements {
            namespace InputSystem {
                class InputSystemEventSystem extends UnityEngine.MonoBehaviour {
                    protected [__keep_incompatibility]: never;
                    public get isAppFocused(): boolean;
                    public inputOverride: UnityEngine.UIElements.InputWrapper;
                }

            }
        }
    }
}
