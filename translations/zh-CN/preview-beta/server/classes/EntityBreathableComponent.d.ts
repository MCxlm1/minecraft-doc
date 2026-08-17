/**
 * 定义此实体可以呼吸的方块，并赋予
 * 其窒息能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 实体的当前空气供应量。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果空气供应量超出范围 [suffocationTime, maxAirSupply] 将抛出错误。
     */
    airSupply: number;
    /**
     * @remarks
     * 如果为 true，此实体可以在空气中呼吸。
     *
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在熔岩中呼吸。
     *
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在固体方块中呼吸。
     *
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在水中呼吸。
     *
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * @beta
     * @remarks
     * 如果为 true，此实体能够呼吸。
     *
     * @throws This property can throw when used.
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * 如果为 true，此实体将会有可见气泡，当在
     * 水中时。
     *
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * 恢复呼吸到最大值所需的时间（秒）。
     *
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * 窒息伤害之间的时间（秒）。
     *
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * 实体可以屏住呼吸的时间（秒）。
     *
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * 此实体可以呼吸的方块列表，除了
     * 针对各类方块的单独属性之外。
     *
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * 此实体无法呼吸的方块列表。
     *
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
}