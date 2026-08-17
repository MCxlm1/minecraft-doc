/**
 * 应用于方块或方块一部分的着色逻辑。当上下文包含世界坐标时，颜色可能变化，因为生物群系通常会影响最终着色。
 */
export enum TintMethod {
    /**
     * @remarks
     * 指定白桦树叶着色方法。
     *
     */
    BirchFoliage = 'BirchFoliage',
    /**
     * @remarks
     * 指定默认树叶着色方法。
     *
     */
    DefaultFoliage = 'DefaultFoliage',
    /**
     * @remarks
     * 指定干燥树叶着色方法。
     *
     */
    DryFoliage = 'DryFoliage',
    /**
     * @remarks
     * 指定常绿树叶着色方法。
     *
     */
    EvergreenFoliage = 'EvergreenFoliage',
    /**
     * @remarks
     * 指定草着色方法。
     *
     */
    Grass = 'Grass',
    /**
     * @remarks
     * 指定不应用着色方法，结果为白色着色。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 指定水着色方法。
     *
     */
    Water = 'Water',
}