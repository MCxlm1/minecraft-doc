export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param weight
     * Bounds: [1, 100]
     * @throws This function can throw errors.
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeBlockAt(index: number): void;
}
