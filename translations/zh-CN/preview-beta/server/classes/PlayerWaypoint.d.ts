/**
 * 追踪玩家位置的路径点。扩展 {@link
 * EntityWaypoint}，并添加了玩家特定的可见性规则，例如隐藏状态和旁观者模式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @remarks
     * 控制路径点何时基于玩家状态（例如隐藏、旁观者模式、旁观者查看另一位旁观者）显示的 {@link PlayerVisibilityRules}。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @param player 此路径点所追踪的玩家。
     * @param textureSelector 路径点的纹理选择器。
     * @param playerRules 玩家的可见性规则，用于控制路径点的显示。
     * @param color 可选的路径点 RGB 颜色。
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