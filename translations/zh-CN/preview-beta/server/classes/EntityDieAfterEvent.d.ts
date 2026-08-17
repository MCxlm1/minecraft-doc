/**
 * 包含游戏中实体死亡相关的数据。
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果已指定，则提供有关导致此实体死亡的伤害来源的更多信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 现已死亡的实体对象。
     *
     */
    readonly deadEntity: Entity;
}