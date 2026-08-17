/**
 * 管理在目标方块被击中时触发的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当目标方块被击中时该回调将被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 一个接受TargetBlockHitAfterEvent对象的函数，当目标方块被击中时调用。
     * @returns 返回一个函数，可用于取消订阅此回调。
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在目标方块被击中时不再被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}