/**
 * Defines this entity's inventory properties.
 */
export class EntityInventoryComponent extends IEntityComponent {
    /**
     * Number of slots that this entity can gain per extra
     * strength.
     * @throws This property can throw when used.
     */
    readonly "additionalSlotsPerStrength": number;
    /**
     * If true, the contents of this inventory can be removed by a
     * hopper.
     * @throws This property can throw when used.
     */
    readonly "canBeSiphonedFrom": boolean;
    /**
     * Defines the container for this entity.
     * @throws This property can throw when used.
     */
    readonly "container": InventoryComponentContainer;
    /**
     * Type of container this entity has.
     * @throws This property can throw when used.
     */
    readonly "containerType": string;
    /**
     * Number of slots the container has.
     * @throws This property can throw when used.
     */
    readonly "inventorySize": number;
    /**
     * If true, the entity will not drop it's inventory on death.
     * @throws This property can throw when used.
     */
    readonly "private": boolean;
    /**
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     * @throws This property can throw when used.
     */
    readonly "restrictToOwner": boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    static readonly "id" = "minecraft:inventory";
    protected constructor();
}
