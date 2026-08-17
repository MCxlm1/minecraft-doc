/**
 * 包含一种附魔类型的信息。
 */
export class EnchantmentType {
    /**
     * @remarks
     * 附魔类型的名称。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 此类附魔可以达到的最大等级。
     *
     */
    readonly maxLevel: number;
    /**
     * @param enchantmentType - 附魔类型名称。
     * @throws 此函数可能会抛出错误。
     */
    constructor(enchantmentType: string);
}