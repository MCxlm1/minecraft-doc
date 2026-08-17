/**
 * 用于访问当前世界中所有可用的
 * 实体类型。
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * 通过字符串标识符检索实体类型。
     * @param identifier - 实体类型标识符。
     * @returns 返回对应的实体类型，如果未找到则返回 undefined。
     *
     */
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
    /**
     * @remarks
     * 检索当前世界中所有实体类型的集合。
     * @returns 返回当前世界中所有实体类型的数组。
     *
     */
    static getAll(): EntityType[];
}