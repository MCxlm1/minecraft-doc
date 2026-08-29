/**
 * When added, this component signifies that this entity this
 * currently on fire.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsIgnitedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_ignited.
     */
    static readonly "id" = "minecraft:is_ignited";
    protected constructor();
}
