/**
 * 支持注册一个在实体死亡后
 * 触发的事件。
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅一个在实体死亡时触发的事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 实体死亡时要调用的函数。
     * @param options
     * 用于在订阅触发时进行额外筛选的
     * 选项。
     * @returns
     * 返回一个闭包，可在后续下游调用中
     * 用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 当实体死亡时，停止此事件调用
     * 你的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}