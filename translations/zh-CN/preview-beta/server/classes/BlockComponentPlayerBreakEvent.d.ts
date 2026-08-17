/**
 * 包含有关正在被玩家破坏的
 * 特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏前的
     * 置换信息。
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