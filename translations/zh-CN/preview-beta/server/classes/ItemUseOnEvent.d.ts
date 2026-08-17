/**
 * 包含在方块上使用物品的
 * 相关信息。
 */
export class ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 该事件影响的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品被使用时方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于物品所使用方块的
     * 底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 在方块上使用的物品实例。
     *
     */
    readonly itemStack: ItemStack;
}