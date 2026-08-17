/**
 * 轴对齐包围盒。
 */
export interface AABB {
    /**
     * @remarks
     * 盒的中心点。
     *
     */
    center: Vector3;
    /**
     * @remarks
     * 从中心点到盒边界的绝对距离。相当于盒长度、高度和宽度的一半。始终视为正值。
     *
     */
    extent: Vector3;
}