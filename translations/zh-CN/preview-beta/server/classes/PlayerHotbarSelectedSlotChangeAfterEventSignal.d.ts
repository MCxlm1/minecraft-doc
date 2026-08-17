```typescript
/**
 * 管理在玩家选中的快捷栏槽位改变后连接的回调。
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家选中的快捷栏槽位改变后被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 事件触发时调用的回调函数。
     * @param options
     * 用于事件订阅的额外过滤选项。
     * @returns
     * 返回订阅时使用的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家选中的快捷栏槽位改变后被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}
```