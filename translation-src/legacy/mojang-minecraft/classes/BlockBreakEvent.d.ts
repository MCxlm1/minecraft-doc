/**
 * Contains information regarding an event where a player
 * breaks a block.
 */
export class BlockBreakEvent extends BlockEvent {
    /**
     * Block broken in this event. Note that because this event
     * fires right after a block is broken, the block you will
     * receive will likely be of type 'minecraft:air'. See the
     * .brokenBlockPermutation property for information on this
     * block before it was broken.
     */
    readonly "block": Block;
    /**
     * Returns permutation information about this block before it
     * was broken.
     */
    readonly "brokenBlockPermutation": BlockPermutation;
    /**
     * Dimension that contains the block that has been broken in
     * this event.
     */
    readonly "dimension": Dimension;
    /**
     * Player that broke the block for this event.
     */
    readonly "player": Player;
    protected constructor();
}
