/**
 * @beta
 * 描述CompoundBlockVolumeItem相对于父CompoundVolume的相对性的枚举。
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * 相关BlockVolume内的位置相对于它们被添加到的CompoundBlockVolume。
     *
     */
    Relative = 0,
    /**
     * @remarks
     * 相关BlockVolume内的位置位于绝对世界空间。
     *
     */
    Absolute = 1,
}