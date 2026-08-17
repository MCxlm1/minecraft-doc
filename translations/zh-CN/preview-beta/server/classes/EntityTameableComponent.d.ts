/**
 * 定义实体被玩家驯服的规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回一组可用于驯服该实体的物品。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * 如果实体被玩家驯服则返回true。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 每次使用物品驯服实体的概率，介于
     * 0.0 和 1.0 之间，其中 1.0 表示 100%
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly probability: number;
    /**
     * @remarks
     * 返回驯服该实体的玩家，或 'undefined'
     * 如果实体未被驯服。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家ID，或
     * 'undefined' 如果实体未被驯服。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * 设置该实体被给定玩家驯服。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param player
     * 该实体应被其驯服的玩家。
     * @returns
     * 如果实体被驯服则返回true。
     * @throws 此函数可能抛出错误。
     */
    tame(player: Player): boolean;
}