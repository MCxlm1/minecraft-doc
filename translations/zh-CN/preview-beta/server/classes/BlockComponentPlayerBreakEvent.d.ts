/**
 * 包含关于玩家破坏特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 此方块在被破坏之前的排列（Permutation）信息。
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