/**
 * Contains more information for events where a block is hit.
 */
export class BlockHitInformation {
    /**
     * Block that was hit.
     */
    readonly "block": Block;
    /**
     * Face of the block that was hit.
     */
    readonly "face": Direction;
    /**
     * X coordinate on the face that was hit.
     */
    readonly "faceLocationX": number;
    /**
     * Y coordinate on the face that was hit.
     */
    readonly "faceLocationY": number;
    protected constructor();
}
