/**
 * @beta
 * 包含世界时钟时间标记事件的参数，
 * 用于筛选哪些事件会传递给
 * 提供的回调。
 */
export interface WorldClockTimeMarkerEventOptions {
    /**
     * @remarks
     * 此事件应触发的世界时钟的名称。
     *
     */
    clock: string;
    /**
     * @remarks
     * 此事件应触发的时间标记的名称。
     * 如果未定义，则此事件将触发
     * 世界时钟上的所有时间标记。
     *
     */
    timeMarker?: string;
}