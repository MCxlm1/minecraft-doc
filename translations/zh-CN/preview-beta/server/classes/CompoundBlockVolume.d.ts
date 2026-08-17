/**
 * @beta
 * 复合方块体积是单个方块体积定义的集合，这些定义作为一个整体，定义了更大的（有时是不连续的）不规则形状体积。
 * 该类松散地基于 CSG（计算立体几何）的概念，允许用户通过构建体积和空洞的堆栈来创建复杂的体积，从而形成一个更大的单一体积。
 * 例如，通常创作者会通过为每个面创建 6 个“墙”表面来创建一个空心立方体。
 * 使用复合方块体积，创作者可以通过创建一个外部实心立方体，然后在其中定义一个额外的单一“空洞”立方体来定义一个空心立方体。
 * 类似地，复合方块体积可以表示不规则形状的体积（例如，一棵树由树干和许多不一定连续放置的树叶立方体组成）。
 * 每个添加到 CompoundBlockVolume 中的体积（默认情况下）相对于设置的起点（无论是在构造时还是通过某个设置函数）。
 * 然而，也可以将本质上是绝对的不受起点变化影响的体积推送到复合集合中。
 */
export class CompoundBlockVolume {
    /**
     * @remarks
     * 返回表示堆栈中体积集合的边界矩形的'容量'。
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
     * 可选的世界上原点，用于居中复合体积。
     * 如果未指定，原点设置为 (0,0,0)。
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * 清除体积堆栈的内容。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    clear(): void;
    /**
     * @remarks
     * 获取复合方块体积的方块位置迭代器。该迭代器将允许创作者在更大的边界区域内遍历所有选中的体积。
     * 被减法体积覆盖的体积区域将不会包含在迭代器步骤中。
     * （例如，如果将一个立方体推入堆栈，然后在同一位置推入一个减法体积，那么迭代器将跳过初始体积，因为它被视为负空间）
     * 注意，此迭代器返回的方块位置是绝对世界空间（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * 获取表示堆栈上所有体积容器的最大边界框。
     * 注意，返回的边界框以绝对世界空间表示（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最大方块位置。
     * 注意，返回的最大位置是绝对世界空间（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取表示堆栈上体积的最外层边界矩形的最小方块位置。
     * 注意，返回的最小位置是绝对世界空间（无论推入的复合体积项是绝对的还是相对的）。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取复合体积在世界上中的原点。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * 返回一个布尔值，指示是否有任何体积项被推入体积。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * 返回一个布尔值，表示给定的绝对世界空间方块位置是否在正方块体积内部。
     * 例如，如果堆栈包含一个大立方体，后面跟着一个稍小的负立方体，并且测试位置在负立方体内，则函数返回 false，因为它不在体积“内部”（它在边界矩形内，但不在正定义的位置内）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param worldLocation
     * 要测试的绝对世界空间方块位置。
     * @returns
     * 如果指定位置在正体积内部则返回 true，否则返回 false。
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * 检查最后推入体积堆栈的条目，而不影响堆栈内容。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param forceRelativity
     * 确定函数返回的 CompoundBlockVolumeItem 是强制使用相对坐标系还是绝对坐标系。
     * `true` = 强制返回项相对于体积原点
     * `false` = 强制返回项为绝对世界空间位置
     * 如果未指定标志，则返回的项保留其推入时的相对性。
     * @returns
     * 如果堆栈为空，则返回 undefined；否则返回堆栈顶部的 CompoundBlockVolumeItem。
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * 从体积堆栈中移除最后一个条目。这将使堆栈大小减一。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 如果成功移除，则返回 true；如果堆栈为空，则返回 false。
     */
    popVolume(): boolean;
    /**
     * @remarks
     * 将一个体积项推入堆栈。体积项包含一个 'action' 参数，确定该体积是正空间还是负空间。
     * 项还包含一个 `locationRelativity`，确定它是相对于复合体积原点还是绝对位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param item
     * 要推入堆栈末尾的项。
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * 如果体积堆栈为空，此函数将把指定项推入堆栈。
     * 如果体积堆栈不为空，此函数将用新项替换堆栈上的最后一个项。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param item
     * 要添加或替换的项。
     * @returns
     * 如果成功添加或替换，则返回 true。
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * 将复合体积的原点设置为绝对世界空间位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param position
     * 新的原点位置。
     * @param preserveExistingVolumes
     * 此可选的布尔标志确定相对 `CompoundBlockVolumeItem` 是固定在其位置，还是受新原点影响。
     * 想象一个场景：你有一系列围绕原点构成球体的相对位置；所有这些位置在 -2 到 2 的范围内。
     * 将这些位置作为相对项推入复合体积。
     * 现在，移动原点，所有表示球体的位置也会相应移动。
     * 但是，假设你想在第一个球体旁边添加第二个球体。
     * 在这种情况下，将新原点设置到几个位置之外，但 `preserveExistingVolumes` = true。
     * 这将设置新原点，但现有的球体位置将保持相对于原始原点。
     * 现在，你可以再次推入相对球体位置（这次它们将相对于新原点）——从而得到两个相邻的球体。
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * 类似于 {@link CompoundBlockVolume.setOrigin} - 此函数将原点按给定的增量平移到一个新位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param delta
     * 要平移原点的增量向量。
     * @param preserveExistingVolumes
     * 请参见 {@link CompoundBlockVolume.setOrigin} 的参数描述。
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}