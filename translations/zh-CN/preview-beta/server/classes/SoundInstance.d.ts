/**
 * 表示已播放声音的句柄。需要此句柄来控制播放中的声音
 * （例如，调用 `stop`、`setVolume`、`setPitch`、
 * `fade` 或 `seekTo`）。无限循环声音（以 `loop: -1` 启动）在最后一个
 * `SoundInstance` 引用被丢弃时自动停止；只要声音需要继续播放，就应保留此句柄。
 */
export class SoundInstance {
    private constructor();
    /**
     * @beta
     * @remarks
     * 获取此声音的持续时间和播放信息。
     *
     */
    readonly durationInfo?: SoundDurationInfo;
    /**
     * @beta
     * @remarks
     * 此声音实例的唯一标识符。
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * 获取此声音播放的目标玩家。
     *
     */
    readonly recipient?: Player;
    /**
     * @beta
     * @remarks
     * 获取此实例启动时使用的声音事件标识符。
     *
     */
    readonly soundEventId: string;
    /**
     * @beta
     * @remarks
     * 将此声音实例从当前音量渐变为指定音量，持续指定时长。要从静音淡入，请先调用 `setVolume(0.0)`；要淡出，请将目标音量设为 `0.0`。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param duration
     * 淡变的持续时间，以秒为单位。必须为非负数。
     * 最小值：0
     * @param targetVolume
     * 淡变的目标音量。必须为非负数。
     * 最小值：0
     */
    fade(duration: number, targetVolume: number): void;
    /**
     * @beta
     * @remarks
     * 暂停此声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    pause(): void;
    /**
     * @beta
     * @remarks
     * 在暂停后恢复此声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    resume(): void;
    /**
     * @beta
     * @remarks
     * 设置此声音实例的播放位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param seconds
     * 要跳转到的位置，以秒为单位。必须为非负数。
     * 范围：[0, 107374184]
     * @throws
     * 如果 `seconds` 为负数，或声音具有已知持续时间且 `seconds` 大于该持续时间，则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    seekTo(seconds: number): void;
    /**
     * @beta
     * @remarks
     * 设置此声音实例的音高。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pitch
     * 音高倍数，介于 0.01 和 10.0 之间。值为 1.0 表示正常音高。
     * 范围：[0.009999999776482582, 10]
     */
    setPitch(pitch: number): void;
    /**
     * @beta
     * @remarks
     * 设置此声音实例的音量。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param volume
     * 音量级别，介于 0.0 和 10.0 之间。
     * 范围：[0, 10]
     */
    setVolume(volume: number): void;
    /**
     * @remarks
     * 停止此声音实例的播放。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    stop(): void;
}