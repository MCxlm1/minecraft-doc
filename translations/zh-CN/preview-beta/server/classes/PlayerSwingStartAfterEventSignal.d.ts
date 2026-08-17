/**
 * 管理与玩家开始挥动其手臂（例如攻击、使用物品、交互）时连接的回调。
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家开始挥动其手臂（例如攻击、使用物品、交互）时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当玩家开始挥动其手臂时要执行的回调函数。
     * @param options - （可选）用于配置事件监听的附加选项。
     * @returns 传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家开始挥动其手臂（例如攻击、使用物品、交互）时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}