/**
 * 此接口表示特定等级附魔，
 * 应用于物品上。
 */
export interface Enchantment {
    /**
     * @remarks
     * 此附魔实例的等级。
     *
     */
    level: number;
    /**
     * @remarks
     * 此实例的附魔类型。
     *
     */
    type: EnchantmentType;
}