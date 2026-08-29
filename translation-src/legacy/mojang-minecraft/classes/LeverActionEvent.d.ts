/**
 * Contains information related to changes to a lever
 * activating or deactivating.
 */
export class LeverActionEvent extends BlockEvent {
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
     * True if the lever is activated (that is, transmitting
     * power).
     */
    readonly "isPowered": boolean;
    /**
     * Optional player that triggered the lever activation.
     */
    readonly "player": Player;
    protected constructor();
}
