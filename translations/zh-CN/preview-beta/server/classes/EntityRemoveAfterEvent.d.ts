/**
 * 当实体被从世界中移除时发生的事件的数据（例如，实体因远离玩家而被卸载）。
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
     * 被移除实体的类型标识符 - 例如，'minecraft:skeleton'。
     *
     */
    readonly typeId: string;
}