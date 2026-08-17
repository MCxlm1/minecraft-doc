/**
 * @beta
 * 包围盒工具类，提供了一些用于创建和使用 {@link BlockBoundingBox} 对象的有用函数。
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个经过验证的 {@link BlockBoundingBox} 实例，其中最小和最大分量保证满足（min <= max）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param min
     * 一个角落的世界坐标位置。
     * @param max
     * 与 min 对角相对的角落世界坐标位置。
     * @returns
     * 返回一个有效的 {@link BlockBoundingBox} 实例，其最小和最大分量已正确排序。
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿每个轴将 {@link BlockBoundingBox} 扩展给定的大小。大小可以为负数以实现收缩。
     * 注意：若收缩量大于跨度，角落可能会反转，但最小/最大关系仍保持正确。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 需要扩展的 {@link BlockBoundingBox}。
     * @param size
     * 沿各轴扩展的大小，使用 {@link Vector3} 表示。
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 对象，表示扩展后的结果。
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否相同。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 用于比较的第一个 {@link BlockBoundingBox}。
     * @param other
     * 用于比较的第二个 {@link BlockBoundingBox}。
     * @returns
     * 如果两个方块包围盒相同则返回 true，否则返回 false。
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 将初始包围盒的边界扩展以包含第二个包围盒参数。所得的 {@link BlockBoundingBox} 对象将是一个恰好包含这两个包围盒的方块包围盒。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 需要扩展的初始 {@link BlockBoundingBox}。
     * @param other
     * 需要包含进来的第二个 {@link BlockBoundingBox}。
     * @returns
     * 一个新的 {@link BlockBoundingBox} 实例，表示能够同时容纳两个包围盒的最小可能包围盒。
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要计算中心方块的 {@link BlockBoundingBox}。
     * @returns
     * 注意 {@link BlockBoundingBox} 对象表示整块方块，因此具有奇数边界的包围盒的中心在数学上并不居中……
     * 例如，BlockBoundingBox(0,0,0 -> 3,3,3) 的中心将是 (1,1,1)（而不是预期的 (1.5, 1.5, 1.5)）。
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交的 BlockBoundingBox 交集区域的 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个 {@link BlockBoundingBox}。
     * @param other
     * 第二个 {@link BlockBoundingBox}。
     * @returns
     * 如果两个包围盒相交，则返回一个表示交集区域的 {@link BlockBoundingBox}；如果未相交，则返回 undefined。
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 各轴向分量的跨度。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 需要计算跨度的 {@link BlockBoundingBox}。
     * @returns
     * 一个 {@link Vector3}，表示各轴上的跨度。
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个 {@link BlockBoundingBox}。
     * @param other
     * 第二个 {@link BlockBoundingBox}。
     * @returns
     * 如果两个包围盒相交则返回 true，否则返回 false。
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定坐标是否位于 BlockBoundingBox 内部。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 需要检查的 {@link BlockBoundingBox}。
     * @param pos
     * 要测试是否位于包围盒内的世界坐标位置。
     * @returns
     * 如果坐标在包围盒内部则返回 true，否则返回 false。
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 需要验证的 {@link BlockBoundingBox}。
     * @returns
     * 如果 min <= max，则返回 true；否则返回 false。
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 将 BlockBoundingBox 按给定数量移动。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 需要移动的 {@link BlockBoundingBox}。
     * @param delta
     * 每个轴上的移动量，使用 {@link Vector3} 表示。
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示移动后的结果。
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}