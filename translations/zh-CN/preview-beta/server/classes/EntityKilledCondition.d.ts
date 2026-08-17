/**
 * 战利品物品条件，检查掉落战利品的实体的实体类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     * 例如：'minecraft:skeleton'。
     *
     */
    readonly entityType: string;
}