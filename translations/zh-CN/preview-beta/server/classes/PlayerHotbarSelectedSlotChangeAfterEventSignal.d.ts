/**
 * 管理当玩家选择的热栏槽位发生变化后连接的回调。
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家选择的热栏槽位发生变化后将会调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 事件触发时调用的函数回调。
     * @param options
     * 事件订阅的附加过滤选项。
     * @returns
     * 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家选择的热栏槽位发生变化后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}