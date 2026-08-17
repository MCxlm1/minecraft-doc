/**
 * 包含 playSound 事件的附加选项。
 */
export interface WorldSoundOptions {
    /**
     * @beta
     * @remarks
     * 声音在初始播放后额外重复的次数。
     * `0`（默认值）只播放一次，`-1` 无限循环，
     * 正整数 `N` 则总共播放 `N + 1` 次。例如，
     * `loopCount: 1` 会播放两次。循环次数在声音
     * 开始时固定，之后无法更改。使用 `-1` 时，
     * 请参见 `SoundInstance` 了解句柄
     * 生存期要求。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 播放声音的音调。
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 听到该声音的相对音量和空间。
     *
     */
    volume?: number;
}