export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @returns 此实体的类型族列表。
     * @throws 此函数可能抛出错误。
     */
    getTypeFamilies(): string[];
    /**
     * @param typeFamily - 要检查的类型族。
     * @returns 如果此实体具有指定的类型族，则返回 true；否则返回 false。
     * @throws 此函数可能抛出错误。
     */
    hasTypeFamily(typeFamily: string): boolean;
}