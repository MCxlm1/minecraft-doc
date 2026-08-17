/**
 * 战利品物品函数，用于修改
 * 掉落物品的耐久度值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择要分配的
     * 耐久度值的范围。包含最小值和
     * 最大值。必须始终介于0.0和1.0之间。
     *
     */
    readonly damage: minecraftcommon.NumberRange;
}