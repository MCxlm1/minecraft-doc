/**
 * 添加一个用于实体成长的计时器。可以通过给予实体它喜欢的物品（由 feedItems 定义）来加速成长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长前的时间，-1 表示永远为幼体。
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
     * 成功交互后，使用的饲料物品会转化为该物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * @returns 实体成长时掉落的物品列表。
     * @throws 此函数可能抛出错误。
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可以喂给实体的物品列表。其中 'item' 表示物品名称，'growth' 表示成长的时间量。
     *
     * @returns 可以喂给实体的物品列表。
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}