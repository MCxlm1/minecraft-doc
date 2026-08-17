/**
 * 从无效的 {@link TickingAreaManager} 方法调用返回的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TickingAreaError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误被抛出的具体原因。
     *
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly reason: TickingAreaErrorReason;
}