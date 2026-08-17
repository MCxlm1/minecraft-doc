/**
 * 管理与 world.gameRules 属性更改时连接的回调。
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当 world.gameRules 属性更改时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回传递给 subscribe 的回调函数本身。
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在 world.gameRules 属性更改时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}