/**
 * 当添加此组件时，实体将在特定条件下生成时带有指定实体类型的骑乘者。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当实体在特定条件下生成时，作为其骑乘者添加的实体类型。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly entityType: string;
    /**
     * @remarks
     * 可选生成事件，当该骑乘者为此实体生成时触发。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}