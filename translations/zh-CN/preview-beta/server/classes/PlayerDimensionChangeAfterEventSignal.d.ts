/**
 * 管理与玩家维度变更成功相关的回调。
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅指定回调，以在玩家维度变更后事件发生时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要订阅的回调函数。
     * @returns 被订阅的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除指定回调，使其不再在玩家维度变更后事件中调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}