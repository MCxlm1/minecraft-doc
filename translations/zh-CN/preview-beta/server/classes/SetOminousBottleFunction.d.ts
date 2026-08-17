/**
 * 此战利品物品函数用于修改不祥之瓶的放大器值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetOminousBottleFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择要分配的放大器值的取值范围。包含最小值和最大值。
     *
     */
    readonly amplifier: minecraftcommon.NumberRange;
}