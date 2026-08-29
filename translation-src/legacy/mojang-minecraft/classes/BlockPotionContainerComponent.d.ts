/**
 * Represents a fluid container block that currently contains a
 * potion.
 */
export class BlockPotionContainerComponent extends BlockComponent {
    /**
     * Relative level of potion liquid within this block. Valid
     * values are between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    "fillLevel": number;
    /**
     * Source location of the block.
     */
    readonly "location": BlockLocation;
    static readonly "id" = "potionContainer";
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     * @param item
     * Potion to use as the type of potion for this potion
     * container.
     * @throws This function can throw errors.
     */
    setPotionType(item: ItemStack): void;
    protected constructor();
}
