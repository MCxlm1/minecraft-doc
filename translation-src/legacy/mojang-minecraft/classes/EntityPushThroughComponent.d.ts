/**
 * Sets the distance through which the entity can push through.
 */
export class EntityPushThroughComponent extends IEntityComponent {
    /**
     * The value of the entity's push-through, in blocks.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:push_through.
     */
    static readonly "id" = "minecraft:push_through";
    protected constructor();
}
