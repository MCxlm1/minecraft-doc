/**
 * When added, this component signifies that this entity is
 * currently saddled.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsSaddledComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_saddled.
     */
    static readonly "id" = "minecraft:is_saddled";
    protected constructor();
}
