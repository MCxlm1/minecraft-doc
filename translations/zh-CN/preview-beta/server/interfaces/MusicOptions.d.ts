/**
 * 附加配置选项，用于{@link World.playMusic}/{@link World.queueMusic}方法。
 */
export interface MusicOptions {
    /**
     * @remarks
     * 指定音乐播放结束时的淡出重叠。
     *
     */
    fade?: number;
    /**
     * @remarks
     * 如果设置为true，此音乐曲目将重复播放。
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * 音乐的相对音量水平。
     *
     */
    volume?: number;
}