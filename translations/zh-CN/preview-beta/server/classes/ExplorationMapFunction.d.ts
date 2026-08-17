/**
 * 战利品物品函数，修改掉落的藏宝图以标记位置。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplorationMapFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定掉落哪种类型的藏宝图。
     *
     */
    readonly destination: string;
}