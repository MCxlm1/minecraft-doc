/**
 * 表示因食物物品被喂给实体而产生的一种效果。
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * 获取可能已应用于此效果的放大器。有效值为从 0 开始的整数，通常范围在 0 到 4 之间。
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 此效果因实体被喂食此物品而应用的概率。有效值范围在 0 到 1 之间。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 获取此效果的持续时间（以刻为单位）。
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