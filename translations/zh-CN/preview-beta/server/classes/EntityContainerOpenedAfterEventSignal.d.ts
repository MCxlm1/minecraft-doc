/**
 * 管理当实体容器被打开时
 * 所连接的回调。
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调会在实体容器
     * 被打开时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体容器被打开时要调用的回调函数。
     * @param options - 实体容器访问事件的选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调会在实体容器
     * 被打开时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}