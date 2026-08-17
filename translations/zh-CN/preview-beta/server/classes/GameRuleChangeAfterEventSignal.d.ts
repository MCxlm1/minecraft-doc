/**
 * 管理与 world.gameRules 属性更改时连接的回调。
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在 world.gameRules 属性更改时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 传入的回调函数。
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在 world.gameRules 属性更改时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}