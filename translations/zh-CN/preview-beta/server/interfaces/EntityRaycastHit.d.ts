/**
 * 包含实体射线检测命中结果的信息。
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * 从射线起点到实体边界框的距离。
     *
     */
    distance: number;
    /**
     * @remarks
     * 被命中的实体。
     *
     */
    entity: Entity;
}