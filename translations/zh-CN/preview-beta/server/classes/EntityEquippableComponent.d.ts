/**
 * 提供对生物装备槽的访问。该组件存在于玩家实体上。
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
     * 返回该实体的总盔甲等级。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回该实体的总韧性等级。
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
     * 装备槽，例如 "head"、"chest"、"offhand"。
     * @returns
     * 返回指定装备槽的已装备物品。如果为空，则返回 undefined。
     * @throws 此函数可能抛出错误。
     * @throws 当实体无效时抛出 {@link InvalidEntityError}。
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取指定装备槽对应的 ContainerSlot。
     *
     * @param equipmentSlot
     * 装备槽，例如 "head"、"chest"、"offhand"。
     * @returns
     * 返回指定装备槽对应的 ContainerSlot。
     * @throws 此函数可能抛出错误。
     * @throws 当实体无效时抛出 {@link InvalidEntityError}。
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换指定装备槽中的物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param equipmentSlot
     * 装备槽，例如 "head"、"chest"、"offhand"。
     * @param itemStack
     * 要装备的物品。如果为 undefined，则清除该槽位。
     * @returns
     * 返回操作是否成功。
     * @throws 此函数可能抛出错误。
     * @throws 当实体无效时抛出 {@link InvalidEntityError}。
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}