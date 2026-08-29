/**
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    /**
     * The name of the enchantment type.
     */
    readonly "id": string;
    /**
     * The maximum level this type of enchantment can have.
     */
    readonly "maxLevel": number;
    protected constructor();
}
