/**
 * 定义玩家驯服实体的规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回一组可用于驯服该实体的物品。
     *
     * @throws This property can throw when used.
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * 返回实体是否已被玩家驯服。
     *
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 每次使用物品驯服实体的几率，介于 0.0 和 1.0 之间，其中 1.0 表示 100%。
     *
     * @throws This property can throw when used.
     */
    readonly probability: number;
    /**
     * @remarks
     * 返回驯服该实体的玩家，如果实体未被驯服则返回 'undefined'。
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家 ID，如果实体未被驯服则返回 'undefined'。
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * 将玩家设置为该实体的驯服者。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param player
     * 该实体应被驯服的玩家。
     * @returns
     * 如果实体被驯服，则返回 true。
     * @throws This function can throw errors.
     */
    tame(player: Player): boolean;
}