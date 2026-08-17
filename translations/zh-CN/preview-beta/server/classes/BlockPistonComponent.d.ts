/**
 * 当存在时，此方块具有类似活塞的行为。包含
 * 用于发现方块活塞状态的附加属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 活塞是否正在展开或缩回。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * 活塞的当前状态。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly state: BlockPistonState;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * 获取与此活塞连接的一组方块。
     *
     * @throws 此函数可能抛出错误。
     */
    getAttachedBlocks(): Block[];
    /**
     * @remarks
     * 获取与此活塞连接的一组方块位置。
     *
     * @throws 此函数可能抛出错误。
     */
    getAttachedBlocksLocations(): Vector3[];
}