```typescript
/**
 * 为实体添加一个成长定时器。可通过向实体提供 feedItems 中定义的喜好物品来加速成长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长前的剩余时间，-1 表示永远为幼体。
     *
     * @throws 读取该属性时可能抛出错误（例如组件未附加到实体时）。
     */
    readonly duration: number;
    /**
     * @remarks
     * 当该实体成长时触发的事件。
     *
     * @throws 读取该属性时可能抛出错误（例如组件未附加到实体时）。
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 成功交互后，所使用的喂养物品会转化成该物品。
     *
     * @throws 读取该属性时可能抛出错误（例如组件未附加到实体时）。
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * @returns 实体成长时掉落的物品列表。
     *
     * @throws 调用此函数时可能抛出错误（例如组件未附加到实体时）。
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可喂养给实体的物品列表。其中 'item' 表示物品名称，'growth' 表示增加的成长时间。
     *
     * @returns 可喂养给实体的物品列表，每个元素包含物品名称及成长增量。
     *
     * @throws 调用此函数时可能抛出错误（例如组件未附加到实体时）。
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}
```