/**
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
export class EnchantmentList implements Iterable<Enchantment> {
    /**
     * The item slot/type that this collection is applied to.
     */
    readonly "slot": number;
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * @remarks
     * Attempts to add the enchantment to this collection. Returns
     * true if successful.
     * @param enchantment
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns whether or not the provided EnchantmentInstance can
     * be added to this collection.
     * @param enchantment
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    constructor(enchantmentSlot: number);
    /**
     * @remarks
     * Returns an enchantment associated with a type.
     * @param enchantmentType
     */
    getEnchantment(enchantmentType: EnchantmentType): Enchantment;
    /**
     * @remarks
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     * @param enchantmentType
     */
    hasEnchantment(enchantmentType: EnchantmentType): number;
    next(): IteratorResult<Enchantment>;
    /**
     * @remarks
     * Removes an EnchantmentInstance with type from this
     * collection if present.
     * @param enchantmentType
     */
    removeEnchantment(enchantmentType: EnchantmentType): void;
}
