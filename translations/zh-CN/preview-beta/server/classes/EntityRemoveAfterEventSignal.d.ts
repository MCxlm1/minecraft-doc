/**
 * 允许注册一个事件，该事件在实体从游戏中移除时触发（例如，卸载，或死亡后几秒）。
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 每次实体从游戏中移除时，将调用你的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要调用的函数。
     * @param options
     * 此事件的附加过滤选项。
     * @returns
     * 返回一个闭包，可用于后续的取消订阅操作。
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 取消订阅你的函数，使其不再在实体移除时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}