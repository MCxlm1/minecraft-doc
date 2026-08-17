/**
 * 为调用者提供一个可适应的接口，用于订阅在游戏世界关闭之前触发的事件。
 * 该事件发生在玩家离开之后、世界关闭之前。
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 向此事件添加一个新的订阅者回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 当此事件触发时调用的函数回调。此闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 移除先前通过 subscribe 方法订阅的订阅者回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 先前传递给 subscribe 方法的函数闭包。此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}