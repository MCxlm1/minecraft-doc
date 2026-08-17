export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: CustomComponentNameErrorReason;
}