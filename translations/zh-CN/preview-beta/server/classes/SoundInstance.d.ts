/**
 * 表示已播放声音的句柄。该句柄用于在声音播放时控制声音（例如，调用 `stop`、`setVolume`、`setPitch`、`fade` 或 `seekTo`）。无限循环的声音（以 `loop: -1` 开始）在最后一个 `SoundInstance` 引用被丢弃时会自动停止；只要声音应该继续播放，就保留该句柄。
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
     * 将此声音实例从当前音量淡入/淡出到指定音量，持续指定时长。要从静音淡入，请先调用 `setVolume(0.0)`；要淡出，请将目标音量设置为 `0.0`。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param duration
     * 淡入/淡出的持续时间（秒）。必须为非负数。最小值：0
     * @param targetVolume
     * 淡入/淡出的目标音量。必须为非负数。最小值：0
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
     * 暂停后恢复此声音。
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
     * 要跳转到的位置（秒）。必须为非负数。范围：[0, 107374184]
     * @throws
     * 如果 `seconds` 为负数，或者声音具有已知持续时间且 `seconds` 大于该持续时间，则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    seekTo(seconds: number): void;
    /**
     * @beta
     * @remarks
     * 设置此声音实例的音调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pitch
     * 音调倍数，介于 0.01 和 10.0 之间。值为 1.0 表示正常音调。
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