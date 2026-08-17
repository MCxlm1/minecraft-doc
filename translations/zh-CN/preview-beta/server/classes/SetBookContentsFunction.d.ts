/**
 * 修改掉落书籍内容的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 这本书作者的名字。
     *
     */
    readonly author: string;
    /**
     * @remarks
     * 一个文本数组，用于放置在书的页面中。
     *
     */
    readonly pages: string[];
    /**
     * @remarks
     * 这本书的标题。
     *
     */
    readonly title: string;
}