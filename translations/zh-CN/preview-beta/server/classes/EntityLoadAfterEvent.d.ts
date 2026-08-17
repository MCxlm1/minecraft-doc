/**
 * 包含世界内加载实体的相关数据。
 * 这可能在未加载区块重新加载时，或实体维度改变时发生。
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已加载的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entity: Entity;
}