/**
 * Manages callbacks that are connected to when a block
 * container is closed.
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在方块容器关闭时被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 当方块容器关闭时调用的回调函数。
     * @param options
     * 用于过滤方块容器事件的选项。
     * @returns
     * 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器关闭时被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}