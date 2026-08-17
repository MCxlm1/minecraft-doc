/**
 * @beta
 * 提供关于其定义声明了持续时间的音频的持续时间和播放信息。
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * 获取音频的总持续时间（以秒为单位）。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取此音频是否仍在跟踪中。
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * 返回音频中的当前播放位置（以秒为单位），从音频开头开始测量。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 当前播放位置（以秒为单位），从音频开头开始测量。
     */
    getPlaybackPosition(): number;
}