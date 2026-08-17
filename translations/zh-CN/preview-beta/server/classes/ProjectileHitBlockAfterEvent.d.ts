/**
 * 包含与抛射物击中方块相关的信息。
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此抛射物命中发生的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 抛射物击中方块时的方向向量。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 抛射物命中发生的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 击中方块的抛射物实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射该抛射物的可选来源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含被抛射物击中的方块的附加信息。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 包含被击中方块详细信息的 BlockHitInformation 对象。
     */
    getBlockHit(): BlockHitInformation;
}