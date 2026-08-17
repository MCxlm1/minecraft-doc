/**
 * 管理当方块容器关闭时连接的回调函数。
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当方块容器关闭时会被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块容器关闭时调用的回调函数。
     * @param options - 可选的附加选项，用于控制事件访问行为。
     * @returns 返回传入的回调函数，可用于后续调用 unsubscribe 移除监听。
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
     * @param callback - 要移除的回调函数，该回调先前通过 subscribe 添加。
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}