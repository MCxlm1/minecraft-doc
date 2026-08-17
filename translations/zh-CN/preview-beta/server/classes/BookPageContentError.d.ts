/**
 * 当在 {@link ItemBookComponent} 上设置的页面内容无效时抛出的错误，例如超过最大页面长度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * 要修改的页面的索引。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly pageIndex: number;
    /**
     * @remarks
     * 错误的原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: BookErrorReason;
}