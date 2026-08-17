/**
 * 追踪玩家位置的路点。通过额外的玩家特定可见性规则（如隐藏状态和旁观模式）扩展了 {@link
 * EntityWaypoint}。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @remarks
     * 控制根据玩家状态（例如：隐藏、旁观模式、另一个旁观者）显示路点的 {@link PlayerVisibilityRules}。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @param player 玩家。
     * @param textureSelector 路点纹理选择器。
     * @param playerRules 玩家可见性规则。
     * @param color 颜色（可选）。
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