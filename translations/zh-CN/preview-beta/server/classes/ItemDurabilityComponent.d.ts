/**
 * 当此组件存在于物品上时，该物品在使用过程中会损耗耐久度。
 * 注意：此组件仅适用于数据驱动物品。
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
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 返回该物品当前的损耗值。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示该物品在损坏前所能承受的损耗量。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly maxDurability: number;
    /**
     * @remarks
     * 物品是否会在耐久度耗尽时损坏或失去耐久度。设为 true 会暂时移除物品的耐久度 HUD，并冻结物品的耐久度损耗。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 根据 damageRange 属性，返回在给定“耐久”附魔等级下该物品受到损坏的最大概率。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param unbreakingEnchantmentLevel
     * 计算损坏概率时考虑的“耐久”等级。传入的“耐久”参数必须在 [0, 3] 范围内。
     * 默认值：0
     * 范围：[0, 3]
     * @returns 该物品受到损坏的最大概率。
     * @throws 此函数可能抛出错误。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 用于计算物品损坏概率的数字范围。损坏概率将落在此范围内。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 物品损坏概率的范围。
     * @throws 此函数可能抛出错误。
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}