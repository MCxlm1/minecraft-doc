/**
 * 作为 Ageable（可成长）组件的一部分，表示一组可以喂食给实体的物品，
 * 以及喂食后使实体成长的速率。
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * 喂食该物品后实体年龄增长的量。取值通常介于 0 和 1 之间。
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * 可用于喂食的物品类型的标识符。如果未指定命名空间，
     * 则默认使用 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食完成后所生成物品的类型 ID。该值通常为空，但会用于某些场景，
     * 例如用一桶鱼喂食鹦鹉螺后，所得物品为一个空桶。
     *
     */
    readonly resultItem?: string;
}