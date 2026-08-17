/**
 * 允许注册一个事件，当实体
 * 从游戏中移除时触发（例如，卸载，或
 * 死亡几秒后）。
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is being
     * removed from the game.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
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
     * 取消订阅你的函数，使其在实体被移除时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}