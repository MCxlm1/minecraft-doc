/**
 * 包含用于驯服可骑乘实体的选项，基于骑乘该实体的实体。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果实体已被驯服，则返回 true。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回 true。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * 返回已驯服该实体的玩家；如果实体未被玩家驯服，则返回 'undefined'。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回已驯服该实体的玩家 ID；如果实体未被驯服，则返回 'undefined'。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * 将该可骑乘实体设置为已驯服。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param showParticles
     * 是否在实体被驯服时显示效果粒子。
     * @throws 此函数可能抛出错误。
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 将该可骑乘实体设置为由指定玩家驯服。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param showParticles
     * 是否在实体被驯服时显示效果粒子。
     * @param player
     * 该实体应被该玩家驯服。
     * @returns
     * 如果实体已成功驯服，则返回 true。
     * @throws 此函数可能抛出错误。
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}