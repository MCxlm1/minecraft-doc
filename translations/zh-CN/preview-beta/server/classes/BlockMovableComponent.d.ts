/**
 * 表示可以移动的方块（例如活塞）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    /**
     * @throws 当方块位于未加载的区块中时，抛出 {@link LocationInUnloadedChunkError}。
     * @throws 当方块超出世界边界时，抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    readonly movementType: MovementType;
    /**
     * @throws 当方块位于未加载的区块中时，抛出 {@link LocationInUnloadedChunkError}。
     * @throws 当方块超出世界边界时，抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    readonly stickyType: StickyType;
    static readonly componentId = 'minecraft:movable';
}