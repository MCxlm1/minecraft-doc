/**
 * 管理与爆炸发生前相关的回调。
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在爆炸发生前被调用。该回调可以选择性地更改或取消爆炸行为。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     * @returns
     * 在受限执行权限下被调用的闭包。
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在爆炸发生前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}