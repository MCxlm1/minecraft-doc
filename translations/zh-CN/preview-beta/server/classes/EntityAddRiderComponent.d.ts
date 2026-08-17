/**
 * 添加此组件后，实体在生成时会带有指定 entityType 的骑乘者。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 在特定条件下生成此实体时，将作为该实体骑乘者添加的实体类型。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly entityType: string;
    /**
     * @remarks
     * 可选生成事件，当骑乘者为此实体生成时触发。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}