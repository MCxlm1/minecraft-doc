/**
 * 包含玩家成功与方块交互后的事件相关信息。
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功之前的物品实例（ItemStack），如果手中为空则为 undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 将要被交互的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在被交互的方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 物品放置位置相对于方块底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件是由玩家初始按下交互按钮触发的，则该值为 true；如果事件是由按住交互按钮触发的，则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互成功后的物品实例（ItemStack），如果手中为空则为 undefined。
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