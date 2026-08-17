/**
 * 描述方块活塞状态的枚举。
 */
export enum BlockPistonState {
    /**
     * @remarks
     * 活塞是否完全展开。
     *
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * 活塞是否正在展开中。
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * 活塞是否完全缩回。
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * 活塞是否正在缩回中。
     *
     */
    Retracting = 'Retracting',
}