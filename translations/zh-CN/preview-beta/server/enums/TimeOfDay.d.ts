/**
 * 提供 Minecraft 日中常见时段的
 * 数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * 将时间设置到一天开始，即 Minecraft 中的时刻
     * 1,000（相当于上午 7:00）。
     *
     */
    Day = 1000,
    /**
     * @remarks
     * 将时间设置到正午，即 Minecraft 中的时刻
     * 6,000。
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * 将时间设置到日落，即 Minecraft 中的时刻
     * 12,000（相当于下午 6:00）。
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * 将时间设置到夜晚，即 Minecraft 中的时刻
     * 13,000（相当于下午 7:00）。
     *
     */
    Night = 13000,
    /**
     * @remarks
     * 将时间设置到午夜，即 Minecraft 中的时刻
     * 18,000（相当于午夜 12:00）。
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * 将时间设置到日出，即 Minecraft 中的时刻
     * 23,000（相当于上午 5:00）。
     *
     */
    Sunrise = 23000,
}