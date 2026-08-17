/**
 * BlockBoundingBox 是一个接口，用于表示一个轴对齐（AABB）的矩形区域。
 * BlockBoundingBox 假定它在创建时处于有效状态（min <= max），但无法保证这一点（除非使用相关的 {@link BlockBoundingBoxUtils} 工具函数创建）。
 * min/max 坐标表示矩形对角线的两个顶点。
 * BlockBoundingBox 不是方块的表示——它与任何类型都没有关联，它只是一个数学构造——因此一个 (0,0,0) -> (0,0,0) 的矩形大小为 (0,0,0)（与非常相似的 {@link BlockVolume} 对象不同）。
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 一个 {@link Vector3}，表示矩形的最大角。
     *
     */
    max: Vector3;
    /**
     * @remarks
     * 一个 {@link Vector3}，表示矩形的最小角。
     *
     */
    min: Vector3;
}