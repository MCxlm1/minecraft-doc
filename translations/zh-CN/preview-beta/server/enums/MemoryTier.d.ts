/**
 * 描述设备的内存等级。
 */
export enum MemoryTier {
    /**
     * @remarks
     * 超低等级的最大内存为 1.5GB。
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     * 低等级的最大内存为 2GB。
     *
     */
    Low = 1,
    /**
     * @remarks
     * 中等级的最大内存为 4GB。
     *
     */
    Mid = 2,
    /**
     * @remarks
     * 高等级的最大内存为 8GB。
     *
     */
    High = 3,
    /**
     * @remarks
     * 超高等级的内存为 8GB 以上。
     *
     */
    SuperHigh = 4,
}