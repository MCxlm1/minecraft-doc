/**
 * Defines the interactions with this entity for healing it.
 */
export class EntityHealableComponent extends IEntityComponent {
    /**
     * A set of filters for when these Healable items would apply.
     * @throws This property can throw when used.
     */
    readonly "filters": FilterGroup;
    /**
     * Determines if an item can be used regardless of the entity
     * being at full health.
     * @throws This property can throw when used.
     */
    readonly "forceUse": boolean;
    /**
     * A set of items that can specifically heal this entity.
     * @throws This property can throw when used.
     */
    readonly "items": FeedItem[];
    /**
     * Identifier of this component. Should always be
     * minecraft:healable.
     */
    static readonly "id" = "minecraft:healable";
    protected constructor();
}
