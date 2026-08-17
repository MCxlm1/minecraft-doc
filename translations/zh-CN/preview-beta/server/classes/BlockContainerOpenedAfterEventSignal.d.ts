/**
 * 管理与方块容器被打开后关联的回调。
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在方块容器被打开后调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 方块容器被打开后调用的回调。
     * @param options - 方块容器访问事件的可选选项。
     * @returns 返回一个函数，用于注销此回调。
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在方块容器被打开后调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}