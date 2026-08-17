/**
 * 包含基于当前日期的不同月相的枚举，
 * 使用 world.getMoonPhase
 * 获取当前月相。
 *
 * 月相控制各种生物行为，例如
 * 沼泽生物群系中生成的史莱姆数量、
 * 骷髅和僵尸生成时带有盔甲的几率，
 * 以及蜘蛛生成时带有特定状态效果的
 * 几率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * 最亮的月相。在该月相期间，猫有 50% 的几率
     * 生成为黑猫。
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