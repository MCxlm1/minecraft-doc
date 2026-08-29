/**
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsChestedComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_chested.
     */
    static readonly "id" = "minecraft:is_chested";
    protected constructor();
}
