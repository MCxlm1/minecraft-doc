/**
 * 用于访问所有药水效果类型、递送类型以及创建药水。
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * 获取所有已注册药水递送类型的句柄。
     *
     * @returns
     * 包含所有已注册递送类型句柄的数组。
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * 获取所有已注册药水效果的类型句柄。
     *
     * @returns
     * 包含所有已注册效果类型句柄的数组。
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * 检索指定药水递送 ID 的类型句柄。
     *
     * @param potionDeliveryId
     * 要获取类型句柄的药水递送 ID。
     *
     * @returns
     * 封装有效递送 ID 的类型句柄，若递送 ID 无效则为 undefined。
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * 检索指定药水效果 ID 的类型句柄。
     *
     * @param potionEffectId
     * 有效的药水效果 ID。参见
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes
     *
     * @returns
     * 封装有效效果 ID 的类型句柄，若效果 ID 无效则为 undefined。
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * 根据给定的效果和递送类型创建药水。
     *
     * @param potionEffectType
     * 药水效果类型句柄或效果 ID 字符串。
     *
     * @param potionDeliveryType
     * 药水递送类型句柄或递送 ID 字符串。
     *
     * @returns
     * 表示所创建药水的 ItemStack。
     *
     * @throws 此函数可能会抛出错误。
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