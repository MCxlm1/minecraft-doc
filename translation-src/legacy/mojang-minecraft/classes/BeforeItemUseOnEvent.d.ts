/**
 * Contains information related to an item being used on a
 * block.
 */
export class BeforeItemUseOnEvent {
    /**
     * The face of the block that an item is being used on.
     */
    readonly "blockFace": Direction;
    /**
     * Location of the block being impacted.
     */
    readonly "blockLocation": BlockLocation;
    /**
     * If set to true, this will cancel the item use behavior.
     */
    "cancel": boolean;
    /**
     * X coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly "faceLocationX": number;
    /**
     * Y coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly "faceLocationY": number;
    /**
     * The impacted item stack that is being used on a block.
     */
    "item": ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly "source": Entity;
    protected constructor();
}
