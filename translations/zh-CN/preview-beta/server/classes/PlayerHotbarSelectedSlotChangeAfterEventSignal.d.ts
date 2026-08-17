/**
 * 管理玩家选中的快捷栏槽位发生变化后
 * 所关联的回调。
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家选中的
     * 快捷栏槽位发生变化后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 当此事件触发时被调用的函数回调。
     * @param options
     * 事件订阅的附加过滤选项。
     * @returns
     * 返回一个函数，用于取消对此事件的订阅。
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家选中的
     * 快捷栏槽位发生变化后被调用。
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