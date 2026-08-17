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
     * 该附魔类型可拥有的最大等级。
     *
     */
    readonly maxLevel: number;
    /**
     * @param enchantmentType - 附魔类型的字符串标识符。
     * @throws 如果传入的附魔类型标识无效，将抛出错误。
     */
    constructor(enchantmentType: string);
}