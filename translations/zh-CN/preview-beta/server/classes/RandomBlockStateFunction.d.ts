/**
 * 战利品物品函数，用于随机修改
 * 掉落物品的方块状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    /**
     * @remarks
     * 函数从中随机选择值的范围
     * 以分配给给定方块状态。包含最小值
     * 和最大值。
     *
     */
    readonly values: minecraftcommon.NumberRange;
}