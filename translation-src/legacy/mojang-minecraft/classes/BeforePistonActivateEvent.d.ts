/**
 * Contains information related to changes before a piston
 * expands or retracts.
 */
export class BeforePistonActivateEvent extends BlockEvent {
    /**
     * Block impacted by this event.
     */
    readonly "block": Block;
    /**
     * If this is set to true within an event handler, the piston
     * activation is canceled.
     */
    "cancel": boolean;
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
