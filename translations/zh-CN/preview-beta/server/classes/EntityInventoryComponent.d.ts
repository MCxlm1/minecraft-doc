/**
 * 定义此实体的物品栏属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体每获得一点额外强度可增加的槽位数。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 如果为 true，该物品栏中的内容可以被漏斗移除。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 定义此实体的容器。如果实体已被移除，容器将为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @remarks
     * 此实体拥有的容器类型。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly containerType: string;
    /**
     * @remarks
     * 容器拥有的槽位数量。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 如果为 true，实体死亡时不会掉落其物品栏。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 如果为 true，实体的物品栏只能由其所有者或自身访问。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}