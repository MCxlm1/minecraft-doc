/**
 * 管理与爆炸发生时相关联的回调函数。
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当爆炸发生时会被调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回一个用于取消订阅该回调的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在爆炸发生时被调用。
     *
     * @param callback - 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}