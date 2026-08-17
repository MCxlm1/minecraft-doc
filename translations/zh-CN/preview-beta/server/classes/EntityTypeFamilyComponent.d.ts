export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @returns 返回此实体拥有的所有类型族字符串数组。
     * @throws 如果实体无效或组件不可用，可能会抛出错误。
     */
    getTypeFamilies(): string[];
    /**
     * @param typeFamily 要检查的类型族名称。
     * @returns 如果该实体拥有此类型族则返回 true，否则返回 false。
     * @throws 如果实体无效或组件不可用，可能会抛出错误。
     */
    hasTypeFamily(typeFamily: string): boolean;
}