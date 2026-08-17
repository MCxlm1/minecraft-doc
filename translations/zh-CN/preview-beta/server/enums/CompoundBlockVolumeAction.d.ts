/**
 * @beta
 * Action枚举决定了CompoundBlockVolume在执行内部/外部计算时如何考虑关联的CompoundBlockVolumeItem。
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * 相关的BlockVolume被视为正空间，任何相交测试都被视为命中。
     *
     */
    Add = 0,
    /**
     * @remarks
     * 相关的BlockVolume被视为负空间或空空间，任何相交测试都被视为未命中。
     * 使用Subtract动作，可以在BlockVolume中`打孔`，使得任何相交测试可以通过这些空间。
     *
     */
    Subtract = 1,
}