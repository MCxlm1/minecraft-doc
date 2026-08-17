/**
 * 注册一个基于脚本的事件处理程序，用于处理实体加载时发生的情况。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 用于注册实体加载时发生的事件处理程序的方法。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 处理加载事件的函数。
     * @returns
     * 返回已注册的回调函数。
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 注销之前订阅到该订阅事件的方法。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 传入订阅事件的原始函数，将被注销。
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}