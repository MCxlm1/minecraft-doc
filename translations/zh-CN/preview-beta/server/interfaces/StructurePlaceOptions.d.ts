/**
 * 为 {@link
 * StructureManager.place} 提供额外选项。
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置结构时应如何播放动画。
     *
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画播放所需的秒数。
     *
     */
    animationSeconds?: number;
    /**
     * @remarks
     * 结构中是否包含方块。默认为 true。
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 结构中是否包含实体。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置方块的百分比。值为 1
     * 时将放置 100% 的方块，值为 0 时不放置
     * 任何方块。方块将基于 {@link
     * StructurePlaceOptions.integritySeed} 随机选择。
     *
     */
    integrity?: number;
    /**
     * @remarks
     * 决定哪些方块会被随机选择放置的种子。默认为随机种子。
     *
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置时结构应沿哪些轴进行镜像。默认为 StructureMirrorAxis.None。
     *
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置时结构应如何旋转。默认为 AxisAlignedRotation.None。
     *
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置时结构是否应含水。默认为 false。如果为 true，方块放置在水中时将变为含水状态。
     *
     */
    waterlogged?: boolean;
}