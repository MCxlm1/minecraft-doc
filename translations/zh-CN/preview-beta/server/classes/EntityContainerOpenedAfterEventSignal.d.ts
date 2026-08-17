/**
 * 管理与实体容器打开时相关的回调。
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体容器打开时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 当实体容器打开时会被调用的回调函数。
     * @param options 用于配置实体容器访问事件的选项。
     * @returns 返回与传入的回调函数相同的函数，可用于通过 `unsubscribe` 移除该回调。
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体容器打开时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}