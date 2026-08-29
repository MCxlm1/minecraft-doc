/**
 * Defines the base movement speed in lava of this entity.
 */
export class EntityLavaMovementComponent extends IEntityComponent {
    /**
     * Read-only. Returns the current value of movement speed on
     * lava for the entity.
     * @throws This property can throw when used.
     */
    readonly "current": number;
    /**
     * Value for movement speed on lava as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lava_movement.
     */
    static readonly "id" = "minecraft:lava_movement";
    /**
     * @remarks
     * Resets the current movement speed on lava for the entity to
     * its default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava speed to the minimum
     * value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed on lava for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): void;
    protected constructor();
}
