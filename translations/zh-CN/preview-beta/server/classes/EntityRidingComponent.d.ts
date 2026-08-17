/**
 * 此组件会在任何实体骑乘另一个实体时添加到该实体上。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体当前正在骑乘的实体。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}