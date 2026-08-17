```typescript
/**
 * 战利品物品函数，用于随机修改掉落物品的数据值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择数据值并赋值的范围。包含最小值和最大值。
     *
     */
    readonly values: minecraftcommon.NumberRange;
}
```