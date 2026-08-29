/**
 * Represents the flying speed of an entity.
 */
export class EntityFlyingSpeedComponent extends IEntityComponent {
    /**
     * Speed while flying value of the entity.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:flying_speed.
     */
    static readonly "id" = "minecraft:flying_speed";
    protected constructor();
}
