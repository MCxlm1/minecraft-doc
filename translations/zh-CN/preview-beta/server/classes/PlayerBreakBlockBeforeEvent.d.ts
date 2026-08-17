/**
 * 包含关于一个事件的信息，该事件发生在玩家
 * 破坏方块之前。
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
     * 用于破坏方块的物品堆叠，或
     * 空手时为 undefined。
     *
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的破坏方块的玩家。
     *
     */
    readonly player: Player;
}