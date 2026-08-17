/**
 * 包含关于被放置的特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 在此位置被替换的先前方块。
     *
     */
    readonly previousBlock: BlockPermutation;
}