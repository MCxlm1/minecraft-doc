/**
 * 控制航点基于玩家特定状态何时可见。
 * 通过附加仅适用于玩家的状态规则（如隐藏模式和旁观模式）扩展 {@link EntityVisibilityRules}。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪的玩家处于隐藏状态时是否显示航点。若未定义，默认为 true。
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * 控制当被追踪的玩家处于旁观模式时是否显示航点。若未定义，默认为 true。
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * 控制当旁观者查看另一名旁观者玩家时是否显示航点。若未定义，默认为 true。
     *
     */
    showSpectatorToSpectator?: boolean;
}