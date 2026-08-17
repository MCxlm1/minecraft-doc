/**
 * 包含有关一个实体击中（近战攻击）另一个实体的信息。
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 发出击中/近战攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被攻击击中的实体。
     *
     */
    readonly hitEntity: Entity;
}