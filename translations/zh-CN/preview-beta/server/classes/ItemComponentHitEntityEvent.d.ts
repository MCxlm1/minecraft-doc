/**
 * 包含关于物品用于击中实体时的信息。
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
     * 击中是否命中或产生任何效果。
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
     * 用于击中实体的物品堆叠。
     *
     */
    readonly itemStack?: ItemStack;
}