/**
 * 当自定义命令注册表发生错误时抛出的错误对象。
 */
// @ts-ignore 类继承允许用于原生定义的类
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