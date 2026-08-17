/**
 * 当实体正在从世界中移除时（例如，实体因距离玩家过远而被卸载）所触发事件的数据。
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 指向正在被移除的实体。
     *
     */
    readonly removedEntity: Entity;
}