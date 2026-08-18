/**
 * @beta
 * 包含与 {@link WorldClock} 时间变化相关的信息。
 */
export class WorldClockOnTimeModifiedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 其时间被修改的世界时钟。
     *
     */
    readonly clock: WorldClock;
}