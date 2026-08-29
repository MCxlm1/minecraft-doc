/**
 * Represents the inventory of a {@link mojang-minecraft.Player} in
 * the world.
 */
export class PlayerInventoryComponentContainer extends InventoryComponentContainer {
    /**
     * Contains a count of the slots in the container that are
     * empty.
     * @throws This property can throw when used.
     */
    readonly "emptySlotsCount": number;
    /**
     * Returns the size capacity of the inventory container on this
     * block.
     * @throws This property can throw when used.
     */
    readonly "size": number;
    /**
     * @remarks
     * Adds an item to the specified container. Item will be placed
     * in the first available empty slot. (use .setItem if you wish
     * to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
    protected constructor();
}
