/**
 * @beta
 * 包含与 {@link WorldClock} 被暂停相关的信息。
 */
export class WorldClockOnPausedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被暂停的世界时钟。
     *
     */
    readonly clock: WorldClock;
}