```typescript
/**
 * 指定放置结构时结构方块的动画模式。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * 方块将一次随机放置一个。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来控制
     * 放置所有方块所需的时间。
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * 方块将一次一层地从底部到顶部放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来控制
     * 放置所有方块所需的时间。
     *
     */
    Layers = 'Layers',
    /**
     * @remarks
     * 所有方块将立即放置。
     *
     */
    None = 'None',
}
```