/**
 * 包含用于快捷栏事件的额外过滤选项。
 */
export interface HotbarEventOptions {
    /**
     * @remarks
     * 要考虑的槽位索引。值应在0到8之间（包含）。如果未指定，则考虑所有槽位。
     *
     * 范围：[0, 8]
     */
    allowedSlots?: number[];
}