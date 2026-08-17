/**
 * 定义与此实体治疗相关的交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 确定物品是否可以在实体生命值全满时使用。
     *
     * @throws 当该属性被访问时可能抛出错误。
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * 一组可以专门治疗此实体的物品。
     *
     * @returns 返回可治疗此实体的物品列表。
     * @throws 当无法获取喂食物品列表时可能抛出错误。
     */
    getFeedItems(): FeedItem[];
}