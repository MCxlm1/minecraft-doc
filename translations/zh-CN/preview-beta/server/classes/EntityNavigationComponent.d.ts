/**
 * 允许此实体生成包含垂直墙壁的路径（例如，像Minecraft蜘蛛那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 告诉寻路器在寻找路径时避开造成伤害的方块。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * 告诉寻路器在寻找路径时避开传送门（如下界传送门）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * 指示寻路器在创建路径时是否应避开暴露在阳光下的方块。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * 告诉寻路器在创建路径时避开水。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以从水中跳出（如海豚）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * 告诉寻路器可以穿过关闭的门并将其破坏。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以漂浮。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以跳过方块。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * 告诉寻路器可以穿过关闭的门，假设AI会打开门。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * 告诉寻路器可以穿过关闭的铁门，假设AI会打开门。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * 是否可以通过门创建路径。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * 告诉寻路器可以在空中时开始寻路。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以在熔岩表面移动。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以在水面移动。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * 告诉寻路器在水中时是否会因重力下沉。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以在水中任意穿行并沿路径播放游泳动画。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以在水外的地面上行走。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以在熔岩中行走（如在地面上行走一样）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * 告诉寻路器是否可以在地面行走或潜入水下。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isAmphibious: boolean;
}