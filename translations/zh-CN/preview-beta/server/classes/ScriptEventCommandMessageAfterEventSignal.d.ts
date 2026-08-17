/**
 * 允许注册一个处理入站/scriptevent命令的事件处理器。
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个新的ScriptEvent处理器。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * 取消订阅特定的ScriptEvent事件处理器。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}