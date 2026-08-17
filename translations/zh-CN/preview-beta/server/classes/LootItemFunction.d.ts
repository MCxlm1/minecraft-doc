/**
 * 一个抽象基类，所有战利品物品函数均由此派生。
 * 战利品物品函数可以在战利品掉落发生时以多种方式修改掉落物，
 * 可选地依赖于一组必须满足的条件。
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}