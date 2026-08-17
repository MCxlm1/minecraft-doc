/**
 * @beta
 * 复合方块体积是一组独立方块体积定义的集合，这些定义共同构成一个更大的、可能不连续的不规则形状体积。
 * 该类大致基于 CSG（计算实体几何）的概念，允许用户通过堆叠体积与空洞来创建复杂体积，从而构成一个更大的单一体积。
 * 例如，通常创作者若要创建空心立方体，需要为每个面创建 6 个“墙壁”表面。
 * 使用复合方块体积时，创作者可以先创建一个外部实心立方体，再在较大立方体内部定义另一个单独的“空洞”立方体，从而定义空心立方体。
 * 类似地，复合方块体积可以表示不规则形状的体积（例如，一棵树由树干和大量树叶方块组成，这些方块不一定连续放置）。
 * 默认情况下，添加到 CompoundBlockVolume 中的每个体积都相对于设定的原点（在构造时或通过某个 set 函数设定）。
 * 不过，也可以将本质上为绝对坐标、不受原点变化影响的体积推送到复合集合中。
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
     * 返回体积堆栈中（正向和负向）体积的数量。
     *
     */
    readonly volumeCount: number;
    /**
     * @remarks
     * 创建一个 CompoundBlockVolume 对象。
     *
     * @param origin
     * 可选的世界上原点，用于居中该复合体积。
     * 如果未指定，原点默认为 (0,0,0)。
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * 清空体积堆栈的内容。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    clear(): void;
    /**
     * @remarks
     * 获取复合方块体积的方块位置迭代器。此迭代器允许创建者在更大的边界区域内遍历所有选中的体积。
     * 被减法体积覆盖的区域不会包含在迭代器步骤中。
     * （例如，如果向堆栈推送一个立方体，然后在同一位置推送一个减法体积，则迭代器会跳过初始体积，因为它被视为负空间。）
     * 注意，此迭代器返回的方块位置是绝对世界空间坐标（无论推送的复合体积项是绝对还是相对）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 一个用于遍历复合方块体积内所有有效方块位置的 BlockLocationIterator。
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * 获取表示堆栈上所有体积容器的最大边界框。
     * 注意，返回的边界框以绝对世界空间表示（无论推送的复合体积项是绝对还是相对）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 表示堆栈上所有体积的最外层边界框（绝对世界空间）。
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最大方块位置。
     * 注意，返回的最大位置使用绝对世界空间（无论推送的复合体积项是绝对还是相对）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 最外层边界矩形的最大方块位置（绝对世界空间）。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最小方块位置。
     * 注意，返回的最小位置使用绝对世界空间（无论推送的复合体积项是绝对还是相对）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 最外层边界矩形的最小方块位置（绝对世界空间）。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取复合体积在世界空间中的原点。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 复合体积在世界空间中的原点。
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * 返回一个布尔值，表示是否已有体积项推送到该体积。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 如果体积堆栈为空则返回 true，否则返回 false。
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * 返回一个布尔值，表示给定的绝对世界空间方块位置是否位于一个正向方块体积内部。
     * 例如，如果堆栈包含一个大立方体，其后是一个稍小的负向立方体，而测试位置位于负向立方体内，函数将返回 false，因为它并不“在”某个体积内部（它确实在边界矩形内，但不在正向定义的位置内）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param worldLocation
     * 要测试的绝对世界空间方块位置。
     * @returns
     * 如果该位置位于一个正向方块体积内部则返回 true，否则返回 false。
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * 检查推送到体积堆栈的最后一项，但不影响堆栈内容。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param forceRelativity
     * 决定函数返回的 CompoundBlockVolumeItem 是否被强制使用相对或绝对坐标系。
     * `true` = 强制返回项相对于体积原点
     * `false` = 强制返回项为绝对世界空间位置
     *
     * 如果未指定标志，返回的项将保留其推送时的相对性。
     * @returns
     * 返回堆栈中的最后一项；如果堆栈为空，则返回 undefined。
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * 从体积堆栈中移除最后一项。这会使堆栈大小减一。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 返回一个布尔值，表示是否成功移除了最后一项。
     */
    popVolume(): boolean;
    /**
     * @remarks
     * 将体积项推送到堆栈。该体积项包含一个“action”参数，决定此体积是正向空间还是负向空间。
     * 该项还包含一个 `locationRelativity` 属性，决定它是相对于复合体积原点还是绝对于复合体积原点。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param item
     * 要推送到堆栈末尾的项。
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * 如果体积堆栈为空，此函数会将指定项推送到堆栈。
     * 如果体积堆栈不为空，此函数会将堆栈上的最后一项替换为新项。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param item
     * 要添加或替换的项。
     * @returns
     * 返回一个布尔值，表示是否成功将该项添加或替换到堆栈中。
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * 将复合体积的原点设置为绝对世界空间位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param position
     * 原点的新绝对世界空间位置。
     * @param preserveExistingVolumes
     * 此可选布尔标志决定相对 `CompoundBlockVolumeItem` 是固定在原位置，还是会受新原点影响。
     * 设想一个场景：你有一系列围绕原点、构成球体的相对位置；这些位置都在 -2 到 2 的范围内。
     * 将每个位置作为相对项推送到复合体积。
     * 现在移动原点，表示球体的所有位置也会随之移动。
     * 但假设你想在第一个球体旁边添加第二个球体。
     * 在这种情况下，将新原点设置在稍远的位置，并设置 'preserveExistingVolumes' = true。
     * 这会设置一个新原点，但现有球体位置仍相对于原始原点。
     * 现在，你可以再次推送相对球体位置（这次它们将相对于新原点），最终得到两个相邻的球体。
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * 与 {@link CompoundBlockVolume.setOrigin} 类似，此函数会将原点按给定的增量平移到一个新位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param delta
     * 原点的平移增量。
     * @param preserveExistingVolumes
     * 参见 {@link CompoundBlockVolume.setOrigin} 的参数说明。
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}