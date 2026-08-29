/**
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
export class ItemFoodComponent {
    /**
     * If true, the player can always eat this item (even when not
     * hungry).
     * @throws This property can throw when used.
     */
    readonly "canAlwaysEat": boolean;
    /**
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     * @throws This property can throw when used.
     */
    readonly "nutrition": number;
    /**
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     * @throws This property can throw when used.
     */
    readonly "saturationModifier": number;
    /**
     * When specified, converts the active item to the one
     * specified by this property.
     * @throws This property can throw when used.
     */
    readonly "usingConvertsTo": string;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:food'.
     */
    static readonly "id" = "minecraft:food";
    protected constructor();
}
