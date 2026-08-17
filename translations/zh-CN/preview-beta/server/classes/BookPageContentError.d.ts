/**
 * 当设置在 {@link
 * ItemBookComponent} 上的页面内容无效时（即超过最大页面长度）
 * 调用的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * 请求修改的页面的索引。
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