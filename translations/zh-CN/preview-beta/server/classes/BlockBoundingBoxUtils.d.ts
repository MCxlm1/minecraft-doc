/**
 * @beta
 * 边界框工具类，提供多个用于创建和操作 {@link BlockBoundingBox} 对象的有用函数。
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个经过验证的 {@link BlockBoundingBox} 实例，其中最小值和最大值分量保证满足 (min <= max)。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param min
     * 一个角落的世界坐标
     * @param max
     * 与之对角的另一个角落的世界坐标
     * @returns
     * 返回一个有效的 {@link BlockBoundingBox} 实例。
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿每个轴将 {@link BlockBoundingBox} 扩展给定的大小。
     * 大小为负数时可进行收缩。
     * 注意：如果收缩大小大于跨度，角落可能会反转，但最小值/最大值关系仍然正确。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的 {@link BlockBoundingBox} 对象
     * @param size
     * 沿各轴的扩展量
     * @returns
     * 返回一个表示更改后的新 {@link BlockBoundingBox} 对象
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否完全相同。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要比较的第一个边界框
     * @param other
     * 要比较的第二个边界框
     * @returns
     * 如果两个边界框完全相同则返回 true，否则返回 false。
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 扩展初始边界框对象的边界以包含第二个边界框参数。
     * 生成的 {@link BlockBoundingBox} 对象将是一个恰好能包含这两个盒子的边界框。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的边界框
     * @param other
     * 要包含的另一个边界框
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 实例，表示能同时包含两者的最小边界框。
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要计算中心的边界框
     * @returns
     * 注意：{@link BlockBoundingBox} 对象表示整个方块，因此边界为奇数的盒子的中心在数学上并不居中……
     * 即 BlockBoundingBox( 0,0,0 -> 3,3,3 ) 的中心为 (1,1,1)（而不是预期的 (1.5, 1.5, 1.5)）。
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交 BlockBoundingBox 的交集区域的 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 返回两个边界框的交集区域；如果它们不相交，则返回 undefined。
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 各轴分量的跨度。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要获取跨度的边界框
     * @returns
     * 返回一个包含各轴跨度的 Vector3 对象。
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 如果相交返回 true，否则返回 false。
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定坐标是否位于 BlockBoundingBox 内部。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要检查的边界框
     * @param pos
     * 要检查的坐标
     * @returns
     * 如果坐标在边界框内返回 true，否则返回 false。
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要检查的边界框
     * @returns
     * 如果边界框有效返回 true，否则返回 false。
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 按给定数量移动一个 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要移动的边界框
     * @param delta
     * 移动向量
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示移动后的结果。
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}