/**
 * 返回 Minecraft 中注册的物品类型集合。
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * 返回 Minecraft 中可用的特定物品类型。
     *
     * @param itemId 物品标识符。
     * @returns 若存在对应的物品类型则返回该类型，否则返回 undefined。
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * 获取 Minecraft 中注册的所有可用物品类型。
     *
     * @returns 所有可用物品类型的数组。
     */
    static getAll(): ItemType[];
}