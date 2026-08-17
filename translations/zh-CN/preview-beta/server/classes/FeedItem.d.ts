/**
 * 作为 Healable 组件的一部分，表示可以喂给实体以产生生命恢复效果的具体物品。
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * 实体食用该物品后恢复的生命值数量。该数字为从 0 开始的整数，示例值最高可达 40。
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
     * 喂食完成后所得物品的类型 ID。通常为空，但在某些场景中使用，例如用鱼桶喂食鹦鹉螺时，结果物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
    /**
     * @remarks
     * 作为 Healable 组件的一部分，可选的效果集合，表示喂食物品后可能发生的副作用。
     *
     * @returns 一个 FeedItemEffect 对象数组，表示可能发生的副作用。
     */
    getEffects(): FeedItemEffect[];
}