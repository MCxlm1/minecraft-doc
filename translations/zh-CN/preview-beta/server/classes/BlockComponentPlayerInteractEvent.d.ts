/**
 * 包含有关正在交互的特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被交互的方块面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 相对于玩家交互的方块底部西北角的位置。
     *
     */
    readonly faceLocation?: Vector3;
    /**
     * @remarks
     * 与此方块交互的玩家。
     *
     */
    readonly player?: Player;
}