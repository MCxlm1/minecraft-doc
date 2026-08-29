/**
 * When added, this component signifies that this entity is
 * currently shaking.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsShakingComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_shaking.
     */
    static readonly "id" = "minecraft:is_shaking";
    protected constructor();
}
