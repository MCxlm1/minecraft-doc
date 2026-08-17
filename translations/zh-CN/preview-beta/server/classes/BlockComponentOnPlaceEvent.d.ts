/**
 * 包含有关被放置的特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 此位置之前被替换的方块。
     *
     */
    readonly previousBlock: BlockPermutation;
}