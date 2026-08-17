/**
 * 添加实体成长计时器。可以通过给实体喂食其喜欢的物品（由 feedItems 定义）来加速成长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长前的时间量，-1 表示永远为幼体。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly duration: number;
    /**
     * @remarks
     * 当此实体成长时触发的事件。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 成功交互后，使用的喂食物品会转化为此物品。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * @returns 实体成长时掉落的物品标识符列表。
     * @throws 此函数可能抛出错误。
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可以喂给实体的物品列表。其中“item”表示物品名称，“growth”表示成长时间的增加量。
     *
     * @returns 可用于喂食的实体定义物品列表。
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}