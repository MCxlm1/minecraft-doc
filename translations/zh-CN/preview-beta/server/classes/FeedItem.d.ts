/**
 * 作为 Healable 组件的一部分，表示可喂食给实体以产生
 * 生命值效果的特定物品。
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * 实体食用此物品时恢复的生命值。
     * 该数字为从 0 开始的整数。示例值最高可达 40。
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * 可喂食的物品类型标识符。若未指定命名空间，则默认为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食后所得物品的类型 ID。通常为空，但在某些场景下会使用，例如用一桶鱼喂食鹦鹉螺时，所得物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
    /**
     * @remarks
     * 作为 Healable 组件的一部分，喂食物品后可能产生的可选副作用集合。
     *
     * @returns 返回一个 FeedItemEffect 数组，表示喂食该物品后可能产生的副作用。
     */
    getEffects(): FeedItemEffect[];
}