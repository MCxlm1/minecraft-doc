/**
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopChargeEvent {
    /**
     * The impacted item stack that is stopping being charged.
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
