/**
 * Contains the state of an integer-based property for a
 * {@link mojang-minecraft.BlockPermutation}.
 */
export class IntBlockProperty extends IBlockProperty {
    /**
     * The name of this property.
     */
    readonly "name": string;
    /**
     * A list of valid values for this particular property.
     */
    readonly "validValues": number[];
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use
     * {@link mojang-minecraft.IntBlockProperty.validValues} to check
     * allowed values.
     */
    "value": number;
    protected constructor();
}
