/**
 * 战利品物品函数，如果提供的工具具有抢夺附魔，则掉落额外物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootingEnchantFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择掉落额外物品数量的值范围。包含最小值和最大值。
     *
     */
    readonly count: minecraftcommon.NumberRange;
}