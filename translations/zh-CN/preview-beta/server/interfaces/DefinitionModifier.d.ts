/**
 * 包含一组对实体组件定义状态的更新。
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * 获取通过此定义修改将添加的组件组列表。
     *
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * 通过此定义修改将移除的组件组列表。
     *
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * 通过此更新将触发的实体定义事件列表。
     *
     */
    triggers: Trigger[];
}