/**
 * 为 {@link
 * World.playMusic}/{@link World.queueMusic} 方法提供的额外配置选项。
 */
export interface MusicOptions {
    /**
     * @remarks
     * 指定音乐播放结束时的淡出重叠时长。
     *
     */
    fade?: number;
    /**
     * @remarks
     * 如果设为 true，此音乐曲目将循环播放。
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * 音乐的相对音量级别。
     *
     */
    volume?: number;
}