/**
 * @beta
 * 提供注册自定义世界时钟的功能。世界时钟只能在系统启动事件期间注册。
 */
export class WorldClockRegistry {
    private constructor();
    /**
     * @remarks
     * 注册新的自定义世界时钟。必须在系统启动事件期间调用。
     *
     * @privilege early-execution-allowed - 此函数可在早期执行模式下调用。
     *
     * @param name
     * 表示此世界时钟的名称。必须包含命名空间且仅使用有效的标识符字符（例如：'mypack:my_clock'）。
     * @param registrationOptions
     * 注册世界时钟的附加选项，例如在注册时包含时间标记。
     * @throws 此函数可能抛出错误。
     *
     * {@link WorldClockInvalidRegistryError}
     *
     * {@link WorldClockRegistrationError}
     *
     * {@link WorldClockReloadNewWorldClockError}
     *
     * {@link WorldClockReloadTimeMarkerError}
     */
    registerClock(name: string, registrationOptions?: WorldClockRegistrationOptions): void;
}