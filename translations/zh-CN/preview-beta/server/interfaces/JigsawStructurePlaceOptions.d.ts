/**
 * 提供用于 {@link
 * StructureManager.placeJigsawStructure} 的附加选项。
 */
export interface JigsawStructurePlaceOptions {
    /**
     * @remarks
     * 是否应忽略拼图结构定义中定义的起始高度，并使用指定的 y 坐标覆盖。默认为 false。
     *
     */
    ignoreStartHeight?: boolean;
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否应保留拼图方块。默认为 false。
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理可与液体重叠的可含水方块。默认为 `ApplyWaterlogging`。
     *
     */
    liquidSettings?: LiquidSettings;
}