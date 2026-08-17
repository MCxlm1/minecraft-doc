/**
 * @beta
 * 管理当实体停止潜行时
 * 连接的回调。
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体停止潜行时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 当实体停止潜行时要调用的回调。
     * @param options - 可选的用于筛选事件的选项。
     * @returns 返回一个函数，调用该函数可取消订阅此回调。
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体停止潜行时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}