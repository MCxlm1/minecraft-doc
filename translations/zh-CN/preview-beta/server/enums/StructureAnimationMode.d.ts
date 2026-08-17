/**
 * 指定当放置结构时，结构方块应如何动画显示。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * 方块将随机地一次一个放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来
     * 控制所有方块放置完成所需的时间。
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * 方块将从下到上一次一层放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来
     * 控制所有方块放置完成所需的时间。
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