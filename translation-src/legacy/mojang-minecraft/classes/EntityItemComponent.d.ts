/**
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 */
export class EntityItemComponent extends IEntityComponent {
    /**
     * Item stack represented by this entity in the world.
     * @throws This property can throw when used.
     */
    readonly "itemStack": ItemStack;
    /**
     * Identifier of this component.
     */
    static readonly "id" = "minecraft:item";
    protected constructor();
}
