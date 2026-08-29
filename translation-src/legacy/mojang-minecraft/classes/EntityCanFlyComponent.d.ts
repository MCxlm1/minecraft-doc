/**
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityCanFlyComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:can_fly.
     */
    static readonly "id" = "minecraft:can_fly";
    protected constructor();
}
