/**
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
export class EntityMovementGenericComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.generic.
     */
    static readonly "id" = "minecraft:movement.generic";
    protected constructor();
}
