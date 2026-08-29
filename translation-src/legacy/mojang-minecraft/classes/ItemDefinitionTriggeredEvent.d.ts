/**
 * Contains information related to a custom item having a data
 * definition change being triggered.
 */
export class ItemDefinitionTriggeredEvent {
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly "eventName": string;
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
