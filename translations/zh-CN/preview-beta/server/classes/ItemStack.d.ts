/**
 * 定义一组物品的集合。
 * @example itemStacks.ts
 * ```typescript
 * import { ItemStack, DimensionLocation } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
 *   const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
 *   const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };
 *
 *   const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
 *   const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
 *   const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);
 *
 *   log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
 *   targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);
 *
 *   log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
 *   targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);
 *
 *   log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
 *   targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
 * }
 * ```
 * @example givePlayerEquipment.ts
 * ```typescript
 * import {
 *   world,
 *   ItemStack,
 *   EntityEquippableComponent,
 *   EquipmentSlot,
 *   EntityComponentTypes,
 *   DimensionLocation,
 * } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function givePlayerEquipment(targetLocation: DimensionLocation) {
 *   const players = world.getAllPlayers();
 *
 *   const armorStandLoc = { x: targetLocation.x, y: targetLocation.y, z: targetLocation.z + 4 };
 *   const armorStand = players[0].dimension.spawnEntity(MinecraftItemTypes.ArmorStand, armorStandLoc);
 *
 *   const equipmentCompPlayer = players[0].getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
 *   if (equipmentCompPlayer) {
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
 *   }
 *
 *   const equipmentCompArmorStand = armorStand.getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
 *   if (equipmentCompArmorStand) {
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
 *   }
 * }
 * ```
 * @example spawnFeatherItem.ts
 * ```typescript
 * import { ItemStack, DimensionLocation } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
 *
 *   targetLocation.dimension.spawnItem(featherItem, targetLocation);
 *   log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
 * }
 * ```
 */
