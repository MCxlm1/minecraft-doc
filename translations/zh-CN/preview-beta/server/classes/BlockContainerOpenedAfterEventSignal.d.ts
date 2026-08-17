/**
 * 管理回调，这些回调在方块
 * 容器被打开时触发。
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * 添加一个回调，当方块容器被打开时该回调会被调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选。用于过滤方块容器访问事件的选项。
     * @returns 返回传入的回调函数，以便后续取消订阅。
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * 移除一个回调，使该回调不再在方块容器被打开时被调用。
     *
     * @param callback - 要移除的回调函数。
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}