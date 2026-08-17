/**
 * 包含针对特定方块的事件相关信息。
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * 此事件位置处的世界当前方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 包含此事件主题方块的维度。
     *
     */
    readonly dimension: Dimension;
}