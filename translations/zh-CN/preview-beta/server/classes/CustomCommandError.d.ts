/**
 * 当 CustomCommandRegistry 发生错误时抛出的错误对象。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomCommandError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: CustomCommandErrorReason;
}