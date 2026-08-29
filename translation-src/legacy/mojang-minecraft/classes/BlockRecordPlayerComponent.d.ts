/**
 * Represents a block that can play a record.
 */
export class BlockRecordPlayerComponent extends BlockComponent {
    readonly "location": BlockLocation;
    static readonly "id" = "recordPlayer";
    /**
     * @remarks
     * Clears the currently playing record of this record-playing
     * block.
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     * @param recordItemType
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType): void;
    protected constructor();
}
