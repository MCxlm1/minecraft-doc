/**
 * 管理当弹射物击中实体时触发的回调。
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当弹射物击中实体时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回可传递给 unsubscribe 以移除该回调的函数。
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在弹射物击中实体时被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}