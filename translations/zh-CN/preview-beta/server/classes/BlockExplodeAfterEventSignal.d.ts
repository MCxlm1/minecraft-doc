/**
 * 管理当爆炸发生时，影响单个方块时触发的回调。
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸发生时，影响单个方块时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在爆炸发生时，影响单个方块时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}