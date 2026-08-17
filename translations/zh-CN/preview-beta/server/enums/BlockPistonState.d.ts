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
     * 活塞是否正在展开。
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * 活塞是否完全收回。
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * 活塞是否正在收回。
     *
     */
    Retracting = 'Retracting',
}