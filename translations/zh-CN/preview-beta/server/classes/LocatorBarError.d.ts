/**
 * 当定位栏操作失败时抛出的错误。包含指示错误具体原因的原因代码。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * {@link LocatorBarErrorReason} 代码，表示定位栏操作失败的原因。
     *
     * 此属性可在早期执行模式中读取。
     *
     */
    readonly reason: LocatorBarErrorReason;
}