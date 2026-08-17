/**
 * 为调用者提供可适配的接口，用于订阅游戏世界关闭前触发的事件。
 * 此事件发生在玩家离开之后，但世界关闭之前。
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 向此事件添加新的订阅者回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 当此事件触发时调用的函数回调。此闭包在受限执行权限下调用。
     * @returns
     * 在受限执行权限下调用的闭包。
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 移除之前通过subscribe方法订阅的订阅者回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 之前传递给subscribe方法的函数闭包。此闭包在受限执行权限下调用。
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}