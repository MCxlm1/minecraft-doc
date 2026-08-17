/**
 * 战利品物品函数，用于修改掉落的书的内容。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 书的作者姓名。
     *
     */
    readonly author: string;
    /**
     * @remarks
     * 要放入书页中的文本数组。
     *
     */
    readonly pages: string[];
    /**
     * @remarks
     * 书的标题。
     *
     */
    readonly title: string;
}