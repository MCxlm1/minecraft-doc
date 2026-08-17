/**
 * 用于访问世界中当前所有可用的实体类型。
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * 使用字符串标识符获取实体类型。
     *
     * @param identifier 实体类型的字符串标识符。
     * @returns 如果找到则返回对应的实体类型，否则返回 undefined。
     */
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
    /**
     * @remarks
     * 获取此世界中的所有实体类型。
     *
     * @returns 包含此世界中所有实体类型的数组。
     */
    static getAll(): EntityType[];
}