/**
 * When added, this component signifies that this entity is
 * currently stunned.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsStunnedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stunned.
     */
    static readonly "id" = "minecraft:is_stunned";
    protected constructor();
}
