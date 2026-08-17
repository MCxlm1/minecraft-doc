/**
 * 定义该实体可以呼吸的方块，并赋予其窒息能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 实体的当前空气供应量。
     *
     * 此属性在受限执行模式下无法编辑。
     *
     * @throws
     * 如果空气供应量超出范围 [suffocationTime, maxAirSupply]（即窒息时间与最大空气供应量之间），将抛出错误。
     */
    airSupply: number;
    /**
     * @remarks
     * 如果为 true，则该实体可以在空气中呼吸。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * 如果为 true，则该实体可以在熔岩中呼吸。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * 如果为 true，则该实体可以在固体方块中呼吸。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * 如果为 true，则该实体可以在水中呼吸。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly breathesWater: boolean;
    /**
     * @beta
     * @remarks
     * 如果为 true，则该实体能够呼吸。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * 如果为 true，则该实体在水中时会出现可见的气泡。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * 恢复至最大呼吸量所需的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * 两次窒息伤害之间的时间间隔（秒）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * 该实体可以屏住呼吸的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * 除了各类方块的独立属性外，该实体还可呼吸的方块列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * 该实体无法呼吸的方块列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getNonBreatheBlocks(): BlockPermutation[];
}