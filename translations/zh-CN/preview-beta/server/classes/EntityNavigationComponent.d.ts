/**
 * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 蜘蛛那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 告知寻路器在寻找路径时避开会造成伤害的方块。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * 告知寻路器在寻找路径时避开传送门（如下界传送门）。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * 寻路器在创建路径时是否应避开暴露在阳光下的方块。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * 告知寻路器在创建路径时避开水域。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够跳出水面（像海豚一样）。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * 告知寻路器可以穿过关闭的门并破坏它。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够浮起。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够跳过方块。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * 告知寻路器可以穿过关闭的门，前提是 AI 会打开门。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * 告知寻路器可以穿过关闭的铁门，前提是 AI 会打开门。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * 是否能够创建穿过门的路径。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * 告知寻路器可以在空中开始寻路。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够在熔岩表面移动。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够在水面移动。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * 告知寻路器在水中时是否会被重力拉下。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够在水下任意处寻路，并沿路径播放游泳动画。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够在陆地上行走。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够在熔岩中如履平地般移动。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * 告知寻路器是否能够在陆地上行走或潜入水下。
     *
     * @throws 该属性在被使用时可能抛出异常。
     */
    readonly isAmphibious: boolean;
}