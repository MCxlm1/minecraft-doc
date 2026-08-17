/**
 * 一个抽象基类，所有战利品物品函数都派生自该类。
 * 战利品物品函数可以在战利品掉落发生时以多种方式修改它们，
 * 可选依赖于一组必须满足的条件。
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}