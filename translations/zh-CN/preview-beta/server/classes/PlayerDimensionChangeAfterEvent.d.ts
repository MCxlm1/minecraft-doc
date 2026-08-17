/**
 * 包含有关玩家维度更改的信息。
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家正在更改的维度。
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * 玩家更改维度前所在的位置。
     *
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * 正在更改维度的玩家句柄。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家将要更改到的维度。
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * 玩家更改维度后将生成的位置。
     *
     */
    readonly toLocation: Vector3;
}