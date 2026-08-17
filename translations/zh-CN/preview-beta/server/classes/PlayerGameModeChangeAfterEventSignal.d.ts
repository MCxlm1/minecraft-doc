/**
 * 管理玩家游戏模式更改后触发的回调。
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家游戏模式更改后调用。
     *
     * 此函数无法在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调之前注册用于在玩家游戏模式更改后调用。
     *
     * 此函数无法在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}