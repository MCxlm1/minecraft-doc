/**
 * 允许注册一个事件，该事件在实体即将从游戏中被移除时触发（例如，卸载时，或死亡几秒后）。
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 每次实体从游戏中被移除时，都会调用你的函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要调用的函数。
     * 该闭包以受限执行特权调用。
     * @returns
     * 返回一个闭包，可用于后续的取消订阅操作。
     * 该闭包以受限执行特权调用。
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * 取消订阅你的函数，使其在实体被移除时不再被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}