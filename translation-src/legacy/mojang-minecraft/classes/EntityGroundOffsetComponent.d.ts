/**
 * Sets the offset from the ground that the entity is actually
 * at.
 */
export class EntityGroundOffsetComponent extends IEntityComponent {
    /**
     * The value of the entity's offset from the terrain, in
     * blocks.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:ground_offset.
     */
    static readonly "id" = "minecraft:ground_offset";
    protected constructor();
}
