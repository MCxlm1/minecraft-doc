/**
 * When added, this component signifies that this entity is
 * charged.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsChargedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_charged.
     */
    static readonly "id" = "minecraft:is_charged";
    protected constructor();
}
