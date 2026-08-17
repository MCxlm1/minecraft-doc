/**
 * 战利品物品函数，用于为掉落的药水分配类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetPotionFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 要分配给掉落的药水的 id。
     *
     */
    readonly id: string;
}