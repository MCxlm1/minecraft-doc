/**
 * @beta
 * 一个枚举，用于描述CompoundBlockVolumeItem相对于父级CompoundVolume的相对性。
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * 关联BlockVolume中的位置相对于添加它们的CompoundBlockVolume。
     *
     */
    Relative = 0,
    /**
     * @remarks
     * 关联BlockVolume中的位置位于绝对世界空间中。
     *
     */
    Absolute = 1,
}