/**
 * 包含关于影响特定方块的事件的信息。
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * 事件位置世界中当前的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 包含该事件主题方块所在的维度。
     *
     */
    readonly dimension: Dimension;
}