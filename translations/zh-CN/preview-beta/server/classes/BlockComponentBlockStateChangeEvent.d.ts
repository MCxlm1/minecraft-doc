/**
 * 包含关于从先前排列更改的特定方块排列的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 先前的 BlockPermutation。
     *
     */
    readonly previousPermutation: BlockPermutation;
}