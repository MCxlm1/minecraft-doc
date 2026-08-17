/**
 * 管理在爆炸发生前关联的回调。
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在爆炸发生前被调用的回调。该回调可以选择性地更改或取消爆炸行为。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 将在受限执行权限下被调用的闭包。
     * @returns
     * 将在受限执行权限下被调用的闭包。
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在爆炸发生前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 将在受限执行权限下被调用的闭包。
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}