/**
 * 包含该世界中可用的 Minecraft 附魔类型目录。
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * 获取具有指定标识符的附魔。
     *
     * @param enchantmentId
     * 附魔的标识符。例如，"minecraft:flame"。
     * @returns
     * 如果可用，返回一个表示指定附魔的 EnchantmentType 对象。
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
    /**
     * @remarks
     * 返回所有可用附魔类型的集合。
     *
     */
    static getAll(): EnchantmentType[];
}