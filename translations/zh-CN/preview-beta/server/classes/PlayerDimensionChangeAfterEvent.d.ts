/**
 * 包含有关玩家维度发生变化的信息。
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家正在离开的维度。
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * 玩家在改变维度之前所处的位置。
     *
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * 正在改变维度的玩家的句柄。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家将要前往的维度。
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * 玩家在改变维度后将生成的位置。
     *
     */
    readonly toLocation: Vector3;
}