/**
 * 允许实体被拴绳。定义实体被拴绳时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果另一个实体可以通过将自己的拴绳系在该实体上来“偷走”被拴住的实体，则返回 true。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳变紧并限制移动的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 如果实体已被拴绳，则返回 true。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 手持拴绳的实体。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 手持拴绳的实体的标识符。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂时的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * “弹簧”效果开始起作用，使该实体靠近拴住它的实体时的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴到另一个实体上。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param leashHolder
     * 要拴住此实体的目标实体。
     * @throws
     * 如果要拴到的实体超出最大距离，或玩家处于死亡或旁观者模式时，抛出异常。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体已被拴到另一个实体上，则解除拴绳。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    unleash(): void;
}