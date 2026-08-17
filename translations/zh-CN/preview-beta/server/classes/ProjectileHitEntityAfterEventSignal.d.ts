/**
 * 管理当弹射物击中实体时连接的回调。
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在弹射物击中实体时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当弹射物击中实体时要调用的回调。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在弹射物击中实体时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}