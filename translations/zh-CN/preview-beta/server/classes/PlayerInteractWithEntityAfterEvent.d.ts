/**
 * 包含关于玩家成功与实体交互后的事件信息。
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的物品实例，如果手为空则为undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 交互成功后的物品实例，如果手为空则为undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 将要被交互的实体。
     *
     */
    readonly target: Entity;
}