/**
 * Contains the state of a boolean-based property for a
 * {@link mojang-minecraft.BlockPermutation}.
 */
export class BoolBlockProperty extends IBlockProperty {
    /**
     * The name of this property.
     */
    readonly "name": string;
    /**
     * A list of valid values for this property.
     */
    readonly "validValues": boolean[];
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use
     * {@link mojang-minecraft.BoolBlockProperty.validValues} to check
     * allowed values.
     */
    "value": boolean;
    protected constructor();
}
