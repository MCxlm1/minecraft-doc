/**
 * 管理当投射物击中实体时所连接的回调。
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当投射物击中实体时将被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当投射物击中实体事件发生时调用的回调函数。
     * @returns 返回传入的回调函数。
     * @throws 在受限执行模式下调用此函数时抛出错误。
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在投射物击中实体时不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     * @throws 在受限执行模式下调用此函数时抛出错误。
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}