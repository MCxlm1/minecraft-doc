/**
 * @beta
 * 复合块体积是由多个独立块体积定义组成的集合，这些定义作为一个整体定义一个更大的（可能非连续的）不规则形状体积。
 * 此类松散地基于CSG（计算实体几何）概念，允许用户通过构建体积和空隙的堆栈来创建复杂体积，从而形成更大的单一体积。
 * 例如，通常创建者会通过为每个面创建6个“墙壁”表面来创建一个空心立方体。
 * 使用复合块体积，创建者可以通过创建一个外部实心立方体，然后在内部定义一个单一的空心立方体来创建一个空心立方体。
 * 类似地，复合块体积可以表示不规则形状的体积（例如，一棵树由树干和许多叶子立方体组成，这些立方体不一定连续放置）。
 * 添加到CompoundBlockVolume的每个体积（默认情况下）相对于设置的起点（在构造时或通过某个设置函数）的。
 * 但是，也可以将绝对性质的体积推送到复合集合中，这些体积不受起点变化的影响。
 */
export class CompoundBlockVolume {
    /**
     * @remarks
     * 返回表示堆栈中体积集合的边界矩形的“容量”。
     *
     */
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    /**
     * @remarks
     * 返回体积堆栈中体积（正和负）的数量。
     *
     */
    readonly volumeCount: number;
    /**
     * @remarks
     * 创建一个 CompoundBlockVolume 对象。
     *
     * @param origin
     * 可选的世界空间起点，复合体积将以此为中心。
     * 如果未指定，起点设置为 (0,0,0)。
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * 清除体积堆栈的内容。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    clear(): void;
    /**
     * @remarks
     * 获取复合块体积的块位置迭代器。此迭代器允许创建者遍历更大边界区域内所有选中的体积。
     * 已被减体积覆盖的体积区域不会包含在迭代器步骤中。
     * （例如，如果你将一个立方体推入堆栈，然后将一个减体积推入同一位置，那么迭代器将跳过初始体积，因为它被视为负空间）
     * 注意，此迭代器返回的块位置是绝对世界空间（无论推入的复合体积项是绝对还是相对）。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * 获取表示堆栈上所有体积的容器的最大的边界框。
     * 注意，返回的边界框以绝对世界空间表示（无论推入的复合体积项是绝对还是相对）。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最大块位置。
     * 注意，返回的最大位置是绝对世界空间（无论推入的复合体积项是绝对还是相对）。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最小块位置。
     * 注意，返回的最小位置是绝对世界空间（无论推入的复合体积项是绝对还是相对）。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取复合体积的世界空间起点。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * 返回一个布尔值，指示是否有任何体积项被推入体积。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * 返回一个布尔值，表示给定的绝对世界空间块位置是否位于正块体积内部。
     * 例如，如果堆栈包含一个大立方体，后跟一个稍小的负立方体，并且测试位置在负立方体内，则函数返回 false，因为它不在体积“内部”（它在边界矩形内，但不在正定义的位置内）。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * 检查推入体积堆栈的最后一个条目，但不影响堆栈内容。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param forceRelativity
     * 确定函数是否返回一个强制为相对或绝对坐标系的 CompoundBlockVolumeItem。
     * `true` = 强制返回项相对于体积起点
     * `false` = 强制返回项为绝对世界空间位置
     *
     * 如果未指定标志，则返回的项保留其推入时的相对性。
     * @returns
     * 如果堆栈为空，则返回未定义。
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * 从体积堆栈中移除最后一个条目。这将使堆栈大小减少一。
     *
     * 此函数不能在受限执行模式下调用。
     *
     */
    popVolume(): boolean;
    /**
     * @remarks
     * 将一个体积项推入堆栈。体积项包含一个“action”参数，决定此体积是正空间还是负空间。
     * 项还包含一个 `locationRelativity`，确定它是相对于复合体积起点还是绝对。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param item
     * 要推入堆栈末尾的项。
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * 如果体积堆栈为空，此函数将指定的项推入堆栈。
     * 如果体积堆栈不为空，此函数将用新项替换堆栈上的最后一个项。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param item
     * 要添加或替换的项。
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * 将复合体积的起点设置为绝对世界空间位置。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param preserveExistingVolumes
     * 此可选的布尔标志确定相对的 `CompoundBlockVolumeItem` 是否固定在原位，还是受新起点影响。
     * 想象一个场景，你有一系列围绕起点相对位置构成的球体；所有这些位置都在 -2 到 2 范围内。
     * 将每个位置作为相对项推入复合体积。
     * 现在，移动起点，代表球体的所有位置也随之移动。
     * 但是，假设你想在第一个球体旁边添加第二个球体。
     * 在这种情况下，将新起点设置到几个位置之外，但 `preserveExistingVolumes` = true。
     * 这将设置一个新起点，但现有的球体位置将保持相对于原始起点。
     * 现在，你可以再次推入相对球体位置（这次它们将相对于新起点），从而得到两个相邻的球体。
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * 类似于 {@link CompoundBlockVolume.setOrigin} - 此函数将起点按给定增量平移到一个新位置。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param preserveExistingVolumes
     * 请参阅 {@link CompoundBlockVolume.setOrigin} 的参数描述。
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}