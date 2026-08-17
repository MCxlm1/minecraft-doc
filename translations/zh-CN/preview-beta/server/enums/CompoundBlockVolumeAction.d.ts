/**
 * @beta
 * Action枚举决定了CompoundBlockVolume在执行内部/外部计算时如何考虑关联的CompoundBlockVolumeItem。
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * 关联的BlockVolume被视为正空间，任何相交测试均被视为命中。
     *
     */
    Add = 0,
    /**
     * @remarks
     * 关联的BlockVolume被视为负空间或空白空间，任何相交测试均被视为未命中。
     * 使用Subtract操作，可以在block volumes中`打孔`，使相交测试能够通过此类空间。
     *
     */
    Subtract = 1,
}