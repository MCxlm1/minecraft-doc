/**
 * 当存在于物品上时，该物品即为书物品。可以访问和修改书的内容，并对其进行签名。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果书已签名，则为书的作者姓名；否则为 undefined。
     *
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    readonly author?: string;
    /**
     * @remarks
     * 书中以字符串格式表示的页面内容。非字符串格式的条目将为 undefined。
     *
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 确定书是否已签名。
     *
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书的总页数。
     *
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书中以 {@link RawMessage} 格式表示的页面内容。非 {@link RawMessage} 格式的条目将为 undefined。
     *
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * 如果书已签名，则为书的标题；否则为 undefined。
     *
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * 获取指定索引页面的字符串格式内容。
     *
     * @param pageIndex 页面的索引。
     * @returns 如果提供了有效索引且该页为字符串格式，则返回页面内容；否则返回 undefined。
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * 获取指定索引页面的 {@link RawMessage} 格式内容。
     *
     * @param pageIndex 页面的索引。
     * @returns 如果提供了有效索引且该页为 {@link RawMessage} 格式，则返回页面内容；否则返回 undefined。
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在指定索引处插入一页。如果索引大于当前书本页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容均有 256 个字符的最大限制。
     * 书本最多可包含 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex 页面的索引。
     * @param content 要设置给页面的内容。可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
     * @throws 当书已达到最大页数或操作无效时抛出 {@link BookError}。
     * @throws 当页面内容无效（例如超过字符限制）时抛出 {@link BookPageContentError}。
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 移除指定索引处的页面。该页之后的所有现有页将向前移动以填补空位。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex 页面的索引。
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * 设置书的全部页面内容。已有的页面将被清除。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容均有 256 个字符的最大限制。
     * 书本最多可包含 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param contents 每页内容的数组。每一页可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
     * @throws 当书已达到最大页数或操作无效时抛出 {@link BookError}。
     * @throws 当页面内容无效（例如超过字符限制）时抛出 {@link BookPageContentError}。
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks
     * 设置或创建指定页面的内容。如果索引大于当前书本页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容均有 256 个字符的最大限制。
     * 书本最多可包含 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex 页面的索引。
     * @param content 要设置给页面的内容。可以是单个字符串、{@link RawMessage}，或字符串和/或 {@link RawMessage} 的数组。
     * @throws 当书已达到最大页数或操作无效时抛出 {@link BookError}。
     * @throws 当页面内容无效（例如超过字符限制）时抛出 {@link BookPageContentError}。
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 为书签名，赋予其标题和作者姓名。一旦签名，玩家将无法直接编辑该书。
     * 标题的最大字符限制为 16。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param title 要赋予书的标题。
     * @param author 书的作者姓名。
     * @throws 当书已签名或操作无效时抛出 {@link BookError}。
     * @throws 当与物品实例关联的实体无效时抛出 {@link InvalidEntityError}。
     * @throws 当底层物品实例无效时抛出 {@link InvalidItemStackError}。
     */
    signBook(title: string, author: string): void;
}