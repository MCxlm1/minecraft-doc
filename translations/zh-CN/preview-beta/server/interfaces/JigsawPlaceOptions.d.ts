```typescript
/**
 * 为 {@link
 * StructureManager.placeJigsaw} 提供额外选项。
 */
export interface JigsawPlaceOptions {
    /**
     * @remarks
     * 是否在结构中包含实体。
     * 默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否保留拼图方块。
     * 默认为 false。
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理与现有液体重叠的可含水方块。
     * 默认为 `ApplyWaterlogging`。
     *
     */
    liquidSettings?: LiquidSettings;
}
```