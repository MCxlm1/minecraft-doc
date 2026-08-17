/**
 * 战利品物品函数，用于修改掉落物品的
 * 耐久度值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 该函数从中随机选择要分配的耐久度值的取值范围。包含最小值和最大值。
     * 必须始终在0.0到1.0之间。
     *
     */
    readonly damage: minecraftcommon.NumberRange;
}