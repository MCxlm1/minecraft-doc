/**
 * 指定结构应该如何保存。
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * 该结构将临时保存到内存中。
     * 该结构将持续存在，直到世界关闭。
     *
     */
    Memory = 'Memory',
    /**
     * @remarks
     * 该结构将保存到世界文件中，并在世界加载之间持续存在。
     * 已保存的结构可通过 @minecraft/server.StructureManager.delete 从世界中移除。
     *
     */
    World = 'World',
}