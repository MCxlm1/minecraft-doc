/**
 * 为 {@link StructureManager.createFromWorld} 提供额外的选项。
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * 结构（Structure）中是否包含方块。默认为 true。
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 结构中是否包含实体。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 结构的保存方式。默认为 StructureSaveMode.World。
     *
     */
    saveMode?: StructureSaveMode;
}