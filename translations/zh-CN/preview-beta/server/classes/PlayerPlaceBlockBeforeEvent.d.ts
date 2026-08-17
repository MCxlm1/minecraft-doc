/**
 * @beta
 * 包含关于玩家放置方块前事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，则取消方块放置事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 新方块被放置的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 相对于新方块放置位置的方块底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件未被取消，将被放置的方块变体。
     *
     */
    readonly permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 此事件中放置方块的玩家。
     *
     */
    readonly player: Player;
}