/**
 * 表示一个可以容纳物品集合的容器。用于
 * 玩家、运输矿车、羊驼等实体。
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
     * 如果定义了这些规则，其他容器操作在导致这些规则无效时会抛出异常。
     * 例如，将潜影盒添加到原版捆绑包中。
     *
     */
    readonly containerRules?: ContainerRules;

    /**
     * @remarks
     * 容器中空格子的数量。
     *
     * @throws
     * 如果容器无效则抛出异常。
     */
    readonly emptySlotsCount: number;

    /**
     * @remarks
     * 返回一个容器对象（或该容器关联的实体或方块）是否仍可在当前上下文中使用。
     *
     */
    readonly isValid: boolean;

    /**
     * @remarks
     * 此容器中的槽位数。例如，标准单箱方块的尺寸为27。注意，玩家的物品栏容器共有36个槽位：9个快捷栏槽位加上27个物品栏槽位。
     *
     * @throws
     * 如果容器无效则抛出异常。
     */
    readonly size: number;

    /**
     * @remarks
     * 容器中所有物品的总重量。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;

    /**
     * @remarks
     * 向容器中添加物品。物品会放入第一个可用槽位，并可与同类型的现有物品堆叠。注意，如果希望将物品放入特定槽位，请使用 {@link Container.setItem}。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param itemStack
     * 要添加的物品堆。
     * @throws
     * 不会因超出重量限制而抛出 {@link ContainerRules} 错误，而是将物品添加到重量限制为止。
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
     * 此函数不能在受限执行模式下调用。
     *
     * @throws
     * 如果容器无效则抛出异常。
     */
    clearAll(): void;

    /**
     * @remarks
     * 尝试在容器中查找某个物品。
     *
     * @param itemStack
     * 要查找的物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;

    /**
     * @remarks
     * 查找容器中第一个物品实例的索引。
     *
     * @param itemStack
     * 要查找的物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number | undefined;

    /**
     * @remarks
     * 查找容器中最后一个物品实例的索引。
     *
     * @param itemStack
     * 要查找的物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    findLast(itemStack: ItemStack): number | undefined;

    /**
     * @remarks
     * 查找容器中第一个空格子的索引。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;

    /**
     * @remarks
     * 查找容器中第一个物品的索引。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;

    /**
     * @remarks
     * 获取指定槽位中物品的 {@link ItemStack}。如果槽位为空，则返回 `undefined`。此方法不会更改或清除指定槽位的内容。要获取对特定槽位的引用，请参见 {@link Container.getSlot}。
     *
     * @param slot
     * 要从中获取物品的槽位的零基索引。最小值：0
     * @throws
     * 如果容器无效或 `slot` 索引超出范围，则抛出异常。
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
     * 返回一个容器槽位。这相当于对此容器中给定索引槽位的引用。
     *
     * @param slot
     * 要返回的槽位索引。此索引必须在容器范围内。
     * 最小值：0
     * @throws
     * 如果容器无效或 `slot` 索引超出范围，则抛出异常。
     */
    getSlot(slot: number): ContainerSlot;

    /**
     * @remarks
     * 将物品从一个槽位移动到另一个槽位，可能跨容器。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param fromSlot
     * 要从此容器中移动物品的槽位的零基索引。
     * 最小值：0
     * @param toSlot
     * 要移动到 `toContainer` 中槽位的零基索引。
     * 最小值：0
     * @param toContainer
     * 目标容器。注意，这可以是与源容器相同的容器。
     * @throws
     * 如果此容器或 `toContainer` 无效，或 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
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
     * 在特定槽位中设置物品堆。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param slot
     * 要设置物品的槽位的零基索引。
     * 最小值：0
     * @param itemStack
     * 要放入指定槽位的物品堆。将 `itemStack` 设置为 undefined 将清除该槽位。
     * @throws
     * 如果容器无效或 `slot` 索引超出范围，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;

/**
     * @remarks
     * 在容器内的两个不同槽位之间交换物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param slot
     * 从此容器中交换物品的槽位（从零开始索引）。
     * 最小值：0
     * @param otherSlot
     * 要交换的槽位（从零开始索引）。
     * 最小值：0
     * @param otherContainer
     * 目标容器，用于交换。注意，它可以与此源容器相同。
     * @throws
     * 如果此容器或 `otherContainer` 无效，
     * 或者 `slot` 或 `otherSlot` 超出范围，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;

    /**
     * @remarks
     * 将物品从一个槽位移到另一个容器，或同一容器中的第一个可用槽位。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fromSlot
     * 从此容器中转移物品的槽位（从零开始索引）。
     * 最小值：0
     * @param toContainer
     * 目标容器，用于转移物品。注意，它可以与源容器相同。
     * @returns
     * 一个包含无法转移物品的物品堆栈。如果所有物品都转移成功，则返回 undefined。
     * @throws
     * 如果此容器或 `toContainer` 无效，
     * 或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
     * 不会抛出 {@link ContainerRules} 错误以超出重量限制，
     * 而是会添加物品直至达到重量限制。
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