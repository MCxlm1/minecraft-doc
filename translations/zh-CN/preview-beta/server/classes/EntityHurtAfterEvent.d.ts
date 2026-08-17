```typescript
/**
 * 包含与实体受伤相关的信息。
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 描述造成的伤害数值。
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * 可能造成此伤害的实体来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 受到伤害的实体。
     *
     */
    readonly hurtEntity: Entity;
}
```