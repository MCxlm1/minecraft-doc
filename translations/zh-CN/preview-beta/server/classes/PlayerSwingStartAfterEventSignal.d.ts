/**
 * 管理在玩家开始挥动手臂时（例如攻击、使用物品或交互）触发的回调。
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家开始挥动手臂时（例如攻击、使用物品或交互）将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 当玩家开始挥动手臂时将调用的回调函数。
     * @param options
     * （可选）事件回调的选项。
     * @returns
     * 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在玩家开始挥动手臂时（例如攻击、使用物品或交互）不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}