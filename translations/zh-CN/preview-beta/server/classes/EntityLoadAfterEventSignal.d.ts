/**
 * 注册一个基于脚本的事件处理器，用于处理实体加载时发生的事情。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 用于注册事件处理程序的方法，处理实体加载时发生的事情。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 处理加载事件的函数。
     * @returns
     * 返回一个函数，可用于取消事件处理程序的注册。
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 取消注册之前订阅到该事件的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 最初传递给subscribe事件的函数，将被取消注册。
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}