/**
 * 允许实体被拴绳。定义实体被拴绳时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果另一个实体可以通过将自己的拴绳系在被拴绳实体上来“偷走”该实体，则返回 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳变紧、限制移动的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 如果实体已被拴绳，则返回 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 持有拴绳的实体。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 持有拴绳的实体的标识符。
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
     * 拴绳开始产生“弹簧”效果以保持该实体靠近拴绳实体的距离（以方块为单位）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴绳到另一个实体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param leashHolder
     * 要将此实体拴绳到的实体。
     * @throws
     * 如果目标实体超出最大距离，或者玩家已死亡或处于旁观者模式，则抛出错误。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体被拴绳到另一个实体，则解除拴绳。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    unleash(): void;
}