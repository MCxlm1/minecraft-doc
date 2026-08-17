/**
 * 战利品物品条件，用于检查掠夺实体当前是否为特定类型实体的乘客。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PassengerOfEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     *
     */
    readonly entityType: string;
}