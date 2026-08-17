```typescript
/**
 * 战利品物品函数，用于修改掉落物品的数据值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 该函数随机选择要分配的数据值的范围。包含最小值和最大值。
     *
     */
    readonly data: minecraftcommon.NumberRange;
}
```