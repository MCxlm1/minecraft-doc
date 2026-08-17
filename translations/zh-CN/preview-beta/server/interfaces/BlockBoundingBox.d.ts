/**
 * BlockBoundingBox 是一个接口，表示一个 AABB 对齐的矩形。
 * BlockBoundingBox 假定它在创建时处于有效状态（min <= max），
 * 但无法保证（除非它是使用相关的 {@link BlockBoundingBoxUtils}
 * 工具函数创建的）。
 * min/max 坐标表示矩形对角线的两个相对角。
 * BlockBoundingBox 不是方块的表示——它与任何类型都没有关联，
 * 它只是一个数学结构——因此一个从 (0,0,0) 到 (0,0,0) 的矩形
 * 大小为 (0,0,0)（这与非常相似的 {@link BlockVolume} 对象不同）。
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 表示矩形最大角落的 {@link Vector3}。
     *
     */
    max: Vector3;
    /**
     * @remarks
     * 表示矩形最小角落的 {@link Vector3}。
     *
     */
    min: Vector3;
}