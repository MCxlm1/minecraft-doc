/**
 * 管理连接到玩家输入的回调函数。
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在玩家执行输入后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，以便与 unsubscribe 一起使用。
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在玩家执行输入后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}