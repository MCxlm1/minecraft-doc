/**
 * 战利品物品函数，用于修改掉落的炖菜物品的效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 一组整数，对应炖菜效果，将从中随机选择并应用于掉落的物品。
     *
     */
    readonly effects: number[];
}