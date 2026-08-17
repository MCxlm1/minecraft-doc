/**
 * 战利品物品条件，用于检查掉落来源是否被特定类型的实体击杀。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     * 示例：'minecraft:skeleton'。
     *
     */
    readonly entityType: string;
}