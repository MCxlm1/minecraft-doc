/**
 * 包含关于玩家与实体交互前事件的信息。
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，交互将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 交互中使用的物品实例，如果空手则为undefined。
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
     * 将被交互的实体。
     *
     */
    readonly target: Entity;
}