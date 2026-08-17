/**
 * 该组件会在任何实体骑乘另一个实体时添加到该实体上。
 * 也就是当该实体正在骑乘另一实体时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体当前骑乘的实体。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}