/**
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    /**
     * Represents whether this type of block can be waterlogged.
     */
    readonly "canBeWaterlogged": boolean;
    /**
     * Block type name - for example, `minecraft:acacia_stairs`.
     */
    readonly "id": string;
    /**
     * @remarks
     * Creates the default {@link mojang-minecraft.BlockPermutation} for
     * this type which uses the default values for all properties.
     * @returns
     * Returns created permutation.
     * @throws This function can throw errors.
     */
    createDefaultBlockPermutation(): BlockPermutation;
    protected constructor();
}
