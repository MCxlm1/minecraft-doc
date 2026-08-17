/**
 * 包含关于玩家正在破坏的特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏之前的排列信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 破坏此方块的玩家。
     *
     */
    readonly player?: Player;
}