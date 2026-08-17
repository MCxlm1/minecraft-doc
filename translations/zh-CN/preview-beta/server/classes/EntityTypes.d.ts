/**
 * 用于访问当前世界中所有可用的实体类型。
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * 使用基于字符串的标识符获取实体类型。
     *
     * @param identifier - 实体类型的字符串标识符。
     * @returns 如果找到，返回对应的实体类型；否则返回 undefined。
     */
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
    /**
     * @remarks
     * 获取这个世界中所有实体类型的集合。
     *
     * @returns 包含所有实体类型的数组。
     */
    static getAll(): EntityType[];
}