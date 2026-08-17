/**
 * @beta
 * 用于克隆方块时的克隆模式枚举。
 */
export enum CloneMode {
    /**
     * @remarks
     * 将方块从源区域克隆到目标区域，
     * 保持源区域不变。
     *
     */
    Copy = 0,
    /**
     * @remarks
     * 将方块从源区域克隆到目标区域，
     * 允许源区域和目标区域重叠。
     *
     */
    ForceCopy = 1,
    /**
     * @remarks
     * 将方块从源区域克隆到目标区域，
     * 并用空气替换源区域。
     *
     */
    Move = 2,
}