/**
 * 当定位条操作失败时抛出的错误。包含一个原因代码，指示错误的具体原因。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * {@link LocatorBarErrorReason} 代码，指示定位条操作失败的原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: LocatorBarErrorReason;
}