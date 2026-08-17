/**
 * 追踪玩家位置的路点。扩展了 {@link
 * EntityWaypoint}，添加了玩家特定的可见性规则，如隐藏状态和旁观模式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @remarks
     * 控制路点何时基于玩家状态（如隐藏、旁观模式、旁观者观看其他旁观者）显示的 {@link PlayerVisibilityRules}。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @param player 玩家对象。
     * @param textureSelector 路点纹理选择器。
     * @param playerRules 控制路点可见性的玩家规则。
     * @param color 可选的路点颜色。
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