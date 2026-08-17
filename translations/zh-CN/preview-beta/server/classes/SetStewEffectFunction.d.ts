/**
 * 修改掉落的炖菜物品效果的物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 一个整数数组，对应要随机选择并应用到掉落的物品上的炖菜效果。
     *
     */
    readonly effects: number[];
}