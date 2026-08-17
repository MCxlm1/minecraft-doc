/**
 * 战利品物品函数，用于修改不祥之瓶的增幅值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetOminousBottleFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从该数值范围中随机选择要分配的增幅值。包含最小值和最大值。
     *
     */
    readonly amplifier: minecraftcommon.NumberRange;
}