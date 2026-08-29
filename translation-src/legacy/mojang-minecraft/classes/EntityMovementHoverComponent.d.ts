/**
 * When added, this move control causes the mob to hover.
 */
export class EntityMovementHoverComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.hover.
     */
    static readonly "id" = "minecraft:movement.hover";
    protected constructor();
}
