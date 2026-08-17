/**
 * 包含关于玩家与实体交互之前的事件的信息。
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，交互将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在交互中使用的物品实例，如果空手则为 undefined。
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