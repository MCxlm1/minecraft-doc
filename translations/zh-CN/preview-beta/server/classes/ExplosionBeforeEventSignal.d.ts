/**
 * 管理与爆炸发生前
 * 相关的回调。
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在爆炸发生前
     * 被调用。该回调可以选择更改或取消
     * 爆炸行为。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     * @returns
     * 以受限执行特权调用的闭包。
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在
     * 爆炸发生前被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}