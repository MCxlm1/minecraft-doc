/**
 * 当存在于物品上时，该物品在使用过程中可能会受到损坏。请注意，此组件仅适用于数据驱动物品。
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
     * 返回此物品当前的损坏等级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示此物品在损坏前可以承受的伤害量。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly maxDurability: number;
    /**
     * @remarks
     * 物品是否会损坏或失去耐久度。设置为 true 会暂时移除物品的耐久度 HUD，并冻结物品的耐久度损失。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回在给定耐久附魔等级下，使用 damageRange 属性计算得出的此物品受到损坏的最大几率。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param unbreakingEnchantmentLevel
     * 计算损坏几率时要考虑的耐久附魔等级。传入的 unbreaking 参数必须处于 [0, 3] 范围内。
     * 默认值：0
     * 范围：[0, 3]
     * @returns 返回此物品受到损坏的最大几率。
     * @throws 如果 unbreakingEnchantmentLevel 不在 [0, 3] 范围内，则抛出错误。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 用于计算物品损坏几率的数字范围。损坏几率将落在此范围内。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回物品损坏几率的数字范围。
     * @throws 此函数可能抛出错误。
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}