/**
 * @beta
 * 表示世界中某个特定时钟的类。
 */
export class WorldClock {
    private constructor();
    /**
     * @remarks
     * 获取或设置世界时钟当前是否暂停。
     *
     * @privilege restricted-execution-read-only - 此属性在受限执行模式下无法编辑。
     *
     */
    isPaused: boolean;
    /**
     * @remarks
     * 表示此世界时钟的标识符。
     *
     */
    readonly name: string;
    /**
     * @remarks
     * 获取或设置世界时钟的当前时间（以刻为单位）。
     *
     * @privilege restricted-execution-read-only - 此属性在受限执行模式下无法编辑。
     *
     * 最小值：0
     */
    time: number;
    /**
     * @remarks
     * 获取世界时钟当前的时间标记。
     *
     */
    readonly timeMarkers: TimeMarker[];
    /**
     * @remarks
     * 向世界时钟添加新的时间标记。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarkerOptions
     * 用于创建时间标记的选项。
     * @throws 此函数可能抛出错误。
     *
     * {@link WorldClockAddTimeMarkerError}
     */
    addTimeMarker(timeMarkerOptions: TimeMarkerOptions): void;
    /**
     * @remarks
     * 从世界时钟中移除现有的时间标记。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要移除的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     * WorldClockRemoveMinecraftTimeMarkerError：如果该时间标记使用了“minecraft”命名空间。
     *
     * {@link WorldClockRemoveMinecraftTimeMarkerError}
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    removeTimeMarker(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * 将世界时钟的时间回退到指定时间标记的上一次出现位置。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要将世界时钟的时间回退到的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     * WorldClockRewindError：如果世界时钟的当前时间早于该时间标记的首次出现时间。
     *
     * {@link WorldClockRewindError}
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    rewindTo(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * 将世界时钟的时间设置为指定的时间标记。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要将世界时钟的时间设置到的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    set(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * 将世界时钟的时间快进到指定时间标记的下一次出现位置。
     * 如果下一次出现位置超出世界时钟的时间范围，则将时间重置为首次出现位置。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要将世界时钟的时间快进到的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    skipTo(timeMarker: string | TimeMarker): void;
}