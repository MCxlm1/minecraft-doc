/**
 * @beta
 * 包含与实体被驯服相关的数据。
 */
export class EntityTamedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly tamingEntity: Entity;
}