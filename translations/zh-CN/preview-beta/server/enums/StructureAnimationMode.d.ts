/**
 * 指定当放置结构时结构方块应如何动画化。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * 方块将随机逐个放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来控制所有方块放置所需的时间。
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * 方块将逐层从底部到顶部放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来控制所有方块放置所需的时间。
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