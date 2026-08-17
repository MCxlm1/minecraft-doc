/**
 * 战利品物品函数，用于随机修改掉落物品的方块状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    /**
     * @remarks
     * 函数随机选择分配给给定方块状态的值的范围。包含最小值和最大值。
     *
     */
    readonly values: minecraftcommon.NumberRange;
}