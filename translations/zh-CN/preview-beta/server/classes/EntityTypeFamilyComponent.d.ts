export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @returns 返回实体类型家族的字符串数组。
     * @throws 此函数可能会抛出错误。
     */
    getTypeFamilies(): string[];
    /**
     * @param typeFamily - 要检查的类型家族。
     * @returns 如果实体属于该类型家族，则返回 true。
     * @throws 此函数可能会抛出错误。
     */
    hasTypeFamily(typeFamily: string): boolean;
}