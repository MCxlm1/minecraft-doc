/**
 * 当存在于物品上时，该物品即为书。可以访问和修改书的内容并签名。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果书已签名，则为书的作者名称；否则为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * 书中以字符串格式存在的页面内容。非字符串格式的条目将为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 确定书是否已被签名。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书包含的页数。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书中以 {@link RawMessage} 格式存在的页面内容。非 {@link RawMessage} 格式的条目将为 undefined。
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
     * 页码索引。
     * @returns
     * 如果提供了有效索引且该页为字符串格式，则返回页面内容；否则返回 undefined。
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
     * 页码索引。
     * @returns
     * 如果提供了有效索引且该页为 {@link RawMessage} 格式，则返回页面内容；否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在指定索引处插入一页。如果索引大于当前书籍页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式最多均为 256 个字符。
     * 书籍最多可包含 50 页。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param pageIndex
     * 页码索引。
     * @param content
     * 要为此页设置的内容。可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
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
     * 移除指定索引处的页面。此页之后已有的页面将向前移动以填补空位。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param pageIndex
     * 页码索引。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * 设置书籍页面的内容。已有的页面将被清除。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式最多均为 256 个字符。
     * 书籍最多可包含 50 页。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param contents
     * 每一页内容的数组。每一页可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
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
     * 设置或创建特定页面的内容。如果索引大于当前书籍页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式最多均为 256 个字符。
     * 书籍最多可包含 50 页。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param pageIndex
     * 页码索引。
     * @param content
     * 要为此页设置的内容。可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
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
     * 为书签名，为其指定标题和作者名。一旦签名，玩家便无法再直接编辑该书。
     * 标题最多 16 个字符。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param title
     * 要为书指定的标题。
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