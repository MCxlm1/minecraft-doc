/**
 * This component accents the movement of an entity.
 */
export class EntityMovementBasicComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.basic.
     */
    static readonly "id" = "minecraft:movement.basic";
    protected constructor();
}
