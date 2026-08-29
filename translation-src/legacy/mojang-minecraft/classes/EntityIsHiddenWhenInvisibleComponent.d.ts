/**
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_hidden_when_invisible.
     */
    static readonly "id" = "minecraft:is_hidden_when_invisible";
    protected constructor();
}
