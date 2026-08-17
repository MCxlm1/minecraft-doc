/**
 * 指定如何保存结构。
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * 结构将临时保存到内存中。该结构将一直保留，直到世界关闭。
     *
     */
    Memory = 'Memory',
    /**
     * @remarks
     * 该结构将保存到世界文件中，并在世界加载之间持续存在。已保存的结构可以通过@minecraft/server.StructureManager.delete从世界中移除。
     *
     */
    World = 'World',
}