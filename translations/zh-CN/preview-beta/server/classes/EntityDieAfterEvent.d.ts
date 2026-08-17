/**
 * 包含游戏中实体死亡的相关数据。
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * 若指定，则提供有关导致该实体死亡的伤害来源的更多信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 现在已死亡的实体对象。
     *
     */
    readonly deadEntity: Entity;
}