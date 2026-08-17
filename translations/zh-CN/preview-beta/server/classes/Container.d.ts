/**
 * 表示一个可以容纳一组物品的容器。用于玩家、箱子矿车、羊驼等实体。
 * @example containers.ts
 * ```typescript
 * import { ItemStack, EntityInventoryComponent, BlockInventoryComponent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes, MinecraftItemTypes, MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function containers(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const xLocation = targetLocation; // left chest location
 *   const xPlusTwoLocation = { x: targetLocation.x + 2, y: targetLocation.y, z: targetLocation.z }; // right chest
 *
 *   const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
 *     x: targetLocation.x + 4,
 *     y: targetLocation.y,
 *     z: targetLocation.z,
 *   });
 *
 *   const xChestBlock = targetLocation.dimension.getBlock(xLocation);
 *   const xPlusTwoChestBlock = targetLocation.dimension.getBlock(xPlusTwoLocation);
 *
 *   if (!xChestBlock || !xPlusTwoChestBlock) {
 *     log('Could not retrieve chest blocks.');
 *     return;
 *   }
 *
 *   xChestBlock.setType(MinecraftBlockTypes.Chest);
 *   xPlusTwoChestBlock.setType(MinecraftBlockTypes.Chest);
 *
 *   const xPlusTwoChestInventoryComp = xPlusTwoChestBlock.getComponent('inventory') as BlockInventoryComponent;
 *   const xChestInventoryComponent = xChestBlock.getComponent('inventory') as BlockInventoryComponent;
 *   const chestCartInventoryComp = chestCart.getComponent('inventory') as EntityInventoryComponent;
 *
 *   const xPlusTwoChestContainer = xPlusTwoChestInventoryComp.container;
 *   const xChestContainer = xChestInventoryComponent.container;
 *   const chestCartContainer = chestCartInventoryComp.container;
 *
 *   if (!xPlusTwoChestContainer || !xChestContainer || !chestCartContainer) {
 *     log('Could not retrieve chest containers.');
 *     return;
 *   }
 *
 *   xPlusTwoChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
 *   if (xPlusTwoChestContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
 *     log('Expected apple in x+2 container slot index 0', -1);
 *   }
 *
 *   xPlusTwoChestContainer.setItem(1, new ItemStack(MinecraftItemTypes.Emerald, 10));
 *   if (xPlusTwoChestContainer.getItem(1)?.typeId !== MinecraftItemTypes.Emerald) {
 *     log('Expected emerald in x+2 container slot index 1', -1);
 *   }
 *
 *   if (xPlusTwoChestContainer.size !== 27) {
 *     log('Unexpected size: ' + xPlusTwoChestContainer.size, -1);
 *   }
 *
 *   if (xPlusTwoChestContainer.emptySlotsCount !== 25) {
 *     log('Unexpected emptySlotsCount: ' + xPlusTwoChestContainer.emptySlotsCount, -1);
 *   }
 *
 *   xChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Cake, 10));
 *
 *   xPlusTwoChestContainer.transferItem(0, chestCartContainer); // transfer the apple from the xPlusTwo chest to a chest cart
 *   xPlusTwoChestContainer.swapItems(1, 0, xChestContainer); // swap the cake from x and the emerald from xPlusTwo
 *
 *   if (chestCartContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
 *     log('Expected apple in minecraft chest container slot index 0', -1);
 *   }
 *
 *   if (xChestContainer.getItem(0)?.typeId === MinecraftItemTypes.Emerald) {
 *     log('Expected emerald in x container slot index 0', -1);
 *   }
 *
 *   if (xPlusTwoChestContainer.getItem(1)?.typeId === MinecraftItemTypes.Cake) {
 *     log('Expected cake in x+2 container slot index 1', -1);
 *   }
 * }
 * ```
 */
