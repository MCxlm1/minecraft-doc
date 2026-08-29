/**
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityFireImmuneComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:fire_immune.
     */
    static readonly "id" = "minecraft:fire_immune";
    protected constructor();
}
