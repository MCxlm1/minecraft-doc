/**
 * Contains information regarding an event where a player
 * places a block.
 */
export class BlockPlaceEvent extends BlockEvent {
    /**
     * Block placed in this event.
     */
    readonly "block": Block;
    /**
     * Dimension that contains the block that has been placed in
     * this event.
     */
    readonly "dimension": Dimension;
    /**
     * Player that placed the block for this event.
     */
    readonly "player": Player;
    protected constructor();
}
