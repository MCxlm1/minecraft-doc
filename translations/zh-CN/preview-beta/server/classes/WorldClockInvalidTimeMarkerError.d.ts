/**
 * @beta
 * 当时间标记无效时抛出的错误。这可能在尝试访问已被移除的时间标记上的数据时发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockInvalidTimeMarkerError extends Error {
    private constructor();
}