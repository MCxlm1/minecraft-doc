/**
 * 包含有关一种附魔类型的信息。
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
     * 此附魔类型可拥有的最大等级。
     *
     */
    readonly maxLevel: number;
    /**
     * @param enchantmentType 附魔类型的标识符。
     * @throws 如果传入的 enchantmentType 不是有效的附魔类型标识符。
     */
    constructor(enchantmentType: string);
}