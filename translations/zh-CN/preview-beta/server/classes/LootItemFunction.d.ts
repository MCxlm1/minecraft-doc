/**
 * 所有战利品物品函数派生自的抽象基类。
 * 战利品物品函数可以在战利品掉落发生时
 * 以多种方式修改它们，可选地依赖于
 * 一组必须满足的条件。
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}