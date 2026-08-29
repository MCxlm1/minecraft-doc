/**
 * Class used in conjunction with
 * {@link mojang-minecraft.PropertyRegistry} to define dynamic
 * properties that can be used on entities of a specified type
 * or at the global World- level.
 */
export class DynamicPropertiesDefinition {
    /**
     * @remarks
     * Defines a new boolean dynamic property.
     * @param identifier
     * @throws This function can throw errors.
     */
    defineBoolean(identifier: string): void;
    /**
     * @remarks
     * Defines a new number dynamic property.
     * @param identifier
     * @throws This function can throw errors.
     */
    defineNumber(identifier: string): void;
    /**
     * @remarks
     * Defines a new string dynamic property.
     * @param identifier
     * @param maxLength
     * @throws This function can throw errors.
     */
    defineString(identifier: string, maxLength: number): void;
}
