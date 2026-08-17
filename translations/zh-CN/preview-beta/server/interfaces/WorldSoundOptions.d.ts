/**
 * 包含播放声音时出现的附加选项。
 */
export interface WorldSoundOptions {
    /**
     * @beta
     * @remarks
     * 初始播放后，声音重复播放的额外次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 则总共播放 `N + 1` 次。例如，`loopCount: 1` 会播放两次。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄的生命周期要求。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 所播放声音的音调。
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 相对音量以及该声音被听到的空间范围。
     *
     */
    volume?: number;
}