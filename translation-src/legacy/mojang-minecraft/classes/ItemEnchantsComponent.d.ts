/**
 * When present on an item, this item has applied enchantment
 * effects. Note that this component only applies to
 * data-driven items.
 */
export class ItemEnchantsComponent {
    /**
     * Returns a collection of the enchantments applied to this
     * item stack.
     */
    "enchantments": EnchantmentList;
    /**
     * Identifier of this component.
     */
    static readonly "id" = "minecraft:enchantments";
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    protected constructor();
}
