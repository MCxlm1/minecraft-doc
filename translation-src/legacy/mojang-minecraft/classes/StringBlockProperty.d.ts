/**
 * Contains the state of a string-based property for a
 * {@link mojang-minecraft.BlockPermutation}.
 */
export class StringBlockProperty extends IBlockProperty {
    /**
     * Name of this property.
     */
    readonly "name": string;
    /**
     * A list of allowed values for this string property.
     */
    readonly "validValues": string[];
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use
     * {@link mojang-minecraft.StringBlockProperty.validValues} to check
     * allowed values.
     */
    "value": string;
    protected constructor();
}
