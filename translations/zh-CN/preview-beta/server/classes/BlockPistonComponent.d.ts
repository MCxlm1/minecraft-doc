/**
 * 当存在时，该方块具有活塞行为。包含用于发现方块活塞状态的附加属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 活塞是否正在扩展或收缩过程中。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * 活塞的当前状态。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly state: BlockPistonState;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * 获取与此活塞连接的一组方块。
     *
     * @returns 返回与此活塞连接的一组方块。
     * @throws 此函数可能抛出错误。
     */
    getAttachedBlocks(): Block[];
    /**
     * @remarks
     * 获取与此活塞连接的一组方块位置。
     *
     * @returns 返回与此活塞连接的方块位置数组。
     * @throws 此函数可能抛出错误。
     */
    getAttachedBlocksLocations(): Vector3[];
}