/**
 * 管理与方块容器关闭时触发的回调。
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在方块容器关闭时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要添加的回调函数。
     * @param options - 可选的回调选项。
     * @returns 返回已订阅的回调函数。
     *
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器关闭时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}