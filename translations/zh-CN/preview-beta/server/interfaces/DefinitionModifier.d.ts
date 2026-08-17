/**
 * 包含一组对实体组件定义状态的更新。
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * 获取将通过此定义修改添加的组件组列表。
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
     * 将在此更新中触发的实体定义事件列表。
     *
     */
    triggers: Trigger[];
}