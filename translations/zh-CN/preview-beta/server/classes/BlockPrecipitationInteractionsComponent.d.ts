/**
 * 表示方块如何与降水（如雨或雪）进行交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * 如果降雪会自然在方块上堆积，则返回 `true`；如果雪不会在方块上堆积，则返回 `false`。
     * @returns 如果降雪会自然在方块上堆积，则返回 `true`；否则返回 `false`。
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * 如果此方块可以包含雪，比如花朵被雪淹没，则返回 `true`；如果此方块不能包含雪，则返回 `false`。
     * @returns 如果此方块可以包含雪，则返回 `true`；否则返回 `false`。
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isSnowLoggable(): boolean;
    /**
     * @remarks
     * 如果雨水不会穿过方块，则返回 `true`；如果雨水应穿过方块，则返回 `false`。
     * @returns 如果雨水不会穿过方块，则返回 `true`；否则返回 `false`。
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    obstructsRain(): boolean;
}