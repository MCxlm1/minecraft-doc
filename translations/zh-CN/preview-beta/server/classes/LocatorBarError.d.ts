/**
 * 当定位栏操作失败时抛出的错误。包含一个
 * 原因代码，指明错误的具体原因。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * 指示定位栏操作失败原因的 {@link LocatorBarErrorReason} 代码。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: LocatorBarErrorReason;
}