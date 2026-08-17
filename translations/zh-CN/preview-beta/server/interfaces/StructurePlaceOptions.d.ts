/**
 * 为 {@link
 * StructureManager.place} 提供额外选项。
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置结构时，如何为其添加动画效果。
     *
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画应持续多少秒。
     *
     */
    animationSeconds?: number;
    /**
     * @remarks
     * 是否应将方块包含在结构中。默认为 true。
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 是否应将实体包含在结构中。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置的方块百分比。值为 1 将放置 100% 的方块，值为 0 则不放置任何方块。方块基于 {@link
     * StructurePlaceOptions.integritySeed} 随机选择。
     *
     */
    integrity?: number;
    /**
     * @remarks
     * 决定随机选择哪些方块进行放置的种子。默认为随机种子。
     *
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置结构时应沿哪些轴进行镜像。默认为 StructureMirrorAxis.None。
     *
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置结构时应如何旋转。默认为 AxisAlignedRotation.None。
     *
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置结构时是否应使其含水。默认为 false。如果为 true，则当方块放置在水中时会变为含水状态。
     *
     */
    waterlogged?: boolean;
}