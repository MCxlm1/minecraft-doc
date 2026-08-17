/**
 * 用于访问所有药水效果类型、递送类型以及创建药水。
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * 获取所有已注册的药水递送类型的句柄。
     *
     * @returns
     * 所有已注册的递送类型句柄的数组。
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * 获取所有已注册的药水效果的类型句柄。
     *
     * @returns
     * 所有已注册的效果类型句柄的数组。
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * 获取指定药水递送 ID 的类型句柄。
     *
     * @param potionDeliveryId
     * 药水递送 ID。
     * @returns
     * 一个包装了有效递送 ID 的类型句柄，如果递送 ID 无效则返回 undefined。
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * 获取指定药水效果 ID 的类型句柄。
     *
     * @param potionEffectId
     * 一个有效的药水效果 ID。参见 @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * 一个包装了有效效果 ID 的类型句柄，如果效果 ID 无效则返回 undefined。
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * 根据给定的效果和递送类型创建一个药水。
     *
     * @param potionEffectType
     * 药水效果类型或效果类型 ID。
     * @param potionDeliveryType
     * 药水递送类型或递送类型 ID。
     * @returns
     * 返回一个表示药水的物品实例（ItemStack）。
     * @throws 当提供的药水效果类型或递送类型无效时，抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidPotionDeliveryTypeError}
     *
     * {@link InvalidPotionEffectTypeError}
     */
    static resolve<
        T extends string = minecraftvanilladata.MinecraftPotionEffectTypes,
        U extends string = minecraftvanilladata.MinecraftPotionDeliveryTypes,
    >(potionEffectType: PotionEffectType | T, potionDeliveryType: PotionDeliveryType | U): ItemStack;
}