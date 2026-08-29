/**
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityWantsJockeyComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:wants_jockey.
     */
    static readonly "id" = "minecraft:wants_jockey";
    protected constructor();
}
