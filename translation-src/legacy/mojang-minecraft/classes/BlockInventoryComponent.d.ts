/**
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
export class BlockInventoryComponent extends BlockComponent {
    /**
     * The container which holds an {@link mojang-minecraft.ItemStack}.
     * @throws This property can throw when used.
     */
    readonly "container": BlockInventoryComponentContainer;
    /**
     * Coordinates of the specified block.
     */
    readonly "location": BlockLocation;
    static readonly "id" = "inventory";
    protected constructor();
}
