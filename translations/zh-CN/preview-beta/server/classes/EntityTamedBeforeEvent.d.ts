/**
 * @beta
 * 包含有关实体被驯服之前的事件信息。
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
     * 试图驯服该实体的实体。
     *
     */
    readonly tamingEntity: Entity;
}