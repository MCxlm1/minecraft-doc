/**
 * 提供注册自定义命令的功能。
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个自定义命令，当执行时会触发脚本回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param customCommand
     * 要注册的自定义命令。
     * @param callback
     * 命令执行时触发的回调。
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
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param name
     * 枚举的名称。
     * @param values
     * 枚举的值。
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