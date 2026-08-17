/**
 * 检查战利品来源是否被特定类型的实体伤害的
 * 战利品条件。
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