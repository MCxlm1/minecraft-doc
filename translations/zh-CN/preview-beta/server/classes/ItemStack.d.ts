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
     * 物品实例中的物品数量。有效值范围在
     * 1-255 之间。提供的值会被限制到物品的
     * 最大堆叠数量。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * 取值范围：[1, 255]
     * @throws
     * 如果值超出 1-255 的范围，则抛出异常。
     */
    amount: number;

    /**
     * @remarks
     * 返回该物品是否可堆叠。如果物品的最大堆叠数量大于 1，
     * 且不包含任何自定义数据或属性，则认为该物品可堆叠。
     *
     */
    readonly isStackable: boolean;

    /**
     * @remarks
     * 获取或设置该物品在死亡时是否保留。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    keepOnDeath: boolean;

    /**
     * @remarks
     * 用于 .lang 文件中本地化该物品名称的键。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly localizationKey: string;

    /**
     * @remarks
     * 获取或设置物品的锁定模式。默认值为
     * `ItemLockMode.none`。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    lockMode: ItemLockMode;

    /**
     * @remarks
     * 最大堆叠数量。该值根据物品类型而变化。
     * 例如，火把的最大堆叠数量为 64，
     * 而鸡蛋的最大堆叠数量为 16。
     *
     */
    readonly maxAmount: number;

    /**
     * @remarks
     * 该物品实例的给定名称。当悬停在物品上时会显示名称标签。
     * 将名称标签设置为空字符串或 `undefined` 会移除名称标签。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果长度超过 255 个字符，则抛出异常。
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
     * 该物品实例的类型标识符。如果未指定
     * 命名空间，则假定为 'minecraft:'。
     * 示例包括 'wheat' 或 'apple'。
     *
     */
    readonly typeId: string;

    /**
     * @remarks
     * 物品实例中所有物品的总重量，加上由
     * `Storage Item` 组件定义的物品容器中所有物品的重量。每个物品的重量可通过
     * `Storage Weight Modifier` 组件修改。
     *
     */
    readonly weight: number;

    /**
     * @remarks
     * 创建一个新的物品实例，用于世界中。
     *
     * @param itemType
     * 要创建的物品类型。参见 {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} 枚举，获取 Minecraft 体验中标准物品类型的列表。
     * @param amount
     * 物品实例中物品的数量，范围 1-255。
     * 提供的值会被限制到物品的最大堆叠
     * 数量。注意，某些物品只能有一个物品在
     * 物品实例中。
     * 默认值：1
     * 取值范围：[1, 255]
     * @throws
     * 如果 `itemType` 无效，或 `amount` 超出 1-255 的范围，则抛出异常。
     */
    constructor(itemType: ItemType | string, amount?: number);

    /**
     * @remarks
     * 清除设置在此物品实例上的所有动态属性。
     *
     */
    clearDynamicProperties(): void;

    /**
     * @remarks
     * 创建物品实例的精确副本，包括所有
     * 自定义数据或属性。
     *
     * @returns
     * 返回该物品实例的一个副本。
     */
    clone(): ItemStack;

    /**
     * @remarks
     * 获取该物品在冒险模式下能破坏的方块类型列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 返回该物品可破坏的方块类型列表。
     */
    getCanDestroy(): string[];

    /**
     * @remarks
     * 获取该物品在冒险模式下可放置在上面的方块类型列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 返回该物品可放置在上面的方块类型列表。
     */
    getCanPlaceOn(): string[];

    /**
     * @remarks
     * 获取物品实例的一个组件（该组件表示额外的能力）。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:food'）。如果未指定
     * 命名空间前缀，则假定为 'minecraft:'。
     * 可用的组件 ID 在 {@link
     * ItemComponentTypes} 枚举中，以及通过 {@link
     * ItemComponentRegistry} 注册的自定义组件 ID。
     * @returns
     * 如果组件存在于物品实例上则返回该组件，否则返回 undefined。
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
     * 返回该物品实例上存在的所有组件。
     */
    getComponents(): ItemComponent[];

    /**
     * @remarks
     * 返回一个属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回该属性的值，如果属性未设置则返回 undefined。
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;

    /**
     * @remarks
     * 返回此物品实例上已使用的可用动态属性标识符集合。
     *
     * @returns
     * 此物品实例上设置的动态属性的字符串数组。
     */
    getDynamicPropertyIds(): string[];

    /**
     * @remarks
     * 返回当前为此物品实例存储的所有动态属性的总大小（以字节为单位）。
     * 这包括键和值的大小。这可用于诊断性能警告信号 - 例如，
     * 如果物品实例具有许多兆字节的相关动态属性，则在各种设备上加载可能会很慢。
     *
     * @returns
     * 所有动态属性的总字节数。
     */
    getDynamicPropertyTotalByteCount(): number;

    /**
     * @remarks
     * 返回一个 ItemStack 的 lore 值 - 次级显示字符串。
     *
     * @returns
     * lore 行的数组。如果物品没有 lore，则返回空数组。
     */
    getLore(): string[];

