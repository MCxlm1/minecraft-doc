/**
 * 管理当目标方块被击中时
 * 触发的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当目标方块被击中时
     * 将会调用该回调。
     * @param callback - 将在目标方块被击中时调用的回调函数。
     * @returns 返回传入的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当目标方块被击中时
     * 不再被调用。
     * @param callback - 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}