/**
 * 为 {@link
 * StructureManager.placeJigsawStructure} 提供附加选项。
 */
export interface JigsawStructurePlaceOptions {
    /**
     * @remarks
     * 是否应忽略 jigsaw 结构定义中定义的起始高度，并使用指定的 y 坐标覆盖。默认为 false。
     *
     */
    ignoreStartHeight?: boolean;
    /**
     * @remarks
     * 结构中是否包含实体。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否保留 jigsaw 方块。默认为 false。
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理与现有液体重叠的可含水方块。默认为 `ApplyWaterlogging`。
     *
     */
    liquidSettings?: LiquidSettings;
}