export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @returns 该实体的类型家族列表。
     * @throws 此函数可能抛出错误。
     */
    getTypeFamilies(): string[];
    /**
     * @param typeFamily 要检查的类型家族名称。
     * @returns 如果实体具有该类型家族，则返回 true；否则返回 false。
     * @throws 此函数可能抛出错误。
     */
    hasTypeFamily(typeFamily: string): boolean;
}