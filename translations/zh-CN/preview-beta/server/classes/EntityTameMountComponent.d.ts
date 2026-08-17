/**
 * 包含用于驯服可骑乘实体的选项，基于骑乘该实体的实体。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回实体是否已被驯服。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 返回实体是否已被玩家驯服。
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
     * 将此可骑乘实体设置为已驯服。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param showParticles
     * 驯服该实体时是否显示效果粒子。
     * @throws 此函数可能抛出错误。
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 将此可骑乘实体设置为由指定玩家驯服。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param showParticles
     * 驯服该实体时是否显示效果粒子。
     * @param player
     * 该实体应被其驯服的玩家。
     * @returns
     * 如果实体已被驯服，则返回 true。
     * @throws 此函数可能抛出错误。
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}
