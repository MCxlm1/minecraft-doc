/**
 * 管理在爆炸发生时
 * 相关的回调。
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在爆炸发生时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns - 返回传入的回调函数，便于取消订阅。
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在爆炸发生时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}