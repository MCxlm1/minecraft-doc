/**
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityCanPowerJumpComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:can_power_jump.
     */
    static readonly "id" = "minecraft:can_power_jump";
    protected constructor();
}
