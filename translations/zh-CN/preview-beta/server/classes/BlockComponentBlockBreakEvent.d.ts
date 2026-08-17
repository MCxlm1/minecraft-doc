/**
 * 包含关于特定方块被破坏的信息。
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
     * 返回有关此方块在被破坏之前的置换信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 导致破坏的实体。
     *
     */
    readonly entitySource?: Entity;
}