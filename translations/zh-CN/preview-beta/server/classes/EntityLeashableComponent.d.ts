/**
 * 允许实体被拴绳。定义实体被拴绳时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回是否其他实体可以通过将自己的拴绳连接到该实体上来“偷走”被拴住的实体。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳开始绷紧、限制移动时的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 返回实体是否已被拴绳。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 正在牵着拴绳的实体。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 正在牵着拴绳的实体的标识符。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * 开始产生“弹簧”效果以保持此实体靠近拴绳实体的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴绳到另一个实体上。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param leashHolder
     * 要拴绳到的目标实体。
     * @throws
     * 如果目标实体超过最大距离，或者玩家已死亡或处于旁观模式，则抛出错误。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体被拴绳到另一个实体，则解除拴绳。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    unleash(): void;
}