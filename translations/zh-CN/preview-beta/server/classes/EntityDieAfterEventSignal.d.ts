/**
 * 支持注册一个在实体死亡后触发的事件。
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
     * 用于订阅触发时的额外筛选选项。
     * @returns
     * 返回一个闭包，可用于后续调用以取消订阅。
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 停止该事件在实体死亡时调用你的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 需要取消订阅的函数。
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}