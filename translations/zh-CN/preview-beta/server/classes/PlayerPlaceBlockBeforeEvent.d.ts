/**
 * @beta
 * 包含有关玩家放置方块前事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消方块放置事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 新方块所放置的方块面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 相对于新方块所放置的方块底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件未取消，将放置的方块置换。
     *
     */
    readonly permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 放置该方块的玩家。
     *
     */
    readonly player: Player;
}