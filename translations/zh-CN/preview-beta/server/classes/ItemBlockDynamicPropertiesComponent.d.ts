/**
 * @beta
 * 表示方块的动态属性。仅可从方块实体中获取。
 * 每个内容包在每个方块实体的动态属性存储中最多可存储 1KB 数据。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBlockDynamicPropertiesComponent extends ItemComponent {
    private constructor();
    static readonly componentId = 'minecraft:block_actor_dynamic_properties';
    /**
     * @remarks
     * 返回与指定键关联的动态属性。键对于每个内容包是唯一的，不能用于获取其他内容包设置的动态属性。
     * 如果未找到对应键，则返回 undefined。
     *
     * @param key 要检索的动态属性键。
     * @returns 存储的动态属性值；若未找到键，则返回 undefined。
     * @throws 可能抛出 {@link Error} 错误。若物品实例无效，则抛出 {@link InvalidItemStackError}。
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。键对于每个内容包是唯一的，不能用于设置其他内容包的动态属性。
     * 值可以是 Number、String 或 Vector3。将属性值设置为 undefined 会将其从存储中移除。
     * 存储大小计入每个内容包的 1KB 限制。
     *
     * @param key 要设置的动态属性键。
     * @param value 要设置的动态属性值；设置为 undefined 可移除该属性。
     * @throws 可能抛出 {@link Error} 错误。若物品实例无效，则抛出 {@link InvalidItemStackError}。
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块动态属性存储的当前大小（以字节为单位）。字节计数仅计算由你的内容包设置的属性。
     * 1KB 限制为每个内容包独立计算。
     *
     * @returns 动态属性存储的大小（以字节为单位）。
     * @throws 若物品实例无效，则抛出 {@link InvalidItemStackError}。
     */
    totalByteCount(): number;
}