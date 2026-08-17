/**
 * 提供注册自定义命令的功能。
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个自定义命令，当执行时会触发脚本回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param customCommand
     * 要注册的自定义命令。
     * @param callback
     * 命令执行时触发的回调函数。
     * @throws 此函数可能会抛出错误：
     * {@link CustomCommandError} - 命令名称无效或已存在时抛出。
     * {@link minecraftcommon.EngineError} - 引擎错误时抛出。
     * {@link NamespaceNameError} - 命名空间名称无效时抛出。
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @remarks
     * 注册一个自定义命令枚举。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param name
     * 枚举的名称。
     * @param values
     * 枚举的值列表。
     * @throws 此函数可能会抛出错误：
     * {@link CustomCommandError} - 枚举名称无效或已存在时抛出。
     * {@link minecraftcommon.EngineError} - 引擎错误时抛出。
     * {@link NamespaceNameError} - 命名空间名称无效时抛出。
     */
    registerEnum(name: string, values: string[]): void;
}