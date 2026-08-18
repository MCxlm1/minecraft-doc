/**
 * @beta
 * 世界时钟上的一个具名时间点，可只出现一次或周期性出现。
 */
export class TimeMarker {
    private constructor();
    /**
     * @remarks
     * 表示此时间标记的标识符。
     *
     */
    readonly name: string;
    /**
     * @remarks
     * 时间标记重复的间隔（以刻为单位）。如果未指定，时间标记将仅出现一次。
     *
     * @throws
     * WorldClockInvalidTimeMarkerError：如果时间标记无效。
     *
     * {@link WorldClockInvalidTimeMarkerError}
     */
    readonly period?: number;
    /**
     * @remarks
     * 时间标记在世界时钟上发生的时间（以刻为单位）。
     *
     * @throws
     * WorldClockInvalidTimeMarkerError：如果时间标记无效。
     *
     * {@link WorldClockInvalidTimeMarkerError}
     */
    readonly time: number;
}