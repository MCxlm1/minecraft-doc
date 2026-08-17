/**
 * 当物品上存在此组件时，该物品即为书物品。可以访问、修改书的内容并签名。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果书已签名，则为作者名称；否则为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * 书中页面的内容，以字符串格式呈现。非字符串格式的条目将为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 确定书是否已签名。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书的页数。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书中页面的内容，以 {@link RawMessage} 格式呈现。非 {@link RawMessage} 格式的条目将为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * 如果书已签名，则为书的标题；否则为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
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
     * 如果提供了有效的索引且页面为字符串格式，则返回页面内容；否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * 获取指定索引页面的 {@link RawMessage} 格式内容。
     *
     * @param pageIndex
     * 页面的索引。
     * @returns
     * 如果提供了有效的索引且页面为 {@link RawMessage} 格式，则返回页面内容；否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在指定索引处插入一个页面。如果索引大于当前书本大小，则会创建空白页面。
     * 页面字符串和 {@link RawMessage} 的 JSON 表示都有最大 256 字符的限制。
     * 书本最多有 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要设置的页面内容。可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
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
     * 移除指定索引处的页面。此页面之后的现有页面将向前移动以填补空白。
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
     * 设置书本所有页面的内容。预先存在的页面将被清除。
     * 页面字符串和 {@link RawMessage} 的 JSON 表示都有最大 256 字符的限制。
     * 书本最多有 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param contents
     * 每个页面内容的数组。每个页面可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
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
     * 设置或创建特定页面的内容。如果索引大于当前书本大小，则会创建空白页面。
     * 页面字符串和 {@link RawMessage} 的 JSON 表示都有最大 256 字符的限制。
     * 书本最多有 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要设置的页面内容。可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
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
     * 为书本签名，赋予其标题和作者名称。签名后，玩家将无法再直接编辑书本。
     * 标题最多 16 个字符。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param title
     * 要赋予书本的标题。
     * @param author
     * 书本作者的名字。
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