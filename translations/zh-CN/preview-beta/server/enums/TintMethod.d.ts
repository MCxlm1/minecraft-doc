/**
 * 应用于方块或方块部分的色调逻辑。当上下文包含世界位置时，颜色可能会变化，因为生物群系通常会影响最终色调。
 */
export enum TintMethod {
    /**
     * @remarks
     * 指定白桦树叶色调方法。
     *
     */
    BirchFoliage = 'BirchFoliage',
    /**
     * @remarks
     * 指定默认树叶色调方法。
     *
     */
    DefaultFoliage = 'DefaultFoliage',
    /**
     * @remarks
     * 指定干枯树叶色调方法。
     *
     */
    DryFoliage = 'DryFoliage',
    /**
     * @remarks
     * 指定常绿树叶色调方法。
     *
     */
    EvergreenFoliage = 'EvergreenFoliage',
    /**
     * @remarks
     * 指定草地色调方法。
     *
     */
    Grass = 'Grass',
    /**
     * @remarks
     * 指定无色调方法，结果为白色色调。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 指定水色调方法。
     *
     */
    Water = 'Water',
}