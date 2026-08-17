/**
 * @beta
 * 包含关于实体被驯服
 * 之前的事件的信息。
 */
export class EntityTamedBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 true 时，将取消事件。
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
     * 正在尝试驯服该实体的实体。
     *
     */
    readonly tamingEntity: Entity;
}