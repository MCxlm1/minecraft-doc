/**
 * @beta
 * 边界框工具类，提供许多用于创建和操作 {@link BlockBoundingBox} 对象的有用函数。
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个 {@link BlockBoundingBox} 的有效实例，其中 min 和 max 分量保证满足 (min <= max)。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param min
     * 一个角落的世界坐标位置
     * @param max
     * 与 min 相对的另一角落世界坐标位置
     * @returns
     * 一个新的 {@link BlockBoundingBox} 实例，其 min 和 max 分量已按 (min <= max) 规范化。
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿每个轴将 {@link BlockBoundingBox} 扩展指定量。
     * 尺寸可以为负以实现收缩。
     * 注意：如果收缩量大于跨度，角落可能会反转，但 min/max 关系仍保持正确。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 要扩展的边界框
     * @param size
     * 各轴上的扩展量（可为负）
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 对象，表示扩展后的结果。
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否完全相同。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 第一个边界框
     * @param other
     * 要比较的第二个边界框
     * @returns
     * 如果两个边界框相同则返回 true，否则返回 false。
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 将初始边界框的范围扩展以包含第二个 box 参数。
     * 生成的 {@link BlockBoundingBox} 对象将是一个完全包含这两个边界框的 BlockBoundingBox。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 初始边界框
     * @param other
     * 需要被包含进来的另一个边界框
     * @returns
     * 一个新的 {@link BlockBoundingBox} 实例，表示能够同时包含这两个边界框的最小可能边界框。
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 要计算中心的边界框
     * @returns
     * 注意：{@link BlockBoundingBox} 对象表示完整方块，因此具有奇数边界的盒子的中心并不是数学意义上的中心。
     * 例如，BlockBoundingBox(0,0,0 -> 3,3,3) 的中心将是 (1,1,1)（而不是期望的 (1.5, 1.5, 1.5)）。
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交 BlockBoundingBox 交集区域的 BlockBoundingBox。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 如果两个边界框相交，返回表示交集区域的 BlockBoundingBox；如果未相交，返回 undefined。
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 每个轴分量的跨度。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 要获取跨度的边界框
     * @returns
     * 表示各轴跨度的 Vector3。
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 如果相交则返回 true，否则返回 false。
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定坐标是否位于 BlockBoundingBox 内。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 要检查的边界框
     * @param pos
     * 要测试的坐标位置
     * @returns
     * 如果坐标在边界框内则返回 true，否则返回 false。
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 要检查的边界框
     * @returns
     * 如果边界框有效则返回 true，否则返回 false。
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 将 BlockBoundingBox 按给定量平移。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param box
     * 要平移的边界框
     * @param delta
     * 各轴上的平移量
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示平移后的结果。
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}