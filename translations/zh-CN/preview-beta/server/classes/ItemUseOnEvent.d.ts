/**
 * 包含关于在方块上使用物品的信息。
 */
export class ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 此事件所影响的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品被使用的方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于物品被使用的方块底部西北角的位置。
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