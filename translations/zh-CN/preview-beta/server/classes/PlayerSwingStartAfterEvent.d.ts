/**
 * 包含关于玩家开始挥动
 * 手臂的信息。
 */
export class PlayerSwingStartAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家在挥动开始时手持的物品实例。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 该事件的来源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家挥动的来源，请参阅 {@link
     * EntitySwingSource}.
     *
     */
    readonly swingSource: EntitySwingSource;
}