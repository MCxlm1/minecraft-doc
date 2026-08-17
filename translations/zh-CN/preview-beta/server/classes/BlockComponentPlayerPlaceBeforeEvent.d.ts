/**
 * 包含关于玩家放置方块前发生的事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 若设置为 true，则取消方块放置事件。
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
     * 若事件未被取消，则将放置的方块置换。若设置为不同的方块置换，则改为放置该置换。
     *
     */
    permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 正在放置此方块的玩家。
     *
     */
    readonly player?: Player;
}