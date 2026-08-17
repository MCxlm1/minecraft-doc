/**
 * 描述设备的内存。
 */
export enum MemoryTier {
    /**
     * @remarks
     * 超级低档的最大内存为1.5GB。
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     * 低档的最大内存为2GB。
     *
     */
    Low = 1,
    /**
     * @remarks
     * 中档的最大内存为4GB。
     *
     */
    Mid = 2,
    /**
     * @remarks
     * 高档的最大内存为8GB。
     *
     */
    High = 3,
    /**
     * @remarks
     * 超级高档的内存为8GB以上。
     *
     */
    SuperHigh = 4,
}