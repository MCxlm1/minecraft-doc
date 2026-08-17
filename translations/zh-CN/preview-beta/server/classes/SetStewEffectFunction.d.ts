/**
 * 战利品物品函数，用于修改掉落的炖菜物品的效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 一组整数，对应可随机选择并应用于掉落物品的炖菜效果。
     *
     */
    readonly effects: number[];
}