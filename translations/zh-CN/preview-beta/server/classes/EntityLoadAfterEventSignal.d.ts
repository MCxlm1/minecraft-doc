/**
 * 注册一个基于脚本的事件处理器，用于处理
 * 实体加载时发生的事件。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个事件处理器，用于处理实体加载时发生的事件。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 处理加载事件的函数。
     * @returns
     * 返回传入的回调函数。
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 取消注册之前订阅到订阅事件的函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 原先传入 subscribe 事件的函数，需要被取消注册。
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}