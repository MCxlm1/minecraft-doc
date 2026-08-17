/**
 * 此组件会在任何实体骑乘另一个实体时添加至该实体。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体当前骑乘的实体。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}