/**
 * 定义一个物品集合。
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
     * 物品堆叠中的物品数量。有效值范围为 1-255。提供的值将被限制到物品的最大堆叠大小。
     *
     * 此属性在限制执行模式下无法编辑。
     *
     * 范围：[1, 255]
     * @throws
     * 如果值超出 1-255 范围则抛出异常。
     */
    amount: number;

    /**
     * @remarks
     * 返回物品是否可堆叠。如果物品的最大堆叠大小大于 1 且不包含任何自定义数据或属性，则该物品被视为可堆叠。
     *
     */
    readonly isStackable: boolean;

    /**
     * @remarks
     * 获取或设置物品是否在死亡时保留。
     *
     * 此属性在限制执行模式下无法编辑。
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
     * 此属性在限制执行模式下无法编辑。
     *
     */
    lockMode: ItemLockMode;

    /**
     * @remarks
     * 最大堆叠大小。该值根据物品类型而不同。例如，火把的最大堆叠大小为 64，而鸡蛋的最大堆叠大小为 16。
     *
     */
    readonly maxAmount: number;

    /**
     * @remarks
     * 此物品堆叠的给定名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除名称标签。
     *
     * 此属性在限制执行模式下无法编辑。
     *
     * @throws
     * 如果长度超过 255 个字符则抛出异常。
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
     * 物品堆叠类型的标识符。如果未指定命名空间，则默认为 'minecraft:'。示例包括 'wheat' 或 'apple'。
     *
     */
    readonly typeId: string;

    /**
     * @remarks
     * 物品堆叠中所有物品的总重量，加上由 `Storage Item` 组件定义的物品容器中所有物品的重量。每个物品的重量可通过 `Storage Weight Modifier` 组件修改。
     *
     */
    readonly weight: number;

    /**
     * @remarks
     * 创建一个新的物品堆叠实例，用于在游戏世界中。
     *
     * @param itemType
     * 要创建的物品类型。请参阅 {@link @minecraft/vanilla-data.MinecraftItemTypes} 枚举，了解 Minecraft 体验中的标准物品类型列表。
     * @param amount
     * 物品堆叠中的物品数量，范围 1-255。提供的值将被限制到物品的最大堆叠大小。注意某些物品只能有一个物品在堆叠中。
     * 默认值：1
     * 范围：[1, 255]
     * @throws
     * 如果 `itemType` 无效，或 `amount` 超出 1-255 范围，则抛出异常。
     */
    constructor(itemType: ItemType | string, amount?: number);

    /**
     * @remarks
     * 清除此物品堆叠上设置的所有动态属性。
     *
     */
    clearDynamicProperties(): void;

    /**
     * @remarks
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * @returns
     * 返回此物品堆叠的副本。
     */
    clone(): ItemStack;

    /**
     * @remarks
     * 获取此物品在冒险模式下可以破坏的方块类型列表。
     *
     * 此函数在限制执行模式下无法调用。
     *
     */
    getCanDestroy(): string[];

    /**
     * @remarks
     * 获取此物品在冒险模式下可以放置在其上的方块类型列表。
     *
     * 此函数在限制执行模式下无法调用。
     *
     */
    getCanPlaceOn(): string[];

    /**
     * @remarks
     * 获取物品堆叠的组件（表示附加能力）。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则默认为 'minecraft:'。可用的组件 ID 包括 {@link ItemComponentTypes} 枚举中的 ID 以及通过 {@link ItemComponentRegistry} 注册的自定义组件 ID。
     * @returns
     * 如果组件存在于物品堆叠上，则返回该组件，否则返回 undefined。
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
     * 返回此物品堆叠上存在的所有脚本组件。
     *
     */
    getComponents(): ItemComponent[];

    /**
     * @remarks
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回属性的值，如果属性未设置，则返回 undefined。
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;

    /**
     * @remarks
     * 返回此实体上已使用的可用动态属性标识符集合。
     *
     * @returns
     * 此实体上设置的动态属性字符串数组。
     */
    getDynamicPropertyIds(): string[];

    /**
     * @remarks
     * 返回当前为此实体存储的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告信号可能很有用 - 例如，如果实体有大量关联的动态属性（数兆字节），则可能在不同设备上加载缓慢。
     *
     */
    getDynamicPropertyTotalByteCount(): number;

    /**
     * @remarks
     * 返回 ItemStack 的 lore 值（次要显示字符串）。
     *
     * @returns
     * 一个 lore 行数组。如果物品没有 lore，则返回空数组。
     */
    getLore(): string[];

/**
     * @remarks
     * 返回物品实例的 lore 值——一个次要显示字符串。
     * 字符串形式的 lore 行将转换为 {@link RawMessage} 并置于 {@link RawMessage.text} 下。
     *
     * @returns
     * 一个 lore 行数组。如果物品没有 lore，则返回空数组。
     */
    getRawLore(): RawMessage[];

    /**
     * @remarks
     * 返回与此物品堆关联的一组标签。
     *
     */
    getTags(): string[];

    /**
     * @remarks
     * 如果指定组件存在于该物品堆上，则返回 true。
     *
     * @param componentId
     * 要获取的组件标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则默认为 'minecraft:'。
     * @returns
     * 如果组件存在则返回 true，否则返回 false。
     */
    hasComponent(componentId: string): boolean;

    /**
     * @remarks
     * 检查此物品堆是否具有特定的关联标签。
     *
     * @param tag
     * 要搜索的标签。
     * @returns
     * 如果物品堆有关联标签则返回 true，否则返回 false。
     */
    hasTag(tag: string): boolean;

    /**
     * @remarks
     * 返回此物品堆是否可与给定的 `itemStack` 堆叠。通过比较物品类型以及物品堆关联的自定义数据和属性来确定。不考虑每个物品堆的数量，但对于不可堆叠的物品，始终返回 false。
     *
     * @param itemStack
     * 要检查堆叠兼容性的物品堆。
     * @returns
     * 如果物品堆与传入的 itemStack 可堆叠则返回 true；对于不可堆叠的物品返回 false。
     */
    isStackableWith(itemStack: ItemStack): boolean;

    /**
     * @remarks
     * 版本安全的检查物品是否匹配的方法。
     *
     * @param itemName
     * 物品的标识符。
     * @param states
     *  仅适用于方块。一组可选的用于比较的状态。如果未指定 states，则更广泛地匹配类型集合。
     * @returns
     * 返回一个布尔值，指示指定的物品是否匹配。
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;

    /**
     * @remarks
     * 在冒险模式下此物品可破坏的方块类型列表。方块名称会显示在物品的工具提示中。将值设置为 undefined 将清除列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param blockIdentifiers
     * 此物品可破坏的方块类型字符串列表。
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
     * 在冒险模式下此物品可放置的方块类型列表。仅适用于方块物品。方块名称会显示在物品的工具提示中。将值设置为 undefined 将清除列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param blockIdentifiers
     * 此物品可放置的方块类型字符串列表。
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
     * 设置多个具有特定值的动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果数据值为 null，则移除该属性。
     * @throws 此函数可能抛出错误。
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
     * 要设置的属性的数据值。如果值为 null，则移除该属性。
     * @throws
     * 如果物品堆是可堆叠的，则抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;

    /**
     * @remarks
     * 设置物品实例的 lore 值——一个次要显示字符串。如果设置为空字符串或 undefined，则清除 lore 列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param loreList
     * lore 行列表。列表中的每个元素代表一个新行。最大 lore 行数为 20，最大 lore 行长度为 50 个字符。
     * @throws 此函数可能抛出错误。
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