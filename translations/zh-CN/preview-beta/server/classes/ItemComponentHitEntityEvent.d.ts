/**
 * 包含物品用于击中实体时的相关信息。
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
     * 击中是否生效或产生任何效果。
     *
     */
    readonly hadEffect: boolean;
    /**
     * @remarks
     * 被击中的实体。
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于击中实体的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
}