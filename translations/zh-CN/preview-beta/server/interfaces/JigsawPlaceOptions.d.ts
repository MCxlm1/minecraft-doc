/**
 * 为 {@link
 * StructureManager.placeJigsaw} 提供额外的选项。
 */
export interface JigsawPlaceOptions {
    /**
     * @remarks
     * 结构生成时是否应包含实体。
     * 默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否应保留 Jigsaw 方块。
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