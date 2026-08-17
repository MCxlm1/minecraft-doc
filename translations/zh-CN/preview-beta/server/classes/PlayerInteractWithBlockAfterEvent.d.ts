/**
 * 包含玩家成功与方块交互后事件的相关信息。
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的物品实例，如果手中为空则为 undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 将被交互的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在被交互的方块面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置，物品被放置在此处。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件是在玩家初次按下交互按钮时触发，则该值为 true；如果事件是由按住交互按钮触发，则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互成功后的物品实例，如果手中为空则为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
}