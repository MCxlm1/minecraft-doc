/**
 * 包含与弹射物击中实体相关的信息。
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此弹射物击中发生所在的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 弹射物击中实体时的方向向量。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 弹射物击中发生的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 击中实体的弹射物的实体对象。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射弹射物的可选源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含关于被击中的实体的附加信息。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getEntityHit(): EntityHitInformation;
}