/**
 * 应用于方块或方块一部分的着色逻辑。当世界位置作为上下文的一部分时，
 * 颜色可能会有所不同，因为生物群系通常会影响最终的着色结果。
 */
export enum TintMethod {
    /**
     * @remarks
     * 指定白桦树叶的着色方法。
     *
     */
    BirchFoliage = 'BirchFoliage',
    /**
     * @remarks
     * 指定默认树叶的着色方法。
     *
     */
    DefaultFoliage = 'DefaultFoliage',
    /**
     * @remarks
     * 指定干燥树叶的着色方法。
     *
     */
    DryFoliage = 'DryFoliage',
    /**
     * @remarks
     * 指定常绿树叶的着色方法。
     *
     */
    EvergreenFoliage = 'EvergreenFoliage',
    /**
     * @remarks
     * 指定草地的着色方法。
     *
     */
    Grass = 'Grass',
    /**
     * @remarks
     * 指定无着色方法，结果为白色着色。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 指定水的着色方法。
     *
     */
    Water = 'Water',
}