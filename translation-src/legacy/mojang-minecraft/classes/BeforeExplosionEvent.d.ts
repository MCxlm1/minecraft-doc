/**
 * Contains information regarding an explosion that has
 * happened.
 */
export class BeforeExplosionEvent {
    /**
     * If set to true, cancels the explosion event.
     */
    "cancel": boolean;
    /**
     * Dimension where the explosion has occurred.
     */
    readonly "dimension": Dimension;
    /**
     * A collection of blocks impacted by this explosion event.
     * Note that this property can be updated to change the set of
     * blocks impacted.
     */
    "impactedBlocks": BlockLocation[];
    /**
     * Optional source of the explosion.
     */
    readonly "source": Entity;
    protected constructor();
}
