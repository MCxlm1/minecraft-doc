/**
 * 包含与抛射物击中实体相关的信息。
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此抛射物击中发生的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 抛射物击中实体时的方向向量。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 抛射物击中事件发生的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 代表击中实体的抛射物的实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 可选，发射该抛射物的源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含关于被击中实体的额外信息。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回一个 EntityHitInformation 对象，包含被击中实体的信息。
     */
    getEntityHit(): EntityHitInformation;
}