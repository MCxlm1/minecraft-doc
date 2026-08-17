/**
 * @beta
 * 提供持续时间以及播放信息，用于其定义声明了持续时间的音效。
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * 获取音效的总持续时间，以秒为单位。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取音效是否仍在被追踪。
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * 返回音效中的当前播放位置，以秒为单位，从音效开头测量。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 当前播放位置，以秒为单位，从音效开头测量。
     */
    getPlaybackPosition(): number;
}