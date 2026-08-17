/**
 * 所有战利品物品函数的抽象基类。战利品物品函数可以在战利品掉落发生时以多种方式修改掉落结果，并可选择依赖于一组必须满足的条件。
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}