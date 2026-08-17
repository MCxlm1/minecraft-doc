/**
 * 管理玩家与方块交互后连接的回调。
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家与方块交互后被调用。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与方块交互后调用的回调。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}