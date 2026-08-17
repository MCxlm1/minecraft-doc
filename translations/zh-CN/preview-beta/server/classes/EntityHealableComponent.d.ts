/**
 * 定义与此实体交互以治疗它的方式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 决定物品是否可以在实体处于满生命值时使用。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * 一组可以专门治疗该实体的物品。
     *
     * @returns
     * 可用于治疗该实体的物品列表。
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): FeedItem[];
}