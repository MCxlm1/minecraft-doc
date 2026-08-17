/**
 * 指定结构放置时结构方块应如何动画化。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * 方块将以随机顺序逐个放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds
     * 来控制所有方块放置完成所需的时间。
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * 方块将从底部到顶部逐层放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds
     * 来控制所有方块放置完成所需的时间。
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