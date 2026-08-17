/**
 * 提供对生物装备槽的访问。此组件
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
     * 返回拥有者的总盔甲值。
     *
     * @throws 当实体无效时，此属性可能抛出 InvalidEntityError。
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回拥有者的总韧性值。
     *
     * @throws 当实体无效时，此属性可能抛出 InvalidEntityError。
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * 获取指定装备槽中的已装备物品。
     *
     * @param equipmentSlot
     * 装备槽。例如："head"、"chest"、"offhand"
     * @returns
     * 返回装备在该装备槽中的物品。如果为空，则返回 undefined。
     * @throws 当实体无效时，此函数可能抛出 InvalidEntityError。
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取与指定 EquipmentSlot 对应的 ContainerSlot。
     *
     * @param equipmentSlot
     * 装备槽。例如："head"、"chest"、"offhand"。
     * @returns
     * 返回与指定 EquipmentSlot 对应的 ContainerSlot。
     * @throws 当实体无效时，此函数可能抛出 InvalidEntityError。
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换指定 EquipmentSlot 中的物品。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param equipmentSlot
     * 装备槽。例如："head"、"chest"、"offhand"。
     * @param itemStack
     * 要装备的物品。如果为 undefined，则清空该槽位。
     * @returns
     * 如果装备设置成功，返回 true；否则返回 false。
     * @throws 当实体无效时，此函数可能抛出 InvalidEntityError。
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}