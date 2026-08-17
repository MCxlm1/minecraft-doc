/**
 * 包含关于从先前的排列更改的特定方块排列的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 先前的方块排列（BlockPermutation）。
     *
     */
    readonly previousPermutation: BlockPermutation;
}