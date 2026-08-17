/**
 * 包含关于玩家开始挥动其手臂的信息。
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
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家挥动的来源，参见 {@link EntitySwingSource}。
     *
     */
    readonly swingSource: EntitySwingSource;
}