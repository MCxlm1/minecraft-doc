/**
 * 包含基于当前日期的不同月相阶段的枚举。使用 world.getMoonPhase 获取当前 MoonPhase。
 *
 * 月亮的圆缺控制着各种生物的行为，例如沼泽生物群系中生成的史莱姆数量，骷髅和僵尸带盔甲生成的概率，以及蜘蛛带特定状态效果生成的概率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * 最亮的月相。在此阶段，猫有50%的概率生成为黑猫。
     *
     */
    FullMoon = 0,
    /**
     * @remarks
     * 满月之后的月相。
     *
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * 蛾眉月之后的月相。
     *
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * 下弦月之后的月相。
     *
     */
    WaningCrescent = 3,
    /**
     * @remarks
     * 最暗的月相。
     *
     */
    NewMoon = 4,
    /**
     * @remarks
     * 新月之后的月相。
     *
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * 亏凸月之后的月相。
     *
     */
    LastQuarter = 6,
    /**
     * @remarks
     * 上弦月之后的月相。
     *
     */
    WaxingGibbous = 7,
}