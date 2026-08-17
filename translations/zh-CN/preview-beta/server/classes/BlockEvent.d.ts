/**
 * 包含关于影响一个特定方块的事件的
 * 信息。
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * 此事件位置所在世界中的当前方块。
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