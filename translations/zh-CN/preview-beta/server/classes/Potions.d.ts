/**
 * 用于访问所有药水效果类型、递送类型，
 * 以及创建药水。
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * 获取所有已注册的药水递送类型的句柄。
     *
     * @returns
     * 所有已注册递送类型句柄的数组。
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * 获取所有已注册药水效果的类型句柄。
     *
     * @returns
     * 所有已注册效果类型句柄的数组。
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * 获取指定药水递送 ID 的类型句柄。
     *
     * @param potionDeliveryId
     * 要查询的药水递送 ID。
     *
     * @returns
     * 包装有效递送 ID 的类型句柄；若递送 ID 无效，则返回 undefined。
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * 获取指定药水效果 ID 的类型句柄。
     *
     * @param potionEffectId
     * 有效的药水效果 ID。参见
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * 包装有效效果 ID 的类型句柄；若效果 ID 无效，
     * 则返回 undefined。
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * 根据效果和递送类型创建药水。
     *
     * @param potionEffectType
     * 要使用的药水效果类型或有效的效果 ID。
     * @param potionDeliveryType
     * 要使用的药水递送类型或有效的递送 ID。
     * @returns
     * 包含所创建药水的物品实例。
     * @throws
     * 此函数可能抛出错误。
     *
     * 如果 `potionEffectType` 不是有效的药水效果类型，则抛出 {@link InvalidPotionEffectTypeError}。
     *
     * 如果 `potionDeliveryType` 不是有效的药水递送类型，则抛出 {@link InvalidPotionDeliveryTypeError}。
     *
     * 如果发生其他引擎错误，则抛出 {@link minecraftcommon.EngineError}。
     */
    static resolve<
        T extends string = minecraftvanilladata.MinecraftPotionEffectTypes,
        U extends string = minecraftvanilladata.MinecraftPotionDeliveryTypes,
    >(potionEffectType: PotionEffectType | T, potionDeliveryType: PotionDeliveryType | U): ItemStack;
}