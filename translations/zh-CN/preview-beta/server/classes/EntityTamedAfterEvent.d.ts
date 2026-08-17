/**
 * @beta
 * 包含与被驯服实体相关的数据。
 */
export class EntityTamedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly tamingEntity: Entity;
}