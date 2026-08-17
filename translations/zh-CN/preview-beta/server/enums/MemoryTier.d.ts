/**
 * 描述设备的内存。
 */
export enum MemoryTier {
    /**
     * @remarks
     * 极低档的最大内存为 1.5GB。
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     *  低档的最大内存为 2GB。
     *
     */
    Low = 1,
    /**
     * @remarks
     * 中档的最大内存为 4GB。
     *
     */
    Mid = 2,
    /**
     * @remarks
     * 高档的最大内存为 8GB。
     *
     */
    High = 3,
    /**
     * @remarks
     * 超高档的内存为 8GB 以上。
     *
     */
    SuperHigh = 4,
}