/**
 * 提供用于 {@link
 * StructureManager.placeJigsawStructure} 的额外选项。
 */
export interface JigsawStructurePlaceOptions {
    /**
     * @remarks
     * 是否应忽略拼图结构定义中定义的起始高度，并使用指定的 y 坐标进行覆盖。默认为 false。
     *
     */
    ignoreStartHeight?: boolean;
    /**
     * @remarks
     * 实体是否应包含在结构中。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否保留拼图方块。默认为 false。
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