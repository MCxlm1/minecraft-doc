/**
 * @beta
 * Action 枚举决定了 CompoundBlockVolume 如何
 * 考虑关联的 CompoundBlockVolumeItem 当
 * 执行内部/外部计算。
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * 关联的 BlockVolume 被视为正空间，
     * 任何交集测试均被视为命中。
     *
     */
    Add = 0,
    /**
     * @remarks
     * 关联的 BlockVolume 被视为负空间或空
     * 空间，任何交集测试均被视为未命中。
     * 使用 Subtract 动作，可以`punch holes`
     * 在方块体积中，以便任何交集测试可以通过
     * 通过这样的空间
     *
     */
    Subtract = 1,
}