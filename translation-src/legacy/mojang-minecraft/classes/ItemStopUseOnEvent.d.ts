/**
 * Contains information related to an item that has stopped
 * being used on a block.
 */
export class ItemStopUseOnEvent {
    /**
     * Location of the block being impacted.
     */
    readonly "blockLocation": BlockLocation;
    /**
     * The impacted item stack that is being used on a block.
     */
    "item": ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly "source": Entity;
    protected constructor();
}
