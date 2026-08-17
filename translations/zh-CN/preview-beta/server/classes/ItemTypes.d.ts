/**
 * 返回 Minecraft 中已注册的物品类型集合。
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定的物品类型，如果存在的话。
     * @param itemId - 物品的标识符字符串。
     * @returns 如果找到该物品类型，则返回对应的 ItemType 对象；否则返回 undefined。
     *
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * 检索所有在 Minecraft 中注册的
     * 可用物品类型。
     * @returns 所有可用物品类型的数组。
     *
     */
    static getAll(): ItemType[];
}