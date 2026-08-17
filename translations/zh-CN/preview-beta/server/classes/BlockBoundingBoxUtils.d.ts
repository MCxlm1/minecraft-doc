/**
 * @beta
 * Bounding Box Utils 是一个实用工具类，提供了许多用于创建和使用 {@link
 * BlockBoundingBox} 对象的有用函数。
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个已验证的 {@link BlockBoundingBox} 实例，
     * 其中最小值和最大值分量保证满足 (min <= max)。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param min
     * 一个角落的世界坐标
     * @param max
     * 对角处的另一个角落的世界坐标
     * @returns
     * 返回一个新的已验证的 {@link BlockBoundingBox} 实例。
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿每个轴将 {@link BlockBoundingBox} 扩展给定的量。
     * 大小可以为负数以进行收缩。
     * 注意：如果收缩量大于跨度，角可能会反转，但最小/最大关系
     * 将保持正确。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的边界框
     * @param size
     * 各轴的扩展量
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 对象，表示变化后的结果
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否完全相同
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 如果两个边界框完全相同，则返回 true；否则返回 false。
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 将初始边界框对象的边界扩展以包含第二个边界框参数。
     * 生成的 {@link BlockBoundingBox} 对象将是一个恰好包围这两个
     * 边界框的 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的边界框
     * @param other
     * 要包含的另一个边界框
     * @returns
     * 一个新的 {@link BlockBoundingBox} 实例，表示能够同时包围
     * 两者的最小可能边界框
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要计算中心方块的边界框
     * @returns
     * 注意：{@link BlockBoundingBox} 对象表示整个方块，
     * 因此具有奇数边界的边界框的中心在数学上并不居中...
     * 例如，BlockBoundingBox( 0,0,0 -> 3,3,3 ) 的中心将是
     * (1,1,1)（而不是预期的 (1.5, 1.5, 1.5)）
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交的 BlockBoundingBox 的交集区域的
     * BlockBoundingBox
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 如果两个边界框相交，则返回表示交集区域的 BlockBoundingBox；
     * 如果未相交，则返回 undefined。
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 各轴方向上的跨度
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要获取跨度的边界框
     * @returns
     * 一个 Vector3，表示边界框在各轴上的跨度。
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 如果两个边界框相交，则返回 true；否则返回 false。
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定的坐标是否位于 BlockBoundingBox 内部
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要检查的边界框
     * @param pos
     * 要检查的坐标
     * @returns
     * 如果坐标位于边界框内部，则返回 true；否则返回 false。
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要检查的边界框
     * @returns
     * 如果边界框有效，则返回 true；否则返回 false。
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 将 BlockBoundingBox 移动给定的量
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要移动的边界框
     * @param delta
     * 移动的增量向量
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示移动后的结果
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}