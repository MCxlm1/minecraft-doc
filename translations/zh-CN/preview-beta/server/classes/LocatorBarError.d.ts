/**
 * 当定位栏操作失败时抛出的错误。包含一个
 * 指示错误具体原因的原因码。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * 指示定位栏操作失败原因的 {@link LocatorBarErrorReason} 码。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: LocatorBarErrorReason;
}