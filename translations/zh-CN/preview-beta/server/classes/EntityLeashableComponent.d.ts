/**
 * 允许实体被拴绳。
 * 定义实体被拴绳时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果另一个实体可以通过附加自己的拴绳来“偷走”已拴绳的实体，则返回 true。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳变硬的距离（以方块为单位），限制移动。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 如果实体已被拴绳，则返回 true。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 持有拴绳的实体。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 持有拴绳的实体的标识符。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂的距离（以方块为单位）。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * “弹簧”效果开始作用以保持此实体靠近拴绳它的实体的距离（以方块为单位）。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
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
     * 要拴住此实体的目标实体。
     * @throws
     * 如果拴绳的目标实体超出最大距离，
     * 并且玩家已死亡或处于旁观者模式，则抛出错误。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体已被拴到另一个实体上，则解开拴绳。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws
     * 此函数可能抛出错误。
     */
    unleash(): void;
}