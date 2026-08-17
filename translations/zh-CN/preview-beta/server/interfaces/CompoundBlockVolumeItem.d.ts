/**
 * @beta
 * 此接口定义了一个进入 {@link
 * CompoundBlockVolume} 的条目，该条目表示正空间
 * 或负空间的体积。
 *
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * 'action' 定义了方块体积在
     * 复合方块体积栈中的表示方式。
     * 'Add' 创建一个正选中的方块体积
     * 'Subtract' 创建一个表示空洞或
     * 负空间在整体复合方块体积中的方块体积。
     *
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * relativity 枚举决定了指定的
     * BlockVolume 是相对于父复合方块体积原点定位，
     * 还是位于绝对世界空间。
     *
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * 空间体积
     *
     */
    volume: BlockVolume;
}