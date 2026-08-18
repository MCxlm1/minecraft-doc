/**
 * @beta
 * 由 {@link WorldClock.rewindTo} 抛出的错误，当世界时钟的时间
 * 已经早于时间标记的首次出现时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRewindError extends Error {
    private constructor();
}