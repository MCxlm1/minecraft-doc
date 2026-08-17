/**
 * 管理在抛射物击中方块时连接的回调函数。
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在抛射物击中方块时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 回调函数，参数为ProjectileHitBlockAfterEvent事件对象。
     * @returns 返回一个函数，可用于移除该回调。
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在抛射物击中方块时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}