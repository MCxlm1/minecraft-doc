/**
 * 包含基于当前日期的不同月相的枚举。使用 world.getMoonPhase 获取当前月相。
 *
 * 月亮的满度控制着各种生物的行为，例如沼泽生物群系中生成的史莱姆数量，骷髅和僵尸生成时带有盔甲的几率，以及蜘蛛生成时带有特定状态效果的几率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * 最亮的月相。在此阶段，猫有 50% 的几率生成黑猫。
     *
     */
    FullMoon = 0,
    /**
     * @remarks
     * 满月后的阶段。
     *
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * 蛾眉月后的阶段。
     *
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * 下弦月后的阶段。
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
     * 新月后的阶段。
     *
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * 亏凸月后的阶段。
     *
     */
    LastQuarter = 6,
    /**
     * @remarks
     * 上弦月后的阶段。
     *
     */
    WaxingGibbous = 7,
}