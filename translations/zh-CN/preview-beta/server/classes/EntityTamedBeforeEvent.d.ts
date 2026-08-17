/**
 * @beta
 * 包含关于实体被驯服前事件的信息。
 */
export class EntityTamedBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 true 时将取消事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在被驯服的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 正在尝试驯服实体的实体。
     *
     */
    readonly tamingEntity: Entity;
}