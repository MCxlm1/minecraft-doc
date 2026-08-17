/**
 * 表示一个已播放声音的句柄。在
 * 声音播放期间，需要使用该句柄来控制声音
 * （例如调用 `stop`、`setVolume`、`setPitch`、
 * `fade` 或 `seekTo`）。无限循环的声音（通过
 * `loop: -1` 启动）会在最后一个
 * `SoundInstance` 引用被丢弃时自动停止；
 * 只要声音应继续播放，请保留该句柄。
 */
export class SoundInstance {
    private constructor();
    /**
     * @beta
     * @remarks
     * 获取此声音的时长和播放信息。
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
     * 获取此声音为其播放的玩家。
     *
     */
    readonly recipient?: Player;
    /**
     * @beta
     * @remarks
     * 获取此实例启动时所依据的声音事件标识符。
     *
     */
    readonly soundEventId: string;
    /**
     * @beta
     * @remarks
     * 在指定持续时间内，将此声音实例从当前音量淡变到目标音量。
     * 若要从静音开始淡入，请先调用 `setVolume(0.0)`；若要淡出，
     * 请传入目标音量 `0.0`。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param duration
     * 淡变持续时长（秒）。必须为非负值。
     * 最小值：0
     * @param targetVolume
     * 要淡变到的音量。必须为非负值。
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
     * 要跳转到的位置（秒）。必须为非负值。
     * 范围：[0, 107374184]
     * @throws
     * 如果 `seconds` 为负，或声音具有已知时长且 `seconds` 大于该时长，则抛出异常。
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
     * 音调倍率，介于 0.01 和 10.0 之间。1.0 表示正常音调。
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