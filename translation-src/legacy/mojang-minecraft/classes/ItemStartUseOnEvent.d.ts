/**
 * Contains information related to an item being used on a
 * block.
 */
export class ItemStartUseOnEvent {
    /**
     * The face of the block that an item is being used on.
     */
    readonly "blockFace": Direction;
    /**
     * Location of the block being impacted.
     */
    readonly "blockLocation": BlockLocation;
    /**
     * Location of the resulting build block position. Useful for
     * determining where a block was placed.
     */
    readonly "buildBlockLocation": BlockLocation;
    /**
     * The impacted item stack that is starting to be used.
     */
    "item": ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly "source": Entity;
    protected constructor();
}
