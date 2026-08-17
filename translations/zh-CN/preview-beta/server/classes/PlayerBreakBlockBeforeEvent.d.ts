/**
 * 包含关于玩家破坏方块前的事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，则取消方块破坏事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在用于破坏方块的物品实例，如果空手则为undefined。
     *
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件中破坏方块的玩家。
     *
     */
    readonly player: Player;
}