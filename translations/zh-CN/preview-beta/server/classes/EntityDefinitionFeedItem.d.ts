/**
 * 作为Ageable组件的一部分，表示一组可喂食给实体的物品以及喂食这些物品促使实体成长的速率。
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * 当喂食此物品时，实体年龄增加的量。数值通常在0到1之间。
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * 可喂食物品的标识符。如果未指定命名空间，则默认为'minecraft:'。示例值包括'wheat'或'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食后所得物品的类型ID。通常为空，但用于某些场景，例如用一桶鱼喂食鹦鹉螺，结果物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
}