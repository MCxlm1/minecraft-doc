```typescript
/**
 * @beta
 * 此接口定义了 {@link CompoundBlockVolume} 中的一个条目，表示正空间或负空间的体积。
 *
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * “action”定义了该方块体积在复合方块体积堆栈中的表示方式。
     * “Add”创建一个被正向选中的方块体积；
     * “Subtract”创建一个表示整体复合方块体积中孔洞或负空间的方块体积。
     *
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * 该相对性枚举决定了指定的 BlockVolume 是相对于父级复合方块体积原点定位，还是相对于绝对世界空间定位。
     *
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * 空间体积。
     *
     */
    volume: BlockVolume;
}
```