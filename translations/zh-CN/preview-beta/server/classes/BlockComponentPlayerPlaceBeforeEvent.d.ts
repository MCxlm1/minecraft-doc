/**
 * 包含关于玩家放置方块之前的事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，则取消方块放置事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 被放置到的方块面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 如果事件未被取消，则将放置的方块置换。如果设置为不同的方块置换，则将放置该置换。
     *
     */
    permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 放置此方块的玩家。
     *
     */
    readonly player?: Player;
}