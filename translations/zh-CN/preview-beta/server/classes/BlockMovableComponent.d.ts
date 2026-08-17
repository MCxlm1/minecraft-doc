/**
 * 表示可以移动的方块（例如活塞）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    /**
     * @throws 此属性在使用时可能会抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly movementType: MovementType;
    /**
     * @throws 此属性在使用时可能会抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly stickyType: StickyType;
    static readonly componentId = 'minecraft:movable';
}