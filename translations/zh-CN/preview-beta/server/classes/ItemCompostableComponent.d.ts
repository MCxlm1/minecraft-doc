```typescript
/**
 * 当存在时，物品可以在堆肥桶方块中被堆肥，如果堆肥几率在 [1 - 100] 范围内。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 这是物品在堆肥桶方块中堆肥并生成堆肥层的百分比几率。注意，
     * 此 API 也会返回原版中可堆肥但未使用可堆肥物品组件的物品的堆肥几率。
     *
     * @throws
     * 如果值超出 [1 - 100] 范围，则抛出异常。
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}
```