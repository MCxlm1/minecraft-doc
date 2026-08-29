/**
 * When added, this component signifies that this entity can be
 * stacked.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsStackableComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stackable.
     */
    static readonly "id" = "minecraft:is_stackable";
    protected constructor();
}
