/**
 * 包含有关玩家更改已选快捷栏槽位后事件的信息。
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 新选中的槽位的物品堆叠。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 新选中的快捷栏槽位索引。
     *
     */
    readonly newSlotSelected: number;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 先前选中的快捷栏槽位索引。
     *
     */
    readonly previousSlotSelected: number;
}