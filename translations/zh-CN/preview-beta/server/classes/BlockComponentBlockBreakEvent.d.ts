/**
 * 包含关于特定方块被破坏时的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 导致破坏的方块。
     *
     */
    readonly blockDestructionSource?: Block;
    /**
     * @remarks
     * 返回该方块在被破坏之前的置换信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 导致破坏的参与者。
     *
     */
    readonly entitySource?: Entity;
}