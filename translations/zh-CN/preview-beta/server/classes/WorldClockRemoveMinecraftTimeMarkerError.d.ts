/**
 * @beta
 * 由 {@link WorldClock.removeTimeMarker} 抛出的错误，当尝试从世界时钟中移除
 * 具有 'minecraft' 命名空间的时间标记时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRemoveMinecraftTimeMarkerError extends Error {
    private constructor();
}