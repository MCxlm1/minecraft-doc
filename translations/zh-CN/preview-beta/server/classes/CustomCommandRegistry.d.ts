/**
 * 提供注册自定义命令的功能。
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一条自定义命令，当命令执行时会触发脚本回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param customCommand
     * 要注册的自定义命令。
     * @param callback
     * 命令执行时触发的回调函数。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
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
     * 枚举的取值列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}