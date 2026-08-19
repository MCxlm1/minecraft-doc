/**
 * 添加此组件后，表示该实体当前
 * 已被驯服。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 返回已驯服该实体的玩家；如果该实体没有玩家所有者，
     * 则返回 'undefined'。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly tamedToPlayer?: Player;
    /**
     * @beta
     * @remarks
     * 返回已驯服该实体的玩家的 ID；如果该实体没有玩家所有者，
     * 则返回 'undefined'。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:is_tamed';
}