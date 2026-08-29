/**
 * Contains the combination of type {@link mojang-minecraft.BlockType}
 * and properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific
 * {@link mojang-minecraft.Block}). This type was introduced as of
 * version 1.17.10.21.
 */
export class BlockPermutation {
    /**
     * The {@link mojang-minecraft.BlockType} that the permutation has.
     */
    readonly "type": BlockType;
    /**
     * @remarks
     * Creates a copy of this permutation.
     * @returns
     * A copy of the permutation.
     */
    clone(): BlockPermutation;
    /**
     * @returns
     * Returns the list of all of the properties that the
     * permutation has.
     */
    getAllProperties(): IBlockProperty[];
    /**
     * @remarks
     * Gets a property for the permutation.
     * @param propertyName
     * @returns
     * Returns the property if the permutation has it, else `null`.
     * @throws This function can throw errors.
     */
    getProperty(propertyName: string): IBlockProperty;
    /**
     * @remarks
     * Creates a copy of the permutation.
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation has a specific tag.
     * @param tag
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
     * @example check_block_tags.js
     * ```typescript
     *        import { world, BlockLocation } from "mojang-minecraft";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
     *        const blockPerm = block.getPermutation();
     *
     *        console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     *        console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
    protected constructor();
}
