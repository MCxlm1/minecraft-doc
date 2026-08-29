/**
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
export class ItemCooldownComponent {
    /**
     * Represents the cooldown category that this item is
     * associated with.
     * @throws This property can throw when used.
     */
    readonly "cooldownCategory": string;
    /**
     * Amount of time, in ticks, that remain for this item
     * cooldown.
     * @throws This property can throw when used.
     */
    readonly "cooldownTicks": number;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:cooldown'.
     */
    static readonly "id" = "minecraft:cooldown";
    /**
     * @remarks
     * Starts a new cooldown period for this item.
     * @param player
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
    protected constructor();
}
