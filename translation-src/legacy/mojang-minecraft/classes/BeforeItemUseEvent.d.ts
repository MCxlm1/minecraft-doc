/**
 * Contains information related to an item being used.
 */
export class BeforeItemUseEvent {
    /**
     * If set to true, this will cancel the item use behavior.
     */
    "cancel": boolean;
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
