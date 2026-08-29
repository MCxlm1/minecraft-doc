/**
 * Represents a fluid container block that currently contains
 * snow.
 */
export class BlockSnowContainerComponent extends BlockComponent {
    /**
     * Relative level of snow within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    "fillLevel": number;
    /**
     * Source location of the block.
     */
    readonly "location": BlockLocation;
    static readonly "id" = "snowContainer";
    protected constructor();
}
