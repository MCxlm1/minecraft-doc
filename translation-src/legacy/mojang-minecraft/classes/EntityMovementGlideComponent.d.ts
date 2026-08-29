/**
 * When added, this movement control allows the mob to glide.
 */
export class EntityMovementGlideComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Speed in effect when the entity is turning.
     * @throws This property can throw when used.
     */
    readonly "speedWhenTurning": number;
    /**
     * Start speed during a glide.
     * @throws This property can throw when used.
     */
    readonly "startSpeed": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.glide.
     */
    static readonly "id" = "minecraft:movement.glide";
    protected constructor();
}
