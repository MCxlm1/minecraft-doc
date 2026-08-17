/**
 * @beta
 * 包含关于玩家放置方块前的一个事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消放置方块事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 新方块所放置的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 相对于新方块所放置的方块的底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件未被取消，将放置的方块置换。
     *
     */
    readonly permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 正在为此事件放置方块的玩家。
     *
     */
    readonly player: Player;
}