export class ItemStack {
    /**
     * @remarks
     * 物品堆叠中物品的数量。有效值范围在1-255之间。提供的值将被限制到该物品的最大堆叠数量。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * 范围: [1, 255]
     * @throws
     * 如果值超出1-255的范围，则抛出异常。
     */
    amount: number;
    /**
     * @remarks
     * 返回该物品是否可堆叠。如果物品的最大堆叠数量大于1，且不包含任何自定义数据或属性，则视为可堆叠。
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * 获取或设置物品在死亡时是否保留。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * 用于 .lang 文件中该物品名称本地化的键。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * 最大堆叠数量。该值根据物品类型不同而变化。例如，火把的最大堆叠数量为64，而鸡蛋的最大堆叠数量为16。
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * 该物品堆叠的给定名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除名称标签。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果长度超过255个字符，则抛出异常。
     */
    nameTag?: string;
    /**
     * @remarks
     * 物品的类型。
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * 该堆叠物品类型的标识符。如果未指定命名空间，则假定为 `minecraft:`。示例包括 'wheat' 或 'apple'。
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * 该堆叠中所有物品的总重量，加上通过 `Storage Item` 组件定义的物品容器中所有物品的总重量。物品的重量可通过 `Storage Weight Modifier` 组件修改。
     *
     */
    readonly weight: number;
    /**
     * @remarks
     * 创建一个新的物品堆叠实例，用于在世界中使用。
     *
     * @param itemType
     * 要创建的物品类型。请参阅 {@link @minecraft/vanilla-data.MinecraftItemTypes} 枚举，了解 Minecraft 体验中的标准物品类型列表。
     * @param amount
     * 要放入堆叠中的物品数量，范围1-255。提供的值将被限制到该物品的最大堆叠数量。注意某些物品在堆叠中只能有一个。
     * 默认值: 1
     * 范围: [1, 255]
     * @throws
     * 如果 `itemType` 无效，或 `amount` 超出1-255的范围，则抛出异常。
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * 清除此物品实例上设置的所有动态属性。
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 创建物品实例的精确副本，包括任何自定义数据或属性。
     *
     * @returns
     * 返回此物品实例的副本。
     */
    clone(): ItemStack;
    /**
     * @remarks
     * 获取此物品在冒险模式下可以破坏的方块类型列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 此物品在冒险模式下可破坏的方块类型列表。
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * 获取此物品在冒险模式下可以放置的方块类型列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 此物品在冒险模式下可放置的方块类型列表。
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * 获取物品实例的一个组件（表示额外能力）。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则假定为 `minecraft:`。可用的组件ID包括 {@link ItemComponentTypes} 枚举中的ID，以及通过 {@link ItemComponentRegistry} 注册的自定义组件ID。
     * @returns
     * 如果组件存在于物品实例上，则返回该组件，否则返回 undefined。
     * @example giveHurtDiamondSword.ts
     * ```typescript
     * import {
     *   world,
     *   ItemStack,
     *   EntityInventoryComponent,
     *   EntityComponentTypes,
     *   ItemComponentTypes,
     *   ItemDurabilityComponent,
     *   DimensionLocation,
     * } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function giveHurtDiamondSword(targetLocation: DimensionLocation) {
     *   const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);
     *
     *   const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability) as ItemDurabilityComponent;
     *
     *   if (durabilityComponent !== undefined) {
     *     durabilityComponent.damage = durabilityComponent.maxDurability / 2;
     *   }
     *
     *   for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     if (inventory && inventory.container) {
     *       inventory.container.addItem(hurtDiamondSword);
     *     }
     *   }
     * }
     * ```
     */
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;
    /**
     * @remarks
     * 返回此物品实例上存在的所有脚本组件。
     *
     * @returns
     * 此物品实例上存在的所有脚本组件数组。
     */
    getComponents(): ItemComponent[];
    /**
     * @remarks
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回该属性的值；如果尚未设置该属性，则返回 undefined。
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回此实体上已使用的可用动态属性标识符集合。
     *
     * @returns
     * 此实体上设置的动态属性的字符串数组。
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回当前为此实体存储的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告信号可能很有用——例如，如果实体有大量关联的动态属性，可能在不同设备上加载缓慢。
     *
     * @returns
     * 所有动态属性的总字节数。
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 返回物品实例的 lore 值——辅助显示字符串。
     *
     * @returns
     * 一组 lore 行。如果物品没有 lore，则返回空数组。
     */
    getLore(): string[];
    /**
     * @remarks
     * 返回物品实例的 lore 值——辅助显示字符串。字符串类型的 lore 行将被转换为 {@link RawMessage}，并放在 {@link RawMessage.text} 下。
     *
     * @returns
     * 一组 lore 行。如果物品没有 lore，则返回空数组。
     */
}

    getRawLore(): RawMessage[];
    /**
     * @remarks
     * 返回与此物品堆叠相关联的一组标签。
     *
     * @returns
     * 与此物品堆叠关联的标签数组。
     */
    getTags(): string[];
    /**
     * @remarks
     * 如果此物品堆叠上存在指定的组件，则返回 true。
     *
     * @param componentId
     * 要检索的组件标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
     * @returns
     * 如果组件存在，则返回 true；否则返回 false。
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * 检查此物品堆叠是否具有特定关联标签。
     *
     * @param tag
     * 要搜索的标签。
     * @returns
     * 如果物品堆叠具有关联的标签，则返回 true；否则返回 false。
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。这是通过比较物品类型以及与物品堆叠关联的任何自定义数据和属性来确定的。每个物品堆叠的数量不予考虑，但对于不可堆叠的物品，此函数将始终返回 false。
     *
     * @param itemStack
     * 要检查堆叠兼容性的物品堆叠。
     * @returns
     * 如果物品堆叠可以与传入的 itemStack 堆叠，则返回 true。对于不可堆叠的物品，返回 false。
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 检查物品是否匹配的版本安全方式。
     *
     * @param itemName
     * 物品的标识符。
     * @param states
     * 仅适用于方块。要进行比较的可选状态集。如果未指定 states，则更广泛地检查类型集合。
     * @returns
     * 返回指定的物品是否匹配的布尔值。
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * 此物品在冒险模式下可以破坏的方块类型列表。方块名称显示在物品的工具提示中。将该值设置为 undefined 将清除列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockIdentifiers
     * 物品可以破坏的方块类型的字符串列表。
     * @throws
     * 如果提供的任何方块标识符无效，则抛出错误。
     * @example giveDestroyRestrictedPickaxe.ts
     * ```typescript
     * import { world, ItemStack, EntityInventoryComponent, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function giveDestroyRestrictedPickaxe(targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     const specialPickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe);
     *     specialPickaxe.setCanDestroy([MinecraftItemTypes.Cobblestone, MinecraftItemTypes.Obsidian]);
     *
     *     const inventory = player.getComponent('inventory') as EntityInventoryComponent;
     *     if (inventory === undefined || inventory.container === undefined) {
     *       return;
     *     }
     *
     *     inventory.container.addItem(specialPickaxe);
     *   }
     * }
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 此物品在冒险模式下可以放置在其上的方块类型列表。这仅适用于方块物品。方块名称显示在物品的工具提示中。将该值设置为 undefined 将清除列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockIdentifiers
     * 物品可以放置在其上的方块类型的字符串列表。
     * @throws
     * 如果提供的任何方块标识符无效，则抛出错误。
     * @example givePlaceRestrictedGoldBlock.ts
     * ```typescript
     * import { world, ItemStack, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function givePlaceRestrictedGoldBlock(targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     const specialGoldBlock = new ItemStack(MinecraftItemTypes.GoldBlock);
     *     specialGoldBlock.setCanPlaceOn([MinecraftItemTypes.GrassBlock, MinecraftItemTypes.Dirt]);
     *
     *     const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     if (inventory === undefined || inventory.container === undefined) {
     *       return;
     *     }
     *
     *     inventory.container.addItem(specialGoldBlock);
     *   }
     * }
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 使用特定值设置多个动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果数据值为 null，则将改为删除该属性。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 将指定属性设置为一个值。注意：此函数仅适用于不可堆叠的物品。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性的数据值。如果值为 null，则将改为删除该属性。
     * @throws
     * 如果物品堆叠是可堆叠的，则抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 设置 ItemStack 的 lore 值（辅助显示字符串）。如果设置为空字符串或 undefined，则清除 lore 列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param loreList
     * lore 行列表。列表中的每个元素代表新的一行。最大 lore 行数为 20。最大 lore 行长度为 50 个字符。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     * @example diamondAwesomeSword.ts
     * ```typescript
     * import { EntityComponentTypes, ItemStack, Player } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function giveAwesomeSword(player: Player) {
     *   const diamondAwesomeSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
     *   diamondAwesomeSword.setLore(['§c§lDiamond Sword of Awesome§r', '+10 coolness', '§p+4 shiny§r']);
     *
     *   // hover over/select the item in your inventory to see the lore.
     *   const inventory = player.getComponent(EntityComponentTypes.Inventory);
     *   if (inventory === undefined || inventory.container === undefined) {
     *     return;
     *   }
     *
     *   inventory.container.setItem(0, diamondAwesomeSword);
     * }
     * ```
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}