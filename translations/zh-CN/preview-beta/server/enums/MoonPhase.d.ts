```typescript
/**
 * 基于当前日期包含不同月相的枚举。使用 world.getMoonPhase 获取当前的 MoonPhase。
 *
 * 月相的满度控制着各种生物的行为，例如沼泽生物群系中生成的史莱姆数量，
 * 骷髅和僵尸有装备生成的概率，以及蜘蛛带有特定状态效果生成的概率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * 最亮的月相。在此期间，猫有 50% 的几率以黑猫形式生成。
     *
     */
    FullMoon = 0,
    /**
     * @remarks
     * 满月之后的下一个相位。
     *
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * 蛾眉月之后的下一个相位。
     *
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * 下弦月之后的下一个相位。
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
     * 新月之后的下一个相位。
     *
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * 亏凸月之后的下一个相位。
     *
     */
    LastQuarter = 6,
    /**
     * @remarks
     * 上弦月之后的下一个相位。
     *
     */
    WaxingGibbous = 7,
}
```