/**
 * Contains information related to changes to a piston
 * expanding or retracting.
 */
export class PistonActivateEvent extends BlockEvent {
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
     * True if the piston is the process of expanding.
     */
    readonly "isExpanding": boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly "piston": BlockPistonComponent;
    protected constructor();
}
