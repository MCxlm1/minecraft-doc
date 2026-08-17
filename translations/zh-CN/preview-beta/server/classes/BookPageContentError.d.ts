/**
 * 当在 {@link ItemBookComponent} 上设置的页面内容无效时（例如超出最大页面长度）引发的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * 要修改的页面的索引。
     *
     * 该属性可以在早期执行模式下读取。
     *
     */
    readonly pageIndex: number;
    /**
     * @remarks
     * 错误原因。
     *
     * 该属性可以在早期执行模式下读取。
     *
     */
    readonly reason: BookErrorReason;
}