/**
 * 包含与一个实体击中（近战攻击）另一个实体相关的信息。
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 进行击打/近战攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被该攻击击中的实体。
     *
     */
    readonly hitEntity: Entity;
}