/**
 * BlockBoundingBox 是一个接口，用于表示一个
 * AABB 对齐的矩形。
 * BlockBoundingBox 假定它是在有效
 * 状态（min <= max）下创建的，但无法保证（除非是
 * 使用相关的{@link BlockBoundingBoxUtils}
 * 工具函数创建的。
 * min/max 坐标表示矩形的对角
 * 顶点。
 * BlockBoundingBox 不是方块的表示——它
 * 与任何类型无关，只是一个数学
 * 构造——所以一个从
 * ( 0,0,0 ) -> ( 0,0,0 )
 * 大小为 ( 0,0,0 )（与非常相似的{@link
 * BlockVolume}对象不同）
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 一个{@link Vector3}，表示矩形的最大角点。
     *
     */
    max: Vector3;
    /**
     * @remarks
     * 一个{@link Vector3}，表示矩形的最小角点。
     *
     */
    min: Vector3;
}