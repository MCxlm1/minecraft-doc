/**
 * 作为 Healable 组件的一部分，表示一个可喂给实体以产生生命恢复效果的具体物品。
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * 该实体食用此物品后恢复的生命值。此数值为从 0 开始的整数，示例值最大可达 40。
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * 可喂食物品类型的标识符。如果未指定命名空间，则默认为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食完成后所得物品的类型 ID。通常为空，但在某些场景中使用，例如用一桶鱼喂食鹦鹉螺时，所得物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
    /**
     * @remarks
     * 作为 Healable 组件的一部分，可选的一系列因喂食物品而产生的副作用。
     *
     * @returns 返回一个 FeedItemEffect 数组，表示喂食后可能产生的副作用；如果没有副作用，则可能为空数组。
     */
    getEffects(): FeedItemEffect[];
}