/**
 * @beta
 * 复合方块体积是单个方块体积定义的集合，这些定义作为一个整体，定义了一个更大的（有时是不连续的）不规则形状体积。
 * 该类大致基于CSG（计算实体几何）的概念，允许用户通过构建体积和空洞的堆栈来创建复杂的体积，从而形成一个更大的单一体积。
 * 例如 - 通常创建者会通过为每个面创建 6 个“墙”表面来创建空心立方体。
 * 使用复合方块体积，创建者可以通过创建一个单一的外部实心立方体，然后在其内部定义一个单一的“空洞”立方体来创建空心立方体。
 * 同样，复合方块体积可以表示不规则形状的体积（例如，一棵树由树干和许多不一定是连续放置的叶子方块组成）。
 * 添加到 CompoundBlockVolume 的每个体积（默认情况下）相对于设置的原点（在构造时或通过某个 set 函数设置）。
 * 但是，也可以将绝对性质的体积推送到复合集合中，这些体积不受原点变化的影响。
 */
export class CompoundBlockVolume {
    /**
     * @remarks
     * 返回表示堆栈中体积集合的边界矩形的“容量”
     *
     */
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    /**
     * @remarks
     * 返回体积堆栈中体积（正和负）的数量
     *
     */
    readonly volumeCount: number;
    /**
     * @remarks
     * 创建一个 CompoundBlockVolume 对象
     *
     * @param origin
     * 可选的世界空间原点，复合体积将围绕该原点居中。
     * 如果未指定，则原点设置为 (0,0,0)
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * 清除体积堆栈的内容
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    clear(): void;
    /**
     * @remarks
     * 获取复合方块体积的方块位置迭代器。此迭代器将允许创建者遍历更大边界区域内的所有选定体积。
     * 已被减法体积覆盖的体积区域将不会包含在迭代器步骤中。
     * （即，如果你将一个立方体推入堆栈，然后将一个减法体积推入同一位置，则迭代器将跳过初始体积，因为它被视为负空间）
     * 请注意，此迭代器返回的方块位置是绝对世界空间坐标（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 一个用于遍历复合体积内所有方块位置的 BlockLocationIterator。
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * 获取表示堆栈上所有体积容器的最小边界框。
     * 请注意，返回的边界框以绝对世界空间表示（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 包含堆栈上所有体积的最小边界框（BlockBoundingBox）。
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 获取表示堆栈上体积的外层边界矩形的最大方块位置。
     * 请注意，返回的最大位置是绝对世界空间坐标（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 表示外层边界矩形最大方块位置的 Vector3。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取表示堆栈上体积的外层边界矩形的最小方块位置。
     * 请注意，返回的最小位置是绝对世界空间坐标（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 表示外层边界矩形最小方块位置的 Vector3。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取复合体积在世界空间中的原点。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 复合体积在世界空间中的原点位置（Vector3）。
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * 返回一个布尔值，指示是否有任何体积项被推入该体积。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 如果体积堆栈中没有体积项，则返回 true；否则返回 false。
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * 返回一个布尔值，表示给定的绝对世界空间方块位置是否位于正体积内。
     * 例如，如果堆栈包含一个大立方体，后跟一个稍小的负立方体，并且测试位置位于负立方体内，则函数将返回 false，
     * 因为它不在体积“内部”（它确实在边界矩形内，但不在正确定义的位置内）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param worldLocation
     * 要测试的绝对世界空间方块位置。
     * @returns
     * 如果该位置位于正体积内部，则返回 true；否则返回 false。
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * 检查推送到体积堆栈的最后一个条目，而不影响堆栈内容。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param forceRelativity
     * 确定函数返回的 CompoundBlockVolumeItem 是否强制使用相对或绝对坐标系。
     * `true` = 强制返回项相对于体积原点
     * `false` = 强制返回项为绝对世界空间位置
     *
     * 如果未指定标志，则返回的项保留其被推入时的相对性。
     * @returns
     * 如果堆栈为空，则返回 undefined
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * 从体积堆栈中移除最后一个条目。这将使堆栈大小减少一。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 如果从堆栈中移除了一项，则返回 true；如果堆栈为空，则返回 false。
     */
    popVolume(): boolean;
    /**
     * @remarks
     * 将体积项推送到堆栈。体积项包含一个“action”参数，用于确定该体积是正空间还是负空间。
     * 该项还包含一个 `locationRelativity`，用于确定它是相对于复合体积原点还是绝对位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param item
     * 要推送到堆栈末尾的项
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * 如果体积堆栈为空，此函数将把指定项推送到堆栈。
     * 如果体积堆栈不为空，此函数将用新项替换堆栈上的最后一项。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param item
     * 要添加或替换的项
     * @returns
     * 如果堆栈不为空且最后一项被替换，则返回 true；如果堆栈为空且新项被推入，则返回 false。
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * 将复合体积的原点设置为绝对世界空间位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param position
     * 要设置的世界空间原点位置。
     * @param preserveExistingVolumes
     * 此可选布尔标志确定相对的 `CompoundBlockVolumeItem` 是保持不变，还是会受到新原点的影响。
     * 设想一个场景，你有一系列围绕原点的相对位置，它们构成一个球体；所有这些位置都在 -2 到 2 的范围内。
     * 将每个位置作为相对项推送到复合体积中。
     * 现在，移动原点，所有表示球体的位置也会相应移动。
     * 然而，假设你想在第一个球体旁边添加第二个球体。
     * 在这种情况下，将新原点设置到几个位置之外，但设置 'preserveExistingVolumes' = true。
     * 这将设置新原点，但现有球体位置仍相对于原始原点。
     * 现在，你可以再次推送相对球体位置（这次它们将相对于新原点），从而产生两个相邻的球体。
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * 类似于 {@link CompoundBlockVolume.setOrigin} - 此函数将通过给定的增量将原点平移到一个新位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param delta
     * 要应用于原点的平移增量。
     * @param preserveExistingVolumes
     * 参见 {@link CompoundBlockVolume.setOrigin} 参数的描述。
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}