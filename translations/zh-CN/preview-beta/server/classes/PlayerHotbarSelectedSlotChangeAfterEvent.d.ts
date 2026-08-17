/**
 * 包含关于玩家变更所选快捷栏槽位后事件的信息。
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 所选新槽位的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 所选新快捷栏槽位索引。
     *
     */
    readonly newSlotSelected: number;
    /**
     * @remarks
     * 该事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 之前所选的快捷栏槽位索引。
     *
     */
    readonly previousSlotSelected: number;
}