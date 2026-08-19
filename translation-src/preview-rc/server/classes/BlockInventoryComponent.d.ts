/**
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 * @example placeItemsInChest.ts
 * ```typescript
 * import { ItemStack, BlockInventoryComponent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes, MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function placeItemsInChest(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // Fetch block
 *   const block = targetLocation.dimension.getBlock(targetLocation);
 *
 *   if (!block) {
 *     log('Could not find block. Maybe it is not loaded?', -1);
 *     return;
 *   }
 *
 *   // Make it a chest
 *   block.setType(MinecraftBlockTypes.Chest);
 *
 *   // Get the inventory
 *   const inventoryComponent = block.getComponent('inventory') as BlockInventoryComponent;
 *
 *   if (!inventoryComponent || !inventoryComponent.container) {
 *     log('Could not find inventory component.', -1);
 *     return;
 *   }
 *
 *   const inventoryContainer = inventoryComponent.container;
 *
 *   // Set slot 0 to a stack of 10 apples
 *   inventoryContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * The container which holds an {@link ItemStack}.
     *
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}
