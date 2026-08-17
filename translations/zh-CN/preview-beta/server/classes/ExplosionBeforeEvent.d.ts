/**
 * 包含关于已发生的爆炸的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消爆炸事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 更新受此爆炸事件影响的一组方块。
     *
     * @param blocks
     * 受此爆炸影响的新方块列表。
     */
    setImpactedBlocks(blocks: Block[]): void;
}