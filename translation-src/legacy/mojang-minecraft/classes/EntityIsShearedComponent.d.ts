/**
 * When added, this component signifies that this entity is
 * currently sheared.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsShearedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_sheared.
     */
    static readonly "id" = "minecraft:is_sheared";
    protected constructor();
}
