/**
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityFloatsInLiquidComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:floats_in_liquid.
     */
    static readonly "id" = "minecraft:floats_in_liquid";
    protected constructor();
}
