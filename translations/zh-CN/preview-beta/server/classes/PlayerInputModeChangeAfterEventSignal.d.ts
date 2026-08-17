/**
 * 管理与玩家输入模式更改相关的回调。
 */
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家输入模式更改后调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回该回调函数的引用，可用于后续移除。
     */
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家输入模式更改后调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}