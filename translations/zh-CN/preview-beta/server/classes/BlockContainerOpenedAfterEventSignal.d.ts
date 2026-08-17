/**
 * 管理当方块容器打开时调用的回调。
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当方块容器打开时会被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要添加的回调函数。
     * @param options - 方块容器访问事件选项。
     * @returns 返回一个函数，用于移除该回调。
     *
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在方块容器打开时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}