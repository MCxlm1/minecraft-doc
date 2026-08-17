/**
 * 战利品物品函数，用于修改掉落书的内容。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 该书的作者姓名。
     *
     */
    readonly author: string;
    /**
     * @remarks
     * 要放置在书页中的文本数组。
     *
     */
    readonly pages: string[];
    /**
     * @remarks
     * 该书的标题。
     *
     */
    readonly title: string;
}