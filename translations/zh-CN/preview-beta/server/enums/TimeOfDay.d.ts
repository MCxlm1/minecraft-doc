/**
 * 提供 Minecraft 白天中常见时间段的数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * 将时间设置为一天的开始，即 Minecraft 中的 1,000 时刻（相当于上午 7 点）。
     *
     */
    Day = 1000,
    /**
     * @remarks
     * 将时间设置为正午，即 Minecraft 中的 6,000 时刻。
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * 将时间设置为日落，即 Minecraft 中的 12,000 时刻（相当于下午 6 点）。
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * 将时间设置为夜晚，即 Minecraft 中的 13,000 时刻（相当于晚上 7 点）。
     *
     */
    Night = 13000,
    /**
     * @remarks
     * 将时间设置为午夜，即 Minecraft 中的 18,000 时刻（相当于午夜 12 点）。
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * 将时间设置为日出，即 Minecraft 中的 23,000 时刻（相当于凌晨 5 点）。
     *
     */
    Sunrise = 23000,
}