/**
 * 战利品物品条件，用于检查掉落战利品的实体的实体类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件要求实体类型为指定值。
     * 示例：'minecraft:skeleton'。
     *
     */
    readonly entityType: string;
}