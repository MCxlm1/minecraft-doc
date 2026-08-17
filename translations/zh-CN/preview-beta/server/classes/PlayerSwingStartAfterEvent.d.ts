/**
 * 包含玩家开始挥动手臂时的相关信息。
 */
export class PlayerSwingStartAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家开始挥动时手中持有的物品实例。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的来源玩家。
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