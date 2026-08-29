/**
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
export class EntityMovementJumpComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.jump.
     */
    static readonly "id" = "minecraft:movement.jump";
    protected constructor();
}
