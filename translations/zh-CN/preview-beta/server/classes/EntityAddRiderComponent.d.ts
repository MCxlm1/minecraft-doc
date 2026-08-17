// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当在某些条件下生成时，作为骑乘者添加到该实体的实体类型。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly entityType: string;
    /**
     * @remarks
     * 当骑乘者为该实体生成时，可选触发的生成事件。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}