/**
 * 提供用于 {@link StructureManager.place} 的额外选项。
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置结构时，该结构应如何动画。
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画应持续多少秒。
     */
    animationSeconds?: number;
    /**
     * @remarks
     * 结构中是否应包含方块。默认为 true。
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 true。
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置多少百分比的方块。值为 1 时放置 100% 的方块，值为 0 时不放置任何方块。
     * 方块会根据 {@link StructurePlaceOptions.integritySeed} 随机选择。
     */
    integrity?: number;
    /**
     * @remarks
     * 决定哪些方块会被随机选择放置的种子。默认为随机种子。
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置结构时应沿哪些轴进行镜像。默认为 StructureMirrorAxis.None。
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置结构时应如何旋转。默认为 AxisAlignedRotation.None。
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置结构时是否应使其含水。默认为 false。如果为 true，方块在水中放置时会变为含水状态。
     */
    waterlogged?: boolean;
}