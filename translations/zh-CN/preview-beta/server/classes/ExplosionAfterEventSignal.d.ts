/**
 * 管理与爆炸发生时相关的回调。
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在爆炸发生时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个爆炸发生时调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}