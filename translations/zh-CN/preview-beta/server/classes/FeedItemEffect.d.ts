/**
 * 表示因食物物品被喂给实体而应用的效果。
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * 获取可能已应用于此效果的增幅值。有效值为从 0 开始的整数，但通常介于 0 到 4 之间。
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取将此物品喂给实体后该效果被应用的概率。有效值介于 0 和 1 之间。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 获取该效果的持续时间，以刻度（tick）为单位。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取要应用的效果的标识符。示例值包括 'fire_resistance' 或 'regeneration'。
     *
     */
    readonly name: string;
}