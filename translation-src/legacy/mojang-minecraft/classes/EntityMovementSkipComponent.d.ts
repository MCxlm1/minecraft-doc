/**
 * When added, this move control causes the mob to hop as it
 * moves.
 */
export class EntityMovementSkipComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.skip.
     */
    static readonly "id" = "minecraft:movement.skip";
    protected constructor();
}
