/**
 * 包含基于骑乘实体来驯服可骑乘实体的选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果实体已被驯服，则返回true。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回true。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * 返回驯服该实体的玩家，如果实体未被玩家驯服则返回'undefined'。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家ID，如果实体未被驯服则返回'undefined'。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * 设置此可骑乘实体为已驯服。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param showParticles
     * 是否在驯服此实体时显示效果粒子。
     * @throws 此函数可能抛出错误。
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 设置此可骑乘实体为由给定玩家驯服。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param showParticles
     * 是否在驯服此实体时显示效果粒子。
     * @param player
     * 驯服此实体的玩家。
     * @returns
     * 如果实体被驯服则返回true。
     * @throws 此函数可能抛出错误。
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}