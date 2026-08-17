/**
 * 管理与方块容器关闭时相关的回调。
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block container is closed.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块容器关闭时将被调用的回调函数。
     * @param options - 可选的事件访问选项。
     * @returns 传入的回调函数，以便于后续调用 unsubscribe。
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a block container is closed.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}