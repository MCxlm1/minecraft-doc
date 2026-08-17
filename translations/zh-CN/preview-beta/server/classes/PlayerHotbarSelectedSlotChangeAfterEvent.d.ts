/**
 * 包含关于玩家切换所选快捷栏槽位后事件的信息。
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 新选中槽位的物品实例。
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
     * 此事件的来源玩家。
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