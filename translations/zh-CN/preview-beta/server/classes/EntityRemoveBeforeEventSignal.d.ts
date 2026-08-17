```
/**
 * 允许注册一个事件，该事件在实体从游戏中被移除时触发（例如被卸载，或死亡几秒后）。
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 每次实体被从游戏中移除时，都会调用你的函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要调用的函数。
     * 该闭包以受限执行权限调用。
     * @returns
     * 返回一个闭包，可用于后续的取消订阅操作。
     * 该闭包以受限执行权限调用。
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * 当实体被移除时，取消订阅你的函数，使其不再被后续调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}
```