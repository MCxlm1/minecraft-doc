/**
 * 管理与玩家开始挥动手臂（例如：攻击、使用物品、交互）时相关联的回调。
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家开始挥动手臂时被调用（例如：攻击、使用物品、交互）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家开始挥动手臂时被调用的回调（例如：攻击、使用物品、交互）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}