/**
 * 包含 playSound 播放的附加选项。
 */
export interface WorldSoundOptions {
    /**
     * @beta
     * @remarks
     * 初始播放后重复声音的额外次数。
     * `0`（默认值）播放一次，`-1`
     * 无限循环，正整数 `N` 播放
     * 总共 `N + 1` 次。例如，`loopCount: 1` 播放
     * 两次。循环次数在声音开始
     * 时固定，之后无法更改。使用 `-1` 时，请参阅
     * `SoundInstance` 了解句柄生命周期要求。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 播放声音的音高。
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 此声音被听到的相对音量和空间。
     *
     */
    volume?: number;
}