export class Container {
    private constructor();
    /**
     * @remarks
     * 如果定义了这些规则，当其他容器操作导致这些规则失效时，将会抛出错误。
     * 例如，将潜影盒添加到原版收纳袋中。
     */
    readonly containerRules?: ContainerRules;
    /**
     * @remarks
     * 容器中空槽位的数量。
     *
     * @throws 如果容器无效则抛出错误。
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * 返回容器对象（或与此容器关联的实体或方块）在此上下文中是否仍然可用。
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此容器中的槽位数。例如，标准单方块箱子的大小为27。注意，玩家的物品栏容器总共有36个槽位：9个快捷栏槽位加27个物品栏槽位。
     *
     * @throws 如果容器无效则抛出错误。
     */
    readonly size: number;
    /**
     * @remarks
     * 容器中所有物品的总重量。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;
    /**
     * @remarks
     * 向容器中添加物品。物品会放入第一个可用的槽位，并且可以与同类型的现有物品堆叠。注意，如果希望在特定槽位中设置物品，请使用 {@link Container.setItem}。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemStack
     * 要添加的物品堆叠。
     * @returns
     * 添加后未能放入容器的剩余物品堆叠；如果所有物品都已成功放入，则返回 `undefined`。
     * @throws
     * 不会因超过重量限制而抛出 {@link ContainerRules} 错误，而是会添加物品直到达到重量限制。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * 清除容器中的所有物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 如果容器无效则抛出错误。
     */
    clearAll(): void;
    /**
     * @remarks
     * 尝试在容器中查找某个物品。
     *
     * @param itemStack
     * 要查找的物品。
     * @returns
     * 如果容器中存在匹配的物品则返回 `true`，否则返回 `false`。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 查找容器中某个物品首次出现的索引。
     *
     * @param itemStack
     * 要查找的物品。
     * @returns
     * 找到匹配物品的索引；如果未找到则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number | undefined;
    /**
     * @remarks
     * 查找容器中某个物品最后一次出现的索引。
     *
     * @param itemStack
     * 要查找的物品。
     * @returns
     * 找到匹配物品的最后一个索引；如果未找到则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    findLast(itemStack: ItemStack): number | undefined;
    /**
     * @remarks
     * 查找容器中第一个空槽位的索引。
     *
     * @returns
     * 第一个空槽位的索引；如果没有空槽位则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;
    /**
     * @remarks
     * 查找容器中第一个物品的索引。
     *
     * @returns
     * 第一个物品的索引；如果容器为空则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;
    /**
     * @remarks
     * 获取指定槽位中的 {@link ItemStack}。如果槽位为空，则返回 `undefined`。此方法不会更改或清除指定槽位的内容。若要获取特定槽位的引用，请参阅 {@link Container.getSlot}。
     *
     * @param slot
     * 从零开始的索引，表示要从中检索物品的槽位。最小值：0
     * @returns
     * 指定槽位中的物品堆叠；如果槽位为空则返回 `undefined`。
     * @throws
     * 如果容器无效或 `slot` 索引越界，则抛出错误。
     * @example getFirstHotbarItem.ts
     * ```typescript
     * import { world, EntityInventoryComponent, DimensionLocation } from '@minecraft/server';
     *
     * function getFirstHotbarItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(EntityInventoryComponent.componentId) as EntityInventoryComponent;
     *     if (inventory && inventory.container) {
     *       const firstItem = inventory.container.getItem(0);
     *
     *       if (firstItem) {
     *         log('First item in hotbar is: ' + firstItem.typeId);
     *       }
     *
     *       return inventory.container.getItem(0);
     *     }
     *     return undefined;
     *   }
     * }
     * ```
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks
     * 返回一个容器槽位。此槽位作为此容器中给定索引处槽位的引用。
     *
     * @param slot
     * 要返回的槽位索引。此索引必须在容器的边界内。最小值：0
     * @returns
     * 对应的容器槽位引用。
     * @throws
     * 如果容器无效或 `slot` 索引越界，则抛出错误。
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * 将物品从一个槽位移到另一个槽位，可能跨容器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fromSlot
     * 此容器中要移出物品的槽位的从零开始的索引。最小值：0
     * @param toSlot
     * `toContainer` 中要移入物品的槽位的从零开始的索引。最小值：0
     * @param toContainer
     * 转移的目标容器。注意，可以是与源容器相同的容器。
     * @throws
     * 如果此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引越界，则抛出错误。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @example moveBetweenContainers.ts
     * ```typescript
     * import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function moveBetweenContainers(targetLocation: DimensionLocation) {
     *   const players = world.getAllPlayers();
     *
     *   const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y,
     *     z: targetLocation.z,
     *   });
     *
     *   if (players.length > 0) {
     *     const fromPlayer = players[0];
     *
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *       fromInventory.container.moveItem(0, 0, toInventory.container);
     *     }
     *   }
     * }
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * 在特定槽位中设置物品堆叠。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param slot
     * 要设置物品的槽位的从零开始的索引。最小值：0
     * @param itemStack
     * 要放入指定槽位的物品堆叠。将 `itemStack` 设置为 `undefined` 将清空该槽位。
     * @throws
     * 如果容器无效或 `slot` 索引越界，则抛出错误。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * 交换容器中两个不同槽位之间的物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param slot
     * 此容器中要交换的槽位的从零开始的索引。最小值：0
     * @param otherSlot
     * 要交换的另一个槽位的从零开始的索引。最小值：0
     * @param otherContainer
     * 要交换的目标容器。注意，可以是与源容器相同的容器。
     * @throws
     * 如果此容器或 `otherContainer` 无效，或 `slot` 或 `otherSlot` 越界，则抛出错误。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
}

    /**
     * 在此容器的指定槽位与另一容器的指定槽位之间交换物品。
     * 若 `otherContainer` 与当前容器相同，则在同一容器的两个槽位之间交换。
     * @param slot
     * 当前容器中要交换物品的槽位索引（从 0 开始）。
     * @param otherSlot
     * 目标容器中要交换物品的槽位索引（从 0 开始）。
     * @param otherContainer
     * 要交换物品的目标容器，可以是当前容器本身。
     * @throws
     * 如果任一容器无效或槽位索引越界，则抛出错误。
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * 将一个物品从一个槽位移动到另一个容器，或移动到同一容器中第一个可用的槽位。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fromSlot
     * 此容器中要转移物品的槽位索引（从 0 开始）。
     * 最小值：0
     * @param toContainer
     * 要转移到的目标容器。注意：此容器可以与源容器相同。
     * @returns
     * 一个物品实例，包含未能转移的物品。
     * 如果所有物品均已转移，则返回 undefined。
     * @throws
     * 如果此容器或 `toContainer` 无效，或 `fromSlot` 或 `toSlot` 索引越界，则抛出错误。
     * 对于超过重量限制的情况不会抛出 {@link ContainerRulesError} 错误，而是会添加物品直至达到重量限制。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @example transferBetweenContainers.ts
     * ```typescript
     * import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function transferBetweenContainers(targetLocation: DimensionLocation) {
     *   const players = world.getAllPlayers();
     *
     *   const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y,
     *     z: targetLocation.z,
     *   });
     *
     *   if (players.length > 0) {
     *     const fromPlayer = players[0];
     *
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *       fromInventory.container.transferItem(0, toInventory.container);
     *     }
     *   }
     * }
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}