/**
 * 包含关于玩家更改所选
 * 快捷栏插槽后的事件信息。
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 新选择的物品栏物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 新选择的快捷栏插槽索引。
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
     * 之前选择的快捷栏插槽索引。
     *
     */
    readonly previousSlotSelected: number;
}