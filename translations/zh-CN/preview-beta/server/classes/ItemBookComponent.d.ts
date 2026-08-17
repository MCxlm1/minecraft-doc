/**
 * 当物品上存在此组件时，该物品即为书。可以
 * 访问和修改书的内容，并为其签名。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 书的作者名称（如果书已签名），
     * 否则为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * 书中以字符串格式表示的页面内容。
     * 非字符串格式的条目将为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 确定书是否已签名。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书包含的页面数量。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书中以 {@link
     * RawMessage} 格式表示的页面内容。非 {@link RawMessage} 格式
     * 的条目将为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * 书的标题（如果书已签名），否则为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * 获取指定索引页面的字符串格式内容。
     *
     * @param pageIndex
     * 页面的索引。
     * @returns
     * 如果提供了有效索引且页面内容为字符串格式，则返回页面内容，
     * 否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * 获取指定索引页面的 {@link RawMessage}
     * 格式内容（给定索引）。
     *
     * @param pageIndex
     * 页面的索引。
     * @returns
     * 如果提供了有效索引且页面内容为 {@link RawMessage} 格式，
     * 则返回页面内容，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在指定索引处插入一页。如果索引
     * 大于当前书本页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容
     * 最大限制为 256 个字符。书本最大页数限制为 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要设置的页面内容。可以是单个字符串或
     * {@link RawMessage}，或字符串和/或 {@link
     * RawMessage} 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 移除指定索引处的页面。该页之后的现有页面
     * 将向前移动以填补空白。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * 设置书本的页面内容。已有的页面
     * 将被清除。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容
     * 最大限制为 256 个字符。
     * 书本最大页数限制为 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param contents
     * 每一页内容的数组。每个页面可以是单个
     * 字符串或 {@link RawMessage}，或字符串和/或
     * {@link RawMessage} 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks
     * 设置或创建指定页面的内容。如果索引
     * 大于当前书本页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容
     * 最大限制为 256 个字符。
     * 书本最大页数限制为 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要设置的页面内容。可以是单个字符串或
     * {@link RawMessage}，或字符串和/或 {@link
     * RawMessage} 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 为书签名，赋予其标题和作者名称。一旦签名，
     * 玩家便无法再直接编辑该书。
     * 标题的最大字符限制为 16。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param title
     * 为书设置的标题。
     * @param author
     * 书作者的名称。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link InvalidEntityError}
     *
     * {@link InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}