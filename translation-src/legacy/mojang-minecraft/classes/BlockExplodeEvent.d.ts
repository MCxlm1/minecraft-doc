/**
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
export class BlockExplodeEvent extends BlockEvent {
    /**
     * Block impacted by this explosion event.
     */
    readonly "block": Block;
    /**
     * Dimension that contains the block that is the subject of
     * this explosion event.
     */
    readonly "dimension": Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly "source": Entity;
    protected constructor();
}
