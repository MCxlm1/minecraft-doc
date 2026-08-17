/**
 * 注册一个基于脚本的事件处理器，用于处理实体加载时发生的情况。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个事件处理器，用于处理实体加载时发生的情况。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 处理加载事件的函数。
     * @returns
     * 用于取消订阅该事件的函数。
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 注销先前订阅到该事件的方法。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 之前传入 subscribe 事件、需要注销的原始函数。
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}