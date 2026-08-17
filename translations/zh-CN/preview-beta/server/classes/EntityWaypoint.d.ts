/**
 * 跟踪实体位置的路径点。该路径点
 * 会在实体移动时自动更新，并在实体被移除时失效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWaypoint extends Waypoint {
    /**
     * @remarks
     * 此路径点正在跟踪的实体。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 控制路径点何时显示（基于实体状态，如潜行、隐身、
     * 死亡）的可见性规则。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entityRules: EntityVisibilityRules;
    /**
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