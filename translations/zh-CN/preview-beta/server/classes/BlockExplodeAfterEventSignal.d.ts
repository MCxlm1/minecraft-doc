/**
 * 管理与爆炸影响单个方块时触发的回调。
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸影响单个方块时将会调用该回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 爆炸影响单个方块时要调用的回调函数。
     * @returns 被传入的回调函数。
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在爆炸影响单个方块时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}