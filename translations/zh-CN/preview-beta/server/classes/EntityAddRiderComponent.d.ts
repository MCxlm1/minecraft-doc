/**
 * 添加此组件后，该实体在生成时会附带一个指定实体类型的乘骑者。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 在特定条件下生成时，作为该实体乘骑者添加的实体类型。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly entityType: string;
    /**
     * @remarks
     * 当乘骑者为该实体生成时，在其上触发的可选生成事件。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}