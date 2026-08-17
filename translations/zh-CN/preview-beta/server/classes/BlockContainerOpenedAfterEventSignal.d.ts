/**
 * 管理与方块容器打开时连接的回调。
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在方块容器打开时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块容器打开时要调用的回调函数。
     * @param options - (可选) 用于控制回调访问的附加选项。
     * @returns 一个可以用于取消订阅该回调的函数。
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器打开时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}