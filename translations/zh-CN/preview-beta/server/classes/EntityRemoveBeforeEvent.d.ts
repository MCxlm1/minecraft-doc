/**
 * 有关实体从世界中移除时发生的事件的数据
 *（例如，实体因距离玩家较远而被卸载）。
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