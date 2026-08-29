/**
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteChargeEvent {
    /**
     * Returns the item stack that has completed charging.
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
