/**
 * 包含关于物品用于击中实体时的相关信息。
 */
export class ItemComponentHitEntityEvent {
    private constructor();
    /**
     * @remarks
     * 攻击实体。
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 攻击是否命中或产生了任何效果。
     *
     */
    readonly hadEffect: boolean;
    /**
     * @remarks
     * 被攻击的实体。
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于攻击实体的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
}