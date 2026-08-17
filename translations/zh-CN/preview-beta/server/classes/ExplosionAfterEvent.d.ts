/**
 * 包含有关已发生的爆炸的信息。
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 爆炸发生的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 由此爆炸事件影响的方块集合。
     *
     */
    getImpactedBlocks(): Block[];
}