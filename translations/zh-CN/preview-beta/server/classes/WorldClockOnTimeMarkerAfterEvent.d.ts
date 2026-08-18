/**
 * @beta
 * 包含当 {@link WorldClock} 的时间命中
 * {@link TimeMarker} 时相关的信息。
 */
export class WorldClockOnTimeMarkerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 命中时间标记的世界时钟。
     *
     */
    readonly clock: WorldClock;
    /**
     * @remarks
     * 被世界时钟命中的时间标记。
     *
     */
    readonly timeMarker: TimeMarker;
}