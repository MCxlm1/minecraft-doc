/**
 * 管理当目标方块被击中时触发的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当目标方块被击中时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 当目标方块被击中时调用的回调函数。
     * @returns 返回一个用于取消该回调的函数。
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当目标方块被击中时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}