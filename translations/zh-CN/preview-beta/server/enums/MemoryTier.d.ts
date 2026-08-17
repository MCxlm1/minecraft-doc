```typescript
/**
 * 描述一个设备的内存。
 */
export enum MemoryTier {
    /**
     * @remarks
     * 超低级别的最大内存为 1.5GB。
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     * 低级别的最大内存为 2GB。
     *
     */
    Low = 1,
    /**
     * @remarks
     * 中级别的最大内存为 4GB。
     *
     */
    Mid = 2,
    /**
     * @remarks
     * 高级别的最大内存为 8GB。
     *
     */
    High = 3,
    /**
     * @remarks
     * 超高级别的内存大于 8GB。
     *
     */
    SuperHigh = 4,
}
```