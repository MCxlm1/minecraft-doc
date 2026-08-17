/**
 * 战利品物品函数，随机修改掉落物品的数据值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择要分配的数据值的值范围。包含最小值和最大值。
     *
     */
    readonly values: minecraftcommon.NumberRange;
}