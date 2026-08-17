/**
 * 战利品物品函数，用于修改掉落物品的耐久值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择的耐久值范围。包含最小值和最大值。必须始终在 0.0 和 1.0 之间。
     *
     */
    readonly damage: minecraftcommon.NumberRange;
}