/**
 * 管理连接到目标方块被击中时的回调函数。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当目标方块被击中时该函数将被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 当目标方块被击中时调用的回调函数。
     * @returns 返回相同的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在目标方块被击中时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}