/**
 * 战利品物品函数，使用另一个战利品表填充掉落的容器物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FillContainerFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 用于填充容器的战利品表路径。
     *
     */
    readonly lootTable: string;
}