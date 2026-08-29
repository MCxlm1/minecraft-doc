/**
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
export class EntityAgeableComponent extends IEntityComponent {
    /**
     * List of items that the entity drops when it grows up.
     * @throws This property can throw when used.
     */
    readonly "dropItems": string[];
    /**
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     * @throws This property can throw when used.
     */
    readonly "duration": number;
    /**
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     * @throws This property can throw when used.
     */
    readonly "feedItems": EntityDefinitionFeedItem[];
    /**
     * Event to run when this entity grows up.
     * @throws This property can throw when used.
     */
    readonly "growUp": Trigger;
    /**
     * Identifier of this component. Should always be
     * minecraft:ageable.
     */
    static readonly "id" = "minecraft:ageable";
    protected constructor();
}
