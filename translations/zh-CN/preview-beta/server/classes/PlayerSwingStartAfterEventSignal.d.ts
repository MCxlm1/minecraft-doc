/**
 * 管理当玩家开始挥动手臂（例如攻击、使用物品、交互）时触发的回调。
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家开始挥动手臂（例如攻击、使用物品、交互）时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的事件选项。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家开始挥动手臂（例如攻击、使用物品、交互）时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}