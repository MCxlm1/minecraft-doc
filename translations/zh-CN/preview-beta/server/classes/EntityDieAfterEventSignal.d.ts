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
     * 当实体死亡时调用的函数。
     * @param options
     * 用于订阅触发时的额外过滤选项，
     * 当订阅触发时使用。
     * @returns
     * 返回一个闭包，可用于后续下游
     * 取消订阅的调用。
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 当实体死亡时，阻止此事件调用你的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}