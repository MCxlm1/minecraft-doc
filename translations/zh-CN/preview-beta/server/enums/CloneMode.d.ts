/**
 * @beta
 * 用于克隆方块时使用的克隆模式的枚举。
 */
export enum CloneMode {
    /**
     * @remarks
     * 将源区域的方块克隆到目标区域，保持源区域不变。
     *
     */
    Copy = 0,
    /**
     * @remarks
     * 将源区域的方块克隆到目标区域，允许源区域和目标区域重叠。
     *
     */
    ForceCopy = 1,
    /**
     * @remarks
     * 将源区域的方块克隆到目标区域，并将源区域替换为空气。
     *
     */
    Move = 2,
}