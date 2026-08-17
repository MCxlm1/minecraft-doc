/**
 * 包含基于骑乘该实体的生物来驯服可骑乘实体的选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果实体已被驯服，则返回 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * 返回驯服该实体的玩家，如果实体未被玩家驯服则返回 'undefined'。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家 ID，如果实体未被驯服则返回 'undefined'。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * 将此可骑乘实体设置为驯服状态。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param showParticles
     * 是否在驯服该实体时显示效果粒子。
     * @throws 此函数可能抛出错误。
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 将此可骑乘实体设置为由指定玩家驯服。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param showParticles
     * 是否在驯服该实体时显示效果粒子。
     * @param player
     * 应驯服该实体的玩家。
     * @returns
     * 如果实体被驯服，则返回 true。
     * @throws 此函数可能抛出错误。
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}