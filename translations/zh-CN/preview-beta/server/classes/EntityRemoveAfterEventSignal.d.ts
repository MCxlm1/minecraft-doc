/**
 * 允许注册一个事件，该事件在实体从游戏中移除时触发（例如，被卸载，或在死亡后几秒）。
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 将在每次实体从游戏中移除时调用你的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要调用的函数。
     * @param options
     * 此事件的额外筛选选项。
     * @returns
     * 返回一个闭包，可用于后续的取消订阅操作。
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 从实体移除时后续调用中取消订阅你的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}