/**
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsTamedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_tamed.
     */
    static readonly "id" = "minecraft:is_tamed";
    protected constructor();
}
