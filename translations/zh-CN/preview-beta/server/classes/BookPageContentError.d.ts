/**
 * 当在{@link ItemBookComponent}上设置的页面内容无效时引发的错误，
 * 即超过最大
 * 页面长度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * 要修改的页面的索引。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly pageIndex: number;
    /**
     * @remarks
     * 错误的原因。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly reason: BookErrorReason;
}