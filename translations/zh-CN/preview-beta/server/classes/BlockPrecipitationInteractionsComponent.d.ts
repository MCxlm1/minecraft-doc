/**
 * 表示方块如何与降水（如雨或雪）交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * 如果降雪会自然地在方块上堆积，则返回 `true`。
     * 如果雪不会在方块上堆积，则返回 `false`。
     *
     * @returns 如果降雪会在方块上自然堆积则为 `true`，否则为 `false`。
     * @throws 当方块所在的区块未加载或位置超出世界边界时，可能抛出错误。
     * {@link LocationInUnloadedChunkError}
     * {@link LocationOutOfWorldBoundariesError}
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * 如果此方块可以容纳雪，例如花被雪淹没，则返回 `true`。
     * 如果此方块不能容纳雪，则返回 `false`。
     *
     * @returns 如果方块可以容纳雪则为 `true`，否则为 `false`。
     * @throws 当方块所在的区块未加载或位置超出世界边界时，可能抛出错误。
     * {@link LocationInUnloadedChunkError}
     * {@link LocationOutOfWorldBoundariesError}
     */
    isSnowLoggable(): boolean;
    /**
     * @remarks
     * 如果雨水不会穿过该方块，则返回 `true`。
     * 如果雨水应该穿过该方块，则返回 `false`。
     *
     * @returns 如果雨水无法穿过方块则为 `true`，否则为 `false`。
     * @throws 当方块所在的区块未加载或位置超出世界边界时，可能抛出错误。
     * {@link LocationInUnloadedChunkError}
     * {@link LocationOutOfWorldBoundariesError}
     */
    obstructsRain(): boolean;
}