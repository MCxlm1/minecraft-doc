/**
 * 包含用于显示标题和可选副标题的额外选项。
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * 标题和副标题的淡入时间，以刻为单位。每秒20刻。使用 {@link TicksPerSecond} 常数可在刻和秒之间转换。
     *
     */
    fadeInDuration: number;
    /**
     * @remarks
     * 标题和副标题的淡出时间，以刻为单位。每秒20刻。使用 {@link TicksPerSecond} 常数可在刻和秒之间转换。
     *
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * 标题和副标题的停留时间，以刻为单位。每秒20刻。使用 {@link TicksPerSecond} 常数可在刻和秒之间转换。
     *
     */
    stayDuration: number;
    /**
     * @remarks
     * 可选的副标题文本。
     *
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}