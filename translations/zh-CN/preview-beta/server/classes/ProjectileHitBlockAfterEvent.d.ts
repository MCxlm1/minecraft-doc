/**
 * 包含与投射物击中
 * 方块相关的信息。
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 投射物击中发生所在的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 投射物击中方块时的方向向量。
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
     * 击中方块的投射物实体。
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
     * 包含有关被投射物击中的
     * 方块的附加信息。
     *
     * @returns 包含方块命中详细信息的对象。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getBlockHit(): BlockHitInformation;
}