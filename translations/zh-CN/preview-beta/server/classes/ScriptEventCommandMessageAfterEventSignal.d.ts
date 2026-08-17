/**
 * 允许注册一个事件处理器，用于响应传入的 /scriptevent 命令。
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个新的 ScriptEvent 事件处理器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 回调函数，接收 ScriptEventCommandMessageAfterEvent 事件。
     * @param options - 可选的消息过滤器选项。
     * @returns 返回一个用于取消订阅的函数。
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * 取消特定 ScriptEvent 事件处理器的订阅。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 需要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}