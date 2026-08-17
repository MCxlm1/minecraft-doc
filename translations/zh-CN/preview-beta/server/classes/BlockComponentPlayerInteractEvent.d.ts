/**
 * 包含有关一个特定方块
 * 被交互时的信息。
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
     * 相对于玩家交互的方块的底部
     * 西北角的位置。
     *
     */
    readonly faceLocation?: Vector3;
    /**
     * @remarks
     * 与该方块交互的玩家。
     *
     */
    readonly player?: Player;
}