/**
 * 添加此组件后，实体在生成时会带有指定 entityType 的骑乘者。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体在特定条件下生成时，作为该实体骑乘者添加的实体类型。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly entityType: string;
    /**
     * @remarks
     * 可选生成事件，当该实体生成骑乘者时，会在骑乘者上触发该事件。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}