/**
 * @beta
 * 边界框工具类，提供许多用于创建和操作 {@link BlockBoundingBox} 对象的实用函数。
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个经过验证的 {@link BlockBoundingBox} 实例，保证其最小和最大分量满足 (min <= max)。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param min
     * 一个角落的世界坐标位置。
     * @param max
     * 对角方向的另一个角落世界坐标位置。
     * @returns
     * 返回验证后的 {@link BlockBoundingBox} 实例。
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿每个轴将 {@link BlockBoundingBox} 扩展给定的大小。
     * 大小可以为负数以进行收缩。
     * 注意：如果收缩大小大于跨度，角点可能会反转，但最小/最大关系将保持正确。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的 {@link BlockBoundingBox}。
     * @param size
     * 沿每个轴扩展的大小。
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 对象，表示扩展或收缩后的结果。
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否完全相同。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要比较的第一个 {@link BlockBoundingBox}。
     * @param other
     * 要比较的第二个 {@link BlockBoundingBox}。
     * @returns
     * 如果两个 BlockBoundingBox 完全相同，则返回 true；否则返回 false。
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 扩展初始 box 对象的边界以包含第二个 box 参数。得到的 {@link BlockBoundingBox} 对象将是一个恰好同时包含这两个箱体的 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的 {@link BlockBoundingBox}。
     * @param other
     * 要包含进来的另一个 {@link BlockBoundingBox}。
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 实例，表示能够同时包含两者的最小边界框。
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要计算中心点的 {@link BlockBoundingBox}。
     * @returns
     * 注意：{@link BlockBoundingBox} 对象表示完整的方块，因此边界为奇数编号的箱体中心并非数学意义上的中心……
     * 例如，BlockBoundingBox( 0,0,0 -> 3,3,3 ) 的中心为 (1,1,1)（而不是预期的 (1.5, 1.5, 1.5)）。
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交 BlockBoundingBox 交集区域的 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个 {@link BlockBoundingBox}。
     * @param other
     * 第二个 {@link BlockBoundingBox}。
     * @returns
     * 返回两个 BlockBoundingBox 交集区域的 BlockBoundingBox；如果没有交集，则返回 undefined。
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 各轴分量的跨度。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要获取跨度的 {@link BlockBoundingBox}。
     * @returns
     * 返回包含该箱体各轴跨度的 Vector3。
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要检查的第一个 {@link BlockBoundingBox}。
     * @param other
     * 要检查的第二个 {@link BlockBoundingBox}。
     * @returns
     * 如果两个 BlockBoundingBox 相交，则返回 true；否则返回 false。
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定坐标是否位于 BlockBoundingBox 内。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要测试的 {@link BlockBoundingBox}。
     * @param pos
     * 要检查的坐标。
     * @returns
     * 如果给定坐标位于 BlockBoundingBox 内，则返回 true；否则返回 false。
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要验证的 {@link BlockBoundingBox}。
     * @returns
     * 如果该 BlockBoundingBox 有效（即 min <= max），则返回 true；否则返回 false。
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 将 BlockBoundingBox 移动给定的量。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要移动的 {@link BlockBoundingBox}。
     * @param delta
     * 沿每个轴移动的量。
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示移动后的结果。
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}