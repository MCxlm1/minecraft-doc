/**
 * 为 {@link StructureManager.place} 提供附加选项。
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置结构时，应如何对结构进行动画处理。
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
     * 结构中是否应包含方块。默认为 true。
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置的方块百分比。值为 1 将放置 100% 的方块，值为 0 则不放置任何方块。方块根据 {@link StructurePlaceOptions.integritySeed} 随机选择。
     *
     */
    integrity?: number;
    /**
     * @remarks
     * 决定随机选择放置哪些方块的种子。默认为随机种子。
     *
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置结构时应对结构镜像的轴。默认为 StructureMirrorAxis.None。
     *
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置结构时应对结构进行何种旋转。默认为 AxisAlignedRotation.None。
     *
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置结构时是否应使其含水。默认为 false。如果为 true，则方块在水中放置时会变为含水状态。
     *
     */
    waterlogged?: boolean;
}