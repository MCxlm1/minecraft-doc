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
     * 如果设置为 true，则交互将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 物品放置位置相对于方块底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件是在玩家初始交互按钮按下时触发的，则此值为 true；如果事件是由按住交互按钮触发的，则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互中使用的物品实例，如果空手则为 undefined。
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