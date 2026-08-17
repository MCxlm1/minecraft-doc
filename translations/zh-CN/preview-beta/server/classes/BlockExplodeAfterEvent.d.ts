/**
 * 包含有关特定方块发生爆炸的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 发生爆炸的方块的描述。
     *
     */
    readonly explodedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    readonly source?: Entity;
}