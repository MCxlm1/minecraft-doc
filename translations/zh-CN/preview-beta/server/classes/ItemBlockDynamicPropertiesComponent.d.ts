/**
 * @beta
 * 表示方块的动态属性。仅可从方块实体获取。
 * 每个内容包在每个方块实体的动态属性存储中最多可存储 1KB 数据。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBlockDynamicPropertiesComponent extends ItemComponent {
    private constructor();
    static readonly componentId = 'minecraft:block_actor_dynamic_properties';
    /**
     * @remarks
     * 返回使用提供的键存储的动态属性。键对每个内容包唯一，
     * 不能用于检索其他内容包设置的动态属性。如果未找到该键，则返回 undefined。
     *
     * @param key - 要获取的动态属性的键。
     * @returns - 返回与键关联的动态属性值；如果未找到键，则返回 undefined。
     * @throws - 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。键对每个内容包唯一，
     * 不能用于为其他内容包设置动态属性。值可以是数字、字符串或 Vector3。
     * 将属性设置为 undefined 会将其从存储中移除。
     * 存储大小使用会计入每个内容包 1KB 的限制。
     *
     * @param key - 要设置的动态属性的键。
     * @param value - 要设置的动态属性的值，可以是数字、字符串或 Vector3；设置为 undefined 时移除该属性。
     * @throws - 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块动态属性存储的当前大小（以字节为单位）。
     * 字节数仅计入你的内容包设置的属性。
     * 1KB 限制是每个内容包的限制。
     *
     * @returns - 此方块动态属性存储的当前字节大小。
     * @throws - 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    totalByteCount(): number;
}