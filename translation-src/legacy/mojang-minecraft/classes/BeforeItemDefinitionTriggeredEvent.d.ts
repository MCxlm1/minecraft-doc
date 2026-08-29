/**
 * Contains information related to a triggering of a custom
 * item definition change.
 */
export class BeforeItemDefinitionTriggeredEvent {
    /**
     * If set to true, will cancel the application of this item
     * definition change.
     */
    "cancel": boolean;
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
