/**
 * 为调用者提供可适配的接口，用于订阅在游戏世界关闭前触发的事件。
 * 该事件在玩家离开之后、世界关闭之前发生。
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 向此事件添加新的订阅者回调。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可在早期执行模式下调用此函数。
     *
     * @param callback
     * 事件触发时调用的函数回调。该闭包将以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 移除之前通过 subscribe 方法订阅的回调函数。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可在早期执行模式下调用此函数。
     *
     * @param callback
     * 之前传递给 subscribe 方法的函数闭包。该闭包将以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}