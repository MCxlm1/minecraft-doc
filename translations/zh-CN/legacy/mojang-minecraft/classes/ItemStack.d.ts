/**
 * @symbol ItemStack
 * @description 定义一组物品的集合。
 */
export class ItemStack {
    /**
     * 堆叠中物品的数量。有效值范围为 0 到 64。
     */
    "amount": number;
    /**
     * 用于配置物品不同状态的数据值。
     */
    "data": number;
    /**
     * 物品堆叠类型的标识符。如果未指定命名空间，则默认使用 'minecraft:'。
     * 示例包括 'wheat' 或 'apple'。
     */
    readonly "id": string;
    /**
     * 此物品堆叠的自定义名称。
     */
    "nameTag"?: string;

    /**
     * @remarks
     * 创建新的物品堆叠实例供世界中使用。
     * @param itemType 要创建的物品类型。
     * @param amount 堆叠中的物品数量，介于 1 到 64 之间。
     * @param data 用于创建物品的数据值，默认为 0。
     */
    constructor(itemType: ItemType, amount?: number, data?: number);

    /**
     * @remarks
     * 获取物品堆叠的组件（表示附加能力）。
     * @param componentId 要获取的组件标识符。
     * @returns 如果物品堆叠上存在该组件则返回组件对象，否则返回 undefined。
     */
    getComponent(componentId: string): any;

    /**
     * @remarks
     * 返回此物品堆叠上存在且 API 支持的所有组件。
     */
    getComponents(): any[];

    /**
     * @remarks
     * 获取物品堆叠的 lore 值（辅助显示字符串）。
     */
    getLore(): string[];

    /**
     * @remarks
     * 检查指定组件是否存在于物品堆叠上。
     * @param componentId 要检查的组件标识符。
     */
    hasComponent(componentId: string): boolean;

    /**
     * @remarks
     * 设置物品堆叠的 lore 值（辅助显示字符串）。
     * @param loreList lore 字符串列表。
     */
    setLore(loreList: string[]): void;

    /**
     * @remarks
     * 触发物品类型事件。对于自定义物品，定义中定义了一些事件用于关键物品行为。
     * @param eventName 要触发的物品类型事件名称。
     */
    triggerEvent(eventName: string): void;
}
