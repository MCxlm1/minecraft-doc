/**
 * 允许注册一个事件，该事件在实体
 * 被从游戏中移除时触发（例如，卸载后，或
 * 实体死亡几秒后）。
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 每次实体从游戏中移除时，都会调用你的函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
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
     * 当实体被移除时，从后续调用中取消订阅你的函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要取消订阅的函数。
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}