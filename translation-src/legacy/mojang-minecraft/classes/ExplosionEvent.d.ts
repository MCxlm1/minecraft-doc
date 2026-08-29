/**
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionEvent {
    /**
     * Dimension where the explosion has occurred.
     */
    readonly "dimension": Dimension;
    /**
     * A collection of blocks impacted by this explosion event.
     */
    readonly "impactedBlocks": BlockLocation[];
    /**
     * Optional source of the explosion.
     */
    readonly "source": Entity;
    protected constructor();
}
