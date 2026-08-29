/**
 * When added, this move control causes the mob to fly.
 */
export class EntityMovementFlyComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.fly.
     */
    static readonly "id" = "minecraft:movement.fly";
    protected constructor();
}
