/**
 * 为实体添加一个成长计时器。可以通过给予实体定义在 feedItems 中的它喜欢的物品来加速成长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长前的时长，-1 表示永远为幼体。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly duration: number;
    /**
     * @remarks
     * 当此实体成长时运行的事件。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 使用的喂食物品在成功互动后会转化为此物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可以喂给实体的物品列表。包括用于物品名称的 'item' 和用于定义成长时间的 'growth'。
     *
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}