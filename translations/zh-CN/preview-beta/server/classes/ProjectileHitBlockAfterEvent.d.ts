/**
 * 包含与弹射物击中方块相关的信息。
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此弹射物击中事件发生的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 弹射物击中方块时的方向向量。
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
     * 击中方块的弹射物实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射弹射物的可选来源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含关于被弹射物击中方块的附加信息。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getBlockHit(): BlockHitInformation;
}