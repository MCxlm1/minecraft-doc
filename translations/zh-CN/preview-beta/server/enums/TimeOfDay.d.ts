/**
 * 提供 Minecraft 日中常见时段的数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * 将时间设置为一天的开始，即 Minecraft 中的 1,000 游戏时间（相当于上午 7:00）。
     *
     */
    Day = 1000,
    /**
     * @remarks
     * 将时间设置为正午，即 Minecraft 中的 6,000 游戏时间。
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * 将时间设置为日落，即 Minecraft 中的 12,000 游戏时间（相当于下午 6:00）。
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * 将时间设置为夜晚，即 Minecraft 中的 13,000 游戏时间（相当于下午 7:00）。
     *
     */
    Night = 13000,
    /**
     * @remarks
     * 将时间设置为午夜，即 Minecraft 中的 18,000 游戏时间（相当于上午 12:00）。
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * 将时间设置为日出，即 Minecraft 中的 23,000 游戏时间（相当于上午 5:00）。
     *
     */
    Sunrise = 23000,
}