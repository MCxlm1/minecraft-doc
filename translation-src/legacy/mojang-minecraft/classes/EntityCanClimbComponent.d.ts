/**
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityCanClimbComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:can_climb.
     */
    static readonly "id" = "minecraft:can_climb";
    protected constructor();
}
