/**
 * 描述方块活塞状态的枚举。
 */
export enum BlockPistonState {
    /**
     * @remarks
     * 活塞是否已完全展开。
     *
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * 活塞是否正在展开过程中。
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * 活塞是否已完全收回。
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * 活塞是否正在收回过程中。
     *
     */
    Retracting = 'Retracting',
}