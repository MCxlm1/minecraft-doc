/**
 * 用于访问世界中当前所有可用的实体类型。
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * 使用基于字符串的标识符检索实体类型。
     * @param identifier - 基于字符串的实体类型标识符。
     * @returns 返回对应的 EntityType 对象，如果未找到则返回 undefined。
     */
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
    /**
     * @remarks
     * 检索世界中所有实体类型的集合。
     * @returns 返回一个包含所有实体类型的数组。
     */
    static getAll(): EntityType[];
}