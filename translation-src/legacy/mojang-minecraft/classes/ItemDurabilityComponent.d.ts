/**
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 */
export class ItemDurabilityComponent {
    /**
     * Returns the current damage level of this particular item.
     */
    "damage": number;
    /**
     * A range of numbers that describes the chance of the item
     * losing durability.
     * @throws This property can throw when used.
     */
    readonly "damageRange": NumberRange;
    /**
     * Represents the amount of damage that this item can take
     * before breaking.
     * @throws This property can throw when used.
     */
    readonly "maxDurability": number;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:durability'.
     */
    static readonly "id" = "minecraft:durability";
    /**
     * @remarks
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking level.
     * @param unbreaking
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be greater than
     * 0.
     * @throws This function can throw errors.
     */
    getDamageChance(unbreaking?: number): number;
    protected constructor();
}
