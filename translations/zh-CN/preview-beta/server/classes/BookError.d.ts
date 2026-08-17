/**
 * 使用 {@link
 * ItemBookComponent} 时可能抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: BookErrorReason;
}