/**
     * @remarks
     * 返回物品堆（ItemStack）的 lore 值——一个次要显示字符串。字符串 lore 行将被转换为 {@link
     * RawMessage} 并放入 {@link RawMessage.text} 下。
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
     * 如果指定的组件存在于该物品堆上，则返回 true。
     *
     * @param componentId
     * 要获取的组件标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
     * @returns
     * 如果组件存在则返回 true，否则返回 false。
     */
    hasComponent(componentId: string): boolean;

    /**
     * @remarks
     * 检查该物品堆是否有特定的关联标签。
     *
     * @param tag
     * 要搜索的标签。
     * @returns
     * 如果物品堆有该标签则返回 true，否则返回 false。
     */
    hasTag(tag: string): boolean;

    /**
     * @remarks
     * 返回该物品堆是否可与给定的 `itemStack` 堆叠。通过比较物品类型以及关联的自定义数据和属性来确定。不考虑每个物品堆的数量，但对于不可堆叠的物品，始终返回 false。
     *
     * @param itemStack
     * 要检查堆叠兼容性的物品堆。
     * @returns
     * 如果物品堆与传入的 itemStack 可堆叠则返回 true。对于不可堆叠的物品返回 false。
     */
    isStackableWith(itemStack: ItemStack): boolean;

    /**
     * @remarks
     * 检查物品是否匹配的版本安全方式。
     *
     * @param itemName
     * 物品的标识符。
     * @param states
     * 仅适用于方块。一组可选的待比较状态。如果未指定 states，则匹配检查更广泛地针对类型集合。
     * @returns
     * 返回指定物品是否匹配的布尔值。
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;

    /**
     * @remarks
     * 该物品在冒险模式下可以破坏的方块类型列表。方块名称会显示在物品的工具提示中。将该值设置为 undefined 将清除列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockIdentifiers
     * 该物品可以破坏的方块类型的字符串列表。
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
     * 该物品在冒险模式下可以放置的方块类型列表。仅适用于方块物品。方块名称会显示在物品的工具提示中。将该值设置为 undefined 将清除列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockIdentifiers
     * 该物品可以放置的方块类型的字符串列表。
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
     * 要设置的动态属性的键值对记录。如果数据值为 null，则将删除该属性。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;

    /**
     * @remarks
     * 将指定属性设置为某个值。注意：此函数仅适用于不可堆叠的物品。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置属性的数据值。如果值为 null，则将删除该属性。
     * @throws
     * 如果物品堆可堆叠则抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;

    /**
     * @remarks
     * 设置物品堆的 lore 值——一个次要显示字符串。如果设置为空字符串或 undefined，则 lore 列表将被清除。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param loreList
     * lore 行列表。列表中的每个元素代表一行新行。最大 lore 行数为 20。最大 lore 行长度为 50 个字符。
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