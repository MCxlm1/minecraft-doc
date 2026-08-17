/**
 * 包含对实体组件定义状态的一组更新。
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * 检索将通过此定义修改添加的组件组列表。
     *
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * 将通过此定义修改移除的组件组列表。
     *
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * 将通过此更新触发的实体定义事件列表。
     *
     */
    triggers: Trigger[];
}