/**
 * 管理在玩家选中的快捷栏槽位更改后
 * 连接的回调。
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家选中的快捷栏槽位
     * 更改后被调用。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     * @param callback
     * 事件触发时要调用的函数回调。
     * @param options
     * 事件订阅的附加筛选选项。
     * @returns
     * 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在玩家选中的快捷栏槽位
     * 更改后不再被调用。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}