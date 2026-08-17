/**
 * 提供对生物装备槽位的访问。该组件存在于玩家实体上。
 * @example givePlayerElytra.ts
 * ```typescript
 * // Gives the player Elytra
 * import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function giveEquipment(player: Player) {
 *   const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
 *   if (equipmentCompPlayer) {
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));
 *   }
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回拥有者的总护甲值。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回拥有者的总韧性值。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * 获取指定装备槽位中已装备的物品。
     *
     * @param equipmentSlot
     * 装备槽位。例如 "head"、"chest"、"offhand"。
     * @returns
     * 返回指定装备槽位中已装备的物品。如果为空，则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取与给定装备槽位对应的 ContainerSlot。
     *
     * @param equipmentSlot
     * 装备槽位。例如 "head"、"chest"、"offhand"。
     * @returns
     * 返回与给定装备槽位对应的 ContainerSlot。
     * @throws 此函数可能抛出错误。
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换指定装备槽位中的物品。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param equipmentSlot
     * 装备槽位。例如 "head"、"chest"、"offhand"。
     * @param itemStack
     * 要装备的物品。如果为 undefined，则清空该槽位。
     * @throws 此函数可能抛出错误。
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}