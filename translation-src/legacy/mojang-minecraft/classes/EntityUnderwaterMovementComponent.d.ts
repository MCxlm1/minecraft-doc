/**
 * Defines the general movement speed underwater of this
 * entity.
 */
export class EntityUnderwaterMovementComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of movement speed
     * underwater for the entity.
     * @throws This property can throw when used.
     */
    readonly "current": number;
    /**
     * Value for movement speed underwater as defined through
     * entity components.
     * @throws This property can throw when used.
     */
    readonly "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:underwater_movement.
     */
    static readonly "id" = "minecraft:underwater_movement";
    /**
     * @remarks
     * Resets the current movement speed underwater for the entity
     * to the default value implied by the current component state
     * of the entity.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the maximum value
     * for the entity, as determined by the set of components that
     * are on the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the minimum value as
     * defined by the component state of this entity.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed underwater for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
