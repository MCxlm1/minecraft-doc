/**
 * 允许注册一个事件，该事件在实体
 * 从游戏中移除时触发（例如，卸载后，或
 * 死亡几秒后）。
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 每当实体从游戏中移除时，
     * 将调用你的函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要调用的函数。
     * @param options
     * 此事件的其他过滤选项。
     * @returns
     * 返回一个闭包，可用于后续的取消订阅
     * 操作。
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 当实体被移除时，将取消
     * 你的函数的订阅。
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