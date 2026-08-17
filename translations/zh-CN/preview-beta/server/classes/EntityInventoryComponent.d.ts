/**
 * 定义此实体的物品栏属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体每获得额外力量时可增加的槽位数量。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 若为 true，则此物品栏中的物品可被漏斗抽取。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 定义此实体的容器。如果实体已被移除，则容器为 undefined。
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
     * 若为 true，实体死亡时不会掉落其物品栏。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 若为 true，则只有该实体的主人或实体本身可以访问其物品栏。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}