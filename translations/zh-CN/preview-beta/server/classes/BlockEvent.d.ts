/**
 * 包含有关影响特定方块的事件的信息。
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * 当前世界中此事件位置处的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 包含此事件所涉及方块的维度。
     *
     */
    readonly dimension: Dimension;
}