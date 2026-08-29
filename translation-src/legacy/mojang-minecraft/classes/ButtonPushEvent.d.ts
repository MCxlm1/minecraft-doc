/**
 * Contains information related to changes to a button push.
 */
export class ButtonPushEvent extends BlockEvent {
    /**
     * Block impacted by this event.
     */
    readonly "block": Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly "dimension": Dimension;
    /**
     * Optional source that triggered the button push.
     */
    readonly "source": Entity;
    protected constructor();
}
