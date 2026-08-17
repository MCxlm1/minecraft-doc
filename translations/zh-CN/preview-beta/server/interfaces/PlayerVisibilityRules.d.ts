/**
 * 控制路径点何时根据玩家特定状态可见。扩展了{@link EntityVisibilityRules}，增加了针对玩家专属状态（如隐藏模式和旁观者模式）的额外规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪的玩家处于隐藏状态时是否显示路径点。如果未定义，默认为true。
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * 控制当被追踪的玩家处于旁观者模式时是否显示路径点。如果未定义，默认为true。
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * 控制当旁观者查看另一个旁观者玩家时是否显示路径点。如果未定义，默认为true。
     *
     */
    showSpectatorToSpectator?: boolean;
}