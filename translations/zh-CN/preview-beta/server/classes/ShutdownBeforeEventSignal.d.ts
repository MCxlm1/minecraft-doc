/**
 * 提供可适配的接口，供调用者订阅在游戏世界关闭前触发的事件。该事件发生在玩家离开之后、世界关闭之前。
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个新的订阅者回调到此事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 当事件触发时调用的回调函数。该闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 移除之前通过 subscribe 方法订阅的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 之前传递给 subscribe 方法的函数闭包。该闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}