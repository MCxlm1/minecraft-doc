/**
 * 包含设备信息，例如内存层级。
 */
export class SystemInfo {
    private constructor();
    /**
     * @remarks
     * 描述设备的内存。
     *
     */
    readonly memoryTier: MemoryTier;
}