/**
 * @beta
 * 包含与 {@link WorldClock} 被恢复时相关的信息。
 */
export class WorldClockOnResumedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被恢复的世界时钟。
     *
     */
    readonly clock: WorldClock;
}