/**
 * 定义实体可被玩家驯服的规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回一组可用于驯服此实体的物品。
     *
     * @throws
     * 使用此属性时可能抛出异常。
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回 true。
     *
     * @throws
     * 使用此属性时可能抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 每次使用物品驯服实体的概率，值在 0.0 到 1.0 之间，其中 1.0 为 100%。
     *
     * @throws
     * 使用此属性时可能抛出异常。
     */
    readonly probability: number;
    /**
     * @remarks
     * 返回已驯服该实体的玩家，如果实体未被驯服，则返回 'undefined'。
     *
     * @throws
     * 使用此属性时可能抛出异常。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回已驯服该实体的玩家 ID，如果实体未被驯服，则返回 'undefined'。
     *
     * @throws
     * 使用此属性时可能抛出异常。
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
     * 应驯服此实体的玩家。
     * @returns
     * 如果实体已被驯服，则返回 true。
     * @throws
     * 此函数可能抛出错误。
     */
    tame(player: Player): boolean;
}