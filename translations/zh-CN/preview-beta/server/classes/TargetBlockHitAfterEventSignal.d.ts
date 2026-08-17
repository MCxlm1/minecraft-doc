/**
 * 管理与目标方块被击中时相关的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在目标方块被击中时会被调用的回调。
     *
     * 此函数无法在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要注册的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在目标方块被击中时会被调用的回调。
     *
     * 此函数无法在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}