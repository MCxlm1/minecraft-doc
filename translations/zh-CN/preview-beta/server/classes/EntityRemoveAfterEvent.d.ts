/**
 * 实体从世界中移除时发生的事件数据
 * 从世界（例如，实体被卸载是因为
 * 它距离玩家过远。）
 */
export class EntityRemoveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被移除实体的ID。
     *
     */
    readonly removedEntityId: string;
    /**
     * @remarks
     * 被移除实体的类型标识符 - 例如
     * 'minecraft:skeleton'。
     *
     */
    readonly typeId: string;
}