/**
 * 包含与触发数据驱动实体事件相关的信息，例如小鸡上的
 * minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 事件触发所在的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 被触发数据驱动事件的名称。
     *
     */
    readonly eventId: string;
    /**
     * @remarks
     * 一个可更新的组件状态修改列表，这些修改是此触发事件的效果。
     * @returns 一个可更新的组件状态修改列表，这些修改是此触发事件的效果。
     *
     */
    getModifiers(): DefinitionModifier[];
}