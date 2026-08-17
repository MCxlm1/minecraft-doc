/**
 * 提供对生物装备槽的访问。该组件
 * 存在于玩家实体上。
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
     * 返回拥有者的总护甲等级。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回拥有者的总韧性等级。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * 获取指定装备槽的已装备物品。
     *
     * @param equipmentSlot
     * 装备槽，例如 "head", "chest", "offhand"
     * @returns
     * 返回指定装备槽的已装备物品。如果
     * 为空，则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取与指定装备槽对应的 ContainerSlot。
     *
     * @param equipmentSlot
     * 装备槽，例如 "head", "chest", "offhand"。
     * @returns
     * 返回与指定装备槽对应的
     * ContainerSlot。
     * @throws 此函数可能抛出错误。
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换指定装备槽中的物品。
     *
     * 此函数不能在受限执行模式下调用
     *
     * @param equipmentSlot
     * 装备槽，例如 "head", "chest", "offhand"。
     * @param itemStack
     * 要装备的物品。如果为 undefined，则清空该槽位。
     * @throws 此函数可能抛出错误。
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}