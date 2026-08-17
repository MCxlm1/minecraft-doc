export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * 当喂食此物品时，实体年龄增加的量。值通常在0到1之间。
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * 可喂食物品类型的标识符。如果未指定命名空间，则假定为'minecraft:'。示例值包括'wheat'或'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食发生后产生的物品的类型ID。通常为空，但用于某些场景，例如用一桶鱼喂食鹦鹉螺，结果物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
}