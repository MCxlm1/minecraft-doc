/**
 * Defines the general movement speed of this entity.
 */
export class EntityMovementComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of default movement
     * speed for the entity.
     * @throws This property can throw when used.
     */
    readonly "current": number;
    /**
     * Value for default movement speed as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.
     */
    static readonly "id" = "minecraft:movement";
    /**
     * @remarks
     * Resets the current default movement speed value for the
     * entity to the default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of default movement speed for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
