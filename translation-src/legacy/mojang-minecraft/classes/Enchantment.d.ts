/**
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export class Enchantment {
    /**
     * The level of this enchantment instance.
     */
    "level": number;
    /**
     * The enchantment type of this instance.
     */
    readonly "type": EnchantmentType;
    constructor(enchantmentType: EnchantmentType, level?: number);
}
