/**
 * 包含与在世界中加载的实体相关的数据。
 * 这可能在重新加载未加载的区块时发生，或者
 * 在实体改变维度时发生。
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已加载的实体。
     *
     * 此属性无法在受限执行模式下编辑。
     *
     */
    entity: Entity;
}