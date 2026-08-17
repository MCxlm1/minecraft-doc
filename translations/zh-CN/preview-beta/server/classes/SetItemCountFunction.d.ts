/**
 * 战利品物品函数，用于修改从战利品池条目中掉落的物品数量。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemCountFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择掉落物品数量的值范围。包含最小值和最大值。
     *
     */
    readonly count: minecraftcommon.NumberRange;
}