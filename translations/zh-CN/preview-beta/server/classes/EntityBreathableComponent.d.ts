/**
 * 定义此实体可以呼吸的方块，
 * 并赋予其窒息能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 该实体当前的空气供应量。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果空气供应量超出范围
     * [suffocationTime, maxAirSupply]，将抛出错误。
     */
    airSupply: number;
    /**
     * @remarks
     * 如果为 true，此实体可以在空气中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在熔岩中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在固体方块中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在水中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesWater: boolean;
    /**
     * @beta
     * @remarks
     * 如果为 true，实体能够呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * 如果为 true，此实体在水中时
     * 会产生可见的气泡。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * 恢复到最大呼吸量所需的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * 两次窒息伤害之间的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * 实体可以屏住呼吸的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * 此实体可以呼吸的方块列表，此外还有
     * 针对各类方块的独立属性。
     *
     * @returns 此实体可以呼吸的方块排列列表。
     * @throws 此函数可能抛出错误。
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * 此实体不能呼吸的方块列表。
     *
     * @returns 此实体不能呼吸的方块排列列表。
     * @throws 此函数可能抛出错误。
     */
    getNonBreatheBlocks(): BlockPermutation[];
}