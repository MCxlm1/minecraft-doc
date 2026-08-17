/**
 * 战利品物品函数，用于随机修改掉落物品的方块状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    /**
     * @remarks
     * 函数从该范围中随机选择一个值，并将其赋给给定的方块状态。包含最小值和最大值。
     *
     */
    readonly values: minecraftcommon.NumberRange;
}