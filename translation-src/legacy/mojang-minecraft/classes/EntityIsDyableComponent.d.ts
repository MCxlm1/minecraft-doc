/**
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsDyableComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_dyeable.
     */
    static readonly "id" = "minecraft:is_dyeable";
    protected constructor();
}
