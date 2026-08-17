/**
 * 当实体正在从世界中移除时发生的事件数据
 * （例如，实体因不在玩家附近而被卸载。）
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 对正在被移除的实体的引用。
     *
     */
    readonly removedEntity: Entity;
}