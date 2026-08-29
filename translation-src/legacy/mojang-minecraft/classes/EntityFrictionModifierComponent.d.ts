/**
 * Defines how much friction affects this entity.
 */
export class EntityFrictionModifierComponent extends IEntityComponent {
    /**
     * The higher the number, the more the friction affects this
     * entity. A value of 1.0 means regular friction, while 2.0
     * means twice as much.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:friction_modifier.
     */
    static readonly "id" = "minecraft:friction_modifier";
    protected constructor();
}
