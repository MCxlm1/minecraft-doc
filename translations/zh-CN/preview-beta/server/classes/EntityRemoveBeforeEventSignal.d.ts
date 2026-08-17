/**
 * 允许注册一个在实体正被从游戏中移除时（例如，卸载后，或死亡几秒后）触发的事件。
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 每当一个实体正被从游戏中移除时，将调用你的函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要调用的函数。
     * 此闭包以受限执行权限调用。
     * @returns
     * 返回一个可在后续取消订阅操作中使用的闭包。
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * 当实体正被移除时，取消订阅你的函数以使其不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}