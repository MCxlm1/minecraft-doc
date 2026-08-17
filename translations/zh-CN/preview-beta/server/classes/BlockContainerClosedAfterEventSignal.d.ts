/**
 * 管理与方块容器关闭时
 * 相关的回调。
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在方块容器关闭时
     * 会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块容器关闭时，会被调用的回调函数。
     * @param options - 可选，用于配置事件访问的选项。
     * @returns - 返回一个回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 从方块容器关闭时被调用的回调中
     * 移除一个回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 需要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}