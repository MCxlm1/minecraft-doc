/**
 * 允许实体被拴绳。定义实体被拴绳时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回 true 表示另一个实体可以通过挂上自己的拴绳来“偷走”被拴住的实体。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳绷直并限制移动的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 返回 true 表示该实体已被拴绳。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 持有拴绳的实体。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 持有拴绳的实体的标识符。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * “弹簧”效果开始作用，使该实体靠近拴住它的实体的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴到另一个实体上。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param leashHolder
     * 要将此实体拴到的实体。
     * @throws
     * 如果目标实体超过最大距离，或玩家死亡或处于旁观者模式，则抛出异常。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体已拴到另一个实体上，则解除拴绳。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    unleash(): void;
}