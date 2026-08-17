/**
 * 表示方块如何与降水（如雨或雪）交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * 如果降雪会在方块上自然堆积，则返回 `true`。如果雪不会在方块上堆积，则返回 `false`。
     *
     * @returns 如果降雪会在方块上自然堆积，则返回 `true`；否则返回 `false`。
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * 如果此方块内部可以容纳雪（例如被雪淹没的花），则返回 `true`。如果此方块内部不能容纳雪，则返回 `false`。
     *
     * @returns 如果此方块内部可以容纳雪，则返回 `true`；否则返回 `false`。
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isSnowLoggable(): boolean;
    /**
     * @remarks
     * 如果雨水不会穿过该方块，则返回 `true`。如果雨水应穿过该方块，则返回 `false`。
     *
     * @returns 如果雨水不会穿过该方块，则返回 `true`；否则返回 `false`。
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    obstructsRain(): boolean;
}