/**
 * 管理当投射物击中方块时连接的回调函数。
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当投射物击中方块时将被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在投射物击中方块时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}