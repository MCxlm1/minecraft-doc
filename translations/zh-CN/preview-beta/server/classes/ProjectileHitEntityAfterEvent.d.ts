/**
 * 包含与投射物击中实体相关的信息。
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 投射物击中事件发生的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 投射物击中实体时的方向向量。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 投射物击中发生的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 击中实体的投射物实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射该投射物的可选来源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含关于被击中实体的附加信息。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 返回被击中实体的命中信息。
     */
    getEntityHit(): EntityHitInformation;
}