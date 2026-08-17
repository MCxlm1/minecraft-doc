/**
 * 定义玩家驯服实体的规则。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回一组可用于驯服此实体的物品。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * 返回实体是否已被玩家驯服。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 每次使用物品驯服实体的概率，介于 0.0 和 1.0 之间，其中 1.0 表示 100%。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly probability: number;
    /**
     * @remarks
     * 返回驯服该实体的玩家，如果实体未被驯服则返回 'undefined'。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家 ID，如果实体未被驯服则返回 'undefined'。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * 将当前实体设置为由指定玩家驯服。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param player
     * 该实体应由其驯服的玩家。
     * @returns
     * 如果实体被驯服，则返回 true。
     * @throws 此函数可能会抛出错误。
     */
    tame(player: Player): boolean;
}