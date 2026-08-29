/**
 * Represents a collection of all of the available item types
 * in Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class Items {
    /**
     * @remarks
     * Returns an item type given an item type identifier.
     * @param itemId
     * Type of the item to return.
     */
    static get(itemId: string): ItemType;
    protected constructor();
}
