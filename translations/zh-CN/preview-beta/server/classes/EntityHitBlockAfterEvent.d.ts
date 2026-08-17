/**
 * 包含与实体击中方块相关的信息。
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被击中方块的朝向。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 进行攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被攻击击中的方块。
     *
     */
    readonly hitBlock: Block;
    /**
     * @remarks
     * 被攻击击中的方块置换。
     *
     */
    readonly hitBlockPermutation: BlockPermutation;
}