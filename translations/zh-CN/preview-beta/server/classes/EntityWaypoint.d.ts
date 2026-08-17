/**
 * Waypoint that tracks an entity's position. The waypoint
 * automatically updates as the entity moves and becomes
 * invalid when the entity is removed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWaypoint extends Waypoint {
    /**
     * @remarks
     * 此路径点追踪的实体。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 控制路径点何时根据实体状态（如潜行、隐身、死亡）显示的可见性规则。
     *
     * @throws 此属性在使用时可能抛出异常。
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