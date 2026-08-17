/**
 * @beta
 * 一个枚举，描述 CompoundBlockVolumeItem 相对于父 CompoundVolume 的相对性。
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * 关联 BlockVolume 中的位置相对于添加它们的 CompoundBlockVolume。
     *
     */
    Relative = 0,
    /**
     * @remarks
     * 关联 BlockVolume 中的位置位于绝对世界空间中。
     *
     */
    Absolute = 1,
}