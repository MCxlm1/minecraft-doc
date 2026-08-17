/**
 * 表示方块与降水（如雨或雪）的交互方式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * 如果降雪会自然在此方块上堆积，则返回 `true`；如果雪不会在此方块上堆积，则返回 `false`。
     *
     * @returns 如果此方块会自然积雪则返回 `true`，否则返回 `false`。
     *
     * @throws 当该方块位置处于未加载区块时抛出 {@link LocationInUnloadedChunkError}；
     * 当该方块位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * 如果此方块内部可以容纳雪（例如被雪覆盖的花朵），则返回 `true`；如果此方块内部不能容纳雪，则返回 `false`。
     *
     * @returns 如果此方块可以内含积雪则返回 `true`，否则返回 `false`。
     *
     * @throws 当该方块位置处于未加载区块时抛出 {@link LocationInUnloadedChunkError}；
     * 当该方块位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    isSnowLoggable(): boolean;
    /**
     * @remarks
     * 如果雨水不会穿过此方块，则返回 `true`；如果雨水会穿过此方块，则返回 `false`。
     *
     * @returns 如果此方块会阻挡雨水则返回 `true`，否则返回 `false`。
     *
     * @throws 当该方块位置处于未加载区块时抛出 {@link LocationInUnloadedChunkError}；
     * 当该方块位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    obstructsRain(): boolean;
}