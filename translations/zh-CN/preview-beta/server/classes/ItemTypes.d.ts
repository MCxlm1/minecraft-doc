/**
 * 返回在 Minecraft 中注册的物品类型集合。
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * 返回 Minecraft 中可用的特定物品类型。
     *
     * @param itemId - 物品的字符串标识符。
     * @returns 如果找到，则返回对应的物品类型；否则返回 undefined。
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * 获取 Minecraft 中所有已注册的可用物品类型。
     *
     * @returns 所有物品类型的数组。
     */
    static getAll(): ItemType[];
}