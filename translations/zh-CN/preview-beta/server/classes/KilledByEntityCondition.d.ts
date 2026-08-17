/**
 * 检测掉落来源是否被特定类型的实体杀死的战利品物品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 该条件所需的实体类型。示例：'minecraft:skeleton'。
     *
     */
    readonly entityType: string;
}