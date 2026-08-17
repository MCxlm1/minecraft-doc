/**
 * 为{@link
 * StructureManager.createFromWorld}提供额外选项。
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * 是否在结构中包含方块。默认为true。
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 是否在结构中包含实体。默认为true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 结构应如何保存。默认为StructureSaveMode.World。
     *
     */
    saveMode?: StructureSaveMode;
}