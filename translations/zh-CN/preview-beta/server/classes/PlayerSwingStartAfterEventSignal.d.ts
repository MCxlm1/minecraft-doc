/**
 * 管理当玩家开始挥动手臂（例如攻击、使用物品、交互）时触发的回调。
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家开始挥动手臂（例如攻击、使用物品、交互）时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 将在事件触发时调用的回调函数。
     * @param options - （可选）配置事件订阅的选项。
     * @returns 传入的回调函数，可用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * 移除当玩家开始挥动手臂（例如攻击、使用物品、交互）时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}