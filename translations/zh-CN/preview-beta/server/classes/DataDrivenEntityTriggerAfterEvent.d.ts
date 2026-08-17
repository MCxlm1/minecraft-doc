/**
 * 包含关于触发数据驱动实体事件的信息——例如，鸡身上的 minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 事件所触发的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 所触发数据驱动事件的名称。
     *
     */
    readonly eventId: string;
    /**
     * @remarks
     * 一个可更新的组件状态修改列表，这些修改是此触发事件的效果。
     *
     */
    getModifiers(): DefinitionModifier[];
}