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
     * 所有已注册递送类型句柄的数组。
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * 获取所有已注册的药水效果的类型句柄。
     *
     * @returns
     * 所有已注册效果类型句柄的数组。
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * 获取指定药水递送ID的类型句柄。
     *
     * @param potionDeliveryId
     * 一个有效的药水递送类型ID。
     * @returns
     * 包装有效递送ID的类型句柄，如果递送ID无效则返回undefined。
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * 获取指定药水效果ID的类型句柄。
     *
     * @param potionEffectId
     * 一个有效的药水效果ID。请参阅
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * 包装有效效果ID的类型句柄，如果效果ID无效则返回undefined。
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * 根据给定的效果和递送类型创建药水。
     *
     * @param potionEffectType
     * 要使用的药水效果类型，或一个有效的药水效果ID字符串。
     * @param potionDeliveryType
     * 要使用的药水递送类型，或一个有效的药水递送ID字符串。
     * @returns
     * 表示药水的物品实例。
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