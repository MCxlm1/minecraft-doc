/**
 * 跟踪玩家位置的路点。扩展了 {@link EntityWaypoint}，增加了玩家特定的可见性规则，例如隐藏状态和旁观者模式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @remarks
     * 控制路点何时显示的 {@link PlayerVisibilityRules}，基于玩家状态（例如隐藏、旁观者模式、旁观者观看另一个旁观者）。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        player: Player,
        textureSelector: WaypointTextureSelector,
        playerRules: PlayerVisibilityRules,
        color?: RGB,
    );
}