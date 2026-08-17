/**
 * BlockBoundingBox 是一个接口，用于表示一个轴对齐包围盒（AABB）的矩形。
 * BlockBoundingBox 假设它是在有效状态（min <= max）下创建的，但无法保证这一点（除非是使用相关的 {@link BlockBoundingBoxUtils} 工具函数创建的）。
 * min/max 坐标表示矩形的对角顶点。
 * BlockBoundingBox 不是方块的表示 - 它与任何类型无关，只是一个数学构造 - 因此，一个从 (0,0,0) 到 (0,0,0) 的矩形的大小为 (0,0,0)（与非常相似的 {@link BlockVolume} 对象不同）。
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 一个表示矩形最大角的 {@link Vector3}
     *
     */
    max: Vector3;
    /**
     * @remarks
     * 一个表示矩形最小角的 {@link Vector3}
     *
     */
    min: Vector3;
}