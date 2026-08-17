/**
 * 作为 Healable 组件的一部分，表示一种可以喂给实体以产生生命效果的具体物品。
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * 喂食此物品后该实体获得的生命值数量。
     * 该数字是从 0 开始的整数，示例值可高达 40。
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * 可喂食物品类型的标识符。如果未指定命名空间，则默认为 'minecraft:'。
     * 示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食发生后产生的物品类型 ID。通常为空，但用于诸如用一桶鱼喂食鹦鹉螺之类的场景，结果物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
    /**
     * @remarks
     * 作为 Healable 组件的一部分，这是一个可选的副作用集合，可能因喂食物品而产生。
     *
     * @returns
     * 一个 FeedItemEffect 对象数组，表示喂食该物品后可能发生的副作用。
     */
    getEffects(): FeedItemEffect[];
}