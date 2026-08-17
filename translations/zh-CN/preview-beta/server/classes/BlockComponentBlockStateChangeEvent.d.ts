/**
 * 包含有关特定方块排列的信息，
 * 该排列是从先前排列更改而来的。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 之前的 BlockPermutation。
     *
     */
    readonly previousPermutation: BlockPermutation;
}