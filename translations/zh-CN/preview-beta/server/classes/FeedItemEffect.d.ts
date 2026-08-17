/**
 * 表示当食物物品被喂给实体时应用的效果。
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * 获取可能已应用于此效果的放大器。
     * 有效值为从 0 开始的整数，通常介于 0 到 4 之间。
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 实体被喂食此物品时应用此效果的概率。有效值介于 0 到 1 之间。
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