/**
 * 控制航点是否根据玩家特定状态可见。扩展 {@link EntityVisibilityRules}，
 * 并添加了针对玩家专属状态的额外规则，例如隐藏模式和旁观者模式。
 */
// @ts-ignore 类继承允许用于原生定义的类
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪的玩家处于隐藏状态时是否显示航点。如果未定义，默认为 true。
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * 控制当被追踪的玩家处于旁观者模式时是否显示航点。如果未定义，默认为 true。
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * 控制当一名旁观者正在查看另一名旁观者玩家时是否显示航点。如果未定义，默认为 true。
     *
     */
    showSpectatorToSpectator?: boolean;
}