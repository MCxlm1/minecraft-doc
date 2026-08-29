/**
 * Contains information related to an item being used.
 */
export class ItemUseEvent {
    /**
     * The impacted item stack that is being used.
     */
    "item": ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly "source": Entity;
    protected constructor();
}
