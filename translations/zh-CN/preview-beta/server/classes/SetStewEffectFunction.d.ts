/**
 * 战利品物品函数，用于修改掉落的炖菜物品的效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 一个整数数组，对应炖菜效果，将从中随机选择并应用到掉落的物品上。
     *
     */
    readonly effects: number[];
}