/**
 * 包含玩家与方块交互之前的事件相关信息。
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 将被交互的方块。
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
     * 若设置为 true，交互将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 相对于方块底部西北角的位置，物品将放置在该位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 若事件是由玩家首次按下交互按钮触发，则该值为 true；若事件是由按住交互按钮触发，则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互中使用的物品实例，若为空手则为 undefined。
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