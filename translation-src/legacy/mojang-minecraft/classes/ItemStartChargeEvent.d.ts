/**
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartChargeEvent {
    /**
     * The impacted item stack that is starting to be charged.
     */
    readonly "itemStack": ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly "source": Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly "useDuration": number;
    protected constructor();
}
