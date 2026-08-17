/**
 * 返回在 Minecraft 中注册的所有物品类型集合。
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * 返回一个特定的物品类型（如果在 Minecraft 中可用）。
     *
     * @param itemId - 物品的标识符。
     * @returns 如果找到则返回物品类型，否则返回 undefined。
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * 获取在 Minecraft 中注册的所有可用物品类型。
     *
     * @returns 所有物品类型的数组。
     */
    static getAll(): ItemType[];
}