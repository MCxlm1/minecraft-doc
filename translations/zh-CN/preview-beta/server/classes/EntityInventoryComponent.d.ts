/**
 * 定义此实体的物品栏属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体每额外获得一点强度可增加的槽位
     * 数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 如果为 true，则此物品栏的内容可被漏斗
     * 移除。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 定义此实体的容器。如果实体已被移除，
     * 则容器为 undefined。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @remarks
     * 此实体拥有的容器类型。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly containerType: string;
    /**
     * @remarks
     * 容器拥有的槽位数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 如果为 true，则实体死亡时不会掉落其物品栏。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 如果为 true，则此实体的物品栏只能由其
     * 所有者或实体本身访问。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}