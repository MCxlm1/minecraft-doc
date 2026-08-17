```
/**
 * 管理与玩家离开世界相关的回调。
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家离开世界时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当玩家离开世界时调用的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家离开世界时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}
```