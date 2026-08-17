/** 
 * 管理连接到爆炸发生前的回调。
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在爆炸发生前被调用。此回调可以选择修改或取消爆炸行为。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @returns
     * 返回以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在爆炸发生前被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}