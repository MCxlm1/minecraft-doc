/**
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    /**
     * Block impacted by this event.
     */
    readonly "block": Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly "dimension": Dimension;
    protected constructor();
}
