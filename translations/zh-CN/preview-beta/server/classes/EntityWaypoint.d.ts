/**
 * 跟踪实体位置的路径点。该路径点会随着实体的移动自动更新，并在实体被移除时失效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWaypoint extends Waypoint {
    /**
     * @remarks
     * 此路径点正在跟踪的实体。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 控制路径点何时显示的可见性规则，具体基于实体的状态（例如潜行、隐身、死亡）。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entityRules: EntityVisibilityRules;
    /**
     * @param entity 要跟踪的实体。
     * @param textureSelector 用于选择路径点纹理的纹理选择器。
     * @param entityRules 控制路径点基于实体状态显示的可见性规则。
     * @param color 路径点的可选颜色。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        entity: Entity,
        textureSelector: WaypointTextureSelector,
        entityRules: EntityVisibilityRules,
        color?: RGB,
    );
}