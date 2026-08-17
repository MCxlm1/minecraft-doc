/**
 * 包含与世界中加载的实体相关的数据。
 * 当未加载的区块被重新加载，或实体改变维度时，可能会发生这种情况。
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