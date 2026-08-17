/**
 * 包含玩家成功与实体交互后的事件相关信息。
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的物品实例，如果手为空则为 undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 交互成功后的物品实例，如果手为空则为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件来源的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 将要与之交互的实体。
     *
     */
    readonly target: Entity;
}