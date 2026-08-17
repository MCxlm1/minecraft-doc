/**
 * @beta
 * Action 枚举决定了 CompoundBlockVolume 在进行内部/外部计算时如何考虑关联的 CompoundBlockVolumeItem。
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * 关联的 BlockVolume 被视为正空间，任何交集测试均被视为命中。
     *
     */
    Add = 0,
    /**
     * @remarks
     * 关联的 BlockVolume 被视为负空间或虚空空间，任何交集测试均被视为未命中。
     * 使用 Subtract 动作，可以在方块体积中“打孔”，使得任何交集测试可以穿过这些空间。
     *
     */
    Subtract = 1,
}