/**
 * 战利品物品条件，用于检查战利品来源是否被特定类型的实体伤害。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DamagedByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     *
     */
    readonly entityType: string;
}