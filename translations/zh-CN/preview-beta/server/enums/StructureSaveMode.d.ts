/**
 * 指定结构的保存方式。
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * 结构将被临时保存到内存中。该结构将一直保留，直到世界关闭。
     *
     */
    Memory = 'Memory',
    /**
     * @remarks
     * 结构将保存到世界文件中，并在世界加载之间持久保留。可以通过 @minecraft/server.StructureManager.delete 从世界中移除已保存的结构。
     *
     */
    World = 'World',
}