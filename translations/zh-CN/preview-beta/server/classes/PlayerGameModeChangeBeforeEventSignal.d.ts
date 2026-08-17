```typescript
/**
 * 管理在玩家游戏模式更改之前连接的回调。
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家游戏模式更改之前被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下被调用。
     * @returns
     * 将在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家游戏模式更改之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}
```