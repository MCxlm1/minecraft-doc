/**
 * 表示一个可容纳多组物品的容器。用于玩家、箱子矿车、羊驼等实体。
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
     * 若定义了这些规则，则其他容器操作在会导致这些规则失效时抛出异常。
     * 例如，将潜影盒放入原版收纳袋中。
     *
     */
    readonly containerRules?: ContainerRules;

    /**
     * @remarks
     * 容器中空槽位的数量。
     *
     * @throws
     * 若容器无效则抛出异常。
     */
    readonly emptySlotsCount: number;

    /**
     * @remarks
     * 返回容器对象（或该容器关联的实体或方块）在此上下文中是否仍可继续使用。
     *
     */
    readonly isValid: boolean;

    /**
     * @remarks
     * 此容器中的槽位数量。例如，一个标准单方块箱子的尺寸为 27。注意，
     * 玩家的物品栏容器共有 36 个槽位，即 9 个快捷栏槽位加 27 个物品栏槽位。
     *
     * @throws
     * 若容器无效则抛出异常。
     */
    readonly size: number;

    /**
     * @remarks
     * 容器中所有物品的合计重量。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;

    /**
     * @remarks
     * 向容器中添加一个物品。该物品会被放置到第一个可用槽位中，并可与此前已存在的同类物品叠加。
     * 注意，若希望将物品放置到特定槽位，请使用 {@link Container.setItem}。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param itemStack
     * 要添加的物品实例。
     * @throws
     * 不会因超出重量上限而抛出 {@link ContainerRules} 错误，
     * 而会改为添加物品直至达到重量上限。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;

    /**
     * @remarks
     * 清空容器中的所有物品。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws
     * 若容器无效则抛出异常。
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
     * 在容器中查找第一个匹配物品的索引。
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
     * 在容器中查找最后一个匹配物品的索引。
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
     * 在容器中查找第一个空槽位的索引。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;

    /**
     * @remarks
     * 在容器中查找第一个物品的索引。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;

    /**
     * @remarks
     * 获取指定槽位中物品的 {@link ItemStack}。
     * 若槽位为空，则返回 `undefined`。此方法不会更改或清空指定槽位的内容。
     * 如需获得特定槽位的引用，请参阅 {@link Container.getSlot}。
     *
     * @param slot
     * 要从中获取物品的槽位的零基索引。
     * 最小值：0
     * @throws
     * 若容器无效，或 `slot` 索引超出边界，则抛出异常。
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
     * 返回一个容器槽位。该槽位可作为此容器中指定索引处槽位的引用。
     *
     * @param slot
     * 要返回的槽位索引。此索引必须位于容器边界内。
     * 最小值：0
     * @throws
     * 若容器无效，或 `slot` 索引超出边界，则抛出异常。
     */
    getSlot(slot: number): ContainerSlot;

    /**
     * @remarks
     * 将一个物品从一个槽位移到另一个槽位，可能跨容器进行。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param fromSlot
     * 要从此容器中移出物品的槽位的零基索引。
     * 最小值：0
     * @param toSlot
     * 要将物品移入 `toContainer` 中目标槽位的零基索引。
     * 最小值：0
     * @param toContainer
     * 目标容器。注意，此容器可以与源容器相同。
     * @throws
     * 若此容器或 `toContainer` 无效，或 `fromSlot`、`toSlot` 索引超出边界，则抛出异常。
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
     * 在特定槽位中设置一个物品实例。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param slot
     * 要设置物品的槽位的零基索引。
     * 最小值：0
     * @param itemStack
     * 要放置到指定槽位中的物品实例。将 `itemStack` 设置为 undefined 会清空该槽位。
     * @throws
     * 若容器无效，或 `slot` 索引超出边界，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;

/**
     * @remarks
     * 交换两个容器内不同槽位之间的物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param slot
     * 从该容器中交换的槽位的从零开始的索引。
     * 最小值：0
     * @param otherSlot
     * 要交换的槽位的从零开始的索引。
     * 最小值：0
     * @param otherContainer
     * 目标容器以进行交换。注意，此容器可以与源容器相同。
     * @throws
     * 如果此容器或 `otherContainer` 无效，或者 `slot` 或 `otherSlot` 超出范围，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;

    /**
     * @remarks
     * 将一个物品从一个槽位移到另一个容器，或移动到同一容器中的第一个可用槽位。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fromSlot
     * 从该容器中转移物品的槽位的从零开始的索引。
     * 最小值：0
     * @param toContainer
     * 目标容器以进行转移。注意，此容器可以与源容器相同。
     * @returns
     * 一个包含无法转移的物品的 itemStack。如果所有物品都转移成功，则返回 undefined。
     * @throws
     * 如果此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
     * 对于超重限制，不会抛出 {@link ContainerRules} 错误，而是会添加物品直至达到重量限制。
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