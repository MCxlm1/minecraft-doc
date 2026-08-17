/**
 * 包含玩家破坏方块前事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消方块破坏事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 用于破坏方块的物品实例；如果空手则为 undefined。
     *
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * 触发此事件的玩家。
     *
     */
    readonly player: Player;
}