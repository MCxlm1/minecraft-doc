/**
 * 管理压力板弹起时连接的回调。
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当压力板弹起时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调。
     * @returns 返回已订阅的回调，用于取消订阅。
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当压力板弹起时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}