/**
 * 该组件会在任意实体骑乘另一个实体时添加。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体当前骑乘的实体。
     *
     * @throws
     * 当访问此属性时可能抛出异常。
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}