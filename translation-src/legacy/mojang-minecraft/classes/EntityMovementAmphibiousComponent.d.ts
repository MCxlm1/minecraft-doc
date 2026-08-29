/**
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
export class EntityMovementAmphibiousComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.amphibious.
     */
    static readonly "id" = "minecraft:movement.amphibious";
    protected constructor();
}
