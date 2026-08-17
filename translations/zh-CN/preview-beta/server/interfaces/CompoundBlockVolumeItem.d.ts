/**
 * @beta
 * 此接口定义了一个进入 {@link CompoundBlockVolume} 的条目，表示正空间或负空间的体积。
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * 'action' 定义了方块体积在复合方块体积堆栈中的表示方式。
     * 'Add' 创建一个被正向选中的方块体积。
     * 'Subtract' 创建一个表示整体复合方块体积中的空洞或负空间的方块体积。
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * 相对性枚举决定了指定的 BlockVolume 是相对于父复合方块体积原点定位，还是在绝对世界空间中定位。
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * 空间的体积。
     */
    volume: BlockVolume;
}