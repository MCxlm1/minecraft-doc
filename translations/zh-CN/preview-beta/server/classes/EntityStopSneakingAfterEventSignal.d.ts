/**
 * @beta
 * 管理当实体停止潜行时触发的回调。
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当实体停止潜行时会被调用的回调函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 当实体停止潜行时要调用的回调函数。
     * @param options
     * 可选的事件监听选项。
     * @returns
     * 返回传入的回调函数本身，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体停止潜行时会被调用的回调函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 需要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}