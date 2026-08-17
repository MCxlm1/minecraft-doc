/**
 * 提供 Minecraft 一天中常见时间的数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * 将时间设置为一天开始，即 Minecraft 中的时间 1,000（相当于上午 7 点）。
     *
     */
    Day = 1000,
    /**
     * @remarks
     * 将时间设置为正午，即 Minecraft 中的时间 6,000。
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * 将时间设置为日落，即 Minecraft 中的时间 12,000（相当于下午 6 点）。
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * 将时间设置为夜晚，即 Minecraft 中的时间 13,000（相当于晚上 7 点）。
     *
     */
    Night = 13000,
    /**
     * @remarks
     * 将时间设置为午夜，即 Minecraft 中的时间 18,000（相当于凌晨 12 点）。
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * 将时间设置为日出，即 Minecraft 中的时间 23,000（相当于上午 5 点）。
     *
     */
    Sunrise = 23000,
}