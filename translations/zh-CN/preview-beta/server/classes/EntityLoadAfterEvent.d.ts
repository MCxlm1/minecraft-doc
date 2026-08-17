/**
 * 包含世界内加载实体的相关数据。这可能在未加载的区块重新加载，或实体改变维度时发生。
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被加载的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entity: Entity;
}