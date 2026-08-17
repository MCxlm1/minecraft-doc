/**
 * 当名称需要命名空间且验证该命名空间时
 * 发生错误时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: NamespaceNameErrorReason;
}