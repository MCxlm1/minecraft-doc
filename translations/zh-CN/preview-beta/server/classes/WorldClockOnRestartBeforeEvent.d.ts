/**
 * @beta
 * 包含与 {@link WorldClock} 重启相关的信息。
 */
export class WorldClockOnRestartBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消世界时钟重启事件。这将使世界时钟保持最大时间值，并阻止其继续前进。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在重启的世界时钟。
     *
     */
    readonly clock: WorldClock;
    /**
     * @remarks
     * 世界时钟重启后将设置的时间。如果未设置，世界时钟将设置为 0。
     *
     * 最小值：0
     */
    newTime: number;
}