/**
 * Represents a fluid container block that currently contains
 * water.
 */
export class BlockWaterContainerComponent extends BlockComponent {
    /**
     * Represents a color facet of the water.
     */
    "customColor": Color;
    /**
     * Relative level of water within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    "fillLevel": number;
    /**
     * Source location of the block.
     */
    readonly "location": BlockLocation;
    static readonly "id" = "waterContainer";
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     * @param itemType
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    protected constructor();
}
