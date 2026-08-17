/**
 * 作为 Ageable 组件的一部分，表示一组可以喂给实体的物品以及它们导致实体成长的速度。
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * 喂食此物品后，实体年龄增加的量。数值通常在 0 到 1 之间。
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * 可喂食物品类型的标识符。如果未指定命名空间，则默认为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食发生后所得物品的类型 ID。通常为空，但用于诸如用鱼桶喂食鹦鹉螺的场景，此时所得物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
}