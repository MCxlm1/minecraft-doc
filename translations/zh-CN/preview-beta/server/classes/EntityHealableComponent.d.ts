/**
 * 定义与此实体的治疗交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 确定物品是否可以在实体生命值全满时使用。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * 一组可以专门治疗此实体的物品。
     *
     * @returns 可治愈此实体的物品列表。
     * @throws 此函数可能会抛出错误。
     */
    getFeedItems(): FeedItem[];
}