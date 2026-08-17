/**
 * 当物品上存在该组件时，此物品即为书籍物品。可以
 * 访问和修改书籍内容并为其签名。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 书籍已签名时，返回作者名称；
     * 否则返回 undefined。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * 书中以字符串格式表示的页面内容。
     * 非字符串格式的条目将为 undefined。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 确定书籍是否已被签名。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书籍包含的页数。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书中以 {@link RawMessage} 格式表示的页面内容。
     * 非 {@link RawMessage} 格式的条目将为 undefined。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * 书籍已签名时的标题，否则为 undefined。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * 获取指定索引页的字符串格式内容。
     *
     * @param pageIndex
     * 页的索引。
     * @returns
     * 如果提供了有效索引且页面为字符串格式，则返回页面内容；
     * 否则返回 undefined。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * 获取指定索引页的 {@link RawMessage} 格式内容。
     *
     * @param pageIndex
     * 页的索引。
     * @returns
     * 如果提供了有效索引且页面为 {@link RawMessage} 格式，则返回页面内容；
     * 否则返回 undefined。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在指定索引处插入一页。如果索引大于当前书籍页数，将创建空白页。
     * 字符串及 {@link RawMessage} 的 JSON 表示形式的页内容最大长度为 256 个字符。
     * 书籍最多可包含 50 页。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param pageIndex
     * 页的索引。
     * @param content
     * 要设置的页内容。可以是单个字符串、{@link RawMessage}，或由字符串和/或 {@link RawMessage} 组成的数组。
     * @throws
     * 此函数可能抛出错误。
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
     * 移除指定索引处的页。该页之后的其他页将向前移动以填补空位。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param pageIndex
     * 页的索引。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * 设置书籍的页内容。已有的页将被清除。
     * 字符串及 {@link RawMessage} 的 JSON 表示形式的页内容最大长度为 256 个字符。
     * 书籍最多可包含 50 页。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param contents
     * 每页内容的数组。每页可以是一个字符串、{@link RawMessage}，或由字符串和/或 {@link RawMessage} 组成的数组。
     * @throws
     * 此函数可能抛出错误。
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
     * 设置或创建特定页的内容。如果索引大于当前书籍页数，将创建空白页。
     * 字符串及 {@link RawMessage} 的 JSON 表示形式的页内容最大长度为 256 个字符。
     * 书籍最多可包含 50 页。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param pageIndex
     * 页的索引。
     * @param content
     * 要设置的页内容。可以是单个字符串、{@link RawMessage}，或由字符串和/或 {@link RawMessage} 组成的数组。
     * @throws
     * 此函数可能抛出错误。
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
     * 为书籍签名，赋予其标题和作者名称。一旦签名，玩家将无法再直接编辑书籍。
     * 标题的最大字符限制为 16。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param title
     * 为书籍设置的标题。
     * @param author
     * 书籍作者的名称。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link InvalidEntityError}
     *
     * {@link InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}