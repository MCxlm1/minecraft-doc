/**
 * 提供 {@link StructureManager.place} 的额外选项。
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置结构时，结构应如何动画播放。
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画应持续的秒数。
     */
    animationSeconds?: number;
    /**
     * @remarks
     * 结构是否应包含方块。默认为 true。
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 结构是否应包含实体。默认为 true。
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置的方块百分比。值为 1 时将放置 100% 的方块，值为 0 时则不放置任何方块。方块将根据 {@link StructurePlaceOptions.integritySeed} 随机选择。
     */
    integrity?: number;
    /**
     * @remarks
     * 用于确定随机选择放置哪些方块的种子。默认为随机种子。
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置结构时应沿哪些轴镜像。默认为 StructureMirrorAxis.None。
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置结构时应如何旋转。默认为 AxisAlignedRotation.None。
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置结构时是否应使其含水。默认为 false。如果为 true，方块放置在水中时将变为含水方块。
     */
    waterlogged?: boolean;
}