/**
 * Defines the health properties of an entity.
 */
export class EntityHealthComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of health for the
     * entity.
     * @throws This property can throw when used.
     */
    readonly "current": number;
    /**
     * Value for health as defined through entity components.
     * @throws This property can throw when used.
     */
    readonly "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:health.
     */
    static readonly "id" = "minecraft:health";
    /**
     * @remarks
     * Resets the current health value of the entity to its default
     * value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the current health of the entity to its maximum
     * value.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the current health to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current health of the entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
