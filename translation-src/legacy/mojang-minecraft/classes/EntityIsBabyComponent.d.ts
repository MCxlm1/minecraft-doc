/**
 * When added, this component signifies that this entity is a
 * baby.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityIsBabyComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:is_baby.
     */
    static readonly "id" = "minecraft:is_baby";
    protected constructor();
}
