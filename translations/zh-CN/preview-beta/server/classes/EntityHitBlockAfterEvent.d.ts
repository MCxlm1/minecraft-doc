```typescript
/**
 * 包含与实体撞击方块相关的信息。
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被撞击方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 发起攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被攻击撞击的方块。
     *
     */
    readonly hitBlock: Block;
    /**
     * @remarks
     * 被攻击撞击的方块置换。
     *
     */
    readonly hitBlockPermutation: BlockPermutation;
}
```