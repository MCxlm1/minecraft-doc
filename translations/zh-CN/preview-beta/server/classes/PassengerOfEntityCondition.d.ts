/**
 * 战利品物品条件，检查战利品实体当前是否是指定类型实体的乘客。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PassengerOfEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件所需的实体类型。
     *
     */
    readonly entityType: string;
}