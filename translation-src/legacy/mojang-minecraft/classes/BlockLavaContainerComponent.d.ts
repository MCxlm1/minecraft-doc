/**
 * Represents a fluid container block that currently contains
 * lava.
 */
export class BlockLavaContainerComponent extends BlockComponent {
    /**
     * Relative level of lava within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    "fillLevel": number;
    /**
     * Source location of the block.
     */
    readonly "location": BlockLocation;
    static readonly "id" = "lavaContainer";
    protected constructor();
}
