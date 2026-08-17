/**
 * 轴对齐的包围盒。
 */
export interface AABB {
    /**
     * @remarks
     * 盒子的中心点。
     *
     */
    center: Vector3;
    /**
     * @remarks
     * 从中心点到盒子边界的绝对距离。相当于盒子长度、高度和宽度的一半。始终被视为正值。
     *
     */
    extent: Vector3;
}