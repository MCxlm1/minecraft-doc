/**
 * 定义实体被玩家驯服的规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回可用于驯服此实体的一组物品。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 每次使用物品驯服实体的概率，在
     * 0.0 到 1.0 之间，其中 1.0 表示 100%
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly probability: number;
    /**
     * @remarks
     * 返回已驯服该实体的玩家，或 'undefined'
     * 如果实体未被驯服。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回已驯服该实体的玩家 ID，或
     * 'undefined' 如果实体未被驯服。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * 将当前实体设置为由指定玩家驯服。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param player
     * 该实体应被其驯服的玩家。
     * @returns
     * 如果实体被成功驯服则返回 true。
     * @throws 此函数可能抛出错误。
     */
    tame(player: Player): boolean;
}