/**
 * 当物品上存在此组件时，该物品在使用过程中会受损。注意，此组件仅适用于数据驱动物品。
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
     * 返回该特定物品的当前损伤值。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示该物品在损坏前可以承受的损伤量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly maxDurability: number;
    /**
     * @remarks
     * 表示物品是否损坏或损失耐久度。设置为true会暂时移除物品的耐久度HUD，并冻结物品的耐久度损失。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回根据damageRange属性，在给定一个耐久附魔等级时，该物品受损的最大概率。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param unbreakingEnchantmentLevel
     * 考虑损伤概率时的耐久附魔因子。传入的unbreaking参数必须在[0, 3]范围内。
     * 默认值：0
     * 范围：[0, 3]
     * @throws 此函数可能抛出错误。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 用于计算物品损伤概率的数字范围。损伤概率将落在这个范围内。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}