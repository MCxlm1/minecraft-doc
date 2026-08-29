/**
 * Defines the entity's strength to carry items.
 */
export class EntityStrengthComponent extends IEntityComponent {
    /**
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     * @throws This property can throw when used.
     */
    readonly "max": number;
    /**
     * Current strength value of this entity, after any effects or
     * component updates are applied.
     * @throws This property can throw when used.
     */
    readonly "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:strength.
     */
    static readonly "id" = "minecraft:strength";
    protected constructor();
}
